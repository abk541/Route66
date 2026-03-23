# Restaurant Performance Studio

This is a self-contained web app demo built from the restaurant CSV export and your visual reference.

## Run it

- Double-click `C:\Users\hp\Desktop\Dev\run_demo.bat`
- Or open `C:\Users\hp\Desktop\Dev\index.html` directly in the browser

## GitHub Pages

- The publishable site now lives at the repository root
- `index.html` is the GitHub Pages entry file
- Static assets are referenced with relative paths, so the site works on the default branch-root GitHub Pages setup
- `.nojekyll` is included so the repo can be served as a plain static site without Jekyll processing

## What is in the demo

- Top horizontal navigation instead of the old left sidebar
- Real CSV-derived dataset already bundled into the site
- Built-in `CSV Data` and `Mock Demo` toggle for presentations
- Working product, category, team, heatmap, and trend views
- Search, sort, date filters, quick date chips, and section navigation

## Main files

- App entry: `C:\Users\hp\Desktop\Dev\index.html`
- App logic: `C:\Users\hp\Desktop\Dev\app.js`
- Styling: `C:\Users\hp\Desktop\Dev\styles.css`
- Bundled live data: `C:\Users\hp\Desktop\Dev\data\live-data.js`
- Reference files: `C:\Users\hp\Desktop\Dev\reference\`

## Notes

- No Python is required to run the demo
- The mock mode is generated inside the app from the same restaurant structure so you can switch scenarios live in front of the client
- The provided `Restaurant Performance.pbix` did not match the restaurant dataset, so the demo is based on the CSV data and the design reference
