// Virtual Zarr in the wild: production pipelines, stores, and integrations.
// Keep blurbs to facts stated by the linked project itself.
export const useCases = [
  {
    name: "GOES-16 satellite imagery",
    tag: "Satellite imagery",
    description:
      "Seven years of GOES-16 imagery — 380,000 netCDF4 files on a public bucket — opened as a single cloud-optimized virtual Zarr store.",
    url: "https://www.earthmover.io/blog/virtual-zarr",
  },
  {
    name: "GPM IMERG precipitation",
    tag: "Precipitation",
    description:
      "A pipeline building a virtual Icechunk store over the GPM IMERG half-hourly precipitation record — nearly half a million granules.",
    url: "https://github.com/virtual-zarr/gpmimerghh-virtualizarr-data-pipeline",
  },
  {
    name: "MUR sea surface temperature",
    tag: "Oceanography",
    description:
      "A living virtual store: recurring updates append newly published MUR SST granules to an ongoing Icechunk repository.",
    url: "https://github.com/developmentseed/mursst-icechunk-updater",
  },
  {
    name: "GEOS-CF composition forecasts",
    tag: "Atmospheric composition",
    description:
      "Virtual Icechunk stores for NASA's GEOS-CF dataset, with the resulting repository hosted publicly on S3.",
    url: "https://github.com/virtual-zarr/geos-cf-icechunk",
  },
  {
    name: "NEX-GDDP-CMIP6 projections",
    tag: "Climate",
    description:
      "NASA's NEX-GDDP-CMIP6 downscaled climate projections exposed as a single virtual datatree.",
    url: "https://github.com/virtual-zarr/nex-gddp-cmip6",
  },
  {
    name: "CMIP7 at the ESGF",
    tag: "Climate modeling",
    description:
      "An ESGF working group enabling access to CMIP7 climate model output via virtual Zarr.",
    url: "https://github.com/carbonplan/cmip7-virtualization",
  },
  {
    name: "EUMETSAT firecube",
    tag: "Earth observation",
    description:
      "A plugin-based batch ingestion CLI turning Earth Observation products into analysis-ready datacubes.",
    url: "https://github.com/eumetsat/firecube",
  },
  {
    name: "PO.DAAC operations",
    tag: "DAAC operations",
    description:
      "PO.DAAC operationalizing its cloud-optimized format generation — virtual Zarr as DAAC infrastructure.",
    url: "https://github.com/podaac/virtualzarr-gen",
  },
  {
    name: "Single-cell biology",
    tag: "Beyond Earth science",
    description:
      "A collection of h5ad/AnnData files referenced as one virtual sparse matrix in Icechunk — no copying.",
    url: "https://github.com/ianhi/virtual-h5ad",
  },
];

// The consumer side: analysis, benchmarking, serving, and cataloging tools
// that read virtual data rather than publish it.
export const builtOnVirtualData = [
  {
    name: "ExtremeWeatherBench",
    tag: "ML benchmarking",
    description:
      "Brightband's benchmark of machine learning and numerical weather prediction models, focused on extreme events.",
    url: "https://github.com/brightbandtech/ExtremeWeatherBench",
  },
  {
    name: "titiler-multidim",
    tag: "Visualization",
    description:
      "A TiTiler application serving map tiles directly from netCDF and Zarr datasets.",
    url: "https://github.com/developmentseed/titiler-multidim",
  },
  {
    name: "intake-virtual-icechunk",
    tag: "Cataloging",
    description:
      "ACCESS-NRI's intake plugin for building and reading Icechunk stores from existing ESM datastores via VirtualiZarr.",
    url: "https://github.com/ACCESS-NRI/intake-virtual-icechunk",
  },
  {
    name: "TEEHR",
    tag: "Hydrology",
    description:
      "RTI International's tools for exploratory evaluation in hydrologic research.",
    url: "https://github.com/RTIInternational/teehr",
  },
  {
    name: "pm25ml",
    tag: "Air quality & health",
    description:
      "CREA's two-stage machine learning model producing daily 10 km PM2.5 estimates across India.",
    url: "https://github.com/energyandcleanair/pm25ml",
  },
  {
    name: "arco-ocean",
    tag: "Ocean ML",
    description:
      "A dataset of physical ocean, wave, and sea-ice properties with hydrological and atmospheric forcing, optimized for machine learning.",
    url: "https://github.com/inogs/arco-ocean",
  },
];
