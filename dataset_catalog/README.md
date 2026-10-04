# Semiconductor Dataset Catalog

A catalog of 64 public semiconductor datasets, grouped into 12 categories. A dataset can belong to more than one category and subcategory.

Author: Jayant Som.

There is no build step and no package install. The page is plain HTML, CSS, and JavaScript.

## How to run

Open `index.html` in a browser.

From this folder in PowerShell:

```powershell
Start-Process .\index.html
```

Or double-click `index.html` in File Explorer.

The scripts are classic script tags, so the page works when opened from disk. A local server is optional. From this folder, if Python is installed:

```powershell
python -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

## Folder structure

```
index.html              page
css/tokens.css          color, type, and spacing
css/app.css             layout
scripts/catalog.js      categories, subcategories, and the 64 dataset records
scripts/app.js          page behavior
```

Dataset records live only in `scripts/catalog.js`.

## Catalog numbers

Each dataset has one number, `01` through `64`, from its order in `scripts/catalog.js`. The number does not restart inside a category. The same dataset keeps that number in every category it belongs to.

## Tags

A dataset is stored once. Membership is a list of tags. Each tag is one category id paired with one subcategory id.

```js
{
  id: "wm-811k",
  code: "01",
  title: "WM-811K",
  summary: "About 811K real fab wafer maps, with 172,950 labeled into 9 defect classes.",
  contents: "Longer description shown in the detail panel.",
  use: "Defect pattern classification and imbalanced learning.",
  reality: "Real",
  access: "Free, Kaggle",
  url: "https://www.kaggle.com/datasets/qingyi/wm811k-wafer-map",
  tags: [
    ["wafer-maps", "defect-patterns"],
    ["yield-analytics", "wafer-yield"],
    ["computer-vision", "wafer-map-vision"]
  ]
}
```

`url` is optional. The record numbered `01` is listed under each of its tags.

## Categories

1. **Wafer Maps** — defect pattern classification; mixed and multi-label maps; multimodal and sketch maps; spatial test patterns
2. **Process Engineering** — etch and plasma; deposition; lithography; oxidation and furnace; CMP; process monitoring and flow; packaging materials
3. **Metrology** — virtual metrology; dimensional metrology; film and furnace; packaging characterization; photoluminescence; metrology collections
4. **Inspection and Defect Imaging** — SEM; die and surface images; anomaly-detection images; KLARF defect records; photoluminescence
5. **Electrical Testing** — wafer test; device characterization; memory
6. **Equipment Health** — tool sensors, fault diagnosis, and RUL; AMHS equipment signals
7. **Yield and Analytics** — wafer yield and defect analytics; process-to-yield; backend and fab-warehouse analytics
8. **FDC / APC** — sensor FDC; APC and virtual metrology; anomaly and fault; hypothesis testing
9. **IoT** — AMHS and transport; equipment telemetry; factory data streams
10. **Hypothesis Testing** — sensor deviation hypotheses; designed experiments
11. **Computer Vision** — wafer-map vision; SEM and defect vision; layout and pattern vision
12. **Factory Systems** — MES and production history; AMHS; routing and fab simulation; failure-analysis lab flow; assembly and test

Process Engineering holds the fab unit processes: deposition, etch, lithography, oxidation, CMP, and the related monitoring sets. IoT and Hypothesis Testing are their own categories. A dataset can still carry an FDC / APC hypothesis-testing tag as well.

## How to add a dataset

Append one object to `CATALOG.datasets` in `scripts/catalog.js`.

- `id` — stable slug, unique
- `code` — catalog number, such as `"65"`
- `title` — dataset name
- `summary` — short description
- `contents` — what the dataset contains
- `use` — main use
- `reality` — for example `Real`, `Synthetic`, or `Mixed`
- `access` — where it can be obtained
- `url` — optional canonical page
- `tags` — list of `[categoryId, subcategoryId]` pairs

Use category and subcategory ids that already exist in `CATALOG.categories`. To add a category or subcategory, add it there first, then reference its id from a dataset tag. Reload the page after saving the file.
