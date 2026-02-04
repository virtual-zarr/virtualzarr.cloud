# virtualzarr.cloud

Landing page for the Virtual Zarr ecosystem — a collection of tools that enable cloud-optimized access to legacy scientific data formats.

## About

Virtual Zarr brings cloud-native workflows to existing data archives without requiring data duplication. The ecosystem includes:

- **[VirtualiZarr](https://virtualizarr.readthedocs.io)** - Create virtual Zarr stores from archival data
- **[Icechunk](https://icechunk.io)** - Transactional storage engine for virtual references
- **[earthaccess](https://earthaccess.readthedocs.io)** - NASA Earthdata authentication and virtual datacube integration

## Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Linting

This project uses ESLint and Prettier for code quality and formatting.

```bash
# Run linter
yarn lint

# Fix auto-fixable issues
yarn lint:fix

# Format code with Prettier
yarn format
```

## Environment Variables

Optional:

- `GITHUB_TOKEN` - GitHub personal access token for fetching contributor info (avoids rate limiting)

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Chakra UI v3](https://chakra-ui.com/)
- [SWR](https://swr.vercel.app/) for data fetching

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Apache 2.0 - see [LICENSE](LICENSE) for details.
