import argparse
import csv
import json
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Dict, Iterable, List, Tuple


RECEIPT_TYPE = "SCLO"
POSITIVE_ITEM_TYPES = {"BOOK", "CHKO"}
NEGATIVE_ITEM_TYPES = {"VOID"}
IGNORED_LINE_TYPES = {"TRNS", "SPLO", "SPLT", "REOG", "REOP", "DCNT", "CHKO,DCNT"}
SYSTEM_TYPES = {"STRT", "JCLO", "JOPN", "DRWR"}


def cents_from_string(raw: str) -> int:
    value = (raw or "").strip()
    if not value:
        return 0
    if "," in value and "." not in value:
        euros = value.replace(".", "").replace(",", "")
        return int(euros)
    return int(float(value))


def qty_from_string(raw: str) -> float:
    value = (raw or "").strip()
    if not value:
        return 0.0
    return float(value.replace(",", "."))


def iso_date(raw: str) -> str:
    return raw[:10]


def parse_hour(raw: str) -> int:
    if len(raw) < 13:
        return 0
    return int(raw[11:13])


def normalize_name(name: str) -> str:
    value = " ".join((name or "").split()).strip()
    if any(token in value for token in ("Ã", "Â", "â", "€", "™")):
        try:
            value = value.encode("latin1").decode("utf-8")
        except (UnicodeEncodeError, UnicodeDecodeError):
            pass
    return (
        value.replace("’", "'")
        .replace("´", "'")
        .replace("`", "'")
        .replace("–", "-")
        .strip()
    )


def classify_category(article: str) -> str:
    label = normalize_name(article).lower()

    if any(token in label for token in ("kids", "mini cheeseburger")):
        return "Kids"
    if any(
        token in label
        for token in (
            "burger",
            "cheeseb",
            "godfather",
            "road runner",
            "us car",
            "wrangler",
            "space shuttle",
            "angus",
            "hawaii",
            "western",
            "texas xxl",
            "idaho",
            "grillkäse",
        )
    ):
        return "Burgers"
    if any(
        token in label
        for token in (
            "fries",
            "twister",
            "wedges",
            "onion rings",
            "wings",
            "nachos",
            "starter",
            "poppers",
            "sticks",
            "mozzarella",
            "sweet pot",
            "broccoli",
            "dip",
            "sauce",
            "mayo",
            "knobi",
            "trüffelmayo",
        )
    ):
        return "Sides"
    if any(token in label for token in ("wrap", "sandw", "b.l.t", "club sandw")):
        return "Wraps & Sandwiches"
    if any(
        token in label
        for token in ("panc", "french toast", "omelette", "frühstück", "buffet")
    ):
        return "Breakfast & Brunch"
    if any(
        token in label
        for token in (
            "shake",
            "sundae",
            "lava",
            "oreo",
            "raffaello",
            "white chocolate",
            "schoko",
            "vanille ah",
            "erdbeere ah",
            "blaubeere ah",
            "banane ah",
            "caramel",
        )
    ):
        return "Shakes & Desserts"
    if any(
        token in label
        for token in ("kaffee", "cappuccino", "espresso", "latte", "macchiato", "crema")
    ):
        return "Coffee & Hot Drinks"
    if any(
        token in label
        for token in (
            "cola",
            "coca",
            "fanta",
            "sprite",
            "mezzo",
            "ice tea",
            "lemonade",
            "vilsa",
            "schorle",
            "dr. pepper",
            "dr pepper",
            "erdinger",
            "beck",
            "jägermeister",
            "pils",
            "alster",
            "gourmet",
            "nature",
            "rhabarber",
            "maracuja",
            "mix 0,25",
            "mix 0,4",
            "caipirinha",
        )
    ):
        return "Cold Drinks"
    if any(token in label for token in ("pizza", "ribs", "steak", "hotdog", "sloppy", "macc.", "combo", "bowl")):
        return "Mains"
    if any(
        token in label
        for token in ("extra", "verpackung", "medium", "sour creme", "brioche", "vollkorn", "kann weiter")
    ):
        return "Add-ons"
    return "Other"


def recover_row(row: Dict[str, str]) -> Tuple[Dict[str, str], bool]:
    if row["Typ"]:
        return row, False

    payload = row["Artikel"]
    if ";" not in payload:
        return row, False

    parts = payload.split(";")
    if len(parts) < 12:
        return row, False

    recovered = dict(row)
    recovered["Artikel"] = parts[0]
    recovered["Menge"] = parts[1]
    recovered["GPreis"] = str(cents_from_string(parts[2]))
    recovered["Terminal"] = parts[3]
    recovered["Kellner"] = parts[4]
    recovered["Tisch"] = parts[5]
    recovered["Session"] = parts[6]
    recovered["Rechnung"] = parts[7]
    recovered["RechBetrag"] = str(cents_from_string(parts[8])) if parts[8] else ""
    recovered["MwSt"] = str(cents_from_string(parts[9])) if parts[9] else ""
    recovered["AusHaus"] = parts[10]
    recovered["Typ"] = parts[11]
    recovered["Special"] = parts[12] if len(parts) > 12 else ""
    return recovered, True


@dataclass
class Bucket:
    receipt_revenue_cents: int = 0
    receipt_refunds_cents: int = 0
    order_count: int = 0
    refund_count: int = 0
    line_revenue_cents: int = 0
    line_refunds_cents: int = 0
    items_sold: float = 0.0
    canceled_items: float = 0.0
    takeaway_revenue_cents: int = 0
    dine_in_revenue_cents: int = 0
    tables: set = None
    staff: set = None
    sessions: set = None

    def __post_init__(self) -> None:
        self.tables = set()
        self.staff = set()
        self.sessions = set()

    def to_dict(self) -> Dict[str, object]:
        return {
            "receiptRevenueCents": self.receipt_revenue_cents,
            "receiptRefundsCents": self.receipt_refunds_cents,
            "orderCount": self.order_count,
            "refundCount": self.refund_count,
            "lineRevenueCents": self.line_revenue_cents,
            "lineRefundsCents": self.line_refunds_cents,
            "itemsSold": round(self.items_sold, 2),
            "canceledItems": round(self.canceled_items, 2),
            "takeawayRevenueCents": self.takeaway_revenue_cents,
            "dineInRevenueCents": self.dine_in_revenue_cents,
            "tables": len(self.tables),
            "staff": len(self.staff),
            "sessions": len(self.sessions),
        }


@dataclass
class EntityBucket:
    name: str
    category: str = ""
    line_revenue_cents: int = 0
    line_refunds_cents: int = 0
    units: float = 0.0
    canceled_units: float = 0.0
    orders: set = None
    tables: set = None
    days: set = None

    def __post_init__(self) -> None:
        self.orders = set()
        self.tables = set()
        self.days = set()

    def to_dict(self) -> Dict[str, object]:
        payload = {
            "name": self.name,
            "lineRevenueCents": self.line_revenue_cents,
            "lineRefundsCents": self.line_refunds_cents,
            "units": round(self.units, 2),
            "canceledUnits": round(self.canceled_units, 2),
            "orders": len(self.orders),
            "tables": len(self.tables),
            "days": len(self.days),
        }
        if self.category:
            payload["category"] = self.category
        return payload


def build(input_path: Path, output_path: Path) -> None:
    daily = defaultdict(Bucket)
    hourly = defaultdict(Bucket)
    product_daily = {}
    employee_daily = {}
    category_daily = {}
    diagnostic_types = Counter()
    recovered_rows = 0
    total_rows = 0
    earliest = None
    latest = None
    unique_products = set()
    unique_employees = set()

    with input_path.open("r", encoding="utf-8", errors="replace", newline="") as handle:
        reader = csv.DictReader(handle)
        for raw_row in reader:
            total_rows += 1
            row, was_recovered = recover_row(raw_row)
            if was_recovered:
                recovered_rows += 1

            row_type = row["Typ"]
            diagnostic_types[row_type or "<blank>"] += 1

            day = iso_date(row["#Datum"])
            if day:
                earliest = day if earliest is None else min(earliest, day)
                latest = day if latest is None else max(latest, day)

            waiter = normalize_name(row.get("Kellner", ""))
            table = normalize_name(row.get("Tisch", ""))
            session = normalize_name(row.get("Session", ""))
            is_takeaway = row.get("AusHaus", "") == "1"

            if row_type == RECEIPT_TYPE:
                amount = cents_from_string(row.get("RechBetrag", ""))
                bucket = daily[day]
                if amount > 0 and row.get("Rechnung") != "0":
                    bucket.receipt_revenue_cents += amount
                    bucket.order_count += 1
                    if waiter:
                        bucket.staff.add(waiter)
                    if table:
                        bucket.tables.add(table)
                    if session:
                        bucket.sessions.add(session)
                elif amount < 0:
                    bucket.receipt_refunds_cents += abs(amount)
                    bucket.refund_count += 1
                continue

            if row_type in SYSTEM_TYPES or row_type in IGNORED_LINE_TYPES or row_type == "":
                continue

            if row_type not in POSITIVE_ITEM_TYPES and row_type not in NEGATIVE_ITEM_TYPES:
                continue

            article = normalize_name(row.get("Artikel", ""))
            if not article:
                continue

            hour = parse_hour(row.get("Zeit", ""))
            quantity = qty_from_string(row.get("Menge", ""))
            amount = cents_from_string(row.get("GPreis", ""))
            category = classify_category(article)

            unique_products.add(article)
            if waiter:
                unique_employees.add(waiter)

            daily_bucket = daily[day]
            hourly_bucket = hourly[(day, hour)]

            targets = [daily_bucket, hourly_bucket]
            for bucket in targets:
                if table:
                    bucket.tables.add(table)
                if waiter:
                    bucket.staff.add(waiter)
                if session:
                    bucket.sessions.add(session)

                if row_type in POSITIVE_ITEM_TYPES:
                    bucket.line_revenue_cents += amount
                    bucket.items_sold += quantity
                    if is_takeaway:
                        bucket.takeaway_revenue_cents += amount
                    else:
                        bucket.dine_in_revenue_cents += amount
                elif row_type in NEGATIVE_ITEM_TYPES:
                    bucket.line_refunds_cents += abs(amount)
                    bucket.canceled_items += quantity

            product_key = (day, article)
            if product_key not in product_daily:
                product_daily[product_key] = EntityBucket(article, category)
            employee_key = (day, waiter or "Unknown")
            if employee_key not in employee_daily:
                employee_daily[employee_key] = EntityBucket(employee_key[1])
            category_key = (day, category)
            if category_key not in category_daily:
                category_daily[category_key] = EntityBucket(category, category)

            entity_targets = [
                product_daily[product_key],
                employee_daily[employee_key],
                category_daily[category_key],
            ]

            for entity in entity_targets:
                entity.days.add(day)
                if table:
                    entity.tables.add(table)
                if session:
                    entity.orders.add(session)

                if row_type in POSITIVE_ITEM_TYPES:
                    entity.line_revenue_cents += amount
                    entity.units += quantity
                else:
                    entity.line_refunds_cents += abs(amount)
                    entity.canceled_units += quantity

    daily_payload = [{"date": day, **bucket.to_dict()} for day, bucket in sorted(daily.items())]
    hourly_payload = [
        {"date": day, "hour": hour, **bucket.to_dict()}
        for (day, hour), bucket in sorted(hourly.items())
    ]
    product_daily_payload = [
        {"date": day, **bucket.to_dict()}
        for (day, _), bucket in sorted(product_daily.items(), key=lambda item: (item[0][0], item[1].name))
    ]
    employee_daily_payload = [
        {"date": day, **bucket.to_dict()}
        for (day, _), bucket in sorted(employee_daily.items(), key=lambda item: (item[0][0], item[1].name))
    ]
    category_daily_payload = [
        {"date": day, **bucket.to_dict()}
        for (day, _), bucket in sorted(category_daily.items(), key=lambda item: (item[0][0], item[1].name))
    ]

    payload = {
        "meta": {
            "title": "Restaurant Performance Studio",
            "currency": "EUR",
            "dataMinDate": earliest,
            "dataMaxDate": latest,
            "rowsRead": total_rows,
            "recoveredRows": recovered_rows,
            "uniqueProducts": len(unique_products),
            "uniqueEmployees": len(unique_employees),
            "lineTypesUsed": sorted(POSITIVE_ITEM_TYPES | NEGATIVE_ITEM_TYPES),
            "diagnosticTypes": dict(sorted(diagnostic_types.items())),
        },
        "daily": daily_payload,
        "hourly": hourly_payload,
        "productDaily": product_daily_payload,
        "employeeDaily": employee_daily_payload,
        "categoryDaily": category_daily_payload,
    }

    output_path.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a dashboard-ready dataset from the restaurant CSV export.")
    parser.add_argument("input", type=Path, help="Path to the source CSV")
    parser.add_argument("output", type=Path, help="Path to the output JSON")
    args = parser.parse_args()
    build(args.input, args.output)


if __name__ == "__main__":
    main()
