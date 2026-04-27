const VAT_RATE = 1.19;
const LOCAL_KEY = "restaurant-performance-local-v1";

const ROLE_OPTIONS = [
  { key: "owner", label: "Owner" },
  { key: "manager", label: "Management" },
  { key: "supervisor", label: "Supervisor" },
  { key: "staff", label: "Floor Staff" },
];

const RESTAURANT_OPTIONS = [
  { key: "daisys-diner-oyten", label: "Daisy's Diner - Oyten" },
  { key: "daisys-diner-bremen-test", label: "Daisy's Diner - Bremen (Test)" },
];

const GROUP_OPTIONS = [
  { key: "kitchen", label: "Kitchen" },
  { key: "bar", label: "Bar" },
  { key: "service", label: "Service" },
  { key: "support", label: "Temporary / Support" },
];

const UNIT_OPTIONS = [
  { value: "kg", label: "kg (Kilogram)" },
  { value: "g", label: "g (Gramm)" },
  { value: "l", label: "l (Liter)" },
  { value: "ml", label: "ml (Milliliter)" },
  { value: "cl", label: "cl (Cocktails, Sauces)" },
  { value: "piece", label: "pcs. (Piece)" },
  { value: "portion", label: "Portion" },
];

const PAGE_LABELS = {
  dashboard: "Dashboard",
  explorer: "Products",
  heatmap: "Grafik",
  trends: "Trends",
  matrix: "Product Matrix",
  transactions: "POS Transactions",
  employees: "Employees",
  purchasing: "Purchasing",
  recipes: "Recipes",
  costs: "P&L",
  auslastung: "Utilization",
  settings: "Settings",
};

const PAGE_ORDER = Object.keys(PAGE_LABELS);
const DASHBOARD_CLUSTER_PAGES = ["dashboard"];

const PNL_MONTHS = [
  ["jan", "January"],
  ["feb", "February"],
  ["mar", "March"],
  ["apr", "April"],
  ["may", "May"],
  ["jun", "June"],
  ["jul", "July"],
  ["aug", "August"],
  ["sep", "September"],
  ["oct", "October"],
  ["nov", "November"],
  ["dec", "December"],
];

const PNL_ROWS = [
  { id: "personnel", label: "Personnel Costs", type: "expense" },
  { id: "revenue", label: "Revenue", type: "income" },
  { id: "beverage-revenue", label: "Beverage Revenue", type: "income" },
  { id: "fleet", label: "Fleet", type: "expense" },
  { id: "advertising", label: "Advertising", type: "expense" },
  { id: "taxes", label: "Taxes", type: "expense" },
  { id: "insurance", label: "Insurance", type: "expense" },
  { id: "energy", label: "Energy Costs", type: "expense" },
  { id: "leasing", label: "Leasing Costs", type: "expense" },
  { id: "maintenance", label: "Maintenance", type: "expense" },
  { id: "it", label: "IT Costs", type: "expense" },
  { id: "online-marketing", label: "Online Marketing", type: "expense" },
  { id: "gallery", label: "Gallery", type: "expense" },
  { id: "profit-sharing", label: "Profit Sharing", type: "expense" },
  { id: "payroll-gz", label: "Payroll GZ", type: "expense" },
  { id: "subcontractors", label: "Subcontractors", type: "expense" },
  { id: "furniture-gz", label: "Furniture / GZ", type: "expense" },
  { id: "subscriptions", label: "Other Subscriptions", type: "expense" },
  { id: "dividend", label: "Dividend", type: "expense" },
  { id: "other", label: "Other", type: "expense" },
];

const RANGE_PRESETS = [
  ["today", "Today"],
  ["yesterday", "Yesterday"],
  ["currentMonth", "Current Month"],
  ["currentMonthForecast", "Current Month (Forecast)"],
  ["lastMonth", "Last Month"],
  ["last7", "7 Days"],
  ["last14", "14 Days"],
  ["last30", "30 Days"],
  ["thisWeek", "This Week"],
  ["lastWeek", "Last Week"],
  ["twoWeeksAgo", "Week Before Last"],
  ["threeWeeksAgo", "3 Weeks Ago"],
  ["thisQuarter", "This Quarter"],
  ["lastQuarter", "Last Quarter"],
  ["twoQuartersAgo", "2 Quarters Ago"],
  ["threeQuartersAgo", "3 Quarters Ago"],
  ["custom", "Select Time Range"],
];

const TREND_GROUPINGS = [
  ["last12m", "Last 12 Months by Month"],
  ["last13w", "Last 3 Months by Week"],
  ["last30d", "Last 30 Days by Day"],
  ["custom", "Select Time Range"],
];

const TREND_METRICS = [
  ["grossRevenueCents", "Revenue (Gross / Net)"],
  ["netRevenueCents", "Net Revenue"],
  ["itemsSold", "Items Sold"],
  ["canceledItems", "Cancelled Items"],
  ["guests", "Number of Guests"],
  ["tables", "Number of Tables"],
  ["averageOrderValueCents", "Average Order Value"],
  ["foodCostCents", "Food Cost (Total)"],
  ["staffCostCents", "Staff Cost (Total)"],
  ["staffCostPercent", "Staff Cost %"],
  ["foodCostPercent", "Food Cost %"],
  ["customCostPercent", "Custom / Indirect Cost %"],
  ["contributionMarginCents", "Contribution Margin 1"],
  ["marginPercent", "Margin %"],
  ["marginCents", "Total Margin"],
  ["averageGuestsPerTable", "Average Guests per Table"],
  ["revenuePerGuestCents", "Revenue per Guest"],
  ["revenuePerEmployeeCents", "Revenue per Employee (Total)"],
  ["revenuePerLaborHourCents", "Productivity per Labour Hour"],
  ["averageDiscountsPerDayCents", "Average Discounts per Day"],
  ["averageCancellationsPerDay", "Average Cancellations per Day"],
  ["averageServiceMinutes", "Time from Order to Serving"],
];

const CATEGORY_COST_RATES = {
  Burgers: 0.29,
  "Cold Drinks": 0.16,
  Sides: 0.21,
  Mains: 0.34,
  "Shakes & Desserts": 0.24,
  "Wraps & Sandwiches": 0.27,
  "Breakfast & Brunch": 0.25,
  "Coffee & Hot Drinks": 0.18,
  Kids: 0.23,
  "Add-ons": 0.12,
  Other: 0.28,
};

const CARD_PRESETS = [
  ["today", "Today"],
  ["yesterday", "Yesterday"],
  ["currentMonth", "Current Month"],
  ["currentMonthForecast", "Current Month (Forecast)"],
  ["lastMonth", "Last Month"],
];

const currencyFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("de-DE");
const decimalFormatter = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const state = {
  datasetKey: "live",
  currentPage: "dashboard",
  explorerMode: "products",
  heatmapMetric: "staffCostPercent",
  trendMetric: "grossRevenueCents",
  trendGrouping: "last30d",
  revenueMode: "gross",
  compareMode: "none",
  roleKey: "manager",
  restaurantKey: "daisys-diner-oyten",
  rangePreset: "currentMonth",
  startDate: null,
  endDate: null,
  filtersOpen: false,
  searchQuery: "",
  pendingFilters: [],
  appliedFilters: [],
  selectedHeatmapDate: null,
  selectedTrendBucketKey: null,
  recipeDraftProductId: null,
  recipeDraft: [],
  tableSort: "marginCents",
  cardModels: [],
  renderContext: null,
  drilldownTab: "today",
  sidebarRestaurantSubOpen: false,
  sidebarDashSubOpen: true,
  sidebarFoodSubOpen: true,
};

const runtimeCache = {
  dailySeries: new Map(),
  productRows: new Map(),
  employeeRows: new Map(),
  staffingRange: new Map(),
  summaries: new Map(),
  comparisons: new Map(),
  heatmaps: new Map(),
  trends: new Map(),
};

const datasets = {
  live: attachDatasetLabel(window.__RESTAURANT_DATA__, "CSV Data"),
  scenario: buildScenarioDataset(window.__RESTAURANT_DATA__),
};

const processedDatasets = {
  live: buildProcessedDataset(datasets.live),
  scenario: buildProcessedDataset(datasets.scenario),
};

let localModel = null;

document.addEventListener("DOMContentLoaded", () => {
  localModel = loadLocalModel();
  migratePermissions();
  initializeControls();
  applyRangePreset(state.rangePreset);
  wireEvents();
  renderAll();
});

function initializeControls() {
  fillSelect(document.getElementById("role-select"), ROLE_OPTIONS.map((item) => [item.key, item.label]));
  fillSelect(document.getElementById("mobile-page-select"), PAGE_ORDER.map((page) => [page, PAGE_LABELS[page]]));
  fillSelect(document.getElementById("restaurant-select"), RESTAURANT_OPTIONS.map((item) => [item.key, item.label]));
  renderSidebarRestaurantOptions();
  fillSelect(document.getElementById("range-preset-drawer"), RANGE_PRESETS);
  fillSelect(document.getElementById("trend-metric-select"), TREND_METRICS);
  fillSelect(document.getElementById("trend-preset-select"), TREND_GROUPINGS);
  fillSelect(document.getElementById("employee-group-select"), GROUP_OPTIONS.map((item) => [item.key, item.label]));
  fillSelect(document.getElementById("ingredient-unit-select"), UNIT_OPTIONS.map((item) => [item.value, item.label]));
  fillSelect(document.getElementById("recipe-unit-select"), UNIT_OPTIONS.map((item) => [item.value, item.label]));
  syncDynamicSelects();
}

function syncDynamicSelects() {
  const processed = currentProcessed();
  fillSelect(
    document.getElementById("employee-select"),
    processed.employeeCatalog.map((item) => [item.id, `${item.name} (${item.employeeNumber})`]),
  );
  fillSelect(
    document.getElementById("ingredient-select"),
    localModel.ingredients
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item) => [item.id, `${item.name} (${item.group})`]),
  );
  fillSelect(
    document.getElementById("recipe-ingredient-select"),
    localModel.ingredients
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item) => [item.id, `${item.name} (${item.group})`]),
  );
  fillSelect(
    document.getElementById("recipe-product-select"),
    processed.productCatalog.map((item) => [item.id, `${item.name} (${item.articleNumber})`]),
  );
}

function wireEvents() {
  document.querySelectorAll(".sidebar-link").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("sidebar-link--has-sub")) return;
      if (!isPageAllowed(button.dataset.page)) return;
      setPage(button.dataset.page, { explorerMode: button.dataset.mode || null, closeSidebar: true });
    });
  });

  document.getElementById("sidebar-dashboard-toggle").addEventListener("click", (e) => {
    e.stopPropagation();
    state.sidebarDashSubOpen = !state.sidebarDashSubOpen;
    syncSidebarSubNavs();
  });

  document.getElementById("sidebar-food-toggle").addEventListener("click", (e) => {
    e.stopPropagation();
    state.sidebarFoodSubOpen = !state.sidebarFoodSubOpen;
    syncSidebarSubNavs();
  });

  document.getElementById("sidebar-restaurant-toggle").addEventListener("click", (e) => {
    e.stopPropagation();
    state.sidebarRestaurantSubOpen = !state.sidebarRestaurantSubOpen;
    syncSidebarSubNavs();
  });

  // Close sub-navs when clicking in main content area
  document.querySelector(".app-content").addEventListener("click", () => {
    if (window.innerWidth > 960) return; // desktop: keep open for nav ease
    state.sidebarRestaurantSubOpen = false;
    state.sidebarDashSubOpen = false;
    state.sidebarFoodSubOpen = false;
    syncSidebarSubNavs();
  });

  document.querySelectorAll(".sidebar-sub-link").forEach((button) => {
    button.addEventListener("click", () => {
      if (!isPageAllowed(button.dataset.page)) return;
      setPage(button.dataset.page, { explorerMode: button.dataset.mode || null, closeSidebar: true });
    });
  });

  document.querySelectorAll(".drilldown-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.drilldownTab = button.dataset.drilldown;
      renderDashboardDrilldown();
      document.querySelectorAll(".drilldown-tab").forEach((b) => b.classList.toggle("active", b === button));
    });
  });

  document.getElementById("mobile-page-select").addEventListener("change", (event) => {
    if (!isPageAllowed(event.target.value)) {
      return;
    }
    setPage(event.target.value, { closeSidebar: true });
  });

  document.querySelectorAll(".dashboard-tab").forEach((button) => {
    button.addEventListener("click", () => {
      setPage(button.dataset.dashboardPage, { closeSidebar: true });
    });
  });

  document.querySelectorAll(".dataset-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.datasetKey = button.dataset.dataset;
      applyRangePreset(state.rangePreset);
      syncDynamicSelects();
      ensureAllowedPage();
      renderAll();
    });
  });

  document.getElementById("role-select").addEventListener("change", (event) => {
    state.roleKey = event.target.value;
    ensureAllowedPage();
    renderAll();
  });

  document.getElementById("restaurant-select").addEventListener("change", (event) => {
    state.restaurantKey = event.target.value;
    renderAll();
  });

  document.getElementById("sidebar-restaurant-options").addEventListener("click", (event) => {
    const button = event.target.closest("[data-restaurant-key]");
    if (!button) {
      return;
    }
    state.restaurantKey = button.dataset.restaurantKey;
    state.sidebarRestaurantSubOpen = false;
    renderAll();
  });

  document.getElementById("revenue-mode").addEventListener("change", (event) => {
    state.revenueMode = event.target.value;
    renderAll();
  });

  document.getElementById("compare-mode").addEventListener("change", (event) => {
    state.compareMode = event.target.value;
    renderAll();
  });

  document.getElementById("range-preset-drawer").addEventListener("change", (event) => {
    applyRangePreset(event.target.value);
    renderAll();
  });

  document.getElementById("toggle-filters").addEventListener("click", () => {
    state.filtersOpen = !state.filtersOpen;
    renderFilterDrawer();
  });

  document.getElementById("shell-menu-button").addEventListener("click", () => {
    document.body.classList.add("sidebar-open");
  });

  document.getElementById("sidebar-toggle-button").addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      document.body.classList.toggle("sidebar-open");
    } else {
      const willPin = !document.body.classList.contains("sidebar-pinned");
      document.body.classList.toggle("sidebar-pinned", willPin);
      document.body.classList.toggle("sidebar-collapsed", !willPin);
    }
  });

  document.getElementById("shell-backdrop").addEventListener("click", () => {
    document.body.classList.remove("sidebar-open");
  });

  document.getElementById("apply-range").addEventListener("click", () => {
    state.startDate = document.getElementById("start-date").value || currentDataset().meta.dataMinDate;
    state.endDate = document.getElementById("end-date").value || currentDataset().meta.dataMaxDate;
    normalizeDateRange();
    state.rangePreset = "custom";
    state.filtersOpen = false;
    renderAll();
  });

  document.getElementById("reset-range").addEventListener("click", () => {
    applyRangePreset("currentMonth");
    state.filtersOpen = false;
    renderAll();
  });

  document.getElementById("table-sort").addEventListener("change", (event) => {
    state.tableSort = event.target.value;
    renderAll();
  });

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.searchQuery = event.target.value.trim();
    renderSearchSuggestions();
  });

  document.getElementById("apply-search").addEventListener("click", () => {
    state.appliedFilters = dedupeFilters(state.pendingFilters);
    renderAll();
  });

  document.getElementById("clear-search").addEventListener("click", () => {
    state.searchQuery = "";
    state.pendingFilters = [];
    state.appliedFilters = [];
    document.getElementById("search-input").value = "";
    renderAll();
  });

  document.querySelectorAll(".mode-switch").forEach((button) => {
    button.addEventListener("click", () => {
      state.explorerMode = button.dataset.mode;
      renderAll();
    });
  });

  document.querySelectorAll(".heat-switch").forEach((button) => {
    button.addEventListener("click", () => {
      state.heatmapMetric = button.dataset.metric;
      renderAll();
    });
  });

  document.getElementById("trend-metric-select").addEventListener("change", (event) => {
    state.trendMetric = event.target.value;
    state.selectedTrendBucketKey = null;
    renderAll();
  });

  document.getElementById("trend-preset-select").addEventListener("change", (event) => {
    state.trendGrouping = event.target.value;
    state.selectedTrendBucketKey = null;
    renderAll();
  });

  wireDetailEvents();
}

function renderAll() {
  ensureAllowedPage();
  state.renderContext = buildRenderContext();
  syncControls();
  renderFilterDrawer();
  renderSelectedFilters();
  renderSearchSuggestions();
  hydrateHeaderMeta();
  renderActivePage(state.renderContext);
}

function buildRenderContext() {
  const processed = currentProcessed();
  const filters = buildFilterState();
  const dailySeries = buildFilteredDailySeries(processed, filters, state.startDate, state.endDate);
  const productRows = needsProductRows(state.currentPage) ? buildProductRows(processed, filters, state.startDate, state.endDate) : [];
  const employeeRows = needsEmployeeRows(state.currentPage) ? buildEmployeeRows(processed, filters, state.startDate, state.endDate) : [];
  const staffingRange = needsStaffingRange(state.currentPage) ? buildActualStaffingRange(processed, state.startDate, state.endDate) : [];
  const summary = buildSummaryFromRange(processed, filters, state.startDate, state.endDate, {
    dailySeries,
    productRows: productRows.length ? productRows : null,
    staffingRange: staffingRange.length ? staffingRange : null,
  });
  const comparison = buildComparisonModel(processed, filters, summary, state.startDate, state.endDate);
  const categoryRows = (state.currentPage === "explorer" || state.currentPage === "dashboard") ? aggregateRowsByKey(productRows, "category") : [];
  const heatmap = state.currentPage === "heatmap" ? buildHeatmapContext(processed) : { currentDays: [], compareDays: [] };
  const trend = state.currentPage === "trends" ? buildTrendContext(processed, filters) : { buckets: [] };
  const matrix = state.currentPage === "matrix" ? buildMatrixContext(productRows) : { rows: [], hiddenRows: [] };
  const transactions =
    state.currentPage === "transactions" ? buildTransactionsContext(processed, filters, dailySeries) : { rows: [], totals: {} };

  if (!state.selectedHeatmapDate && heatmap.currentDays[0]) {
    state.selectedHeatmapDate = heatmap.currentDays[0].date;
  }

  if (!state.recipeDraftProductId) {
    loadRecipeDraft(document.getElementById("recipe-product-select").value);
  }

  return {
    processed,
    filters,
    dailySeries,
    productRows,
    categoryRows,
    employeeRows,
    staffingRange,
    summary,
    comparison,
    heatmap,
    trend,
    matrix,
    transactions,
  };
}

function renderActivePage(context) {
  const isDash = state.currentPage === "dashboard";
  document.getElementById("preset-grid").style.display = isDash ? "grid" : "none";
  const drilldownBar = document.getElementById("dashboard-drilldown-content");
  const drilldownTabs = document.querySelector(".dashboard-drilldown-bar");
  if (drilldownBar) drilldownBar.style.display = isDash ? "block" : "none";
  if (drilldownTabs) drilldownTabs.style.display = isDash ? "flex" : "none";
  document.getElementById("dashboard-cluster-nav").style.display = DASHBOARD_CLUSTER_PAGES.includes(state.currentPage) ? "flex" : "none";
  if (state.currentPage === "dashboard") {
    renderPresetCards();
    renderDashboard(context);
    renderDashboardDrilldown(context);
  } else if (state.currentPage === "explorer") {
    renderExplorer(context);
  } else if (state.currentPage === "heatmap") {
    renderHeatmap(context);
  } else if (state.currentPage === "trends") {
    renderTrend(context);
  } else if (state.currentPage === "matrix") {
    renderMatrix(context);
  } else if (state.currentPage === "transactions") {
    renderTransactions(context);
  } else if (state.currentPage === "employees") {
    renderEmployees(context);
  } else if (state.currentPage === "purchasing") {
    renderPurchasing();
  } else if (state.currentPage === "recipes") {
    renderRecipes(context);
  } else if (state.currentPage === "costs") {
    renderCosts(context);
  } else if (state.currentPage === "settings") {
    renderSettings();
  }
}

function needsProductRows(page) {
  return ["dashboard", "explorer", "matrix", "recipes"].includes(page);
}

function needsEmployeeRows(page) {
  return ["explorer", "employees", "dashboard"].includes(page);
}

function needsStaffingRange(page) {
  return ["dashboard", "heatmap", "transactions", "employees"].includes(page);
}

function syncSidebarSubNavs() {
  const restaurantSub = document.getElementById("sidebar-restaurant-options");
  const restaurantBtn = document.getElementById("sidebar-restaurant-toggle");
  const dashSub = document.getElementById("sidebar-dashboard-sub");
  const foodSub = document.getElementById("sidebar-food-sub");
  const dashBtn = document.getElementById("sidebar-dashboard-toggle");
  const foodBtn = document.getElementById("sidebar-food-toggle");
  if (restaurantSub) restaurantSub.classList.toggle("sidebar-sub-open", state.sidebarRestaurantSubOpen);
  if (restaurantBtn) restaurantBtn.classList.toggle("sub-open", state.sidebarRestaurantSubOpen);
  if (dashSub) dashSub.classList.toggle("sidebar-sub-open", state.sidebarDashSubOpen);
  if (foodSub) foodSub.classList.toggle("sidebar-sub-open", state.sidebarFoodSubOpen);
  if (dashBtn) dashBtn.classList.toggle("sub-open", state.sidebarDashSubOpen);
  if (foodBtn) foodBtn.classList.toggle("sub-open", state.sidebarFoodSubOpen);
}

function renderSidebarRestaurantOptions() {
  const el = document.getElementById("sidebar-restaurant-options");
  if (!el) return;
  el.innerHTML = RESTAURANT_OPTIONS.map(
    (item) => `
      <button class="sidebar-sub-link sidebar-restaurant-option" type="button" data-restaurant-key="${item.key}">
        <span class="sidebar-link-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M4 9h16"></path>
            <path d="M6 9v10h12V9"></path>
            <path d="M8 9V6h8v3"></path>
            <path d="M9 13h6"></path>
            <path d="M9 16h4"></path>
          </svg>
        </span>
        <span>${item.label}</span>
      </button>
    `,
  ).join("");
}

function syncControls() {
  const roleEl = document.getElementById("role-select");
  if (roleEl) roleEl.value = state.roleKey;
  document.getElementById("restaurant-select").value = state.restaurantKey;
  const restaurantLabel = RESTAURANT_OPTIONS.find((item) => item.key === state.restaurantKey)?.label || "Restaurant";
  const sidebarRestaurantCurrent = document.getElementById("sidebar-restaurant-current");
  if (sidebarRestaurantCurrent) sidebarRestaurantCurrent.textContent = restaurantLabel;
  document.getElementById("revenue-mode").value = state.revenueMode;
  document.getElementById("compare-mode").value = state.compareMode;
  document.getElementById("range-preset-drawer").value = state.rangePreset;
  document.getElementById("trend-metric-select").value = state.trendMetric;
  document.getElementById("trend-preset-select").value = state.trendGrouping;
  document.getElementById("start-date").value = state.startDate;
  document.getElementById("end-date").value = state.endDate;
  const graphicStart = document.getElementById("graphic-start-date");
  const graphicEnd = document.getElementById("graphic-end-date");
  if (graphicStart) graphicStart.value = state.startDate;
  if (graphicEnd) graphicEnd.value = state.endDate;
  document.getElementById("table-sort").value = state.tableSort;
  document.getElementById("page-title").textContent = PAGE_LABELS[state.currentPage];

  fillSelect(
    document.getElementById("mobile-page-select"),
    PAGE_ORDER.filter((page) => isPageAllowed(page)).map((page) => [page, PAGE_LABELS[page]]),
  );
  document.getElementById("mobile-page-select").value = state.currentPage;

  document.querySelectorAll(".dataset-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.dataset === state.datasetKey);
  });

  document.querySelectorAll(".sidebar-link").forEach((button) => {
    if (button.classList.contains("sidebar-link--has-sub")) {
      const subId = button.id === "sidebar-dashboard-toggle" ? "sidebar-dashboard-sub" : "sidebar-food-sub";
      const sub = document.getElementById(subId);
      const childPages = sub ? [...sub.querySelectorAll(".sidebar-sub-link")].map((b) => b.dataset.page) : [];
      const anyAllowed = childPages.some((page) => isPageAllowed(page));
      button.hidden = !anyAllowed;
      button.classList.toggle("active", childPages.includes(state.currentPage));
      return;
    }
    const allowed = isPageAllowed(button.dataset.page);
    button.hidden = !allowed;
    button.classList.toggle("active", sidebarActivePage(button.dataset.page) === sidebarActivePage(state.currentPage));
  });

  document.querySelectorAll(".sidebar-sub-link").forEach((button) => {
    if (button.dataset.restaurantKey) {
      button.classList.toggle("active", button.dataset.restaurantKey === state.restaurantKey);
      return;
    }
    const isActive = button.dataset.page === state.currentPage &&
      (button.dataset.mode ? button.dataset.mode === state.explorerMode : true);
    button.classList.toggle("active", isActive);
  });

  document.querySelectorAll(".dashboard-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.dashboardPage === state.currentPage);
  });

  document.querySelectorAll(".mode-switch").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.explorerMode);
  });

  document.querySelectorAll(".heat-switch").forEach((button) => {
    button.classList.toggle("active", button.dataset.metric === state.heatmapMetric);
  });

  document.querySelectorAll(".workspace-view").forEach((section) => {
    section.classList.toggle("active", section.dataset.view === state.currentPage);
  });

  syncSidebarSubNavs();
}

function renderFilterDrawer() {
  document.getElementById("filter-drawer").classList.toggle("open", state.filtersOpen);
  document.getElementById("toggle-filters").textContent = state.filtersOpen ? "Hide options" : "More options";
}

function hydrateHeaderMeta() {
  return;
}

function setPage(page, options = {}) {
  if (!isPageAllowed(page)) {
    return;
  }
  state.currentPage = page;
  if (options.explorerMode) {
    state.explorerMode = options.explorerMode;
  }
  if (options.closeSidebar) {
    document.body.classList.remove("sidebar-open");
  }
  renderAll();
}

function sidebarActivePage(page) {
  return DASHBOARD_CLUSTER_PAGES.includes(page) ? "dashboard" : page;
}

function renderPresetCards() {
  state.cardModels = CARD_PRESETS.map(([key, label]) => buildCardModel(key, label));
  const accents = ["#6f86f0", "#8ebdd8", "#7fbfc5", "#86c7b8", "#82be84"];
  document.getElementById("preset-grid").innerHTML = state.cardModels
    .map(
      (card, index) => `
        <article class="metric-card" style="--card-accent:${accents[index % accents.length]};">
          <div class="metric-card-head">
            <span class="metric-title">${card.label}</span>
            <span class="metric-date">${card.rangeLabel}</span>
          </div>
          <div class="metric-label">Revenue</div>
          <div class="metric-value">${formatDisplayRevenue(card.summary)}</div>
          <div class="metric-grid">
            <div class="metric-stat"><span>Items Sold</span><strong>${numberFormatter.format(Math.round(card.summary.itemsSold))}</strong></div>
            <div class="metric-stat"><span>Guests</span><strong>${numberFormatter.format(card.summary.guests)}</strong></div>
            <div class="metric-stat"><span>Tables</span><strong>${numberFormatter.format(card.summary.tables)}</strong></div>
            <div class="metric-stat"><span>Staff Cost %</span><strong>${formatPercent(card.summary.staffCostPercent)}</strong></div>
            <div class="metric-stat"><span>Food Cost %</span><strong>${formatPercent(card.summary.foodCostPercent)}</strong></div>
            <div class="metric-stat"><span>Margin %</span><strong>${formatPercent(card.summary.marginPercent)}</strong></div>
          </div>
          <div class="metric-delta">${card.compareText}</div>
          <button class="metric-more" data-card-key="${card.key}">More</button>
        </article>
      `,
    )
    .join("");
}

function renderDashboard(context) {
  document.getElementById("dashboard-main-table").innerHTML = buildDashboardTable(context.summary, context.comparison.summary);
  renderDashboardNote();
}

function renderDashboardDrilldown(context) {
  if (!context) context = state.renderContext;
  if (!context) return;
  const el = document.getElementById("dashboard-drilldown-content");
  if (!el) return;
  const tab = state.drilldownTab;
  const prevMode = state.explorerMode;
  const isLowerRole = ["supervisor", "staff"].includes(state.roleKey);
  if (tab === "today") {
    // #379: lower-access roles see only heatmap-relevant KPIs (no financial data)
    if (isLowerRole) {
      el.innerHTML = buildHeatmapKpiSummaryTable(context.summary);
    } else {
      el.innerHTML = buildDashboardTable(context.summary, context.comparison.summary);
    }
  } else if (tab === "products") {
    state.explorerMode = "products";
    el.innerHTML = buildExplorerTable(sortEntityRows(context.productRows, state.tableSort));
    state.explorerMode = prevMode;
  } else if (tab === "groups") {
    state.explorerMode = "categories";
    el.innerHTML = buildExplorerTable(sortEntityRows(context.categoryRows, state.tableSort));
    state.explorerMode = prevMode;
  } else if (tab === "employees") {
    state.explorerMode = "team";
    el.innerHTML = buildExplorerTable(sortEntityRows(context.employeeRows, state.tableSort));
    state.explorerMode = prevMode;
  }
}

function buildHeatmapKpiSummaryTable(summary) {
  const rows = [
    ["Guests", numberFormatter.format(summary.guests)],
    ["Tables", numberFormatter.format(summary.tables)],
    ["Avg. Guests per Table", decimalFormatter.format(summary.averageGuestsPerTable)],
    ["Staff Cost %", formatPercent(summary.staffCostPercent)],
    ["Employees Present", numberFormatter.format(summary.employeeCount)],
    ["Total Staff Hours", `${decimalFormatter.format(summary.totalStaffHours)} h`],
    ["Avg. Kitchen Staff / Day", decimalFormatter.format(summary.averageStaffPerDayKitchen)],
    ["Avg. Bar Staff / Day", decimalFormatter.format(summary.averageStaffPerDayBar)],
    ["Avg. Service Staff / Day", decimalFormatter.format(summary.averageStaffPerDayService)],
  ];
  return `
    <table>
      <thead><tr><th>KPI</th><th>Value</th></tr></thead>
      <tbody>
        ${rows.map(([label, val]) => `<tr><td><strong>${label}</strong></td><td>${val}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function renderExplorer(context) {
  const titleMap = { products: "Product", categories: "Product Group", team: "Employee" };
  const source =
    state.explorerMode === "products"
      ? context.productRows
      : state.explorerMode === "categories"
        ? context.categoryRows
        : context.employeeRows;
  const rows = sortEntityRows(source, state.tableSort);
  document.getElementById("explorer-title").textContent = titleMap[state.explorerMode];
  document.getElementById("explorer-range-title").textContent = explorerRangeTitle();
  document.getElementById("explorer-highlight").innerHTML = buildExplorerHighlight(context);
  document.getElementById("explorer-summary").innerHTML = buildExplorerSummary(context, rows);
  document.getElementById("explorer-table").innerHTML = buildExplorerTable(rows);
}

function explorerRangeTitle() {
  const labels = {
    today: "Today",
    yesterday: "Yesterday",
    currentMonth: "Current Month",
    currentMonthForecast: "Current Month",
    lastMonth: "Last Month",
    last7: "Last 7 Days",
    last14: "Last 14 Days",
    last30: "Last 30 Days",
    thisWeek: "This Week",
    lastWeek: "Last Week",
    twoWeeksAgo: "Week Before Last",
    threeWeeksAgo: "3 Weeks Ago",
    thisQuarter: "This Quarter",
    lastQuarter: "Last Quarter",
    twoQuartersAgo: "2 Quarters Ago",
    threeQuartersAgo: "3 Quarters Ago",
    custom: "Selected Range",
  };
  return labels[state.rangePreset] || "Today";
}

function renderHeatmap(context) {
  document.getElementById("heatmap-range-title").textContent = `Revenue and KPI development | ${formatRange(state.startDate, state.endDate)}`;
  document.getElementById("graphic-chart-title").textContent = `${state.revenueMode === "gross" ? "Gross" : "Net"} revenue by period`;
  document.getElementById("graphic-side-title").textContent = formatRange(state.startDate, state.endDate);
  document.getElementById("graphic-combo-chart").innerHTML = buildGraphicComboChart(context.dailySeries);
  document.getElementById("graphic-kpi-list").innerHTML = buildGraphicKpiPanel(context.summary, context.comparison.summary);
}

function renderTrend(context) {
  const trend = context.trend;
  if (!trend.buckets.length) {
    document.getElementById("trend-chart").innerHTML = "<div class=\"note-card\">No trend data for the selected range.</div>";
    document.getElementById("trend-summary").innerHTML = "";
    document.getElementById("trend-detail-panel").innerHTML = "";
    document.getElementById("trend-detail-table").innerHTML = "";
    return;
  }
  if (!state.selectedTrendBucketKey || !trend.buckets.some((item) => item.key === state.selectedTrendBucketKey)) {
    state.selectedTrendBucketKey = trend.buckets[trend.buckets.length - 1].key;
  }
  const selected = trend.buckets.find((item) => item.key === state.selectedTrendBucketKey);
  document.getElementById("trend-chart").innerHTML = buildTrendChart(trend.buckets, selected);
  document.getElementById("trend-summary").innerHTML = buildTrendSummary(trend.buckets);
  document.getElementById("trend-detail-title").textContent = selected.label;
  document.getElementById("trend-detail-panel").innerHTML = buildKpiListMarkup(selected.summary, selected.comparison.summary);
  document.getElementById("trend-detail-table").innerHTML = buildDashboardTable(selected.summary, selected.comparison.summary);
}

function renderMatrix(context) {
  document.getElementById("matrix-chart").innerHTML = buildMatrixChart(context.matrix);
  document.getElementById("hidden-products").innerHTML = buildHiddenProductsMarkup(context.matrix);
  document.getElementById("matrix-summary").innerHTML = buildMatrixSummaryMarkup(context.matrix);
}

function renderTransactions(context) {
  document.getElementById("transactions-summary").innerHTML = buildTransactionsSummary(context.transactions);
  document.getElementById("transactions-table").innerHTML = buildTransactionsTable(context.transactions);
}

function renderEmployees(context) {
  document.getElementById("employees-table").innerHTML = buildEmployeesTable(context);
  renderEmployeeEditor(context);
}

function renderPurchasing() {
  document.getElementById("purchasing-table").innerHTML = buildPurchasingTable();
  renderIngredientEditor();
}

function renderRecipes(context) {
  const productId = document.getElementById("recipe-product-select").value || currentProcessed().productCatalog[0]?.id;
  if (productId && state.recipeDraftProductId !== productId) {
    loadRecipeDraft(productId);
  }
  document.getElementById("recipe-lines").innerHTML = buildRecipeLinesMarkup(productId);
  document.getElementById("consumption-table").innerHTML = buildConsumptionTable(context);
}

function renderCosts(context) {
  ensureMonthlyPnlModel(context);
  document.getElementById("expenses-table").innerHTML = buildMonthlyPnlTable();
}

function renderSettings() {
  document.getElementById("permissions-table").innerHTML = buildPermissionsTable();
  document.getElementById("settings-summary").innerHTML = buildSettingsSummary();
}

function renderSelectedFilters() {
  const filters = dedupeFilters([...state.pendingFilters, ...state.appliedFilters]);
  const row = document.querySelector(".selected-filter-row");
  const clearButton = document.getElementById("clear-search");
  document.getElementById("selected-filters").innerHTML = filters.length
    ? filters
        .map(
          (filter) => `
            <div class="filter-chip">
              <span>${filter.label}</span>
              <button class="chip-remove" data-remove-filter="${filterKey(filter)}">X</button>
            </div>
          `,
        )
        .join("")
    : "<div class=\"summary-chip\"><strong>No filters selected.</strong><span>Search for products, groups, or employees.</span></div>";
  row.classList.toggle("is-empty", filters.length === 0);
  clearButton.hidden = filters.length === 0;
}

function renderSearchSuggestions() {
  const shell = document.getElementById("search-suggestions");
  const suggestions = buildSearchSuggestions();
  shell.classList.toggle("has-results", suggestions.length > 0);
  shell.innerHTML = suggestions
    .map(
      (entry) => `
        <button class="suggestion-item" data-suggestion-key="${entry.key}">
          <strong>${entry.label}</strong><br />
          <span>${entry.subtitle}</span>
        </button>
      `,
    )
    .join("");
}

function renderHeatmapDetail(heatmap) {
  const selected =
    heatmap.currentDays.find((item) => item.date === state.selectedHeatmapDate) || heatmap.currentDays[0] || null;
  const badge = document.getElementById("note-status");

  if (!selected) {
    document.getElementById("heatmap-detail-title").textContent = "Select a day";
    document.getElementById("day-detail-kpis").innerHTML = "";
    document.getElementById("day-staff-lists").innerHTML = "";
    document.getElementById("day-note-input").value = "";
    badge.textContent = "No note";
    badge.classList.remove("has-note");
    return;
  }

  state.selectedHeatmapDate = selected.date;
  document.getElementById("heatmap-detail-title").textContent = `${weekdayLabel(selected.date)} ${formatDate(selected.date)}`;
  document.getElementById("day-note-input").value = localModel.dayNotes[selected.date] || "";
  badge.textContent = localModel.dayNotes[selected.date] ? "Saved note" : "No note";
  badge.classList.toggle("has-note", Boolean(localModel.dayNotes[selected.date]));
  document.getElementById("day-detail-kpis").innerHTML = buildHeatmapKpiMarkup(selected);
  document.getElementById("day-staff-lists").innerHTML = buildStaffListsMarkup(selected.roster);
}

function renderDashboardNote() {
  const key = dashboardNoteKey();
  const note = localModel.dashboardNotes[key] || "";
  document.getElementById("dashboard-note-input").value = note;
  document.getElementById("dashboard-note-status").innerHTML = note
    ? `<div class="note-card"><strong>Saved for ${formatRange(state.startDate, state.endDate)}</strong><span>${escapeHtml(trimLabel(note, 180))}</span></div>`
    : "<div class=\"note-card\"><strong>No dashboard note yet.</strong><span>This note stays in this browser for the selected range until shared storage is connected.</span></div>";
}

function dashboardNoteKey() {
  return `${state.startDate}|${state.endDate}|${state.datasetKey}`;
}

function heatmapSectionTitle() {
  return state.rangePreset === "custom"
    ? `${formatRange(state.startDate, state.endDate)} vs same period last year`
    : "Upcoming week vs same week last year";
}

function heatmapCurrentCaption() {
  return state.rangePreset === "custom" ? "Custom planning period" : "Current planning week";
}

function heatmapCurrentTitle() {
  return state.rangePreset === "custom" ? formatRange(state.startDate, state.endDate) : "This period";
}

function heatmapCompareCaption() {
  return state.rangePreset === "custom" ? "Historical reference" : "Reference week";
}

function heatmapCompareTitle() {
  if (state.rangePreset === "custom") {
    const compareStart = toIso(addDays(fromIso(state.startDate), -364));
    const compareEnd = toIso(addDays(fromIso(state.endDate), -364));
    return formatRange(compareStart, compareEnd);
  }
  return "Same week last year";
}

function renderEmployeeEditor(context) {
  const employeeId = document.getElementById("employee-select").value || currentProcessed().employeeCatalog[0]?.id;
  const profile = localModel.employeeProfiles[employeeId];
  if (!profile) {
    document.getElementById("employee-history").innerHTML = "";
    return;
  }
  document.getElementById("employee-select").value = employeeId;
  document.getElementById("employee-group-select").value = profile.group;
  document.getElementById("employee-wage-input").value = (currentEmployeeWageCents(employeeId, state.endDate) / 100).toFixed(2);
  document.getElementById("employee-effective-date").value = state.endDate;
  document.getElementById("employee-note-input").value = profile.note || "";
  document.getElementById("employee-history").innerHTML = buildHistoryCards(
    "Wage History",
    profile.wageHistory.map((item) => `${formatDate(item.effectiveDate)}: ${formatCurrency(item.wageCents)}/h`),
  );
}

function renderIngredientEditor() {
  const ingredientId = document.getElementById("ingredient-select").value || localModel.ingredients[0]?.id;
  const ingredient = localModel.ingredients.find((item) => item.id === ingredientId);
  if (!ingredient) {
    document.getElementById("ingredient-history").innerHTML = "";
    return;
  }
  document.getElementById("ingredient-select").value = ingredient.id;
  document.getElementById("ingredient-group-input").value = ingredient.group;
  document.getElementById("ingredient-unit-select").value = ingredient.unit;
  document.getElementById("ingredient-price-input").value = (currentIngredientPriceCents(ingredient, state.endDate) / 100).toFixed(2);
  document.getElementById("ingredient-effective-date").value = state.endDate;
  document.getElementById("ingredient-history").innerHTML = buildHistoryCards(
    "Purchase Price History",
    ingredient.priceHistory.map((item) => `${formatDate(item.effectiveDate)}: ${formatCurrency(item.priceCents)} per ${ingredient.unit}`),
  );
}

function buildKpiListMarkup(summary, compareSummary) {
  return keyKpiItems(summary, compareSummary)
    .map(
      (item) => `
        <div class="kpi-item">
          <div class="kpi-item-head">
            <span class="kpi-label">${item.label}</span>
            <span class="kpi-info" tabindex="0" aria-label="${escapeHtml(item.note)}" title="${escapeHtml(item.note)}">i</span>
          </div>
          <strong>${item.value}</strong>
        </div>
      `,
    )
    .join("");
}

function buildDashboardKpiGroupsMarkup(summary, compareSummary) {
  return `
    <div class="dashboard-kpi-groups">
      ${groupKpiItems(keyKpiItems(summary, compareSummary))
        .map(
          (group) => `
            <section class="dashboard-kpi-group dashboard-kpi-group-${group.key}">
              <div class="kpi-group-head">
                <h4>${group.title}</h4>
              </div>
              <div class="dashboard-kpi-grid">
                ${group.items
                  .map(
                    (item) => `
                      <div class="kpi-item">
                        <div class="kpi-item-head">
                          <span class="kpi-label">${item.label}</span>
                          <span class="kpi-info" tabindex="0" aria-label="${escapeHtml(item.note)}" title="${escapeHtml(item.note)}">i</span>
                        </div>
                        <strong>${item.value}</strong>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          `,
        )
        .join("")}
    </div>
  `;
}

function groupKpiItems(items) {
  const groups = [
    {
      key: "sales",
      title: "Sales & Volume",
      labels: [
        "Revenue (Gross / Net)",
        "Items Sold",
        "Cancelled Items",
        "Average Order Value",
        "Average Discounts per Day",
        "Average Cancellations per Day",
      ],
    },
    {
      key: "guests",
      title: "Guests & Service",
      labels: [
        "Number of Guests",
        "Number of Tables",
        "Average Guests per Table",
        "Revenue per Guest",
        "Time from Order to Serving",
      ],
    },
    {
      key: "labour",
      title: "Labour & Staffing",
      labels: [
        "Employees Present",
        "Total Staff Hours",
        "Staff Cost (Total & %)",
        "Revenue per Employee (Total)",
        "Productivity per Labour Hour",
        "Average Staff per Day in the Kitchen",
        "Average Staff per Day at the Bar",
        "Average Staff per Day in Service",
        "Average Staff per Day (Temporary / Support)",
      ],
    },
    {
      key: "profitability",
      title: "Costs & Profitability",
      labels: [
        "Food Cost (Total & %)",
        "Custom / Indirect Cost %",
        "Contribution Margin 1",
        "Margin % | Total Margin",
      ],
    },
  ];

  return groups
    .map((group) => ({
      ...group,
      items: group.labels
        .map((label) => items.find((item) => item.label === label))
        .filter(Boolean),
    }))
    .filter((group) => group.items.length);
}

function buildDashboardTable(summary, compareSummary) {
  return `
    <table>
      <thead>
        <tr>
          <th>KPI</th>
          <th>Current</th>
          <th>Comparison</th>
          <th>Delta</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        ${keyKpiItems(summary, compareSummary, true)
          .map(
            (item) => `
              <tr>
                <td><strong>${item.label}</strong></td>
                <td>${item.value}</td>
                <td>${item.compareValue}</td>
                <td class="${item.deltaClass}">${item.delta}</td>
                <td class="muted-cell">${item.note}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildExplorerSummary(context, rows) {
  const chips = [];
  const categoryFilter = state.appliedFilters.find((item) => item.type === "category");
  if (state.explorerMode === "team" && categoryFilter) {
    chips.push(`
      <div class="summary-chip">
        <strong>Employee comparison for ${categoryFilter.label}</strong>
        <span>Selected product group is being applied across the employee comparison view.</span>
      </div>
    `);
  }
  rows.slice(0, 3).forEach((row) => {
    chips.push(`
      <div class="summary-chip">
        <strong>${row.name}</strong>
        <span>${formatDisplayRevenue(row)} | ${numberFormatter.format(Math.round(row.units || 0))} units</span>
      </div>
    `);
  });
  if (!chips.length) {
    chips.push("<div class=\"summary-chip\"><strong>No results</strong><span>Adjust the filters or time range.</span></div>");
  }
  return chips.join("");
}

function buildExplorerHighlight(context) {
  const featuredProduct = sortEntityRows(context.productRows.slice(), "grossRevenueCents")[0];
  const featuredCategory = sortEntityRows(context.categoryRows.slice(), "grossRevenueCents")[0];
  const featuredEmployee = sortEntityRows(context.employeeRows.slice(), "grossRevenueCents")[0];

  const cards = [
    {
      label: "Product",
      value: featuredProduct?.name || "No product data",
      meta: featuredProduct
        ? `${formatCurrency(displayRevenueValue(featuredProduct))} · Cost: ${formatCurrency(featuredProduct.foodCostCents || 0)} · Art. ${featuredProduct.articleNumber || "-"}`
        : "Adjust filters or time range.",
    },
    {
      label: "Product Group",
      value: featuredCategory?.name || "No group data",
      meta: featuredCategory
        ? `${numberFormatter.format(Math.round(featuredCategory.units || 0))} units · ${formatDisplayRevenue(featuredCategory)} · Margin ${formatPercent(featuredCategory.netRevenueCents ? featuredCategory.marginCents / featuredCategory.netRevenueCents : 0)}`
        : "Adjust filters or time range.",
    },
    {
      label: "Employee",
      value: featuredEmployee?.name || "No employee data",
      meta: featuredEmployee
        ? `${formatDisplayRevenue(featuredEmployee)} · ${featuredEmployee.group || "Unassigned"} · No. ${featuredEmployee.employeeNumber || "-"}`
        : "Adjust filters or time range.",
    },
  ];

  return cards
    .map(
      (card) => `
        <article class="explorer-feature-card">
          <div class="explorer-feature-label">${card.label}</div>
          <div class="explorer-feature-value">${escapeHtml(card.value)}</div>
          <div class="explorer-feature-meta">${escapeHtml(card.meta)}</div>
        </article>
      `,
    )
    .join("");
}

function buildExplorerTable(rows) {
  if (!rows.length) {
    return "<table><thead><tr><th>Result</th></tr></thead><tbody><tr><td>No rows match the current filters.</td></tr></tbody></table>";
  }

  const headers =
    state.explorerMode === "team"
      ? ["Employee", "Group", "Employee No.", "Units", "Revenue", "Food Cost", "Staff Cost", "Margin", "Hide"]
      : state.explorerMode === "categories"
        ? ["Product Group", "Units", "Revenue", "Food Cost", "Staff Cost", "Custom Cost", "Margin", "Margin %", "Hide"]
        : ["Product", "Article No.", "Product Group", "Units", "Cancelled", "Revenue", "Food Cost", "Margin", "Hide"];

  return `
    <table>
      <thead><tr>${headers.map((item) => `<th>${item}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows
          .slice(0, 120)
          .map((row, index) => {
            const hideCell =
              state.explorerMode === "products"
                ? `<button class="link-button" data-hide-product="${row.id}">Hide</button>`
                : "<span class=\"muted-cell\">-</span>";
            return `
              <tr>
                <td>
                  <div class="entity-cell">
                    <div class="rank-pill">${index + 1}</div>
                    <div>
                      <strong>${row.name}</strong>
                      <div class="entity-subtitle">${state.explorerMode === "team" ? row.group || "-" : row.category || "Product group"}</div>
                    </div>
                  </div>
                </td>
                ${state.explorerMode === "team" ? `<td>${row.group || "-"}</td><td>${row.employeeNumber || "-"}</td>` : ""}
                ${state.explorerMode === "products" ? `<td>${row.articleNumber || "-"}</td><td>${row.category || "-"}</td>` : ""}
                <td>${numberFormatter.format(Math.round(row.units || 0))}</td>
                ${state.explorerMode === "products" ? `<td class="value-negative">${numberFormatter.format(Math.round(row.canceledUnits || 0))}</td>` : ""}
                <td class="value-positive">${formatDisplayRevenue(row)}</td>
                <td>${formatCurrency(row.foodCostCents || 0)}</td>
                ${state.explorerMode !== "products" ? `<td>${formatCurrency(row.staffCostCents || 0)}</td>` : ""}
                ${state.explorerMode === "categories" ? `<td>${formatCurrency(row.customCostCents || 0)}</td>` : ""}
                <td class="${row.marginCents >= 0 ? "value-positive" : "value-negative"}">${formatCurrency(row.marginCents || 0)}</td>
                ${state.explorerMode === "categories" ? `<td>${formatPercent(row.netRevenueCents ? row.marginCents / row.netRevenueCents : 0)}</td>` : ""}
                <td>${hideCell}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildHeatmapTable(rows) {
  return `
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Guests</th>
          <th>Tables</th>
          <th>Staff Cost %</th>
          <th>Kitchen</th>
          <th>Bar</th>
          <th>Service</th>
          <th>Support</th>
          <th>Employees</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (day) => `
              <tr>
                <td><button class="link-button" data-heat-date="${day.date}">${weekdayLabel(day.date)} ${shortDate(day.date)}</button></td>
                <td>${numberFormatter.format(day.guests)}</td>
                <td>${numberFormatter.format(day.tables)}</td>
                  <td class="${heatClassForValue(day.staffCostPercent)}">${formatPercent(day.staffCostPercent)}</td>
                  <td>${numberFormatter.format(day.counts.kitchen)}</td>
                  <td>${numberFormatter.format(day.counts.bar)}</td>
                  <td>${numberFormatter.format(day.counts.service)}</td>
                  <td>${numberFormatter.format(day.counts.support)}</td>
                  <td>${rosterCountLabel(day.counts)}</td>
                  <td>${day.note ? "<span class=\"inline-tag\">Note</span>" : "<span class=\"muted-cell\">-</span>"}</td>
                </tr>
              `,
            )
            .join("")}
      </tbody>
    </table>
  `;
}

function buildHeatmapLegend() {
  return "<span>Target 19-21% stays white. Higher values go red, lower values go green.</span><span>Rule-based coloring</span>";
}

function buildHeatmapGrid(rows) {
  const header = `<div class="heatmap-header-row" style="${heatmapColumnStyle(rows.length)}"><div></div>${rows.map((row) => `<div class="heat-hour">${weekdayLabel(row.date)}</div>`).join("")}</div>`;
  const value = (row) => (state.heatmapMetric === "guests" ? row.guests : state.heatmapMetric === "tables" ? row.tables : row.staffCostPercent);
  const display = (row) =>
    state.heatmapMetric === "guests"
      ? numberFormatter.format(row.guests)
      : state.heatmapMetric === "tables"
          ? numberFormatter.format(row.tables)
          : formatPercent(row.staffCostPercent);
  return `${header}
      <div class="heatmap-row" style="${heatmapColumnStyle(rows.length)}">
        <div class="heat-label">${state.heatmapMetric === "guests" ? "Guests" : state.heatmapMetric === "tables" ? "Tables" : "Staff Cost %"}</div>
        ${rows
          .map(
            (row) => `
              <button class="heat-cell" data-heat-date="${row.date}" style="background:${heatColor(value(row), rows, state.heatmapMetric)};">
              <strong>${display(row)}</strong>
              <span>${shortDate(row.date)}</span>
              ${row.note ? "<span class=\"heat-note-badge\">Note</span>" : ""}
            </button>
          `,
        )
        .join("")}
    </div>`;
}

function buildHeatmapKpiMarkup(day) {
  return [
    ["Guests", numberFormatter.format(day.guests)],
    ["Tables", numberFormatter.format(day.tables)],
    ["Revenue", formatCurrency(state.revenueMode === "gross" ? day.grossRevenueCents : day.netRevenueCents)],
    ["Staff Cost %", formatPercent(day.staffCostPercent)],
    ["Employees", rosterCountLabel(day.counts)],
    ["Kitchen", numberFormatter.format(day.counts.kitchen)],
    ["Bar", numberFormatter.format(day.counts.bar)],
    ["Service", numberFormatter.format(day.counts.service)],
    ["Support", numberFormatter.format(day.counts.support)],
  ]
    .map(
      ([label, value]) => `
        <div class="kpi-item">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${weekdayLabel(day.date)} ${formatDate(day.date)}</small>
        </div>
      `,
    )
    .join("");
}

function buildStaffListsMarkup(roster) {
  return GROUP_OPTIONS.map((group) => {
    const items = roster.employeesByGroup[group.key] || [];
    return `
      <div class="note-card">
        <strong>${group.label} (${items.length})</strong>
        ${items.length ? items.map((item) => `${item.name} ${item.startTime}-${item.endTime} (Clocked-in working time)`).join("<br />") : "No employees assigned."}
      </div>
    `;
  }).join("");
}

function buildTrendChart(buckets, selected) {
  const width = 960;
  const height = 320;
  const padding = { top: 20, right: 20, bottom: 52, left: 34 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(...buckets.map((item) => item.value), 1);
  const step = buckets.length > 1 ? innerWidth / (buckets.length - 1) : innerWidth;
  const points = buckets.map((item, index) => ({
    x: padding.left + step * index,
    y: padding.top + innerHeight - (item.value / maxValue) * innerHeight,
    bucket: item,
  }));
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const area = `${path} L ${padding.left + innerWidth} ${padding.top + innerHeight} L ${padding.left} ${padding.top + innerHeight} Z`;
  return `
    <svg viewBox="0 0 ${width} ${height}" aria-label="Trend chart">
      <defs><linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(124,143,244,0.45)" /><stop offset="100%" stop-color="rgba(124,143,244,0.02)" /></linearGradient></defs>
      <line x1="${padding.left}" y1="${padding.top + innerHeight}" x2="${padding.left + innerWidth}" y2="${padding.top + innerHeight}" stroke="rgba(255,255,255,0.1)"></line>
      <path d="${area}" fill="url(#trend-fill)"></path>
      <path d="${path}" fill="none" stroke="#90c6eb" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path>
      ${points
        .map(
          (point, index) => `
            <g>
              <circle cx="${point.x}" cy="${point.y}" r="${point.bucket.key === selected.key ? 6 : 4}" fill="${point.bucket.key === selected.key ? "#8ed0a1" : "#90c6eb"}" stroke="#11151c" stroke-width="2" data-bucket-key="${point.bucket.key}"></circle>
              <rect x="${Math.max(point.x - step / 2, padding.left)}" y="${padding.top}" width="${Math.max(step, 24)}" height="${innerHeight}" fill="transparent" data-bucket-key="${point.bucket.key}"></rect>
              <text x="${point.x}" y="${height - 12}" text-anchor="middle" fill="#98a1ad" font-size="11">${point.bucket.shortLabel}</text>
            </g>
          `,
        )
        .join("")}
    </svg>
  `;
}

function buildTrendSummary(buckets) {
  const sorted = buckets.slice().sort((a, b) => b.value - a.value);
  const peak = sorted[0];
  const quiet = sorted[sorted.length - 1];
  const average = buckets.length ? sumBy(buckets, (item) => item.value) / buckets.length : 0;
  return `
    <div class="trend-pill"><span>Peak period</span><strong>${peak.label} | ${formatMetricByKey(peak.value, state.trendMetric)}</strong></div>
    <div class="trend-pill"><span>Quiet period</span><strong>${quiet.label} | ${formatMetricByKey(quiet.value, state.trendMetric)}</strong></div>
    <div class="trend-pill"><span>Average</span><strong>${formatMetricByKey(average, state.trendMetric)}</strong></div>
  `;
}

function buildGraphicComboChart(dailySeries) {
  if (!dailySeries.length) {
    return "<div class=\"note-card\">No chart data for the selected range.</div>";
  }
  const width = 980;
  const height = 360;
  const padding = { top: 28, right: 42, bottom: 54, left: 54 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const rows = dailySeries.map((day) => {
    const gross = Math.max((day.receiptRevenueCents || 0) - (day.receiptRefundsCents || 0), 0);
    const revenue = state.revenueMode === "gross" ? gross : Math.round(gross / VAT_RATE);
    return {
      date: day.date,
      label: shortDate(day.date),
      revenue,
      lineValue: Math.max(day.orderCount || 0, 0),
    };
  });
  const maxRevenue = Math.max(...rows.map((row) => row.revenue), 1);
  const maxLine = Math.max(...rows.map((row) => row.lineValue), 1);
  const slot = innerWidth / rows.length;
  const barWidth = Math.max(8, Math.min(34, slot * 0.56));
  const linePoints = rows.map((row, index) => ({
    x: padding.left + slot * index + slot / 2,
    y: padding.top + innerHeight - (row.lineValue / maxLine) * innerHeight,
    row,
  }));
  const linePath = linePoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const yLabel = (value) => formatCurrency(Math.round(value)).replace(",00", "");
  return `
    <svg viewBox="0 0 ${width} ${height}" aria-label="Revenue bar and order line chart">
      <defs>
        <linearGradient id="graphic-bar-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f2a049"/>
          <stop offset="100%" stop-color="#d4440e"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${width}" height="${height}" rx="6" fill="#202020"></rect>
      ${[0, 0.25, 0.5, 0.75, 1]
        .map((tick) => {
          const y = padding.top + innerHeight - innerHeight * tick;
          return `
            <line x1="${padding.left}" y1="${y}" x2="${padding.left + innerWidth}" y2="${y}" stroke="rgba(255,255,255,0.08)"></line>
            <text x="${padding.left - 10}" y="${y + 4}" text-anchor="end" fill="#8e949f" font-size="11">${yLabel(maxRevenue * tick)}</text>
          `;
        })
        .join("")}
      ${rows
        .map((row, index) => {
          const x = padding.left + slot * index + (slot - barWidth) / 2;
          const barHeight = (row.revenue / maxRevenue) * innerHeight;
          const y = padding.top + innerHeight - barHeight;
          const showLabel = rows.length <= 16 || index % Math.ceil(rows.length / 12) === 0;
          return `
            <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="3" fill="url(#graphic-bar-fill)"></rect>
            ${showLabel ? `<text x="${x + barWidth / 2}" y="${height - 16}" text-anchor="middle" fill="#8e949f" font-size="10">${row.label}</text>` : ""}
          `;
        })
        .join("")}
      <path d="${linePath}" fill="none" stroke="#e0493f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
      ${linePoints
        .map((point) => `<circle cx="${point.x}" cy="${point.y}" r="3.5" fill="#e0493f" stroke="#202020" stroke-width="2"></circle>`)
        .join("")}
      <g transform="translate(${padding.left}, ${padding.top - 12})">
        <rect width="10" height="10" rx="2" fill="#d4440e"></rect>
        <text x="16" y="9" fill="#c8cede" font-size="12">Revenue</text>
        <line x1="92" y1="5" x2="112" y2="5" stroke="#e0493f" stroke-width="3"></line>
        <text x="120" y="9" fill="#c8cede" font-size="12">Orders</text>
      </g>
    </svg>
  `;
}

function buildGraphicKpiPanel(summary, compareSummary) {
  return `
    <div class="graphic-breakdown">
      <div class="graphic-breakdown-item"><span>Revenue</span><strong>${formatDisplayRevenue(summary)}</strong><em>${deltaDisplay(displayRevenueValue(summary), displayRevenueValue(compareSummary))}</em></div>
      <div class="graphic-breakdown-item"><span>Orders</span><strong>${numberFormatter.format(summary.orderCount)}</strong><em>${deltaDisplay(summary.orderCount, compareSummary.orderCount)}</em></div>
      <div class="graphic-breakdown-item"><span>Guests</span><strong>${numberFormatter.format(summary.guests)}</strong><em>${deltaDisplay(summary.guests, compareSummary.guests)}</em></div>
      <div class="graphic-breakdown-item"><span>Average Order Value</span><strong>${formatCurrency(summary.averageOrderValueCents)}</strong><em>${deltaDisplay(summary.averageOrderValueCents, compareSummary.averageOrderValueCents)}</em></div>
      <div class="graphic-breakdown-item"><span>Margin</span><strong>${formatCurrency(summary.marginCents)}</strong><em>${deltaDisplay(summary.marginCents, compareSummary.marginCents)}</em></div>
    </div>
  `;
}

function buildMatrixChart(matrix) {
  if (!matrix.rows.length) {
    return "<div class=\"note-card\">No product rows available for the selected filters.</div>";
  }
  const width = 920;
  const height = 520;
  const padding = { top: 40, right: 30, bottom: 56, left: 54 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const visibleRows = matrix.rows.slice(0, 60);
  const salesCeiling = percentile(visibleRows.map((row) => row.grossRevenueCents), 0.9) || 1;
  const minMargin = Math.min(...visibleRows.map((row) => row.marginCents), 0);
  const maxMargin = percentile(visibleRows.map((row) => row.marginCents), 0.92) || 1;
  const avgX = padding.left + scaleMatrixSales(matrix.averageSales, salesCeiling) * innerWidth;
  const avgY =
    padding.top + innerHeight - scaleMatrixMargin(matrix.averageMargin, minMargin, maxMargin) * innerHeight;
  const labeledProducts = new Set(
    visibleRows
      .slice()
      .sort((a, b) => b.grossRevenueCents + b.marginCents - (a.grossRevenueCents + a.marginCents))
      .slice(0, 8)
      .map((row) => row.id),
  );
  const quadrants = [
    { label: "Hidden Gems", x: padding.left + 12, y: padding.top + 22, fill: "#23363a", text: "#6bc7c0" },
    { label: "Greatest Hits", x: width - 156, y: padding.top + 22, fill: "#243249", text: "#79aef2" },
    { label: "Underperformers", x: padding.left + 12, y: height - 62, fill: "#433522", text: "#efbc63" },
  ];

  return `
    <svg viewBox="0 0 ${width} ${height}" aria-label="Product matrix">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#1d2128"></rect>
      <rect x="${padding.left}" y="${padding.top}" width="${avgX - padding.left}" height="${avgY - padding.top}" fill="#1f2e31"></rect>
      <rect x="${avgX}" y="${padding.top}" width="${padding.left + innerWidth - avgX}" height="${avgY - padding.top}" fill="#1f2836"></rect>
      <rect x="${padding.left}" y="${avgY}" width="${avgX - padding.left}" height="${padding.top + innerHeight - avgY}" fill="#31271d"></rect>
      <rect x="${avgX}" y="${avgY}" width="${padding.left + innerWidth - avgX}" height="${padding.top + innerHeight - avgY}" fill="#212e23"></rect>
      <line x1="${padding.left}" y1="${padding.top + innerHeight}" x2="${padding.left + innerWidth}" y2="${padding.top + innerHeight}" stroke="#465061"></line>
      <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${padding.top + innerHeight}" stroke="#465061"></line>
      <line x1="${avgX}" y1="${padding.top}" x2="${avgX}" y2="${padding.top + innerHeight}" stroke="#50596b"></line>
      <line x1="${padding.left}" y1="${avgY}" x2="${padding.left + innerWidth}" y2="${avgY}" stroke="#50596b"></line>
      ${quadrants
        .map(
          (quadrant) => `
            <g>
              <rect x="${quadrant.x}" y="${quadrant.y - 16}" rx="6" ry="6" width="${quadrant.label.length * 7.6 + 24}" height="28" fill="${quadrant.fill}"></rect>
              <text x="${quadrant.x + 12}" y="${quadrant.y + 2}" fill="${quadrant.text}" font-size="13" font-weight="700">${quadrant.label}</text>
            </g>
          `,
        )
        .join("")}
      <text x="${padding.left}" y="${padding.top - 12}" fill="#9ba7b8" font-size="13" font-weight="700">Retention</text>
      <text x="${width - 86}" y="${height - 14}" fill="#9ba7b8" font-size="13" font-weight="700">Popularity</text>
      ${visibleRows
        .map((row) => {
          const x = padding.left + scaleMatrixSales(row.grossRevenueCents, salesCeiling) * innerWidth;
          const y = padding.top + innerHeight - scaleMatrixMargin(row.marginCents, minMargin, maxMargin) * innerHeight;
          const showLabel = labeledProducts.has(row.id);
          return `
            <g data-point-product="${row.id}">
              <circle cx="${x}" cy="${y}" r="${showLabel ? 7 : 5.5}" fill="#dbe4f0" opacity="0.95"></circle>
              <circle cx="${x}" cy="${y}" r="${showLabel ? 5 : 4}" fill="${quadrantColor(row.quadrant)}" opacity="${showLabel ? "0.94" : "0.8"}"></circle>
              ${showLabel ? `<text x="${x}" y="${y - 14}" text-anchor="middle" fill="#c3ceda" font-size="10.5">${escapeHtml(trimLabel(row.name, 16))}</text>` : ""}
            </g>
          `;
        })
        .join("")}
    </svg>
  `;
}

function scaleMatrixSales(value, ceiling) {
  const safeValue = Math.max(0, Math.min(value, ceiling));
  return Math.log1p(safeValue) / Math.log1p(Math.max(ceiling, 1));
}

function scaleMatrixMargin(value, minMargin, maxMargin) {
  const span = Math.max(maxMargin - minMargin, 1);
  const safeValue = Math.max(minMargin, Math.min(value, maxMargin));
  return (safeValue - minMargin) / span;
}

function percentile(values, fraction) {
  if (!values.length) {
    return 0;
  }
  const sorted = values.slice().sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.max(0, Math.floor((sorted.length - 1) * fraction)));
  return sorted[index];
}

function buildHiddenProductsMarkup(matrix) {
  if (!matrix.hiddenRows.length) {
    return "<div class=\"note-card\">No products are hidden from the matrix right now.</div>";
  }
  return matrix.hiddenRows
    .map(
      (row) => `
        <div class="note-card">
          <strong>${row.name}</strong>
          <span>${row.articleNumber}</span><br />
          <button class="link-button" data-unhide-product="${row.id}">Show again</button>
        </div>
      `,
    )
    .join("");
}

function buildMatrixSummaryMarkup(matrix) {
  const grouped = groupBy(matrix.rows, (row) => row.quadrant);
  return Object.keys(grouped)
    .map(
      (label) => `
        <div class="note-card">
          <strong>${label}</strong>
          <span>${grouped[label].length} products</span><br />
          ${grouped[label]
            .slice(0, 3)
            .map((row) => `${escapeHtml(row.name)} <button class="link-button" data-hide-product="${row.id}">Hide</button>`)
            .join("<br />")}
        </div>
      `,
    )
    .join("");
}

function buildTransactionsSummary(transactions) {
  return `
    <div class="summary-chip"><strong>Average Number of Cancellations per Day (Total)</strong><span>${decimalFormatter.format(transactions.averageCancellationsPerDay)}</span></div>
    <div class="summary-chip"><strong>Average Discounts per Day (Total)</strong><span>${formatCurrency(transactions.averageDiscountsPerDayCents)}</span></div>
    <div class="summary-chip"><strong>Invoices with transfers</strong><span>${numberFormatter.format(transactions.totalTransfers)}</span></div>
    <div class="summary-chip"><strong>Invoices with cancellations</strong><span>${numberFormatter.format(transactions.totalCancellations)}</span></div>
    <div class="summary-chip"><strong>Corrections</strong><span>${numberFormatter.format(transactions.totalCorrections)}</span></div>
  `;
}

function buildTransactionsTable(transactions) {
  if (!transactions.rows.length) {
    return "<table><thead><tr><th>Transaction</th></tr></thead><tbody><tr><td>No POS transaction rows match the current filters.</td></tr></tbody></table>";
  }
  return `
    <table>
      <thead>
        <tr><th>Date</th><th>Invoice</th><th>Type</th><th>Employee</th><th>Amount</th><th>Comment</th></tr>
      </thead>
      <tbody>
        ${transactions.rows
          .map(
            (row) => `
              <tr class="${row.kind === "transfer" ? "transaction-transfer" : row.kind === "cancellation" ? "transaction-cancellation" : ""}">
                <td>${formatDate(row.date)}</td>
                <td><strong>${row.invoice}</strong></td>
                <td>${row.label}</td>
                <td>${row.employeeName || "System"}</td>
                <td>${formatCurrency(row.amountCents)}</td>
                <td class="${row.kind === "transfer" ? "warning-cell" : row.kind === "cancellation" ? "value-negative" : "muted-cell"}">${row.comment}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildEmployeesTable(context) {
  const hoursByEmployee = buildRosterHoursByEmployee(state.startDate, state.endDate);
  const rows = currentProcessed().employeeCatalog.map((employee) => {
    const perf = context.employeeRows.find((row) => row.id === employee.id) || emptyEntityRow(employee.id, employee.name);
    const profile = localModel.employeeProfiles[employee.id];
    return {
      ...perf,
      employeeNumber: employee.employeeNumber,
      group: GROUP_OPTIONS.find((item) => item.key === profile.group)?.label || profile.group,
      wageCents: currentEmployeeWageCents(employee.id, state.endDate),
      hours: hoursByEmployee[employee.id]?.hours || 0,
      staffCostCents: hoursByEmployee[employee.id]?.costCents || 0,
      note: profile.note || "-",
    };
  });
    return `
      <table>
        <thead>
          <tr><th>Employee</th><th>Employee No.</th><th>Group</th><th>Revenue</th><th>Units</th><th>Hours</th><th>Revenue / Hour</th><th>Hourly Wage</th><th>Staff Cost</th><th>Comment</th></tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
              <tr>
                <td><strong>${row.name}</strong></td>
                <td>${row.employeeNumber}</td>
                <td>${row.group}</td>
                  <td>${formatDisplayRevenue(row)}</td>
                  <td>${numberFormatter.format(Math.round(row.units || 0))}</td>
                  <td>${decimalFormatter.format(row.hours)}</td>
                  <td>${formatCurrency(row.hours ? Math.round(displayRevenueValue(row) / row.hours) : 0)}</td>
                  <td>${formatCurrency(row.wageCents)}</td>
                  <td>${formatCurrency(row.staffCostCents)}</td>
                  <td class="muted-cell">${escapeHtml(row.note)}</td>
                </tr>
              `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPurchasingTable() {
  const rows = localModel.ingredients
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => ({
      ...item,
      currentPrice: currentIngredientPriceCents(item, state.endDate),
      currentSince: latestHistoryDate(item.priceHistory),
      linkedRecipes: Object.values(localModel.recipes).filter((recipe) => recipe.lines.some((line) => line.ingredientId === item.id)).length,
    }));
  return `
    <table>
      <thead><tr><th>Ingredient</th><th>Ingredient Group</th><th>Unit</th><th>Purchase Cost</th><th>Valid Since</th><th>Linked Recipes</th><th>Price Changes</th></tr></thead>
      <tbody>
        ${rows
          .map(
            (row) => `
                <tr>
                  <td><strong>${row.name}</strong></td>
                  <td>${row.group}</td>
                  <td>${row.unit}</td>
                  <td>${formatCurrency(row.currentPrice)}</td>
                  <td>${formatDate(row.currentSince)}</td>
                  <td>${numberFormatter.format(row.linkedRecipes)}</td>
                  <td>${numberFormatter.format(row.priceHistory.length)}</td>
                </tr>
              `,
            )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildRecipeLinesMarkup(productId) {
  const product = currentProcessed().productCatalog.find((item) => item.id === productId);
  const productRow = state.renderContext?.productRows?.find((item) => item.id === productId) || null;
  if (!product) {
    return "<div class=\"note-card\">Select a menu item to build its recipe.</div>";
  }
  const purchaseCostCents = calculateRecipeCostCents(productId, state.endDate, state.recipeDraft);
  const unitGrossCents = productRow?.units ? Math.round(productRow.grossRevenueCents / productRow.units) : 0;
  const unitNetCents = productRow?.units ? Math.round(productRow.netRevenueCents / productRow.units) : 0;
  const unitMarginCents = productRow?.units ? Math.round(productRow.marginCents / productRow.units) : Math.max(unitNetCents - purchaseCostCents, 0);
  if (!state.recipeDraft.length) {
    return `
      <div class="note-card"><strong>${product.name}</strong><span>${product.articleNumber || "-"} | ${product.category || "Product group unavailable"}</span></div>
      <div class="note-card">No recipe lines saved yet for <strong>${product.name}</strong>.</div>
    `;
  }
  return `
      <div class="note-card"><strong>${product.name}</strong><span>${product.articleNumber || "-"} | ${product.category || "Product group unavailable"}</span></div>
      <div class="kpi-list">
        <div class="kpi-item"><span>Purchase Cost</span><strong>${formatCurrency(purchaseCostCents)}</strong><small>Calculated from individual ingredient prices</small></div>
        <div class="kpi-item"><span>Selling Price (Gross)</span><strong>${formatCurrency(unitGrossCents)}</strong><small>Average from selected range</small></div>
        <div class="kpi-item"><span>Selling Price (Net)</span><strong>${formatCurrency(unitNetCents)}</strong><small>Revenue without tax</small></div>
        <div class="kpi-item"><span>Margin per Item</span><strong>${formatCurrency(unitMarginCents)}</strong><small>Recipe cost vs current selling price</small></div>
      </div>
      ${state.recipeDraft
        .map((line) => {
          const ingredient = localModel.ingredients.find((item) => item.id === line.ingredientId);
          return `
            <div class="note-card">
              <strong>${ingredient?.name || line.ingredientId}</strong>
              <span>${decimalFormatter.format(line.quantity)} ${line.unit} -> ${formatCurrency(lineCostCents(line, state.endDate))}</span><br />
              <button class="link-button" data-remove-recipe-line="${line.id}">Remove line</button>
            </div>
          `;
        })
        .join("")}
  `;
}

function buildConsumptionTable(context) {
  const totals = new Map();
  context.productRows.forEach((row) => {
    const recipe = localModel.recipes[row.id];
    if (!recipe) {
      return;
    }
    recipe.lines.forEach((line) => {
      const key = `${line.ingredientId}:${line.unit}`;
      const expected = row.units * line.quantity;
      if (!totals.has(key)) {
        totals.set(key, { ingredientId: line.ingredientId, unit: line.unit, expected: 0, actual: 0 });
      }
      const bucket = totals.get(key);
      bucket.expected += expected;
      bucket.actual += expected * ingredientVarianceMultiplier(line.ingredientId, context.summary.start, context.summary.end);
    });
  });
  const rows = [...totals.values()].sort((a, b) => b.expected - a.expected).slice(0, 40);
  if (!rows.length) {
    return "<table><thead><tr><th>Ingredient</th></tr></thead><tbody><tr><td>No recipe-based consumption could be calculated for the current filters.</td></tr></tbody></table>";
  }
  return `
    <table>
      <thead><tr><th>Ingredient</th><th>Expected Consumption</th><th>Actual Consumption</th><th>Variance</th><th>Comment</th></tr></thead>
      <tbody>
        ${rows
          .map((row) => {
            const ingredient = localModel.ingredients.find((item) => item.id === row.ingredientId);
            const variance = row.actual - row.expected;
            return `
              <tr>
                <td><strong>${ingredient?.name || row.ingredientId}</strong></td>
                <td>${decimalFormatter.format(row.expected)} ${row.unit}</td>
                <td>${decimalFormatter.format(row.actual)} ${row.unit}</td>
                <td class="${variance > 0 ? "value-negative" : "value-positive"}">${decimalFormatter.format(variance)} ${row.unit}</td>
                <td class="muted-cell">${variance > 0 ? "Possible waste / over-portioning / loss" : "Below expected usage"}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function buildMonthlyPnlTable() {
  const model = localModel.monthlyPnl || {};
  const cellValue = (rowId, monthKey) => Number(model[rowId]?.[monthKey] || 0);
  const rowTotal = (rowId) => PNL_MONTHS.reduce((total, [monthKey]) => total + cellValue(rowId, monthKey), 0);
  const colTotal = (monthKey, type) =>
    PNL_ROWS.filter((row) => row.type === type).reduce((total, row) => total + cellValue(row.id, monthKey), 0);
  const resultTotal = (monthKey) => colTotal(monthKey, "income") - colTotal(monthKey, "expense");
  const grandByType = (type) => PNL_MONTHS.reduce((total, [monthKey]) => total + colTotal(monthKey, type), 0);
  return `
    <table class="pnl-table">
      <thead>
        <tr>
          <th class="pnl-sticky-col">Line Item</th>
          ${PNL_MONTHS.map(([, label]) => `<th>${label}</th>`).join("")}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${PNL_ROWS.map(
          (row) => `
            <tr class="pnl-row-${row.type}">
              <td class="pnl-sticky-col"><strong>${row.label}</strong><span>${row.type === "income" ? "Income" : "Expense"}</span></td>
              ${PNL_MONTHS.map(
                ([monthKey]) => `
                  <td>
                    <input
                      class="pnl-input"
                      type="number"
                      step="0.01"
                      data-pnl-row="${row.id}"
                      data-pnl-month="${monthKey}"
                      value="${(cellValue(row.id, monthKey) / 100).toFixed(2)}"
                    />
                  </td>
                `,
              ).join("")}
              <td class="pnl-total" data-pnl-row-total="${row.id}">${formatCurrency(rowTotal(row.id))}</td>
            </tr>
          `,
        ).join("")}
      </tbody>
      <tfoot>
        <tr>
          <th class="pnl-sticky-col">Total Income</th>
          ${PNL_MONTHS.map(([monthKey]) => `<th data-pnl-col-total="income:${monthKey}">${formatCurrency(colTotal(monthKey, "income"))}</th>`).join("")}
          <th data-pnl-grand-total="income">${formatCurrency(grandByType("income"))}</th>
        </tr>
        <tr>
          <th class="pnl-sticky-col">Total Expenses</th>
          ${PNL_MONTHS.map(([monthKey]) => `<th data-pnl-col-total="expense:${monthKey}">${formatCurrency(colTotal(monthKey, "expense"))}</th>`).join("")}
          <th data-pnl-grand-total="expense">${formatCurrency(grandByType("expense"))}</th>
        </tr>
        <tr class="pnl-result-row">
          <th class="pnl-sticky-col">Operating Result</th>
          ${PNL_MONTHS.map(([monthKey]) => `<th data-pnl-result-total="${monthKey}">${formatCurrency(resultTotal(monthKey))}</th>`).join("")}
          <th data-pnl-grand-total="result">${formatCurrency(grandByType("income") - grandByType("expense"))}</th>
        </tr>
      </tfoot>
    </table>
  `;
}

function updateMonthlyPnlTotals() {
  if (!localModel.monthlyPnl) return;
  const model = localModel.monthlyPnl;
  const cellValue = (rowId, monthKey) => Number(model[rowId]?.[monthKey] || 0);
  const rowTotal = (rowId) => PNL_MONTHS.reduce((total, [monthKey]) => total + cellValue(rowId, monthKey), 0);
  const colTotal = (monthKey, type) =>
    PNL_ROWS.filter((row) => row.type === type).reduce((total, row) => total + cellValue(row.id, monthKey), 0);
  PNL_ROWS.forEach((row) => {
    const el = document.querySelector(`[data-pnl-row-total="${row.id}"]`);
    if (el) el.textContent = formatCurrency(rowTotal(row.id));
  });
  ["income", "expense"].forEach((type) => {
    let grand = 0;
    PNL_MONTHS.forEach(([monthKey]) => {
      const value = colTotal(monthKey, type);
      grand += value;
      const el = document.querySelector(`[data-pnl-col-total="${type}:${monthKey}"]`);
      if (el) el.textContent = formatCurrency(value);
    });
    const grandEl = document.querySelector(`[data-pnl-grand-total="${type}"]`);
    if (grandEl) grandEl.textContent = formatCurrency(grand);
  });
  let resultGrand = 0;
  PNL_MONTHS.forEach(([monthKey]) => {
    const value = colTotal(monthKey, "income") - colTotal(monthKey, "expense");
    resultGrand += value;
    const el = document.querySelector(`[data-pnl-result-total="${monthKey}"]`);
    if (el) el.textContent = formatCurrency(value);
  });
  const resultEl = document.querySelector('[data-pnl-grand-total="result"]');
  if (resultEl) resultEl.textContent = formatCurrency(resultGrand);
}

function handleMonthlyPnlInput(event) {
  const input = event.target.closest("[data-pnl-row][data-pnl-month]");
  if (!input) {
    return;
  }
  ensureMonthlyPnlModel(state.renderContext);
  const rowId = input.dataset.pnlRow;
  const monthKey = input.dataset.pnlMonth;
  if (!localModel.monthlyPnl[rowId]) {
    localModel.monthlyPnl[rowId] = {};
  }
  localModel.monthlyPnl[rowId][monthKey] = Math.round(Number(input.value || 0) * 100);
  updateMonthlyPnlTotals();
  persistLocalModel();
}

function ensureMonthlyPnlModel(context) {
  if (!localModel.monthlyPnl) {
    localModel.monthlyPnl = seedMonthlyPnl(context?.processed || currentProcessed());
    persistLocalModel();
    return;
  }
  let changed = false;
  PNL_ROWS.forEach((row) => {
    if (!localModel.monthlyPnl[row.id]) {
      localModel.monthlyPnl[row.id] = {};
      changed = true;
    }
    PNL_MONTHS.forEach(([monthKey]) => {
      if (localModel.monthlyPnl[row.id][monthKey] == null) {
        localModel.monthlyPnl[row.id][monthKey] = 0;
        changed = true;
      }
    });
  });
  if (changed) persistLocalModel();
}

function seedMonthlyPnl(processed) {
  const monthlyRevenue = Object.fromEntries(PNL_MONTHS.map(([monthKey]) => [monthKey, 0]));
  processed.raw.daily.forEach((day) => {
    const monthIndex = fromIso(day.date).getMonth();
    const monthKey = PNL_MONTHS[monthIndex]?.[0];
    if (monthKey) {
      monthlyRevenue[monthKey] += Math.max((day.receiptRevenueCents || 0) - (day.receiptRefundsCents || 0), 0);
    }
  });
  const fallback = Math.max(...Object.values(monthlyRevenue), 8500000);
  const multipliers = [0.82, 0.88, 0.94, 1, 1.04, 1.08, 1.12, 1.1, 1.03, 0.98, 0.94, 1.06];
  PNL_MONTHS.forEach(([monthKey], index) => {
    if (!monthlyRevenue[monthKey]) {
      monthlyRevenue[monthKey] = Math.round(fallback * multipliers[index]);
    }
  });
  const model = {};
  PNL_ROWS.forEach((row) => {
    model[row.id] = {};
    PNL_MONTHS.forEach(([monthKey]) => {
      const revenue = monthlyRevenue[monthKey];
      const rates = {
        personnel: 0.28,
        revenue: 1,
        "beverage-revenue": 0.22,
        fleet: 0.012,
        advertising: 0.018,
        taxes: 0.045,
        insurance: 0.01,
        energy: 0.035,
        leasing: 0.014,
        maintenance: 0.012,
        it: 0.009,
        "online-marketing": 0.011,
        gallery: 0.006,
        "profit-sharing": 0.018,
        "payroll-gz": 0.016,
        subcontractors: 0.02,
        "furniture-gz": 0.013,
        subscriptions: 0.007,
        dividend: 0.01,
        other: 0.012,
      };
      model[row.id][monthKey] = Math.round(revenue * (rates[row.id] || 0));
    });
  });
  return model;
}

function buildExpensesTable(rangeDays) {
  return `
    <table>
      <thead><tr><th>Expense</th><th>Category</th><th>Frequency</th><th>Amount</th><th>Daily Cost</th><th>Selected Range</th></tr></thead>
      <tbody>
        ${localModel.expenses
          .slice()
          .sort((a, b) => a.label.localeCompare(b.label))
          .map(
            (item) => `
              <tr>
                <td><strong>${item.label}</strong></td>
                <td>${item.category}</td>
                <td>${item.frequency}${item.depreciationMonths ? ` / ${item.depreciationMonths} months` : ""}</td>
                <td>${formatCurrency(item.amountCents)}</td>
                <td>${formatCurrency(Math.round(dailyExpenseCost(item)))}</td>
                <td>${formatCurrency(Math.round(dailyExpenseCost(item) * rangeDays))}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPermissionsTable() {
  return `
    <table>
      <thead><tr><th>Area</th>${ROLE_OPTIONS.map((item) => `<th>${item.label}</th>`).join("")}</tr></thead>
      <tbody>
        ${PAGE_ORDER.map(
          (page) => `
            <tr>
              <td><strong>${PAGE_LABELS[page]}</strong></td>
              ${ROLE_OPTIONS.map((role) => `<td><input type="checkbox" data-role-key="${role.key}" data-page-key="${page}" ${isPageAllowedForRole(page, role.key) ? "checked" : ""}></td>`).join("")}
            </tr>
          `,
        ).join("")}
      </tbody>
    </table>
  `;
}

function buildSettingsSummary() {
  const pages = (localModel.permissions[state.roleKey] || []).map((page) => PAGE_LABELS[page]);
  return `
    <div class="note-card"><strong>Current role</strong><span>${ROLE_OPTIONS.find((item) => item.key === state.roleKey)?.label || state.roleKey}</span></div>
    <div class="note-card"><strong>Accessible areas</strong><span>${pages.join(", ") || "No areas assigned."}</span></div>
    <div class="note-card"><strong>Lower-access preview</strong><span>Use the role selector in the top bar to demonstrate restricted heatmap / KPI access.</span></div>
  `;
}

function buildHistoryCards(title, rows) {
  if (!rows.length) {
    return `<div class="note-card"><strong>${title}</strong><span>No history yet.</span></div>`;
  }
  return rows.map((row, index) => `<div class="note-card"><strong>${index === 0 ? title : "Historical value"}</strong><span>${row}</span></div>`).join("");
}

function wireDetailEvents() {
  document.getElementById("search-suggestions").addEventListener("click", (event) => {
    const button = event.target.closest("[data-suggestion-key]");
    if (!button) {
      return;
    }
    const suggestion = findSuggestionByKey(button.dataset.suggestionKey);
    if (!suggestion) {
      return;
    }
    state.pendingFilters = dedupeFilters([...state.pendingFilters, suggestion.filter]);
    state.searchQuery = "";
    document.getElementById("search-input").value = "";
    renderSelectedFilters();
    renderSearchSuggestions();
  });

  document.getElementById("selected-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-filter]");
    if (!button) {
      return;
    }
    const key = button.dataset.removeFilter;
    state.pendingFilters = state.pendingFilters.filter((item) => filterKey(item) !== key);
    state.appliedFilters = state.appliedFilters.filter((item) => filterKey(item) !== key);
    renderAll();
  });

  document.getElementById("preset-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-card-key]");
    if (button) {
      openKpiModal(button.dataset.cardKey);
    }
  });

  ["heatmap-current-table", "heatmap-compare-table", "heatmap-grid"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", handleHeatmapClick);
  });

  const applyGraphicRange = document.getElementById("apply-graphic-range");
  if (applyGraphicRange) {
    applyGraphicRange.addEventListener("click", () => {
      const start = document.getElementById("graphic-start-date")?.value;
      const end = document.getElementById("graphic-end-date")?.value;
      if (!start || !end || start > end) {
        return;
      }
      state.rangePreset = "custom";
      state.startDate = start;
      state.endDate = end;
      renderAll();
    });
  }

  document.getElementById("save-dashboard-note").addEventListener("click", () => {
    const note = document.getElementById("dashboard-note-input").value.trim();
    const key = dashboardNoteKey();
    if (note) {
      localModel.dashboardNotes[key] = note;
    } else {
      delete localModel.dashboardNotes[key];
    }
    persistLocalModel();
    renderDashboardNote();
  });

  const saveDayNote = document.getElementById("save-day-note");
  if (saveDayNote) saveDayNote.addEventListener("click", () => {
    if (!state.selectedHeatmapDate) {
      return;
    }
    const note = document.getElementById("day-note-input").value.trim();
    if (note) {
      localModel.dayNotes[state.selectedHeatmapDate] = note;
    } else {
      delete localModel.dayNotes[state.selectedHeatmapDate];
    }
    persistLocalModel();
    renderAll();
  });

  document.getElementById("trend-chart").addEventListener("click", (event) => {
    const target = event.target.closest("[data-bucket-key]");
    if (!target) {
      return;
    }
    state.selectedTrendBucketKey = target.dataset.bucketKey;
    renderTrend(state.renderContext);
  });

  document.getElementById("explorer-table").addEventListener("click", handleHideProductClick);
  document.getElementById("matrix-summary").addEventListener("click", handleHideProductClick);
  document.getElementById("hidden-products").addEventListener("click", (event) => {
    const button = event.target.closest("[data-unhide-product]");
    if (button) {
      toggleHiddenProduct(button.dataset.unhideProduct, false);
    }
  });
  document.getElementById("matrix-chart").addEventListener("click", (event) => {
    const target = event.target.closest("[data-point-product]");
    if (!target) {
      return;
    }
    const row = state.renderContext.matrix.rows.find((item) => item.id === target.dataset.pointProduct);
    if (row) {
      openProductModal(row);
    }
  });

  document.getElementById("employee-select").addEventListener("change", () => renderEmployeeEditor(state.renderContext));
  document.getElementById("save-employee").addEventListener("click", saveEmployeeProfile);
  document.getElementById("ingredient-select").addEventListener("change", renderIngredientEditor);
  document.getElementById("save-ingredient").addEventListener("click", saveIngredientUpdate);
  document.getElementById("recipe-product-select").addEventListener("change", () => {
    loadRecipeDraft(document.getElementById("recipe-product-select").value);
    renderRecipes(state.renderContext);
  });
  document.getElementById("add-recipe-line").addEventListener("click", addRecipeLine);
  document.getElementById("save-recipe").addEventListener("click", saveRecipe);
  document.getElementById("recipe-lines").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-recipe-line]");
    if (!button) {
      return;
    }
    state.recipeDraft = state.recipeDraft.filter((item) => item.id !== button.dataset.removeRecipeLine);
    renderRecipes(state.renderContext);
  });
  document.getElementById("open-recipe-cost").addEventListener("click", () => openRecipeCostModal(document.getElementById("recipe-product-select").value));
  const saveExpenseButton = document.getElementById("save-expense");
  if (saveExpenseButton) saveExpenseButton.addEventListener("click", saveExpense);
  document.getElementById("expenses-table").addEventListener("input", handleMonthlyPnlInput);

  document.getElementById("permissions-table").addEventListener("change", (event) => {
    const input = event.target.closest("[data-role-key][data-page-key]");
    if (!input) {
      return;
    }
    const roleKey = input.dataset.roleKey;
    const pageKey = input.dataset.pageKey;
    const next = new Set(localModel.permissions[roleKey] || []);
    if (input.checked) {
      next.add(pageKey);
    } else {
      next.delete(pageKey);
    }
    localModel.permissions[roleKey] = PAGE_ORDER.filter((item) => next.has(item));
    persistLocalModel();
    ensureAllowedPage();
    renderAll();
  });

  document.getElementById("close-modal").addEventListener("click", closeModal);
  document.getElementById("app-modal").addEventListener("click", (event) => {
    if (event.target.dataset.closeModal === "true") {
      closeModal();
    }
  });
}

function handleHeatmapClick(event) {
  const button = event.target.closest("[data-heat-date]");
  if (!button) {
    return;
  }
  state.selectedHeatmapDate = button.dataset.heatDate;
  renderHeatmap(state.renderContext);
}

function handleHideProductClick(event) {
  const button = event.target.closest("[data-hide-product]");
  if (button) {
    toggleHiddenProduct(button.dataset.hideProduct, true);
  }
}

function saveEmployeeProfile() {
  const employeeId = document.getElementById("employee-select").value;
  if (!employeeId) {
    return;
  }
  const profile = localModel.employeeProfiles[employeeId];
  profile.group = document.getElementById("employee-group-select").value;
  profile.note = document.getElementById("employee-note-input").value.trim();
  const wage = Number(document.getElementById("employee-wage-input").value || 0);
  if (wage > 0) {
    profile.wageHistory.push({
      effectiveDate: document.getElementById("employee-effective-date").value || state.endDate,
      wageCents: Math.round(wage * 100),
    });
    profile.wageHistory = normalizeHistory(profile.wageHistory, "wageCents");
  }
  persistLocalModel();
  renderAll();
}

function saveIngredientUpdate() {
  const ingredient = localModel.ingredients.find((item) => item.id === document.getElementById("ingredient-select").value);
  if (!ingredient) {
    return;
  }
  ingredient.group = document.getElementById("ingredient-group-input").value.trim() || ingredient.group;
  ingredient.unit = document.getElementById("ingredient-unit-select").value || ingredient.unit;
  const price = Number(document.getElementById("ingredient-price-input").value || 0);
  if (price > 0) {
    ingredient.priceHistory.push({
      effectiveDate: document.getElementById("ingredient-effective-date").value || state.endDate,
      priceCents: Math.round(price * 100),
    });
    ingredient.priceHistory = normalizeHistory(ingredient.priceHistory, "priceCents");
  }
  persistLocalModel();
  renderAll();
}

function addRecipeLine() {
  const ingredientId = document.getElementById("recipe-ingredient-select").value;
  const unit = document.getElementById("recipe-unit-select").value;
  const quantity = Number(document.getElementById("recipe-quantity-input").value || 0);
  const productId = document.getElementById("recipe-product-select").value;
  if (!ingredientId || !productId || quantity <= 0) {
    return;
  }
  if (state.recipeDraftProductId !== productId) {
    loadRecipeDraft(productId);
  }
  state.recipeDraft.push({
    id: `line-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
    ingredientId,
    unit,
    quantity,
  });
  document.getElementById("recipe-quantity-input").value = "";
  renderRecipes(state.renderContext);
}

function saveRecipe() {
  const productId = document.getElementById("recipe-product-select").value;
  if (!productId) {
    return;
  }
  localModel.recipes[productId] = {
    productId,
    updatedAt: state.endDate,
    lines: state.recipeDraft.slice(),
  };
  persistLocalModel();
  renderAll();
}

function saveExpense() {
  const label = document.getElementById("expense-label-input").value.trim();
  const amount = Number(document.getElementById("expense-amount-input").value || 0);
  if (!label || amount <= 0) {
    return;
  }
  localModel.expenses.push({
    id: `exp-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    label,
    category: document.getElementById("expense-category-input").value.trim() || "Operations",
    amountCents: Math.round(amount * 100),
    frequency: document.getElementById("expense-frequency-select").value,
    depreciationMonths: Number(document.getElementById("expense-depreciation-input").value || 0),
    createdDate: state.endDate,
  });
  persistLocalModel();
  renderAll();
}

function openKpiModal(cardKey) {
  const card = state.cardModels.find((item) => item.key === cardKey);
  if (!card) {
    return;
  }
  document.getElementById("modal-caption").textContent = "All important KPIs";
  document.getElementById("modal-title").textContent = `${card.label} KPIs`;
  document.getElementById("modal-body").innerHTML = `
    <div class="kpi-list">${buildKpiListMarkup(card.summary, emptyComparisonSummary())}</div>
    <div style="margin-top:12px;">${buildDashboardTable(card.summary, emptyComparisonSummary())}</div>
  `;
  openModal();
}

function openRecipeCostModal(productId) {
  const product = currentProcessed().productCatalog.find((item) => item.id === productId);
  if (!product) {
    return;
  }
  document.getElementById("modal-caption").textContent = "Purchase Cost";
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-body").innerHTML = `
    <div class="note-card"><strong>Calculated from the prices of the individual ingredients/components used in the recipe.</strong><span>Total purchase cost: ${formatCurrency(calculateRecipeCostCents(productId, state.endDate, state.recipeDraft))}</span></div>
    ${state.recipeDraft
      .map((line) => {
        const ingredient = localModel.ingredients.find((item) => item.id === line.ingredientId);
        const ingredientPrice = ingredient ? currentIngredientPriceCents(ingredient, state.endDate) : 0;
        return `<div class="note-card"><strong>${ingredient?.name || line.ingredientId}</strong><span>${decimalFormatter.format(line.quantity)} ${line.unit} x ${formatCurrency(ingredientPrice)} per ${ingredient?.unit || line.unit} = ${formatCurrency(lineCostCents(line, state.endDate))}</span></div>`;
      })
      .join("")}
  `;
  openModal();
}

function openProductModal(row) {
  document.getElementById("modal-caption").textContent = "Product Comparison";
  document.getElementById("modal-title").textContent = row.name;
  document.getElementById("modal-body").innerHTML = `
    <div class="kpi-list">
      <div class="kpi-item"><span>Article No.</span><strong>${row.articleNumber || "-"}</strong><small>${row.category || "Product group"}</small></div>
      <div class="kpi-item"><span>Revenue</span><strong>${formatDisplayRevenue(row)}</strong><small>Sales axis</small></div>
      <div class="kpi-item"><span>Margin</span><strong>${formatCurrency(row.marginCents)}</strong><small>Margin axis</small></div>
      <div class="kpi-item"><span>Food Cost</span><strong>${formatCurrency(row.foodCostCents)}</strong><small>Recipe or cost-rate driven</small></div>
      <div class="kpi-item"><span>Units</span><strong>${numberFormatter.format(Math.round(row.units))}</strong><small>Selected range</small></div>
      <div class="kpi-item"><span>Quadrant</span><strong>${row.quadrant || "-"}</strong><small>Average sales and margin as midpoint</small></div>
    </div>
  `;
  openModal();
}

function openModal() {
  document.getElementById("app-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("app-modal").classList.add("hidden");
}

function keyKpiItems(summary, compareSummary, detailed = false) {
  const rows = [
    kpiRow("Revenue (Gross / Net)", formatDisplayRevenue(summary), formatDisplayRevenue(compareSummary), deltaDisplay(displayRevenueValue(summary), displayRevenueValue(compareSummary)), "Switch gross or net in the top control bar."),
    kpiRow("Items Sold", numberFormatter.format(Math.round(summary.itemsSold)), compareValue(compareSummary, "itemsSold"), deltaDisplay(summary.itemsSold, compareSummary.itemsSold), "Total articles sold in the period."),
    kpiRow("Cancelled Items", numberFormatter.format(Math.round(summary.canceledItems)), compareValue(compareSummary, "canceledItems"), deltaDisplay(summary.canceledItems, compareSummary.canceledItems), "Cancelled or voided items."),
    kpiRow("Number of Guests", numberFormatter.format(summary.guests), compareValue(compareSummary, "guests"), deltaDisplay(summary.guests, compareSummary.guests), "Total guest count."),
    kpiRow("Number of Tables", numberFormatter.format(summary.tables), compareValue(compareSummary, "tables"), deltaDisplay(summary.tables, compareSummary.tables), "Total tables served."),
    kpiRow("Average Order Value", formatCurrency(summary.averageOrderValueCents), compareValue(compareSummary, "averageOrderValueCents"), deltaDisplay(summary.averageOrderValueCents, compareSummary.averageOrderValueCents), "Average revenue per order or table."),
    kpiRow("Food Cost (Total & %)", `${formatCurrency(summary.foodCostCents)} | ${formatPercent(summary.foodCostPercent)}`, `${formatCurrency(compareSummary.foodCostCents || 0)} | ${formatPercent(compareSummary.foodCostPercent || 0)}`, deltaDisplay(summary.foodCostCents, compareSummary.foodCostCents), "Cost of goods sold — total and as % of net revenue."),
    kpiRow("Staff Cost (Total & %)", `${formatCurrency(summary.staffCostCents)} | ${formatPercent(summary.staffCostPercent)}`, `${formatCurrency(compareSummary.staffCostCents || 0)} | ${formatPercent(compareSummary.staffCostPercent || 0)}`, deltaDisplay(summary.staffCostCents, compareSummary.staffCostCents), "Based on total net revenue and current wage history."),
    kpiRow("Custom / Indirect Cost %", formatPercent(summary.customCostPercent), compareValue(compareSummary, "customCostPercent"), deltaDisplay(summary.customCostPercent, compareSummary.customCostPercent), "Rent, maintenance, software, and similar costs."),
    kpiRow("Contribution Margin 1", formatCurrency(summary.contributionMarginCents), compareValue(compareSummary, "contributionMarginCents"), deltaDisplay(summary.contributionMarginCents, compareSummary.contributionMarginCents), "Net revenue minus food cost."),
    kpiRow("Margin % | Total Margin", `${formatPercent(summary.marginPercent)} | ${formatCurrency(summary.marginCents)}`, `${formatPercent(compareSummary.marginPercent || 0)} | ${formatCurrency(compareSummary.marginCents || 0)}`, deltaDisplay(summary.marginCents, compareSummary.marginCents), "Margin % and total margin in EUR."),
    kpiRow("Employees Present", numberFormatter.format(summary.employeeCount), compareValue(compareSummary, "employeeCount"), deltaDisplay(summary.employeeCount, compareSummary.employeeCount), "Distinct employees present in the selected range."),
    kpiRow("Total Staff Hours", `${decimalFormatter.format(summary.totalStaffHours)} h`, compareValue(compareSummary, "totalStaffHours"), deltaDisplay(summary.totalStaffHours, compareSummary.totalStaffHours), "Clocked-in working time used for wage-based calculations."),
    kpiRow("Average Guests per Table", decimalFormatter.format(summary.averageGuestsPerTable), compareValue(compareSummary, "averageGuestsPerTable"), deltaDisplay(summary.averageGuestsPerTable, compareSummary.averageGuestsPerTable), "Average number of guests per table."),
    kpiRow("Revenue per Guest", formatCurrency(summary.revenuePerGuestCents), compareValue(compareSummary, "revenuePerGuestCents"), deltaDisplay(summary.revenuePerGuestCents, compareSummary.revenuePerGuestCents), "Useful for spend-per-guest analysis."),
    kpiRow("Revenue per Employee (Total)", formatCurrency(summary.revenuePerEmployeeCents), compareValue(compareSummary, "revenuePerEmployeeCents"), deltaDisplay(summary.revenuePerEmployeeCents, compareSummary.revenuePerEmployeeCents), "Revenue per employee (all staff combined)."),
    kpiRow("Productivity per Labour Hour", formatCurrency(summary.revenuePerLaborHourCents), compareValue(compareSummary, "revenuePerLaborHourCents"), deltaDisplay(summary.revenuePerLaborHourCents, compareSummary.revenuePerLaborHourCents), "Revenue generated per scheduled labour hour."),
    kpiRow("Time from Order to Serving", formatDurationMinutes(summary.averageServiceMinutes), compareValue(compareSummary, "averageServiceMinutes"), deltaDisplay(summary.averageServiceMinutes, compareSummary.averageServiceMinutes), "Estimated until order/serve timestamps are connected."),
    kpiRow("Average Discounts per Day", formatCurrency(summary.averageDiscountsPerDayCents), compareValue(compareSummary, "averageDiscountsPerDayCents"), deltaDisplay(summary.averageDiscountsPerDayCents, compareSummary.averageDiscountsPerDayCents), "Derived from POS refunds / discount rows."),
    kpiRow("Average Cancellations per Day", decimalFormatter.format(summary.averageCancellationsPerDay), compareValue(compareSummary, "averageCancellationsPerDay"), deltaDisplay(summary.averageCancellationsPerDay, compareSummary.averageCancellationsPerDay), "Average number of cancellations per day."),
    kpiRow("Average Staff per Day in the Kitchen", decimalFormatter.format(summary.averageStaffPerDayKitchen), compareValue(compareSummary, "averageStaffPerDayKitchen"), deltaDisplay(summary.averageStaffPerDayKitchen, compareSummary.averageStaffPerDayKitchen), "Kitchen staffing"),
    kpiRow("Average Staff per Day at the Bar", decimalFormatter.format(summary.averageStaffPerDayBar), compareValue(compareSummary, "averageStaffPerDayBar"), deltaDisplay(summary.averageStaffPerDayBar, compareSummary.averageStaffPerDayBar), "Bar staffing"),
    kpiRow("Average Staff per Day in Service", decimalFormatter.format(summary.averageStaffPerDayService), compareValue(compareSummary, "averageStaffPerDayService"), deltaDisplay(summary.averageStaffPerDayService, compareSummary.averageStaffPerDayService), "Service staffing"),
    kpiRow("Average Staff per Day (Temporary / Support)", decimalFormatter.format(summary.averageStaffPerDaySupport), compareValue(compareSummary, "averageStaffPerDaySupport"), deltaDisplay(summary.averageStaffPerDaySupport, compareSummary.averageStaffPerDaySupport), "Support staffing"),
  ];
  return detailed ? rows : rows.map((row) => ({ label: row.label, value: row.value, note: row.note }));
}

function kpiRow(label, value, compareValueText, delta, note) {
  return {
    label,
    value,
    compareValue: compareValueText,
    delta,
    note,
    deltaClass: delta.startsWith("-") ? "value-negative" : "value-positive",
  };
}

function compareValue(summary, key) {
  if (summary == null || summary[key] == null) {
    return "-";
  }
  return formatMetricByKey(summary[key], key, summary);
}

function deltaDisplay(current, previous) {
  if (!previous) {
    return "No base";
  }
  const delta = (current - previous) / previous;
  return `${delta >= 0 ? "+" : ""}${(delta * 100).toFixed(1)}%`;
}

function emptyComparisonSummary() {
  return {
    grossRevenueCents: 0,
    netRevenueCents: 0,
    itemsSold: 0,
    canceledItems: 0,
    guests: 0,
    tables: 0,
    orderCount: 0,
    refundAmountCents: 0,
    refundCount: 0,
    averageOrderValueCents: 0,
    foodCostCents: 0,
    staffCostCents: 0,
    customCostCents: 0,
    contributionMarginCents: 0,
    staffCostPercent: 0,
    foodCostPercent: 0,
    customCostPercent: 0,
    marginPercent: 0,
    marginCents: 0,
    totalStaffHours: 0,
    employeeCount: 0,
    averageStaffPerDayKitchen: 0,
    averageStaffPerDayBar: 0,
    averageStaffPerDayService: 0,
    averageStaffPerDaySupport: 0,
    averageStaffPerDayTotal: 0,
    averageGuestsPerTable: 0,
    revenuePerGuestCents: 0,
    revenuePerEmployeeCents: 0,
    revenuePerLaborHourCents: 0,
    averageDiscountsPerDayCents: 0,
    averageCancellationsPerDay: 0,
    averageServiceMinutes: 0,
  };
}

function buildCardModel(key, label) {
  let start = state.startDate;
  let end = state.endDate;
  let summary;
  let compareText;
  let rangeLabel;
  if (key === "today") {
    start = currentDataset().meta.dataMaxDate;
    end = start;
    summary = buildSummaryFromRange(currentProcessed(), buildFilterState(), start, end);
    rangeLabel = formatRange(start, end);
  } else if (key === "yesterday") {
    start = toIso(addDays(fromIso(currentDataset().meta.dataMaxDate), -1));
    end = start;
    summary = buildSummaryFromRange(currentProcessed(), buildFilterState(), start, end);
    rangeLabel = formatRange(start, end);
  } else if (key === "currentMonth") {
    start = toIso(startOfMonth(fromIso(currentDataset().meta.dataMaxDate)));
    end = currentDataset().meta.dataMaxDate;
    summary = buildSummaryFromRange(currentProcessed(), buildFilterState(), start, end);
    rangeLabel = formatRange(start, end);
  } else if (key === "currentMonthForecast") {
    const forecast = buildForecastCardSummary();
    start = forecast.start;
    end = forecast.end;
    summary = forecast.summary;
    rangeLabel = `${shortDate(start)} - ${shortDate(forecast.fullEnd)}`;
    compareText = forecast.note;
  } else {
    const month = addMonths(fromIso(currentDataset().meta.dataMaxDate), -1);
    start = toIso(startOfMonth(month));
    end = toIso(endOfMonth(month));
    summary = buildSummaryFromRange(currentProcessed(), buildFilterState(), start, end);
    rangeLabel = formatRange(start, end);
  }
  if (!compareText) {
    compareText = buildComparisonModel(currentProcessed(), buildFilterState(), summary, start, end).label;
  }
  return { key, label, start, end, rangeLabel, summary, compareText };
}

function buildSummaryFromRange(processed, filters, start, end, precomputed = null) {
  const cacheKey = `${state.datasetKey}|summary|${state.revenueMode}|${start}|${end}|${serializeFilters(filters)}`;
  if (!precomputed && runtimeCache.summaries.has(cacheKey)) {
    return runtimeCache.summaries.get(cacheKey);
  }
  const dailySeries = precomputed?.dailySeries || buildFilteredDailySeries(processed, filters, start, end);
  const productRows = precomputed?.productRows || buildProductRows(processed, filters, start, end);
  const staffingRange = precomputed?.staffingRange || buildActualStaffingRange(processed, start, end);
  const shares = new Map(dailySeries.map((item) => [item.date, item.__share || 0]));
  const grossRevenueCents = Math.round(sumBy(dailySeries, (item) => item.receiptRevenueCents - item.receiptRefundsCents));
  const netRevenueCents = Math.round(grossRevenueCents / VAT_RATE);
  const displayRevenueCents = state.revenueMode === "gross" ? grossRevenueCents : netRevenueCents;
  const itemsSold = sumBy(dailySeries, (item) => item.itemsSold);
  const canceledItems = sumBy(dailySeries, (item) => item.canceledItems);
  const guests = Math.round(sumBy(dailySeries, (item) => deriveGuests(item)));
  const tables = Math.round(sumBy(dailySeries, (item) => item.tables));
  const orderCount = Math.round(sumBy(dailySeries, (item) => item.orderCount));
  const refundAmountCents = Math.round(sumBy(dailySeries, (item) => item.receiptRefundsCents || 0));
  const refundCount = Math.round(sumBy(dailySeries, (item) => item.refundCount || 0));
  const foodCostCents = Math.round(sumBy(productRows, (item) => item.foodCostCents));
  const staffCostCents = Math.round(sumBy(staffingRange, (item) => item.totalCostCents * (shares.get(item.date) || 0)));
  const customCostCents = Math.round(sumBy(dailySeries, (item) => dailyDistributedExpenseCost(item.date) * (item.__share || 0)));
  const contributionMarginCents = netRevenueCents - foodCostCents;
  const marginCents = contributionMarginCents - staffCostCents - customCostCents;
  const averageOrderValueCents = orderCount ? Math.round(displayRevenueCents / orderCount) : 0;
  const rangeDays = Math.max(diffDays(fromIso(start), fromIso(end)) + 1, 1);
  const avg = (key) => (staffingRange.length ? sumBy(staffingRange, (item) => item.counts[key]) / staffingRange.length : 0);
  const averageStaffPerDayTotal = staffingRange.length ? sumBy(staffingRange, (item) => item.totalEmployees) / staffingRange.length : 0;
  const totalStaffHours = sumBy(staffingRange, (item) => item.totalHours * (shares.get(item.date) || 0));
  const uniqueEmployees = new Set();
  staffingRange.forEach((snapshot) => {
    if ((shares.get(snapshot.date) || 0) <= 0) {
      return;
    }
    Object.values(snapshot.employeesByGroup)
      .flat()
      .forEach((employee) => {
        if (!filters.employeeIds.size || filters.employeeIds.has(employee.id)) {
          uniqueEmployees.add(employee.id);
        }
      });
  });
  const employeeCount = uniqueEmployees.size;
  const averageDiscountsPerDayCents = rangeDays ? Math.round(refundAmountCents / rangeDays) : 0;
  const averageCancellationsPerDay = rangeDays ? canceledItems / rangeDays : 0;
  const revenuePerGuestCents = guests ? Math.round(displayRevenueCents / guests) : 0;
  const revenuePerEmployeeCents = employeeCount ? Math.round(displayRevenueCents / employeeCount) : 0;
  const revenuePerLaborHourCents = totalStaffHours ? Math.round(displayRevenueCents / totalStaffHours) : 0;
  const averageServiceMinutes = estimateServiceMinutes(orderCount, tables, itemsSold, rangeDays);
  const summary = {
    start,
    end,
    grossRevenueCents,
    netRevenueCents,
    itemsSold,
    canceledItems,
    guests,
    tables,
    orderCount,
    refundAmountCents,
    refundCount,
    averageOrderValueCents,
    foodCostCents,
    staffCostCents,
    customCostCents,
    contributionMarginCents,
    marginCents,
    totalStaffHours,
    employeeCount,
    staffCostPercent: netRevenueCents ? staffCostCents / netRevenueCents : 0,
    foodCostPercent: netRevenueCents ? foodCostCents / netRevenueCents : 0,
    customCostPercent: netRevenueCents ? customCostCents / netRevenueCents : 0,
    marginPercent: netRevenueCents ? marginCents / netRevenueCents : 0,
    averageStaffPerDayKitchen: avg("kitchen"),
    averageStaffPerDayBar: avg("bar"),
    averageStaffPerDayService: avg("service"),
    averageStaffPerDaySupport: avg("support"),
    averageStaffPerDayTotal,
    averageGuestsPerTable: tables ? guests / tables : 0,
    revenuePerGuestCents,
    revenuePerEmployeeCents,
    revenuePerLaborHourCents,
    averageDiscountsPerDayCents,
    averageCancellationsPerDay,
    averageServiceMinutes,
    rangeDays,
  };
  if (!precomputed) {
    runtimeCache.summaries.set(cacheKey, summary);
  }
  return summary;
}

function buildComparisonModel(processed, filters, summary, start, end) {
  const cacheKey = `${state.datasetKey}|comparison|${state.compareMode}|${state.revenueMode}|${start}|${end}|${serializeFilters(filters)}`;
  if (runtimeCache.comparisons.has(cacheKey)) {
    return runtimeCache.comparisons.get(cacheKey);
  }
  if (state.compareMode === "none") {
    const result = { label: "No comparison", summary: emptyComparisonSummary() };
    runtimeCache.comparisons.set(cacheKey, result);
    return result;
  }
  const span = diffDays(fromIso(start), fromIso(end)) + 1;
  let compareStart;
  let compareEnd;
  if (state.compareMode === "previous") {
    compareEnd = toIso(addDays(fromIso(start), -1));
    compareStart = toIso(addDays(fromIso(compareEnd), -(span - 1)));
  } else {
    compareStart = toIso(addMonths(fromIso(start), -12));
    compareEnd = toIso(addMonths(fromIso(end), -12));
  }
  const compareSummary =
    compareEnd < processed.raw.meta.dataMinDate || compareStart > processed.raw.meta.dataMaxDate
      ? simulateHistoricalSummary(summary, state.compareMode)
      : buildSummaryFromRange(processed, filters, compareStart, compareEnd);
  const base = compareSummary.grossRevenueCents;
  const delta = base ? (summary.grossRevenueCents - base) / base : 0;
  const result = {
    label: `${state.compareMode === "lastYear" ? "vs same period last year" : "vs previous period"} ${delta >= 0 ? "+" : ""}${(delta * 100).toFixed(1)}%`,
    summary: compareSummary,
  };
  runtimeCache.comparisons.set(cacheKey, result);
  return result;
}

function estimateServiceMinutes(orderCount, tables, itemsSold, rangeDays) {
  const dailyOrders = orderCount / Math.max(rangeDays, 1);
  const dailyTables = tables / Math.max(rangeDays, 1);
  const itemsPerOrder = orderCount ? itemsSold / orderCount : 0;
  const tablePressure = dailyTables ? dailyOrders / dailyTables : 0;
  return Math.max(12, Math.min(38, 13 + tablePressure * 2.2 + itemsPerOrder * 1.4));
}

function buildFilteredDailySeries(processed, filters, start, end) {
  const cacheKey = `${state.datasetKey}|daily|${start}|${end}|${serializeFilters(filters)}`;
  if (runtimeCache.dailySeries.has(cacheKey)) {
    return runtimeCache.dailySeries.get(cacheKey);
  }
  const rows = processed.raw.daily
    .filter((item) => item.date >= start && item.date <= end)
    .map((item) => {
      const share = combinedShareForDate(processed, filters, item.date);
      return { ...scaleNumericRecord(item, share), date: item.date, __share: share };
    });
  runtimeCache.dailySeries.set(cacheKey, rows);
  return rows;
}

function buildProductRows(processed, filters, start, end) {
  const cacheKey = `${state.datasetKey}|products|${start}|${end}|${serializeFilters(filters)}`;
  if (runtimeCache.productRows.has(cacheKey)) {
    return runtimeCache.productRows.get(cacheKey);
  }
  const employeeShares = buildEmployeeShareByDate(processed, filters.employeeIds, start, end);
  const rows = [];
  processed.raw.productDaily.forEach((item) => {
    if (item.date < start || item.date > end) {
      return;
    }
    const productId = processed.productIdByName.get(item.name);
    const categoryId = processed.categoryIdByName.get(item.category || "Other");
    if (filters.productIds.size && !filters.productIds.has(productId)) {
      return;
    }
    if (filters.categoryIds.size && !filters.categoryIds.has(categoryId)) {
      return;
    }
    const share = filters.employeeIds.size ? employeeShares.get(item.date) || 0 : 1;
    if (share <= 0) {
      return;
    }
    const grossRevenueCents = Math.round(item.lineRevenueCents * share);
    const netRevenueCents = Math.round(grossRevenueCents / VAT_RATE);
    const foodCostCents = Math.round(estimateRowFoodCost(item, productId, item.date) * share);
    rows.push({
      id: productId,
      name: item.name,
      articleNumber: processed.productArticleById[productId],
      category: item.category || "Other",
      units: roundValue(item.units * share),
      canceledUnits: roundValue(item.canceledUnits * share),
      orders: Math.round(item.orders * share),
      tables: Math.round(item.tables * share),
      grossRevenueCents,
      netRevenueCents,
      foodCostCents,
      staffCostCents: Math.round(netRevenueCents * 0.12),
      customCostCents: Math.round(netRevenueCents * 0.04),
      marginCents: netRevenueCents - foodCostCents - Math.round(netRevenueCents * 0.16),
    });
  });
  const aggregated = aggregateRowsByKey(rows, "id", { name: "name", articleNumber: "articleNumber", category: "category" });
  runtimeCache.productRows.set(cacheKey, aggregated);
  return aggregated;
}

function buildEmployeeRows(processed, filters, start, end) {
  const cacheKey = `${state.datasetKey}|employees|${start}|${end}|${serializeFilters(filters)}`;
  if (runtimeCache.employeeRows.has(cacheKey)) {
    return runtimeCache.employeeRows.get(cacheKey);
  }
  const productShares = buildProductShareByDate(processed, filters, start, end);
  const rows = [];
  processed.raw.employeeDaily.forEach((item) => {
    if (item.date < start || item.date > end) {
      return;
    }
    const employeeId = processed.employeeIdByName.get(item.name);
    if (filters.employeeIds.size && !filters.employeeIds.has(employeeId)) {
      return;
    }
    const share = productShares.get(item.date) ?? 1;
    if (share <= 0) {
      return;
    }
    const grossRevenueCents = Math.round(item.lineRevenueCents * share);
    const netRevenueCents = Math.round(grossRevenueCents / VAT_RATE);
    rows.push({
      id: employeeId,
      name: item.name,
      employeeNumber: processed.employeeNumberById[employeeId],
      group: GROUP_OPTIONS.find((group) => group.key === localModel.employeeProfiles[employeeId]?.group)?.label || "",
      units: roundValue(item.units * share),
      orders: Math.round(item.orders * share),
      tables: Math.round(item.tables * share),
      grossRevenueCents,
      netRevenueCents,
      foodCostCents: Math.round(netRevenueCents * 0.22),
      staffCostCents: Math.round(currentEmployeeWageCents(employeeId, state.endDate) * employeeHoursInRange(employeeId, item.date, item.date)),
      marginCents: Math.round(netRevenueCents * 0.52),
    });
  });
  const aggregated = aggregateRowsByKey(rows, "id", { name: "name", employeeNumber: "employeeNumber", group: "group" });
  runtimeCache.employeeRows.set(cacheKey, aggregated);
  return aggregated;
}

function buildHeatmapContext(processed) {
  const cacheKey = `${state.datasetKey}|heatmap|${state.rangePreset}|${state.startDate}|${state.endDate}`;
  if (runtimeCache.heatmaps.has(cacheKey)) {
    return runtimeCache.heatmaps.get(cacheKey);
  }
  const dates = resolveHeatmapDates(processed);
  const context = {
    currentDays: dates.map((date) => buildPlanningDay(processed, date, false)),
    compareDays: dates.map((date) => buildPlanningDay(processed, toIso(addDays(fromIso(date), -364)), true)),
  };
  runtimeCache.heatmaps.set(cacheKey, context);
  return context;
}

function buildTrendContext(processed, filters) {
  const cacheKey = `${state.datasetKey}|trend|${state.trendGrouping}|${state.trendMetric}|${state.compareMode}|${state.revenueMode}|${state.startDate}|${state.endDate}|${serializeFilters(filters)}`;
  if (runtimeCache.trends.has(cacheKey)) {
    return runtimeCache.trends.get(cacheKey);
  }
  const context = {
    buckets: buildTrendBuckets(processed).map((bucket) => {
      const summary = buildSummaryFromRange(processed, filters, bucket.start, bucket.end);
        return {
          ...bucket,
          summary,
          comparison: buildComparisonModel(processed, filters, summary, bucket.start, bucket.end),
          value: metricValueFromSummary(summary, state.trendMetric),
        };
      }),
    };
  runtimeCache.trends.set(cacheKey, context);
  return context;
}

function buildMatrixContext(productRows) {
  const rows = productRows.filter((item) => !localModel.hiddenProducts.includes(item.id)).slice(0, 80).map((item) => ({ ...item }));
  const averageSales = rows.length ? sumBy(rows, (item) => item.grossRevenueCents) / rows.length : 0;
  const averageMargin = rows.length ? sumBy(rows, (item) => item.marginCents) / rows.length : 0;
  rows.forEach((row) => {
    row.quadrant =
      row.grossRevenueCents >= averageSales
        ? row.marginCents >= averageMargin
          ? "Renner"
          : "Push / Price Review"
        : row.marginCents >= averageMargin
          ? "Margin Push"
          : "Penner / Menu Review";
  });
  return {
    rows,
    averageSales,
    averageMargin,
    hiddenRows: currentProcessed().productCatalog.filter((item) => localModel.hiddenProducts.includes(item.id)),
  };
}

function buildTransactionsContext(processed, filters, dailySeries) {
  const rows = [];
  const rosterByDate = new Map(buildActualStaffingRange(processed, state.startDate, state.endDate).map((item) => [item.date, item]));
  dailySeries.forEach((day) => {
    const roster = rosterByDate.get(day.date);
    const employees = roster ? Object.values(roster.employeesByGroup).flat() : [];
    const selected = filters.employeeIds.size ? employees.filter((item) => filters.employeeIds.has(item.id)) : employees;
    if (filters.employeeIds.size && !selected.length) {
      return;
    }
    const cancellations = Math.min(3, Math.max(1, Math.round(day.canceledItems / 3)));
    const transfers = Math.min(2, Math.max(0, Math.round(day.orderCount / 180)));
    const corrections = Math.min(2, Math.max(0, Math.round(day.receiptRefundsCents / 2000)));
    repeat(cancellations, (index) => rows.push(buildTransactionRow(day.date, "Cancellation", "Invoice with cancellations", "cancellation", selected[index % Math.max(selected.length, 1)], 3900, index)));
    repeat(transfers, (index) => rows.push(buildTransactionRow(day.date, "Transfer", "Invoice with transfer", "transfer", selected[index % Math.max(selected.length, 1)], 2600, index)));
    repeat(corrections, (index) => rows.push(buildTransactionRow(day.date, "Correction", "Manual correction", "correction", selected[index % Math.max(selected.length, 1)], 1900, index)));
  });
  rows.sort((a, b) => `${b.date}${b.invoice}`.localeCompare(`${a.date}${a.invoice}`));
  return {
    rows,
    averageCancellationsPerDay: dailySeries.length ? sumBy(dailySeries, (item) => item.canceledItems) / dailySeries.length : 0,
    averageDiscountsPerDayCents: dailySeries.length ? Math.round(sumBy(dailySeries, (item) => item.receiptRefundsCents || 0) / dailySeries.length) : 0,
    totalTransfers: rows.filter((item) => item.kind === "transfer").length,
    totalCancellations: rows.filter((item) => item.kind === "cancellation").length,
    totalCorrections: rows.filter((item) => item.kind === "correction").length,
  };
}

function buildFilterState() {
  return {
    productIds: new Set(state.appliedFilters.filter((item) => item.type === "product").map((item) => item.id)),
    categoryIds: new Set(state.appliedFilters.filter((item) => item.type === "category").map((item) => item.id)),
    employeeIds: new Set(state.appliedFilters.filter((item) => item.type === "employee").map((item) => item.id)),
  };
}

function buildSearchSuggestions() {
  const query = state.searchQuery.toLowerCase();
  if (!query) {
    return [];
  }
  return currentProcessed().searchEntries.filter((item) => `${item.label} ${item.subtitle}`.toLowerCase().includes(query)).slice(0, 8);
}

function findSuggestionByKey(key) {
  return currentProcessed().searchEntries.find((item) => item.key === key);
}

function isPageAllowed(page) {
  return isPageAllowedForRole(page, state.roleKey);
}

function isPageAllowedForRole(page, roleKey) {
  return (localModel.permissions[roleKey] || []).includes(page);
}

function ensureAllowedPage() {
  if (isPageAllowed(state.currentPage)) {
    return;
  }
  state.currentPage = localModel.permissions[state.roleKey]?.[0] || "dashboard";
}

function loadRecipeDraft(productId) {
  state.recipeDraftProductId = productId;
  state.recipeDraft = localModel.recipes[productId]?.lines?.slice() || [];
}

function toggleHiddenProduct(productId, hide) {
  const next = new Set(localModel.hiddenProducts);
  if (hide) {
    next.add(productId);
  } else {
    next.delete(productId);
  }
  localModel.hiddenProducts = [...next];
  persistLocalModel();
  renderAll();
}

function buildProcessedDataset(dataset) {
  const productCatalog = buildCatalog(dataset.productDaily, "name", (item) => ({ category: item.category || "Other" }));
  const employeeCatalog = buildCatalog(dataset.employeeDaily, "name");
  const categoryCatalog = buildCatalog(dataset.categoryDaily, "name");
  const productIdByName = new Map();
  const employeeIdByName = new Map();
  const categoryIdByName = new Map();
  const productArticleById = {};
  const employeeNumberById = {};

  productCatalog.forEach((item, index) => {
    item.id = `product:${slugify(item.name)}`;
    item.articleNumber = `A${String(1000 + index).padStart(4, "0")}`;
    productIdByName.set(item.name, item.id);
    productArticleById[item.id] = item.articleNumber;
  });

  employeeCatalog.forEach((item, index) => {
    item.id = `employee:${slugify(item.name)}`;
    item.employeeNumber = `E${String(700 + index).padStart(4, "0")}`;
    employeeIdByName.set(item.name, item.id);
    employeeNumberById[item.id] = item.employeeNumber;
  });

  categoryCatalog.forEach((item) => {
    item.id = `category:${slugify(item.name)}`;
    categoryIdByName.set(item.name, item.id);
  });

  return {
    raw: dataset,
    productCatalog,
    employeeCatalog,
    categoryCatalog,
    productIdByName,
    employeeIdByName,
    categoryIdByName,
    productArticleById,
    employeeNumberById,
    dailyByDate: new Map(dataset.daily.map((item) => [item.date, item])),
    searchEntries: buildSearchIndex(productCatalog, categoryCatalog, employeeCatalog),
  };
}

function buildCatalog(rows, key, extra) {
  const map = new Map();
  rows.forEach((row) => {
    const name = row[key] || "Unassigned";
    if (!map.has(name)) {
      map.set(name, { name, ...(extra ? extra(row) : {}) });
    }
  });
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function buildSearchIndex(productCatalog, categoryCatalog, employeeCatalog) {
  const entries = [];
  productCatalog.forEach((item) =>
    entries.push({
      key: `product-${item.id}`,
      label: item.name,
      subtitle: `${item.articleNumber} | ${item.category}`,
      filter: { type: "product", id: item.id, label: item.name },
    }),
  );
  categoryCatalog.forEach((item) =>
    entries.push({
      key: `category-${item.id}`,
      label: item.name,
      subtitle: "Product group",
      filter: { type: "category", id: item.id, label: item.name },
    }),
  );
  employeeCatalog.forEach((item) =>
    entries.push({
      key: `employee-${item.id}`,
      label: item.name,
      subtitle: item.employeeNumber,
      filter: { type: "employee", id: item.id, label: item.name },
    }),
  );
  return entries;
}

function loadLocalModel() {
  const seed = buildSeedLocalModel();
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    if (!raw) {
      window.localStorage.setItem(LOCAL_KEY, JSON.stringify(seed));
      return seed;
    }
    const parsed = JSON.parse(raw);
      const merged = {
        ...seed,
        ...parsed,
        dashboardNotes: { ...(seed.dashboardNotes || {}), ...(parsed.dashboardNotes || {}) },
        dayNotes: { ...seed.dayNotes, ...(parsed.dayNotes || {}) },
        employeeProfiles: mergeEmployeeProfiles(seed.employeeProfiles, parsed.employeeProfiles || {}),
        ingredients: mergeIngredients(seed.ingredients, parsed.ingredients || []),
        recipes: { ...seed.recipes, ...(parsed.recipes || {}) },
        expenses: parsed.expenses?.length ? parsed.expenses : seed.expenses,
        monthlyPnl: parsed.monthlyPnl || seed.monthlyPnl,
      hiddenProducts: parsed.hiddenProducts || [],
      permissions: { ...seed.permissions, ...(parsed.permissions || {}) },
    };
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(merged));
    return merged;
  } catch (error) {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(seed));
    return seed;
  }
}

function migratePermissions() {
  const newPages = ["auslastung"];
  ["owner", "manager"].forEach((role) => {
    const current = new Set(localModel.permissions[role] || []);
    newPages.forEach((page) => current.add(page));
    localModel.permissions[role] = [...current];
  });
}

function persistLocalModel() {
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(localModel));
  syncDynamicSelects();
}

function buildSeedLocalModel() {
  const processed = processedDatasets.live;
  const employeeProfiles = {};
  processed.employeeCatalog.forEach((item, index) => {
    const group = seededGroup(index, item.name);
    employeeProfiles[item.id] = {
      id: item.id,
      group,
      note: "",
      wageHistory: [{ effectiveDate: datasets.live.meta.dataMinDate, wageCents: Math.round(defaultWageByGroup(group) * 100) }],
    };
  });
  const ingredients = seedIngredients();
  return {
    version: 3,
    dashboardNotes: {},
    dayNotes: {},
    employeeProfiles,
    ingredients,
    recipes: seedRecipes(processed, ingredients),
    expenses: seedExpenses(),
    monthlyPnl: seedMonthlyPnl(processed),
    hiddenProducts: [],
    permissions: {
      owner: PAGE_ORDER.slice(),
      manager: PAGE_ORDER.slice(),
      supervisor: ["dashboard", "explorer", "heatmap", "trends", "matrix", "transactions", "employees"],
      staff: ["dashboard", "heatmap"],
    },
  };
}

function mergeEmployeeProfiles(seedProfiles, savedProfiles) {
  const merged = { ...seedProfiles };
  Object.keys(savedProfiles).forEach((key) => {
    merged[key] = {
      ...merged[key],
      ...savedProfiles[key],
      wageHistory: normalizeHistory(savedProfiles[key].wageHistory || merged[key].wageHistory || [], "wageCents"),
    };
  });
  return merged;
}

function mergeIngredients(seedIngredientsList, savedList) {
  const byId = new Map(seedIngredientsList.map((item) => [item.id, item]));
  savedList.forEach((item) => {
    byId.set(item.id, {
      ...byId.get(item.id),
      ...item,
      priceHistory: normalizeHistory(item.priceHistory || byId.get(item.id)?.priceHistory || [], "priceCents"),
    });
  });
  return [...byId.values()];
}

function seedIngredients() {
  const start = datasets.live.meta.dataMinDate;
  return [
    seedIngredient("beef-patty", "Beef Patty", "Meat", "piece", 182, start),
    seedIngredient("chicken-patty", "Chicken Patty", "Meat", "piece", 168, start),
    seedIngredient("veggie-patty", "Veggie Patty", "Meat", "piece", 154, start),
    seedIngredient("burger-bun", "Burger Bun", "Bakery", "piece", 42, start),
    seedIngredient("wrap", "Wrap", "Bakery", "piece", 36, start),
    seedIngredient("toast-bread", "Toast Bread", "Bakery", "piece", 12, start),
    seedIngredient("cheddar", "Cheddar Slice", "Dairy", "piece", 24, start),
    seedIngredient("bacon", "Bacon Strip", "Meat", "piece", 18, start),
    seedIngredient("lettuce", "Lettuce", "Vegetables", "piece", 10, start),
    seedIngredient("tomato-large", "Tomato Large", "Vegetables", "piece", 54, start),
    seedIngredient("onion", "Onion", "Vegetables", "piece", 16, start),
    seedIngredient("pickle", "Pickles", "Vegetables", "piece", 8, start),
    seedIngredient("fries", "Fries Portion", "Sides", "portion", 72, start),
    seedIngredient("sweet-potato", "Sweet Potato Portion", "Sides", "portion", 94, start),
    seedIngredient("milkshake-base", "Shake Base", "Desserts", "ml", 11, start),
    seedIngredient("ice-cream", "Ice Cream Base", "Desserts", "g", 2, start),
    seedIngredient("syrup-cola", "Cola Syrup", "Beverages", "ml", 3, start),
    seedIngredient("coffee-beans", "Coffee Beans", "Beverages", "g", 4, start),
    seedIngredient("milk", "Milk", "Dairy", "ml", 1, start),
    seedIngredient("egg", "Egg", "Breakfast", "piece", 28, start),
    seedIngredient("avocado", "Avocado", "Vegetables", "piece", 88, start),
    seedIngredient("pulled-pork", "Pulled Pork", "Meat", "g", 3, start),
    seedIngredient("sauce", "House Sauce", "Sauces", "ml", 2, start),
    seedIngredient("ribs", "BBQ Ribs", "Meat", "g", 4, start),
    seedIngredient("sundae-topping", "Sundae Topping", "Desserts", "ml", 5, start),
  ];
}

function seedIngredient(id, name, group, unit, cents, effectiveDate) {
  return {
    id: `ingredient:${id}`,
    name,
    group,
    unit,
    priceHistory: [{ effectiveDate, priceCents: cents }],
  };
}

function seedRecipes(processed, ingredients) {
  const map = Object.fromEntries(ingredients.map((item) => [item.name, item.id]));
  const recipes = {};
  aggregateTopProducts(processed.raw.productDaily)
    .slice(0, 80)
    .forEach((item) => {
      const productId = processed.productIdByName.get(item.name);
      const product = processed.productCatalog.find((row) => row.id === productId);
      if (!product) {
        return;
      }
      recipes[productId] = {
        productId,
        updatedAt: datasets.live.meta.dataMaxDate,
        lines: recipeLinesForProduct(product, map),
      };
    });
  return recipes;
}

function seedExpenses() {
  const date = datasets.live.meta.dataMinDate;
  return [
    { id: "exp-rent", label: "Rent", category: "Operations", amountCents: 480000, frequency: "monthly", depreciationMonths: 0, createdDate: date },
    { id: "exp-electricity", label: "Electricity", category: "Utilities", amountCents: 98000, frequency: "monthly", depreciationMonths: 0, createdDate: date },
    { id: "exp-tax", label: "Tax Advisor", category: "External Services", amountCents: 120000, frequency: "annual", depreciationMonths: 0, createdDate: date },
    { id: "exp-maintenance", label: "Maintenance", category: "Maintenance", amountCents: 25000, frequency: "monthly", depreciationMonths: 0, createdDate: date },
    { id: "exp-floor", label: "Floor Renovation", category: "Investments", amountCents: 360000, frequency: "one-time", depreciationMonths: 24, createdDate: date },
  ];
}

function buildActualStaffingRange(processed, start, end) {
  const cacheKey = `${state.datasetKey}|staffing|${start}|${end}`;
  if (runtimeCache.staffingRange.has(cacheKey)) {
    return runtimeCache.staffingRange.get(cacheKey);
  }
  const rows = processed.raw.daily.filter((item) => item.date >= start && item.date <= end).map((item) => buildRosterSnapshot(item.date, item));
  runtimeCache.staffingRange.set(cacheKey, rows);
  return rows;
}

function buildRosterSnapshot(date, baseDay, historicalMode) {
  const totalStaff = Math.max(4, Math.round(baseDay.staff || 8));
  const counts = splitStaffCounts(totalStaff, baseDay, historicalMode);
  const pools = employeePoolsByGroup();
  const employeesByGroup = {};
  let totalHours = 0;
  let totalCostCents = 0;
  GROUP_OPTIONS.forEach((group) => {
    const assigned = selectEmployees(pools[group.key], counts[group.key], hashNumber(`${date}-${group.key}`));
    employeesByGroup[group.key] = assigned.map((employee, index) => {
      const shift = shiftWindow(group.key, date, index, historicalMode);
      const hours = durationHours(shift.startTime, shift.endTime);
      totalHours += hours;
      totalCostCents += Math.round(currentEmployeeWageCents(employee.id, date) * hours);
      return { ...employee, ...shift, hours };
    });
  });
  return { date, counts, employeesByGroup, totalEmployees: counts.kitchen + counts.bar + counts.service + counts.support, totalHours, totalCostCents };
}

function buildRosterHoursByEmployee(start, end) {
  const map = {};
  buildActualStaffingRange(currentProcessed(), start, end).forEach((snapshot) => {
    Object.values(snapshot.employeesByGroup)
      .flat()
      .forEach((employee) => {
        if (!map[employee.id]) {
          map[employee.id] = { hours: 0, costCents: 0 };
        }
        map[employee.id].hours += employee.hours;
        map[employee.id].costCents += Math.round(currentEmployeeWageCents(employee.id, snapshot.date) * employee.hours);
      });
  });
  return map;
}

function currentDataset() {
  return datasets[state.datasetKey];
}

function currentProcessed() {
  return processedDatasets[state.datasetKey];
}

function serializeFilters(filters) {
  return JSON.stringify({
    productIds: [...filters.productIds].sort(),
    employeeIds: [...filters.employeeIds].sort(),
    categoryIds: [...filters.categoryIds].sort(),
  });
}

function buildForecastCardSummary() {
  const end = currentDataset().meta.dataMaxDate;
  const start = toIso(startOfMonth(fromIso(end)));
  const fullEnd = toIso(endOfMonth(fromIso(end)));
  const observed = buildSummaryFromRange(currentProcessed(), buildFilterState(), start, end);
  const observedDays = diffDays(fromIso(start), fromIso(end)) + 1;
  const prevMonthStart = toIso(startOfMonth(addMonths(fromIso(end), -1)));
  const prevMonthObservedEnd = toIso(addDays(fromIso(prevMonthStart), observedDays - 1));
  const prevObserved = buildSummaryFromRange(currentProcessed(), buildFilterState(), prevMonthStart, prevMonthObservedEnd);
  const prevFull = buildSummaryFromRange(currentProcessed(), buildFilterState(), prevMonthStart, toIso(endOfMonth(addMonths(fromIso(end), -1))));
  const factor = prevObserved.grossRevenueCents ? observed.grossRevenueCents / prevObserved.grossRevenueCents : 1;
  return {
    start,
    end,
    fullEnd,
    summary: {
      ...observed,
      grossRevenueCents: Math.round(observed.grossRevenueCents + Math.max(prevFull.grossRevenueCents - prevObserved.grossRevenueCents, 0) * factor),
      netRevenueCents: Math.round(observed.netRevenueCents + Math.max(prevFull.netRevenueCents - prevObserved.netRevenueCents, 0) * factor),
      itemsSold: Math.round(observed.itemsSold + Math.max(prevFull.itemsSold - prevObserved.itemsSold, 0) * factor),
      guests: Math.round(observed.guests + Math.max(prevFull.guests - prevObserved.guests, 0) * factor),
      tables: Math.round(observed.tables + Math.max(prevFull.tables - prevObserved.tables, 0) * factor),
    },
    note: `Forecast driven by month-to-date performance vs previous month (${((factor - 1) * 100).toFixed(1)}%).`,
  };
}

function buildTrendBuckets(processed) {
  const maxDate = fromIso(currentDataset().meta.dataMaxDate);
  if (state.trendGrouping === "last12m") {
    return repeatArray(12, (index) => {
      const month = addMonths(startOfMonth(maxDate), -(11 - index));
      return { key: `m-${toIso(month)}`, start: toIso(startOfMonth(month)), end: toIso(endOfMonth(month)), label: month.toLocaleDateString("en-GB", { month: "long", year: "numeric" }), shortLabel: month.toLocaleDateString("en-GB", { month: "short" }) };
    });
  }
  if (state.trendGrouping === "last13w") {
    const base = startOfWeek(maxDate);
    return repeatArray(13, (index) => {
      const week = addDays(base, -(12 - index) * 7);
      const weekEnd = addDays(week, 6);
      return { key: `w-${toIso(week)}`, start: toIso(week), end: toIso(weekEnd), label: `${shortDate(toIso(week))} - ${shortDate(toIso(weekEnd))}`, shortLabel: `W${weekNumber(week)}` };
    });
  }
  if (state.trendGrouping === "custom") {
    return getDateRange(state.startDate, state.endDate).map((date) => ({ key: `d-${date}`, start: date, end: date, label: formatDate(date), shortLabel: shortDate(date) }));
  }
  return getDateRange(toIso(addDays(maxDate, -29)), toIso(maxDate)).map((date) => ({ key: `d-${date}`, start: date, end: date, label: formatDate(date), shortLabel: shortDate(date) }));
}

function recipeLinesForProduct(product, map) {
  const name = product.name.toLowerCase();
  const category = product.category || "Other";
  if (category === "Burgers") {
    const lines = [
      line(map["Burger Bun"], 1, "piece"),
      line(name.includes("chicken") ? map["Chicken Patty"] : name.includes("veggie") ? map["Veggie Patty"] : map["Beef Patty"], 1, "piece"),
      line(map["Cheddar Slice"], 1, "piece"),
      line(map["Lettuce"], 0.12, "piece"),
      line(map["Tomato Large"], 0.1666666667, "piece"),
      line(map["Onion"], 0.2, "piece"),
      line(map["House Sauce"], 18, "ml"),
    ];
    if (name.includes("bacon")) {
      lines.push(line(map["Bacon Strip"], 2, "piece"));
    }
    if (name.includes("pulled")) {
      lines.push(line(map["Pulled Pork"], 80, "g"));
    }
    return lines;
  }
  if (category === "Sides") {
    return [line(name.includes("sweet") ? map["Sweet Potato Portion"] : map["Fries Portion"], 1, "portion")];
  }
  if (category === "Cold Drinks") {
    return [line(map["Cola Syrup"], 55, "ml")];
  }
  if (category === "Shakes & Desserts") {
    return [line(map["Ice Cream Base"], 180, "g"), line(map["Milk"], 120, "ml"), line(map["Sundae Topping"], 24, "ml")];
  }
  if (category === "Coffee & Hot Drinks") {
    return [line(map["Coffee Beans"], 18, "g"), line(map["Milk"], 40, "ml")];
  }
  if (category === "Wraps & Sandwiches") {
    return [line(map["Wrap"], 1, "piece"), line(name.includes("bacon") ? map["Bacon Strip"] : map["Chicken Patty"], 1, "piece"), line(map["Lettuce"], 0.12, "piece"), line(map["Tomato Large"], 0.16, "piece")];
  }
  if (category === "Breakfast & Brunch") {
    return [line(map["Egg"], 2, "piece"), line(map["Bacon Strip"], 2, "piece"), line(map["Toast Bread"], 2, "piece")];
  }
  if (category === "Mains") {
    return [line(name.includes("ribs") ? map["BBQ Ribs"] : map["Beef Patty"], name.includes("ribs") ? 180 : 1, name.includes("ribs") ? "g" : "piece"), line(map["Fries Portion"], 1, "portion"), line(map["House Sauce"], 24, "ml")];
  }
  return [line(map["House Sauce"], 12, "ml"), line(map["Lettuce"], 0.08, "piece")];
}

function line(ingredientId, quantity, unit) {
  return { id: `line-${ingredientId}-${quantity}-${unit}`, ingredientId, quantity, unit };
}

function aggregateTopProducts(rows) {
  const map = new Map();
  rows.forEach((item) => {
    const current = map.get(item.name) || { name: item.name, revenue: 0 };
    current.revenue += item.lineRevenueCents;
    map.set(item.name, current);
  });
  return [...map.values()].sort((a, b) => b.revenue - a.revenue);
}

function combinedShareForDate(processed, filters, date) {
  let share = 1;
  if (filters.productIds.size || filters.categoryIds.size) {
    share *= productShareForDate(processed, filters, date);
  }
  if (filters.employeeIds.size) {
    share *= employeeShareForDate(processed, filters.employeeIds, date);
  }
  return Math.max(0, Math.min(share, 1));
}

function productShareForDate(processed, filters, date) {
  const rows = processed.raw.productDaily.filter((item) => item.date === date);
  const total = sumBy(rows, (item) => Math.max(item.lineRevenueCents - item.lineRefundsCents, 0));
  const selected = sumBy(rows, (item) => {
    const productId = processed.productIdByName.get(item.name);
    const categoryId = processed.categoryIdByName.get(item.category || "Other");
    if (filters.productIds.size && !filters.productIds.has(productId)) {
      return 0;
    }
    if (filters.categoryIds.size && !filters.categoryIds.has(categoryId)) {
      return 0;
    }
    return Math.max(item.lineRevenueCents - item.lineRefundsCents, 0);
  });
  return total ? selected / total : 0;
}

function employeeShareForDate(processed, employeeIds, date) {
  const rows = processed.raw.employeeDaily.filter((item) => item.date === date);
  const total = sumBy(rows, (item) => Math.max(item.lineRevenueCents - item.lineRefundsCents, 0));
  const selected = sumBy(rows, (item) => (employeeIds.has(processed.employeeIdByName.get(item.name)) ? Math.max(item.lineRevenueCents - item.lineRefundsCents, 0) : 0));
  return total ? selected / total : 0;
}

function buildEmployeeShareByDate(processed, employeeIds, start, end) {
  const map = new Map();
  getDateRange(start, end).forEach((date) => map.set(date, employeeIds.size ? employeeShareForDate(processed, employeeIds, date) : 1));
  return map;
}

function buildProductShareByDate(processed, filters, start, end) {
  const map = new Map();
  getDateRange(start, end).forEach((date) => map.set(date, filters.productIds.size || filters.categoryIds.size ? productShareForDate(processed, filters, date) : 1));
  return map;
}

function estimateRowFoodCost(row, productId, date) {
  const recipeCost = calculateRecipeCostCents(productId, date);
  if (recipeCost > 0) {
    return recipeCost * row.units;
  }
  return Math.round((row.lineRevenueCents / VAT_RATE) * (CATEGORY_COST_RATES[row.category] ?? CATEGORY_COST_RATES.Other));
}

function calculateRecipeCostCents(productId, date, draftLines) {
  const recipe = draftLines ? { lines: draftLines } : localModel.recipes[productId];
  if (!recipe || !recipe.lines.length) {
    return 0;
  }
  return Math.round(sumBy(recipe.lines, (item) => lineCostCents(item, date)));
}

function lineCostCents(lineItem, date) {
  const ingredient = localModel.ingredients.find((item) => item.id === lineItem.ingredientId);
  if (!ingredient) {
    return 0;
  }
  return Math.round(currentIngredientPriceCents(ingredient, date) * convertUnitQuantity(lineItem.quantity, lineItem.unit, ingredient.unit));
}

function convertUnitQuantity(quantity, fromUnit, toUnit) {
  const factors = { kg: 1000, g: 1, l: 1000, ml: 1, cl: 10, piece: 1, portion: 1 };
  const weight = ["kg", "g"];
  const volume = ["l", "ml", "cl"];
  if (fromUnit === toUnit) {
    return quantity;
  }
  if (weight.includes(fromUnit) && weight.includes(toUnit)) {
    return (quantity * factors[fromUnit]) / factors[toUnit];
  }
  if (volume.includes(fromUnit) && volume.includes(toUnit)) {
    return (quantity * factors[fromUnit]) / factors[toUnit];
  }
  return quantity;
}

function currentIngredientPriceCents(ingredient, date) {
  return currentValueFromHistory(ingredient.priceHistory, date, "priceCents");
}

function currentEmployeeWageCents(employeeId, date) {
  return currentValueFromHistory(localModel.employeeProfiles[employeeId]?.wageHistory || [], date, "wageCents");
}

function currentValueFromHistory(history, date, key) {
  if (!history.length) {
    return 0;
  }
  const sorted = history.slice().sort((a, b) => a.effectiveDate.localeCompare(b.effectiveDate));
  let current = sorted[0][key] || 0;
  sorted.forEach((item) => {
    if (item.effectiveDate <= date) {
      current = item[key] || current;
    }
  });
  return current;
}

function latestHistoryDate(history) {
  if (!history?.length) {
    return state.endDate;
  }
  return history
    .slice()
    .sort((a, b) => b.effectiveDate.localeCompare(a.effectiveDate))[0]
    .effectiveDate;
}

function dailyDistributedExpenseCost() {
  return sumBy(localModel.expenses, (item) => dailyExpenseCost(item));
}

function dailyExpenseCost(item) {
  if (item.frequency === "daily") {
    return item.amountCents;
  }
  if (item.frequency === "monthly") {
    return (item.amountCents * 12) / 365;
  }
  if (item.frequency === "annual") {
    return item.amountCents / 365;
  }
  if (item.frequency === "one-time" && item.depreciationMonths > 0) {
    return item.amountCents / (item.depreciationMonths * 30.4);
  }
  return 0;
}

function buildPlanningDay(processed, date, historicalMode) {
  const base = processed.dailyByDate.get(date) || simulatedWeekdayBase(processed, date, historicalMode);
  const roster = buildRosterSnapshot(date, base, historicalMode);
  const grossRevenueCents = Math.round((base.receiptRevenueCents || 0) - (base.receiptRefundsCents || 0));
  const netRevenueCents = Math.round(grossRevenueCents / VAT_RATE);
  return {
    date,
    guests: deriveGuests(base),
    tables: Math.round(base.tables || 0),
    grossRevenueCents,
    netRevenueCents,
    staffCostPercent: netRevenueCents ? roster.totalCostCents / netRevenueCents : 0,
    counts: roster.counts,
    roster,
    note: localModel.dayNotes[date] || "",
  };
}

function simulatedWeekdayBase(processed, date, historicalMode) {
  const weekday = fromIso(date).getDay();
  const matches = processed.raw.daily.filter((item) => fromIso(item.date).getDay() === weekday);
  const avg = averageDailyEntries(matches);
  return scaleNumericRecord(avg, historicalMode ? 0.93 : 1.04);
}

function averageDailyEntries(rows) {
  if (!rows.length) {
    return { receiptRevenueCents: 1100000, receiptRefundsCents: 4000, orderCount: 250, itemsSold: 1500, canceledItems: 4, tables: 58, staff: 9 };
  }
  const avg = {};
  rows.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        avg[key] = (avg[key] || 0) + item[key];
      }
    });
  });
  Object.keys(avg).forEach((key) => {
    avg[key] /= rows.length;
  });
  return avg;
}

function employeePoolsByGroup() {
  const pools = { kitchen: [], bar: [], service: [], support: [] };
  currentProcessed().employeeCatalog.forEach((item) => {
    const group = localModel.employeeProfiles[item.id]?.group || "service";
    pools[group].push({ id: item.id, name: item.name, employeeNumber: item.employeeNumber });
  });
  return pools;
}

function splitStaffCounts(totalStaff, baseDay, historicalMode) {
  const support = Math.max(0, historicalMode ? 0 : Math.round(totalStaff * (isWeekend(baseDay.date || todayIso()) ? 0.1 : 0.06)));
  let kitchen = Math.max(2, Math.round(totalStaff * 0.28));
  let bar = Math.max(1, Math.round(totalStaff * 0.16));
  let service = Math.max(2, totalStaff - kitchen - bar - support);
  while (kitchen + bar + service + support > totalStaff) {
    if (service > 2) {
      service -= 1;
    } else if (kitchen > 2) {
      kitchen -= 1;
    } else {
      bar -= 1;
    }
  }
  while (kitchen + bar + service + support < totalStaff) {
    service += 1;
  }
  return { kitchen, bar, service, support };
}

function shiftWindow(groupKey, date, index, historicalMode) {
  const sets = {
    kitchen: ["08:35|16:55", "09:10|17:20", "10:00|18:20"],
    bar: ["10:35|22:15", "11:00|22:30", "12:00|23:00"],
    service: ["10:45|21:45", "11:15|22:00", "12:00|22:30"],
    support: ["17:00|22:00", "18:00|22:30", "12:00|17:00"],
  };
  const value = sets[groupKey][(hashNumber(`${date}-${groupKey}-${index}`) + (historicalMode ? 1 : 0)) % sets[groupKey].length];
  const [startTime, endTime] = value.split("|");
  return { startTime, endTime };
}

function employeeHoursInRange(employeeId, start, end) {
  return buildRosterHoursByEmployee(start, end)[employeeId]?.hours || 0;
}

function seededGroup(index, name) {
  const lower = name.toLowerCase();
  if (lower.includes("drive")) {
    return "service";
  }
  return ["service", "service", "kitchen", "bar", "support"][index % 5];
}

function defaultWageByGroup(group) {
  if (group === "kitchen") return 16.5;
  if (group === "bar") return 15.2;
  if (group === "support") return 13.4;
  return 14.6;
}

function ingredientVarianceMultiplier(id, start, end) {
  return 0.94 + ((hashNumber(`${id}-${start}-${end}`) % 9) * 0.015);
}

function rosterCountLabel(counts) {
  return `${counts.kitchen}/${counts.bar}/${counts.service}${counts.support ? `+${counts.support}` : ""}`;
}

function heatmapColumnStyle(count) {
  return `grid-template-columns: 82px repeat(${Math.max(count, 1)}, minmax(90px, 1fr));`;
}

function heatColor(value, rows, metric) {
  if (metric === "staffCostPercent") {
    if (value >= 0.19 && value <= 0.21) return "rgba(255,255,255,0.06)";
    if (value > 0.21 && value <= 0.25) return "rgba(220,111,111,0.25)";
    if (value > 0.25 && value <= 0.28) return "rgba(220,92,92,0.4)";
    if (value > 0.28) return "rgba(180,58,58,0.65)";
    if (value >= 0.16) return "rgba(131,190,140,0.22)";
    if (value >= 0.13) return "rgba(101,184,122,0.36)";
    return "rgba(74,147,89,0.55)";
  }
  const list = rows.map((row) => (metric === "guests" ? row.guests : row.tables));
  const avg = list.length ? sumBy(list, (item) => item) / list.length : 0;
  const delta = avg ? (value - avg) / avg : 0;
  if (Math.abs(delta) <= 0.05) return "rgba(255,255,255,0.06)";
  return delta > 0 ? `rgba(74,147,89,${Math.min(0.2 + delta, 0.6)})` : `rgba(180,58,58,${Math.min(0.2 + Math.abs(delta), 0.6)})`;
}

function heatClassForValue(value) {
  if (value >= 0.19 && value <= 0.21) return "";
  return value > 0.21 ? "value-negative" : "value-positive";
}

function quadrantColor(label) {
  if (label === "Renner") return "#8ed0a1";
  if (label === "Push / Price Review") return "#f0b45f";
  if (label === "Margin Push") return "#90c6eb";
  return "#ff8f8f";
}

function buildTransactionRow(date, label, comment, kind, employee, amountCents, index) {
  return { date, label, comment, kind, employeeName: employee?.name || "", amountCents, invoice: `INV-${date.replace(/-/g, "")}-${String(index + 1).padStart(2, "0")}` };
}

function metricValueFromSummary(summary, key) {
  if (key === "grossRevenueCents" || key === "netRevenueCents") {
    return displayRevenueValue(summary);
  }
  return summary[key] ?? 0;
}

function formatDisplayRevenue(item) {
  return formatCurrency(state.revenueMode === "gross" ? item.grossRevenueCents : item.netRevenueCents);
}

function formatMetricByKey(value, key) {
  if (key === "grossRevenueCents" || key === "netRevenueCents") return formatCurrency(Math.round(value));
  if (key.includes("Percent")) return formatPercent(value);
  if (key.includes("Minutes")) return formatDurationMinutes(value);
  if (key.includes("Hours")) return `${decimalFormatter.format(value || 0)} h`;
  if (key.includes("Revenue") || key.includes("Margin") || key.includes("Value") || key.includes("Cost") || key.includes("Cents")) return formatCurrency(Math.round(value));
  if (key.includes("averageStaffPerDay") || key.includes("averageGuestsPerTable") || key.includes("averageCancellationsPerDay")) return decimalFormatter.format(value || 0);
  return numberFormatter.format(Math.round(value));
}

function displayRevenueValue(summary) {
  return state.revenueMode === "gross" ? summary?.grossRevenueCents || 0 : summary?.netRevenueCents || 0;
}

function formatDurationMinutes(value) {
  return `${decimalFormatter.format(value || 0)} min`;
}

function formatCurrency(value) {
  return currencyFormatter.format((value || 0) / 100);
}

function formatPercent(value) {
  return `${((value || 0) * 100).toFixed(1)}%`;
}

function deriveGuests(item) {
  return Math.max(Math.round((item.orderCount || 0) * 1.45), Math.round((item.tables || 0) * 2.2));
}

function simulateHistoricalSummary(summary, mode) {
  const factor = mode === "lastYear" ? 0.93 : 0.97;
  const clone = { ...summary };
  Object.keys(clone).forEach((key) => {
    if (typeof clone[key] === "number") {
      clone[key] = key.includes("Percent") ? clone[key] * factor : Math.round(clone[key] * factor);
    }
  });
  return clone;
}

function attachDatasetLabel(dataset, label) {
  return { ...dataset, meta: { ...dataset.meta, label } };
}

function buildScenarioDataset(source) {
  const clone = JSON.parse(JSON.stringify(source));
  clone.meta.label = "Mock Demo";
  clone.daily = clone.daily.map((item) => ({ ...item, receiptRevenueCents: Math.round(item.receiptRevenueCents * (isWeekend(item.date) ? 1.14 : 1.08)), lineRevenueCents: Math.round(item.lineRevenueCents * 1.09), orderCount: Math.round(item.orderCount * 1.1), itemsSold: roundValue(item.itemsSold * 1.12), takeawayRevenueCents: Math.round(item.takeawayRevenueCents * 1.2), tables: Math.round(item.tables * 1.05), staff: Math.max(item.staff, Math.round(item.staff * 1.08)) }));
  clone.hourly = clone.hourly.map((item) => ({ ...item, lineRevenueCents: Math.round(item.lineRevenueCents * (item.hour >= 18 && item.hour <= 21 ? 1.18 : 1.05)), itemsSold: roundValue(item.itemsSold * 1.1), tables: Math.round(item.tables * 1.06) }));
  clone.productDaily = clone.productDaily.map((item) => ({ ...item, lineRevenueCents: Math.round(item.lineRevenueCents * ((item.category || "").includes("Burgers") ? 1.18 : 1.09)), units: roundValue(item.units * 1.08), orders: Math.round(item.orders * 1.05) }));
  clone.categoryDaily = clone.categoryDaily.map((item) => ({ ...item, lineRevenueCents: Math.round(item.lineRevenueCents * 1.1), units: roundValue(item.units * 1.07) }));
  clone.employeeDaily = clone.employeeDaily.map((item) => ({ ...item, lineRevenueCents: Math.round(item.lineRevenueCents * (item.name === "Drive" ? 1.16 : 1.08)), units: roundValue(item.units * 1.06), orders: Math.round(item.orders * 1.04) }));
  return clone;
}

function fillSelect(select, options) {
  if (!select) {
    return;
  }
  const current = select.value;
  select.innerHTML = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  if (options.some(([value]) => value === current)) {
    select.value = current;
  }
}

function applyRangePreset(preset) {
  const maxDate = fromIso(currentDataset().meta.dataMaxDate);
  state.rangePreset = preset;
  if (preset === "custom") {
    state.filtersOpen = true;
    state.startDate = state.startDate || currentDataset().meta.dataMinDate;
    state.endDate = state.endDate || currentDataset().meta.dataMaxDate;
    return;
  }
  if (preset === "today") {
    state.startDate = currentDataset().meta.dataMaxDate;
    state.endDate = currentDataset().meta.dataMaxDate;
  } else if (preset === "yesterday") {
    state.startDate = toIso(addDays(maxDate, -1));
    state.endDate = state.startDate;
  } else if (preset === "currentMonth" || preset === "currentMonthForecast") {
    state.startDate = toIso(startOfMonth(maxDate));
    state.endDate = currentDataset().meta.dataMaxDate;
  } else if (preset === "lastMonth") {
    const month = addMonths(maxDate, -1);
    state.startDate = toIso(startOfMonth(month));
    state.endDate = toIso(endOfMonth(month));
  } else if (preset === "last7") {
    state.startDate = toIso(addDays(maxDate, -6));
    state.endDate = currentDataset().meta.dataMaxDate;
  } else if (preset === "last14") {
    state.startDate = toIso(addDays(maxDate, -13));
    state.endDate = currentDataset().meta.dataMaxDate;
  } else if (preset === "last30") {
    state.startDate = toIso(addDays(maxDate, -29));
    state.endDate = currentDataset().meta.dataMaxDate;
  } else if (preset === "thisWeek") {
    state.startDate = toIso(startOfWeek(maxDate));
    state.endDate = currentDataset().meta.dataMaxDate;
  } else if (preset === "lastWeek") {
    const end = addDays(startOfWeek(maxDate), -1);
    state.startDate = toIso(addDays(end, -6));
    state.endDate = toIso(end);
  } else if (preset === "twoWeeksAgo") {
    const end = addDays(startOfWeek(maxDate), -8);
    state.startDate = toIso(addDays(end, -6));
    state.endDate = toIso(end);
  } else if (preset === "threeWeeksAgo") {
    const end = addDays(startOfWeek(maxDate), -15);
    state.startDate = toIso(addDays(end, -6));
    state.endDate = toIso(end);
  } else if (preset === "thisQuarter") {
    state.startDate = toIso(startOfQuarter(maxDate));
    state.endDate = currentDataset().meta.dataMaxDate;
  } else if (preset === "lastQuarter") {
    const quarter = addMonths(startOfQuarter(maxDate), -1);
    state.startDate = toIso(startOfQuarter(quarter));
    state.endDate = toIso(endOfQuarter(quarter));
  } else if (preset === "twoQuartersAgo") {
    const quarter = addMonths(startOfQuarter(maxDate), -4);
    state.startDate = toIso(startOfQuarter(quarter));
    state.endDate = toIso(endOfQuarter(quarter));
  } else if (preset === "threeQuartersAgo") {
    const quarter = addMonths(startOfQuarter(maxDate), -7);
    state.startDate = toIso(startOfQuarter(quarter));
    state.endDate = toIso(endOfQuarter(quarter));
  }
  normalizeDateRange();
}

function normalizeDateRange() {
  if (state.startDate > state.endDate) {
    [state.startDate, state.endDate] = [state.endDate, state.startDate];
  }
}

function aggregateRowsByKey(rows, key) {
  const map = new Map();
  rows.forEach((item) => {
    const rowKey = item[key];
    if (!map.has(rowKey)) {
      const displayName = key === "category" ? rowKey : item.name;
      map.set(rowKey, {
        ...emptyEntityRow(key === "category" ? `category:${slugify(rowKey)}` : item.id, displayName),
        [key]: rowKey,
        articleNumber: item.articleNumber,
        employeeNumber: item.employeeNumber,
        category: key === "category" ? rowKey : item.category,
        group: item.group,
      });
    }
    const bucket = map.get(rowKey);
    bucket.units += item.units || 0;
    bucket.canceledUnits += item.canceledUnits || 0;
    bucket.orders += item.orders || 0;
    bucket.tables += item.tables || 0;
    bucket.grossRevenueCents += item.grossRevenueCents || 0;
    bucket.netRevenueCents += item.netRevenueCents || 0;
    bucket.foodCostCents += item.foodCostCents || 0;
    bucket.staffCostCents += item.staffCostCents || 0;
    bucket.customCostCents += item.customCostCents || 0;
    bucket.marginCents += item.marginCents || 0;
  });
  return [...map.values()];
}

function sortEntityRows(rows, key) {
  return rows.slice().sort((a, b) => (b[key] || 0) - (a[key] || 0));
}

function emptyEntityRow(id, name) {
  return { id, name, units: 0, canceledUnits: 0, orders: 0, tables: 0, grossRevenueCents: 0, netRevenueCents: 0, foodCostCents: 0, staffCostCents: 0, customCostCents: 0, marginCents: 0 };
}

function scaleNumericRecord(item, factor) {
  const next = {};
  Object.keys(item).forEach((key) => {
    next[key] = typeof item[key] === "number" ? roundNumeric(item[key] * factor) : item[key];
  });
  return next;
}

function normalizeHistory(history, valueKey) {
  const map = new Map();
  history.forEach((item) => {
    if (item.effectiveDate) {
      map.set(item.effectiveDate, { effectiveDate: item.effectiveDate, [valueKey]: item[valueKey] });
    }
  });
  return [...map.values()].sort((a, b) => a.effectiveDate.localeCompare(b.effectiveDate));
}

function dedupeFilters(filters) {
  const map = new Map();
  filters.forEach((item) => map.set(filterKey(item), item));
  return [...map.values()];
}

function filterKey(filter) {
  return `${filter.type}:${filter.id}`;
}

function resolveHeatmapDates(processed) {
  if (state.rangePreset === "custom") {
    return getDateRange(state.startDate, state.endDate);
  }
  const start = startOfWeek(addDays(fromIso(processed.raw.meta.dataMaxDate), 2));
  return repeatArray(7, (index) => toIso(addDays(start, index)));
}

function getDateRange(start, end) {
  const dates = [];
  let cursor = fromIso(start);
  const finish = fromIso(end);
  while (cursor <= finish) {
    dates.push(toIso(cursor));
    cursor = addDays(cursor, 1);
  }
  return dates;
}

function repeat(times, callback) {
  for (let index = 0; index < times; index += 1) {
    callback(index);
  }
}

function repeatArray(times, callback) {
  return Array.from({ length: times }, (_, index) => callback(index));
}

function selectEmployees(pool, count, seed) {
  if (!pool.length || count <= 0) {
    return [];
  }
  const offset = seed % pool.length;
  return pool.slice(offset).concat(pool.slice(0, offset)).slice(0, count);
}

function sumBy(items, accessor) {
  return items.reduce((total, item) => total + accessor(item), 0);
}

function groupBy(items, accessor) {
  return items.reduce((acc, item) => {
    const key = accessor(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
}

function roundNumeric(value) {
  return Number.isInteger(value) ? value : Math.round(value * 10) / 10;
}

function roundValue(value) {
  return Math.round(value * 10) / 10;
}

function formatDate(iso) {
  return fromIso(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function shortDate(iso) {
  return fromIso(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function weekdayLabel(iso) {
  return fromIso(iso).toLocaleDateString("en-GB", { weekday: "short" });
}

function formatRange(start, end) {
  return start === end ? formatDate(start) : `${shortDate(start)} - ${shortDate(end)}`;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function startOfQuarter(date) {
  return new Date(date.getFullYear(), date.getMonth() - (date.getMonth() % 3), 1);
}

function endOfQuarter(date) {
  return new Date(startOfQuarter(addMonths(date, 3)).getTime() - 86400000);
}

function startOfWeek(date) {
  const next = new Date(date);
  const weekday = (next.getDay() + 6) % 7;
  next.setDate(next.getDate() - weekday);
  next.setHours(0, 0, 0, 0);
  return next;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date, amount) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + amount);
  return next;
}

function fromIso(iso) {
  return new Date(`${iso}T00:00:00`);
}

function toIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function diffDays(start, end) {
  return Math.round((end.getTime() - start.getTime()) / 86400000);
}

function durationHours(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  return Math.max(endHour + endMinute / 60 - (startHour + startMinute / 60), 0);
}

function todayIso() {
  return toIso(new Date());
}

function isWeekend(iso) {
  const day = fromIso(iso).getDay();
  return day === 0 || day === 6;
}

function weekNumber(date) {
  const next = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = next.getUTCDay() || 7;
  next.setUTCDate(next.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(next.getUTCFullYear(), 0, 1));
  return Math.ceil((((next - yearStart) / 86400000) + 1) / 7);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function hashNumber(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) % 2147483647;
  }
  return Math.abs(hash);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function trimLabel(value, limit) {
  return value.length > limit ? `${value.slice(0, limit - 1)}...` : value;
}
