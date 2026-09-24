export const ecosystemProjects = [
  {
    name: "Zarr",
    description:
      "The array format underneath all of this. Chunked, compressed, N-dimensional arrays that read directly from object storage.",
    href: "https://zarr.dev",
    github: "https://github.com/zarr-developers/zarr-python",
  },
  {
    name: "VirtualiZarr",
    description:
      "Create virtual Zarr stores from archival formats with the xarray API. Supports netCDF4, HDF5, FITS, and more.",
    href: "https://virtualizarr.readthedocs.io",
    github: "https://github.com/zarr-developers/VirtualiZarr",
  },
  {
    name: "Icechunk",
    description:
      "A transactional storage engine for Zarr. Commit virtual references with version control, time travel, and distributed writes.",
    href: "https://icechunk.io",
    github: "https://github.com/earth-mover/icechunk",
  },
];

// Formats VirtualiZarr parses out of the box.
export const builtinFormats = [
  "HDF5 / netCDF4",
  "HDF4",
  "netCDF3",
  "FITS",
  "Zarr",
  "Kerchunk",
  "DMR++",
  "Icechunk",
];

// Third-party parsers implementing the VirtualiZarr parser protocol.
export const communityParsers = [
  {
    format: "TIFF / COG",
    name: "virtual-tiff",
    url: "https://virtual-tiff.readthedocs.io",
  },
  {
    format: "GRIB1 / GRIB2",
    name: "gribberish",
    url: "https://github.com/mpiannucci/gribberish",
  },
  {
    format: "HRRR",
    name: "hrrr-parser",
    url: "https://github.com/virtual-zarr/hrrr-parser",
  },
  {
    format: "ICON GRIB",
    name: "icon-ch-vzarr",
    url: "https://github.com/MeteoSwiss/icon-ch-vzarr",
  },
  {
    format: "Sentinel-2 JP2",
    name: "sentinel-2-jp2-tlm",
    url: "https://github.com/Kayrros/sentinel-2-jp2-tlm",
  },
  {
    format: "NITF & imagery",
    name: "osml-imagery-io",
    url: "https://github.com/awslabs/osml-imagery-io",
  },
  {
    format: "CIF",
    name: "cifzarr",
    url: "https://github.com/alxmrs/cifzarr",
  },
];
