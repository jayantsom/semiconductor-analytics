/* Semiconductor dataset catalog.
 *
 * Add a dataset by appending one object to CATALOG.datasets.
 * Fields: id, code, title, summary, contents, use, reality, access, url, tags.
 * url is optional. tags is a list of [categoryId, subcategoryId] pairs.
 * The same code is shown on every card for that dataset.
 */
const CATALOG = {
  categories: [
    {
      id: "wafer-maps",
      name: "Wafer Maps",
      description: "Spatial wafer maps for defect patterns, mixed labels, sketches, and test patterns.",
      subcategories: [
        { id: "defect-patterns", name: "Defect pattern classification" },
        { id: "mixed-maps", name: "Mixed and multi-label maps" },
        { id: "multimodal-maps", name: "Multimodal and sketch maps" },
        { id: "spatial-patterns", name: "Spatial test patterns" }
      ]
    },
    {
      id: "process-engineering",
      name: "Process Engineering",
      description: "Deposition, etch, lithography, oxidation, CMP, and other fab process datasets.",
      subcategories: [
        { id: "etch-plasma", name: "Etch and plasma" },
        { id: "deposition", name: "Deposition" },
        { id: "lithography", name: "Lithography" },
        { id: "oxidation-furnace", name: "Oxidation and furnace" },
        { id: "cmp", name: "CMP" },
        { id: "monitoring-flow", name: "Process monitoring and flow" },
        { id: "packaging-materials", name: "Packaging materials" }
      ]
    },
    {
      id: "metrology",
      name: "Metrology",
      description: "Virtual metrology, film and dimensional measurements, and packaging characterization.",
      subcategories: [
        { id: "virtual-metrology", name: "Virtual metrology" },
        { id: "dimensional", name: "Dimensional metrology" },
        { id: "film-furnace", name: "Film and furnace" },
        { id: "packaging", name: "Packaging characterization" },
        { id: "photoluminescence", name: "Photoluminescence" },
        { id: "collections", name: "Metrology collections" }
      ]
    },
    {
      id: "inspection",
      name: "Inspection and Defect Imaging",
      description: "SEM, die, and wafer images, anomaly sets, KLARF records, and photoluminescence.",
      subcategories: [
        { id: "sem", name: "SEM" },
        { id: "die-surface", name: "Die and surface images" },
        { id: "anomaly", name: "Anomaly-detection images" },
        { id: "klarf", name: "KLARF defect records" },
        { id: "photoluminescence", name: "Photoluminescence" }
      ]
    },
    {
      id: "electrical-testing",
      name: "Electrical Testing",
      description: "Wafer test, device measurements, and memory electrical data.",
      subcategories: [
        { id: "wafer-test", name: "Wafer test" },
        { id: "device", name: "Device characterization" },
        { id: "memory", name: "Memory" }
      ]
    },
    {
      id: "equipment-health",
      name: "Equipment Health",
      description: "Tool sensor traces, fault and remaining-life labels, and AMHS equipment signals.",
      subcategories: [
        { id: "tool-sensors", name: "Tool sensors, fault diagnosis, and RUL" },
        { id: "amhs", name: "AMHS equipment signals" }
      ]
    },
    {
      id: "yield-analytics",
      name: "Yield and Analytics",
      description: "Yield labels, defect analytics, and backend or fab-warehouse outcomes.",
      subcategories: [
        { id: "wafer-yield", name: "Wafer yield and defect analytics" },
        { id: "process-yield", name: "Process-to-yield" },
        { id: "backend-fab", name: "Backend and fab-warehouse analytics" }
      ]
    },
    {
      id: "fdc-apc",
      name: "FDC / APC",
      description: "Fault detection, run-to-run control, and virtual metrology.",
      subcategories: [
        { id: "sensor-fdc", name: "Sensor FDC" },
        { id: "apc-vm", name: "APC and virtual metrology" },
        { id: "anomaly-fault", name: "Anomaly and fault" },
        { id: "hypothesis-testing", name: "Hypothesis testing" }
      ]
    },
    {
      id: "iot",
      name: "IoT",
      description: "Connected equipment, AMHS, and factory data streams from tools, vehicles, and MES.",
      subcategories: [
        { id: "amhs-transport", name: "AMHS and transport" },
        { id: "equipment-telemetry", name: "Equipment telemetry" },
        { id: "factory-streams", name: "Factory data streams" }
      ]
    },
    {
      id: "hypothesis-testing",
      name: "Hypothesis Testing",
      description: "Sensor-deviation tests and designed experiments on process and device measurements.",
      subcategories: [
        { id: "sensor-deviation", name: "Sensor deviation hypotheses" },
        { id: "designed-experiments", name: "Designed experiments" }
      ]
    },
    {
      id: "computer-vision",
      name: "Computer Vision",
      description: "Image and map datasets for classification, detection, segmentation, and retrieval.",
      subcategories: [
        { id: "wafer-map-vision", name: "Wafer-map vision" },
        { id: "sem-defect-vision", name: "SEM and defect vision" },
        { id: "layout-pattern", name: "Layout and pattern vision" }
      ]
    },
    {
      id: "factory-systems",
      name: "Factory Systems",
      description: "MES history, AMHS, routing, fab simulation, and failure-analysis workflow.",
      subcategories: [
        { id: "mes", name: "MES and production history" },
        { id: "amhs", name: "AMHS" },
        { id: "routing-sim", name: "Routing and fab simulation" },
        { id: "fa-lab", name: "Failure-analysis lab flow" },
        { id: "assembly-test", name: "Assembly and test" }
      ]
    }
  ],
  datasets: [
    {
      id: "wm-811k",
      code: "01",
      title: "WM-811K",
      summary: "About 811K real fab wafer maps, with 172,950 labeled into 9 defect classes.",
      contents: "811,457 wafer maps from real fabrication, also released as LSWMD. About 172,950 maps are labeled into 9 defect classes, including spatial defect patterns used for wafer-level yield and defect classification.",
      use: "Defect pattern classification and imbalanced learning.",
      reality: "Real",
      access: "Free, Kaggle",
      url: "https://www.kaggle.com/datasets/qingyi/wm811k-wafer-map",
      tags: [
        ["wafer-maps", "defect-patterns"],
        ["yield-analytics", "wafer-yield"],
        ["computer-vision", "wafer-map-vision"]
      ]
    },
    {
      id: "mixedwm38",
      code: "02",
      title: "MixedWM38",
      summary: "38,015 wafer maps with single-defect and mixed-defect labels.",
      contents: "38,015 maps, often 52 by 52, covering 1 normal class, 8 single-defect classes, and 29 mixed-defect classes. Labels are multi-hot across the base defect types. Real maps are combined with GAN-augmented samples.",
      use: "Multi-label classification and defect co-occurrence analysis.",
      reality: "Mixed",
      access: "Free, Kaggle and GitHub",
      url: "https://github.com/Junliangwangdhu/WaferMap",
      tags: [
        ["wafer-maps", "mixed-maps"],
        ["computer-vision", "wafer-map-vision"]
      ]
    },
    {
      id: "mixedwm38-vqa",
      code: "03",
      title: "MixedWM38-VQA",
      summary: "38,015 wafer-map images with reasoning dialogues and tuple annotations.",
      contents: "38,015 PNGs at 416 by 416, with stepwise reasoning dialogues and tuple-generation annotations built on the MixedWM38 maps.",
      use: "Visual question answering and defect reasoning.",
      reality: "Synthetic annotations on real maps",
      access: "Free, Hugging Face",
      url: "https://huggingface.co/datasets/wafervqaanon/MixedWM38-VQA",
      tags: [
        ["wafer-maps", "multimodal-maps"],
        ["computer-vision", "wafer-map-vision"]
      ]
    },
    {
      id: "sketch-wbm",
      code: "04",
      title: "Sketch-WBM",
      summary: "Paired sketches and wafer maps for 6 single and 29 composite defects.",
      contents: "60 manual pairs plus 29,000 synthetic sketch and wafer-map pairs, covering 6 single defects and 29 composite defects.",
      use: "Sketch-based retrieval and cross-modal representation learning.",
      reality: "Synthetic",
      access: "Free, IEEE DataPort",
      url: "https://ieee-dataport.org/documents/compositional-sketch-retrieval-wafer-defect-diagnosis",
      tags: [
        ["wafer-maps", "multimodal-maps"],
        ["computer-vision", "wafer-map-vision"]
      ]
    },
    {
      id: "secom",
      code: "05",
      title: "UCI SECOM",
      summary: "1,567 production runs with about 590 process sensors and a pass or fail label.",
      contents: "1,567 semiconductor production observations and about 590 process and sensor variables, with 104 fail labels. Useful signals, irrelevant signals, and missing values are mixed together.",
      use: "Feature selection, pass-fail quality prediction, and causal discovery.",
      reality: "Real",
      access: "Free, UCI",
      url: "https://archive.ics.uci.edu/dataset/179/secom",
      tags: [
        ["process-engineering", "monitoring-flow"],
        ["yield-analytics", "process-yield"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "st-awfd-d1",
      code: "06",
      title: "ST-AWFD D1",
      summary: "602K rows across 5,105 materials and 7 process steps, labeled normal or abnormal.",
      contents: "602K rows, 5,105 MaterialIDs, 7 process steps, and 15 normalized features, with an abnormal or normal target. The release follows material genealogy through the process flow.",
      use: "Fault detection and material-genealogy monitoring.",
      reality: "Real",
      access: "Free, GitHub",
      url: "https://github.com/STMicroelectronics/ST-AWFD",
      tags: [
        ["process-engineering", "monitoring-flow"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "st-awfd-d2",
      code: "07",
      title: "ST-AWFD D2",
      summary: "126K rows across 1,157 materials and 2 mandatory process steps.",
      contents: "126K rows, 1,157 MaterialIDs, 2 mandatory process steps, and 20 normalized features, with an abnormal or normal target.",
      use: "Fault detection on a shorter material genealogy.",
      reality: "Real",
      access: "Free, GitHub",
      url: "https://github.com/STMicroelectronics/ST-AWFD",
      tags: [
        ["process-engineering", "monitoring-flow"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "cmu-wafer",
      code: "08",
      title: "CMU Wafer Database",
      summary: "Vacuum-chamber sensor traces from wafer etch, labeled normal or abnormal.",
      contents: "Time-series readings from vacuum-chamber sensors recorded while each wafer is etched, with normal and abnormal labels.",
      use: "Etch process monitoring and fault detection.",
      reality: "Real",
      access: "Free, CMU",
      tags: [
        ["process-engineering", "etch-plasma"],
        ["equipment-health", "tool-sensors"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "ucr-wafer",
      code: "09",
      title: "UCR Wafer",
      summary: "A standard wafer sensor time-series benchmark for classification.",
      contents: "The Wafer series from the UCR time-series archive, a standardized classification benchmark derived from fab sensor traces.",
      use: "Time-series classification benchmarks for equipment and FDC signals.",
      reality: "Real, derived benchmark",
      access: "Free, UCR Archive",
      url: "https://www.timeseriesclassification.com/description.php?Dataset=Wafer",
      tags: [
        ["equipment-health", "tool-sensors"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "phm-2018",
      code: "10",
      title: "PHM 2018 Ion-Mill Etch",
      summary: "Ion-mill etch tool sensors for fault detection and remaining useful life.",
      contents: "Multivariate sensor data from ion-mill etch tools. One release is described as about 82 million rows, 24 sensor columns, 1,236 labeled abnormal points, and remaining-useful-life targets.",
      use: "Fault detection, fault identification, and remaining-useful-life prediction.",
      reality: "Real",
      access: "Free, NASA DASHlink",
      url: "https://c3.ndc.nasa.gov/dashlink/resources/1009/",
      tags: [
        ["process-engineering", "etch-plasma"],
        ["equipment-health", "tool-sensors"],
        ["fdc-apc", "anomaly-fault"]
      ]
    },
    {
      id: "phm-2016-cmp",
      code: "11",
      title: "PHM 2016 CMP",
      summary: "2,829 CMP wafers with process variables for removal-rate prediction.",
      contents: "2,829 wafers with CMP process variables and in-process time series such as pressure, slurry flow, rotation, and usage. The prediction target is material removal rate.",
      use: "Virtual metrology for material removal rate, and anomaly detection.",
      reality: "Real",
      access: "Free, PHM Society",
      url: "https://phmsociety.org/conference/annual-conference-of-the-phm-society/annual-conference-of-the-prognostics-and-health-management-society-2016/phm-data-challenge-4/",
      tags: [
        ["process-engineering", "cmp"],
        ["metrology", "virtual-metrology"],
        ["fdc-apc", "apc-vm"]
      ]
    },
    {
      id: "seagate-soft-sensing",
      code: "12",
      title: "Seagate Soft Sensing",
      summary: "Manufacturing sensors used to predict a physical process output.",
      contents: "Sensor and process data from manufacturing, arranged for soft-sensor models that predict a physical process output.",
      use: "Soft sensing and virtual metrology.",
      reality: "Real",
      access: "Free, GitHub",
      url: "https://github.com/Seagate/softsensing_data",
      tags: [
        ["process-engineering", "monitoring-flow"],
        ["metrology", "virtual-metrology"],
        ["fdc-apc", "apc-vm"],
        ["iot", "equipment-telemetry"]
      ]
    },
    {
      id: "infineon-pvd-regression",
      code: "13",
      title: "Infineon PVD Regression",
      summary: "3,598 PVD runs across 16 chambers, with sensor traces and process outputs.",
      contents: "3,598 procedures, 104 inputs, and 16 chambers on 6 PVD machines. APC sensor traces are paired with process outputs.",
      use: "Multi-output regression from PVD equipment sensors.",
      reality: "Real",
      access: "Free academic",
      tags: [
        ["process-engineering", "deposition"],
        ["metrology", "virtual-metrology"],
        ["equipment-health", "tool-sensors"],
        ["fdc-apc", "apc-vm"]
      ]
    },
    {
      id: "infineon-pvd-alcu-wti",
      code: "14",
      title: "Infineon PVD AlCu and WTi",
      summary: "PVD sensor aggregates mapped to thickness at 17 wafer sites.",
      contents: "Equipment sensor aggregates from AlCu and WTi PVD, paired with film thickness at 17 locations on the wafer.",
      use: "APC and film-thickness virtual metrology.",
      reality: "Real",
      access: "Free, Zenodo",
      url: "https://zenodo.org/records/16881338",
      tags: [
        ["process-engineering", "deposition"],
        ["metrology", "virtual-metrology"],
        ["fdc-apc", "apc-vm"]
      ]
    },
    {
      id: "bosch-plasma-etch",
      code: "15",
      title: "Bosch Plasma Etch",
      summary: "Optical emission, 31 machine parameters, and ex-situ wafer measurements.",
      contents: "About 7.9 GB of synchronized optical emission spectra, 31 machine parameters, and ex-situ wafer measurements from a multi-model Bosch plasma-etch study.",
      use: "Etch depth and uniformity prediction, and plasma-cycle analysis.",
      reality: "Real",
      access: "Free, Zenodo",
      url: "https://zenodo.org/records/17122442",
      tags: [
        ["process-engineering", "etch-plasma"],
        ["metrology", "virtual-metrology"],
        ["fdc-apc", "apc-vm"]
      ]
    },
    {
      id: "oxide-etch-cf4-o2",
      code: "16",
      title: "Oxide Etch CF4/O2",
      summary: "Plasma emission spectra, process conditions, and thickness results.",
      contents: "Optical emission spectra, process conditions, and thickness measurements for oxide etching in a CF4/O2 plasma.",
      use: "Relating plasma emission to etch rate, and virtual metrology.",
      reality: "Real",
      access: "Free",
      tags: [
        ["process-engineering", "etch-plasma"],
        ["metrology", "virtual-metrology"],
        ["fdc-apc", "apc-vm"]
      ]
    },
    {
      id: "eigenvector-metal-etch",
      code: "17",
      title: "Eigenvector Metal Etch",
      summary: "1995 metal-etch machine, optical-emission, and RF-monitor matrices.",
      contents: "MACHINE_Data.mat, OES_DATA.mat, and RFM_DATA.mat from a 1995 metal-etch study, with machine state, optical emission, and RF monitor channels.",
      use: "Historical etch sensor analysis.",
      reality: "Real",
      access: "Free, Eigenvector",
      url: "https://eigenvector.com/resources/data-sets/metal-etch-data-for-fault-detection-evaluation/",
      tags: [
        ["process-engineering", "etch-plasma"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "plasma-diagnostics",
      code: "18",
      title: "Plasma Diagnostics",
      summary: "812,500 image and spectra pairs across argon, oxygen, and fluorocarbon plasmas.",
      contents: "812,500 paired images and spectra for Ar, O2, Ar/O2, CF4/O2, and SF6/O2 plasmas.",
      use: "Virtual metrology and surrogate plasma models.",
      reality: "Real",
      access: "Free, Zenodo",
      tags: [
        ["process-engineering", "etch-plasma"],
        ["metrology", "virtual-metrology"]
      ]
    },
    {
      id: "pecvd-monitoring",
      code: "19",
      title: "In-situ PECVD",
      summary: "Optical emission, mass spectra, tool state, and oxide or nitride thickness.",
      contents: "In-situ PECVD monitoring with optical emission spectroscopy, quadrupole mass spectrometry, equipment state, and film thickness for oxide and nitride stacks.",
      use: "Process diagnosis and plasma-stability monitoring.",
      reality: "Real",
      access: "Free",
      tags: [
        ["process-engineering", "deposition"],
        ["metrology", "virtual-metrology"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "cvd-optimization",
      code: "20",
      title: "CVD Optimization",
      summary: "Synthetic furnace inputs with predicted deposition rate and uniformity.",
      contents: "Inputs such as temperature and gas velocity, paired with XGBoost-predicted outputs for deposition rate and uniformity.",
      use: "Process-window optimization with a surrogate model.",
      reality: "Synthetic",
      access: "Free",
      tags: [
        ["process-engineering", "deposition"]
      ]
    },
    {
      id: "gr-resq",
      code: "21",
      title: "Gr-ResQ",
      summary: "About 300 graphene CVD recipes with Raman spectra and microscopy images.",
      contents: "Crowd-sourced graphene CVD recipes, about 300, with growth conditions, Raman spectra, and microscopy images.",
      use: "Data-driven recipe discovery.",
      reality: "Real, crowd-sourced",
      access: "Free, nanoHUB",
      url: "https://nanohub.org/resources/gresq",
      tags: [
        ["process-engineering", "deposition"]
      ]
    },
    {
      id: "euv-ovl-syn",
      code: "22",
      title: "EUV-OVL-SYN",
      summary: "Synthetic overlay for 4 lots and 50 wafers, with fingerprint, drift, and residual.",
      contents: "4 lots of 50 wafers, 420 sites per wafer, combining a Brink fingerprint, drift, and residual overlay error.",
      use: "Overlay-correction benchmarking.",
      reality: "Synthetic",
      access: "Free",
      tags: [
        ["process-engineering", "lithography"]
      ]
    },
    {
      id: "lithography-overlay-sim",
      code: "23",
      title: "Lithography Overlay Simulation",
      summary: "Four-layer overlay simulation with Zernike aberrations and intra-field variation.",
      contents: "A photolithography overlay simulation across 4 layers, using Zernike aberration terms and intra-field variation.",
      use: "Overlay prediction and diagnostics.",
      reality: "Synthetic",
      access: "Free",
      tags: [
        ["process-engineering", "lithography"]
      ]
    },
    {
      id: "synthetic-d2db",
      code: "24",
      title: "Synthetic D2DB Layout",
      summary: "20,000 layout, lithography, and SEM-like image triples.",
      contents: "20,000 samples at 128 by 128, pairing CAD layout, a lithography image, and a SEM-like noisy image.",
      use: "Image-to-image translation and defect detection.",
      reality: "Synthetic",
      access: "Free, IEEE DataPort",
      tags: [
        ["process-engineering", "lithography"],
        ["inspection", "sem"],
        ["computer-vision", "layout-pattern"]
      ]
    },
    {
      id: "synthetic-lithography-patterns",
      code: "25",
      title: "Synthetic Lithography Patterns",
      summary: "More than 5,000 binary masks with disconnections and deformations.",
      contents: "More than 5,000 binary masks at 2048 by 2048, including disconnections and geometric deformations.",
      use: "Topological image analysis of lithography patterns.",
      reality: "Synthetic",
      access: "Free, IEEE DataPort",
      tags: [
        ["process-engineering", "lithography"],
        ["computer-vision", "layout-pattern"]
      ]
    },
    {
      id: "furnace-dat",
      code: "26",
      title: "FURNACE.DAT",
      summary: "Oxide thickness across 4 furnace zones, 168 observations from AMD.",
      contents: "Film-thickness readings across 4 furnace zones and multiple wafers, 168 observations, published by NIST from an AMD furnace.",
      use: "SPC and within-batch or zone variation.",
      reality: "Real",
      access: "Free, NIST",
      url: "https://www.itl.nist.gov/div898/handbook/datasets/FURNACE.DAT",
      tags: [
        ["process-engineering", "oxidation-furnace"],
        ["metrology", "film-furnace"]
      ]
    },
    {
      id: "thermal-oxidation",
      code: "27",
      title: "Thermal Oxidation",
      summary: "Gate-oxide thickness and its in-plane distribution.",
      contents: "Film thickness and in-plane thickness distribution for a thermal gate oxide used in an organic transistor process.",
      use: "Oxidation process control.",
      reality: "Real",
      access: "Free",
      tags: [
        ["process-engineering", "oxidation-furnace"],
        ["metrology", "film-furnace"]
      ]
    },
    {
      id: "pdevs-fab",
      code: "28",
      title: "PDEVS Fab Simulation",
      summary: "Minute-level MiniFab simulation of diffusion, implant, and lithography.",
      contents: "Synthetic time series from a PDEVS semiconductor fab model. The MiniFab covers diffusion, implant, and lithography at 1-minute granularity.",
      use: "Throughput analysis and cascading failure effects.",
      reality: "Synthetic",
      access: "Free",
      tags: [
        ["process-engineering", "monitoring-flow"],
        ["factory-systems", "routing-sim"]
      ]
    },
    {
      id: "bosch-routing",
      code: "29",
      title: "Bosch Production Routing",
      summary: "A production routing graph with historical fail rates by station and path.",
      contents: "A real production routing graph and historical fail rates for each station and path.",
      use: "Yield-critical station identification and graph-model experiments.",
      reality: "Real",
      access: "Free",
      tags: [
        ["process-engineering", "monitoring-flow"],
        ["yield-analytics", "process-yield"],
        ["factory-systems", "routing-sim"]
      ]
    },
    {
      id: "nist-metis",
      code: "30",
      title: "NIST METIS",
      summary: "Public metrology measurements spanning several advanced metrology problems.",
      contents: "A NIST collection of semiconductor metrology resources and measurement data covering multiple advanced metrology problems.",
      use: "Reference data for semiconductor metrology research.",
      reality: "Research data",
      access: "Public, NIST",
      url: "https://www.nist.gov/metis",
      tags: [
        ["metrology", "collections"]
      ]
    },
    {
      id: "nist-euv-scatterometry",
      code: "31",
      title: "NIST EUV Scatterometry",
      summary: "EUV scattering measurements and models for profile metrology.",
      contents: "EUV scattering measurements and models used to extract dimensions and profile.",
      use: "Dimensional and profile metrology for EUV lithography.",
      reality: "Research data",
      access: "Public",
      tags: [
        ["process-engineering", "lithography"],
        ["metrology", "dimensional"]
      ]
    },
    {
      id: "nist-euv-diffractometry",
      code: "32",
      title: "NIST EUV Diffractometry",
      summary: "EUV diffraction measurements for dimensional characterization.",
      contents: "EUV diffraction measurements collected for dimensional characterization of patterned structures.",
      use: "Dimensional metrology.",
      reality: "Research data",
      access: "Public",
      tags: [
        ["process-engineering", "lithography"],
        ["metrology", "dimensional"]
      ]
    },
    {
      id: "nist-optical-grating",
      code: "33",
      title: "NIST Optical Grating",
      summary: "Optical scattering data and models for critical dimension and profile.",
      contents: "Optical scattering measurements and models for extracting critical dimension and profile from grating targets.",
      use: "Optical scatterometry for CD and profile.",
      reality: "Research data",
      access: "Public",
      tags: [
        ["process-engineering", "lithography"],
        ["metrology", "dimensional"]
      ]
    },
    {
      id: "nist-chips-awacksm",
      code: "34",
      title: "NIST CHIPS-AWACKSM",
      summary: "Packaging cure, rheology, stress, warpage, moisture, and thermal data.",
      contents: "Measurement data for advanced packaging materials: cure kinetics, rheology, mechanical properties, stress, shrinkage, warpage, moisture, and thermal and mechanical characterization.",
      use: "Packaging material selection and process characterization.",
      reality: "Real measurement data",
      access: "Public, downloadable",
      tags: [
        ["process-engineering", "packaging-materials"],
        ["metrology", "packaging"]
      ]
    },
    {
      id: "phototransistor-vm",
      code: "35",
      title: "Phototransistor Virtual Metrology",
      summary: "Recipe parameters and device gain for wafers of 260 and 285.",
      contents: "Wafer-level recipe parameters and measured device gain for two wafer sets, of 260 and 285 wafers.",
      use: "Uncertainty-aware virtual metrology of device gain.",
      reality: "Real",
      access: "Free, GitHub",
      url: "https://github.com/mahshid-amirabgir/phototransistor-virtual-metrology",
      tags: [
        ["metrology", "virtual-metrology"],
        ["electrical-testing", "device"],
        ["fdc-apc", "apc-vm"]
      ]
    },
    {
      id: "carinthia",
      code: "36",
      title: "Carinthia SEM",
      summary: "4,591 production SEM defect images in 6 classes.",
      contents: "4,591 grayscale SEM images from a production semiconductor wafer layer, labeled into 6 imbalanced defect classes.",
      use: "Defect classification and clustering.",
      reality: "Real",
      access: "Free, Zenodo",
      url: "https://zenodo.org/records/10715190",
      tags: [
        ["inspection", "sem"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "carinthia-s",
      code: "37",
      title: "Carinthia-S",
      summary: "Carinthia SEM images with expert pixel masks for defect segmentation.",
      contents: "The Carinthia SEM defect images plus expert-validated pixel-level segmentation masks.",
      use: "Defect segmentation.",
      reality: "Real",
      access: "Free, Zenodo",
      url: "https://zenodo.org/records/16895427",
      tags: [
        ["inspection", "sem"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "swinburne-sem",
      code: "38",
      title: "Swinburne SEM",
      summary: "8,943 SEM images with defects from 0.18 to 200 µm.",
      contents: "8,943 SEM images annotated in PASCAL VOC format. Defect sizes range from 0.18 µm to 200 µm.",
      use: "Object detection and defect-size classification.",
      reality: "Real",
      access: "Free, Figshare",
      tags: [
        ["inspection", "sem"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "semifa-930",
      code: "39",
      title: "SEMIFA-930",
      summary: "930 image-text pairs with failure narratives across 9 defect classes.",
      contents: "930 image and text pairs covering 9 defect classes, with failure narratives attached to the images.",
      use: "Multimodal failure analysis.",
      reality: "Synthetic annotations on real images",
      access: "Free, Hugging Face",
      url: "https://huggingface.co/datasets/ShivamChand/SemiFA-930",
      tags: [
        ["inspection", "sem"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "wafer-surface-defect",
      code: "40",
      title: "Wafer Surface Defect",
      summary: "500 die images with boxes for particle, scratch, stain, and residual.",
      contents: "500 die images at 680 by 680, with YOLO boxes for particle, scratch, stain, and residual defects.",
      use: "Object detection on die images.",
      reality: "Real",
      access: "Free, IEEE DataPort",
      tags: [
        ["inspection", "die-surface"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "semi-ad",
      code: "41",
      title: "Semi-AD",
      summary: "Aligned reference and test pairs for substrates and patterned wafers.",
      contents: "Aligned reference-test image pairs from IC substrates and patterned wafers.",
      use: "Unsupervised anomaly detection.",
      reality: "Real",
      access: "Free, IEEE DataPort",
      tags: [
        ["inspection", "anomaly"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "epid",
      code: "42",
      title: "EPID",
      summary: "446 annotated PCB images of progressive IC and capacitor damage.",
      contents: "446 annotated printed-circuit-board images showing progressive damage on ICs and capacitors.",
      use: "Object detection and temporal damage modeling.",
      reality: "Real",
      access: "Free, Zenodo",
      tags: [
        ["inspection", "die-surface"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "cps2d-ad",
      code: "43",
      title: "CPS2D-AD",
      summary: "Ceramic package-substrate images with category, mask, and box labels.",
      contents: "2D images of ceramic package substrates, annotated with category, mask, and bounding box.",
      use: "Anomaly detection for package substrates.",
      reality: "Real",
      access: "Free, GitHub",
      url: "https://github.com/Bingyang0410/CPS2D-AD",
      tags: [
        ["inspection", "anomaly"],
        ["computer-vision", "sem-defect-vision"]
      ]
    },
    {
      id: "klarf-examples",
      code: "44",
      title: "KLARF Examples",
      summary: "Example defect files with coordinates, size, class, bin, and intensity.",
      contents: "Example KLARF defect records: coordinates, size, area, class, binning, intensity, and criticality. These are example data files, not a parser or viewer.",
      use: "Defect-map analysis and KLARF field reference.",
      reality: "Real-format examples",
      access: "Free examples",
      tags: [
        ["inspection", "klarf"]
      ]
    },
    {
      id: "silicon-photoluminescence",
      code: "45",
      title: "Silicon Wafer Photoluminescence",
      summary: "Photoluminescence images showing defects on silicon wafers.",
      contents: "Photoluminescence imaging of silicon wafers, used to make manufacturing defects visible.",
      use: "Defect visibility and photoluminescence inspection.",
      reality: "Real research data",
      access: "Public",
      url: "https://researchportal.tuni.fi/fi/datasets/dataset-for-non-disruptive-hf-pretreatment-to-enhance-defect-visi/",
      tags: [
        ["inspection", "photoluminescence"],
        ["metrology", "photoluminescence"]
      ]
    },
    {
      id: "simulated-analog-wafer-test",
      code: "46",
      title: "Simulated Analog Wafer Test",
      summary: "Simulated electrical measurements with spatial patterns across a wafer.",
      contents: "Simulated analog wafer-test measurements arranged so that spatial patterns are visible across the wafer.",
      use: "Wafer-test analysis and spatial pattern studies.",
      reality: "Synthetic",
      access: "Free, downloadable",
      tags: [
        ["wafer-maps", "spatial-patterns"],
        ["electrical-testing", "wafer-test"]
      ]
    },
    {
      id: "sbd-wafer-electrical",
      code: "47",
      title: "SBD Wafer Electrical",
      summary: "Schottky diode metrics tied to wafer id and experimental settings.",
      contents: "Wafer identifiers, experimental parameters, and Schottky barrier diode electrical metrics.",
      use: "Device-level electrical characterization.",
      reality: "Real",
      access: "Free, Figshare",
      tags: [
        ["electrical-testing", "device"]
      ]
    },
    {
      id: "silicon-resistivity",
      code: "48",
      title: "Silicon Wafer Resistivity",
      summary: "198 resistivity readings against gas flow, temperature, and pressure.",
      contents: "198 observations of silicon wafer resistivity versus gas flow, temperature, and pressure, with a batch random effect.",
      use: "Mixed-effects modeling and SPC.",
      reality: "Real",
      access: "Free, R",
      tags: [
        ["electrical-testing", "wafer-test"],
        ["process-engineering", "monitoring-flow"],
        ["hypothesis-testing", "designed-experiments"]
      ]
    },
    {
      id: "sram-write-margin",
      code: "49",
      title: "SRAM Write Margin",
      summary: "65 nm CMOS SRAM write margin across transistor widths.",
      contents: "Word-line write-margin measurements from 65 nm CMOS SRAM, showing dependence on transistor width.",
      use: "SRAM yield estimation.",
      reality: "Real",
      access: "Free, Zenodo",
      tags: [
        ["electrical-testing", "memory"],
        ["yield-analytics", "wafer-yield"]
      ]
    },
    {
      id: "metal-oxide-tft",
      code: "50",
      title: "Metal Oxide TFT",
      summary: "1,000 TFT rows with mobility, threshold, on/off ratio, and swing.",
      contents: "1,000 records for nano-structured metal-oxide thin-film transistors: mobility, threshold voltage, on/off ratio, and subthreshold swing.",
      use: "Correlation of process conditions with device performance.",
      reality: "Real",
      access: "Free, Kaggle",
      tags: [
        ["electrical-testing", "device"]
      ]
    },
    {
      id: "sub20-dram",
      code: "51",
      title: "Sub-20nm DRAM",
      summary: "Sub-20 nm process parameters and DRAM electrical characteristics from TCAD.",
      contents: "Sub-20 nm DRAM process parameters paired with electrical characteristics generated from 3D TCAD.",
      use: "DRAM yield acceleration and device targeting.",
      reality: "Real (TCAD)",
      access: "Free, China NBSDC",
      tags: [
        ["electrical-testing", "memory"],
        ["process-engineering", "monitoring-flow"]
      ]
    },
    {
      id: "multivariate-time-series",
      code: "52",
      title: "Multivariate Time Series",
      summary: "26 sensors, 3 equipment groups, and 54 synthetic oscillation, spike, and step faults.",
      contents: "Semiconductor equipment time series from 26 sensors across 3 equipment groups, with 54 synthetic failures of type oscillation, spike, and step.",
      use: "Anomaly detection and fault diagnosis.",
      reality: "Synthetic failures",
      access: "Free, CORE",
      tags: [
        ["equipment-health", "tool-sensors"],
        ["fdc-apc", "anomaly-fault"],
        ["iot", "equipment-telemetry"]
      ]
    },
    {
      id: "ai-hub-oht",
      code: "53",
      title: "AI-Hub OHT/AGV",
      summary: "124,263 overhead-transport records labeled from normal to danger.",
      contents: "124,263 JSON records from overhead hoist transport and AGV systems, labeled with risk levels from normal through danger.",
      use: "AMHS risk classification.",
      reality: "Real",
      access: "Free, AI-Hub Korea",
      tags: [
        ["equipment-health", "amhs"],
        ["factory-systems", "amhs"],
        ["iot", "amhs-transport"]
      ]
    },
    {
      id: "wp-dataset",
      code: "54",
      title: "WP Dataset",
      summary: "Real fab sensor data for anomaly detection and localization.",
      contents: "A real-world semiconductor manufacturing dataset released for anomaly detection and localization.",
      use: "Anomaly detection and localization.",
      reality: "Real",
      access: "Free, academic",
      tags: [
        ["equipment-health", "tool-sensors"],
        ["fdc-apc", "anomaly-fault"],
        ["iot", "equipment-telemetry"]
      ]
    },
    {
      id: "synthetic-fab-yield",
      code: "55",
      title: "Synthetic Fab Yield",
      summary: "A 12-table synthetic fab warehouse of lots, wafers, defects, bins, and excursions.",
      contents: "A 12-table synthetic fab warehouse covering lots, wafers, process runs, defects, bins, and equipment excursions.",
      use: "Yield-management and root-cause analysis on a MES-like warehouse.",
      reality: "Synthetic",
      access: "Free, downloadable",
      tags: [
        ["yield-analytics", "backend-fab"],
        ["factory-systems", "mes"]
      ]
    },
    {
      id: "yield-analytics",
      code: "56",
      title: "Yield Analytics",
      summary: "250,000 synthetic defect records with class and severity.",
      contents: "250,000 synthetic records with defect classification and severity indicators.",
      use: "Pareto construction and yield analytics.",
      reality: "Synthetic",
      access: "Free",
      tags: [
        ["yield-analytics", "wafer-yield"]
      ]
    },
    {
      id: "backend-production-rate",
      code: "57",
      title: "Backend Production Rate",
      summary: "13,186 assembly and test observations for throughput prediction.",
      contents: "13,186 observations with machine and product attributes plus numerical variables from semiconductor backend production.",
      use: "Throughput prediction.",
      reality: "Real",
      access: "Free, downloadable",
      tags: [
        ["yield-analytics", "backend-fab"],
        ["factory-systems", "assembly-test"]
      ]
    },
    {
      id: "lot-variability",
      code: "58",
      title: "Lot Variability and Yield",
      summary: "Process settings, machine condition, yield, defect count, and failure rate.",
      contents: "Lot-level process parameters and machine condition, with yield percent, defect count, and failure rate.",
      use: "Predictive modeling and process optimization.",
      reality: "Real",
      access: "Free, GitHub",
      tags: [
        ["yield-analytics", "process-yield"],
        ["process-engineering", "monitoring-flow"],
        ["fdc-apc", "sensor-fdc"]
      ]
    },
    {
      id: "photonic-ic-yield",
      code: "59",
      title: "Photonic IC Yield",
      summary: "125,000 synthetic question and answer pairs for photonic yield reasoning.",
      contents: "125,000 synthetic query and response pairs built from Poisson and Murphy yield models for photonic integrated circuits.",
      use: "Language-model fine-tuning for yield reasoning.",
      reality: "Synthetic",
      access: "Free, Hugging Face",
      url: "https://huggingface.co/datasets/Taylor658/photonic-integrated-circuit-yield",
      tags: [
        ["yield-analytics", "wafer-yield"]
      ]
    },
    {
      id: "ipi-failure-analysis",
      code: "60",
      title: "IPI Failure Analysis",
      summary: "Failure-analysis jobs with timestamps, equipment, operators, and workflow.",
      contents: "Failure-analysis job and task sequences, with timestamps, equipment, operators, and the processing workflow.",
      use: "Lab-operations and workflow analysis.",
      reality: "Real",
      access: "Free, downloadable",
      tags: [
        ["factory-systems", "fa-lab"]
      ]
    },
    {
      id: "smat2022",
      code: "61",
      title: "SMAT2022",
      summary: "Overhead-hoist specs, track layouts, bays, and vehicle parameters.",
      contents: "An AMHS testbed with OHT specifications, track layouts, bay configurations, and vehicle parameters.",
      use: "Discrete-event simulation and dispatching studies.",
      reality: "Synthetic",
      access: "Free, GitHub",
      url: "https://github.com/kwoo-lee/SMAT2022",
      tags: [
        ["factory-systems", "amhs"],
        ["equipment-health", "amhs"],
        ["iot", "amhs-transport"]
      ]
    },
    {
      id: "mes-database",
      code: "62",
      title: "MES Database",
      summary: "One year of equipment state, production history, and inspection data.",
      contents: "About 187 MB covering one year of equipment states, production history, and inspection records from a semiconductor MES extract.",
      use: "MES analytics and equipment-state analysis.",
      reality: "Real",
      access: "Free, China NBSDC",
      tags: [
        ["factory-systems", "mes"],
        ["iot", "factory-streams"]
      ]
    },
    {
      id: "oht-traffic",
      code: "63",
      title: "OHT Traffic Simulation",
      summary: "Simulated overhead-hoist traffic at 10-second intervals.",
      contents: "A simulated OHT network sampled every 10 seconds, with 24-hour, 6-hour, and 6-hour splits.",
      use: "Congestion prediction.",
      reality: "Synthetic",
      access: "Free, academic",
      tags: [
        ["factory-systems", "amhs"],
        ["equipment-health", "amhs"],
        ["iot", "amhs-transport"]
      ]
    },
    {
      id: "wafer-defect-classification",
      code: "64",
      title: "Wafer Defect Classification",
      summary: "5,000 sensor rows with synthetic binary defect labels.",
      contents: "5,000 records combining sensor measurements with a binary defect label. The labels are synthetic on top of real sensor data.",
      use: "Tests of sensor-deviation hypotheses.",
      reality: "Synthetic labels on real sensor data",
      access: "Free",
      tags: [
        ["fdc-apc", "hypothesis-testing"],
        ["yield-analytics", "wafer-yield"],
        ["hypothesis-testing", "sensor-deviation"]
      ]
    }
  ]
};
