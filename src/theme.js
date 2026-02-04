import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Zarr-inspired pink/magenta color palette
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary brand colors - Zarr pink/magenta gradient
        brand: {
          50: { value: '#fef2f4' },
          100: { value: '#fce7eb' },
          200: { value: '#f9d0d9' },
          300: { value: '#f4a9ba' },
          400: { value: '#ec7a95' },
          500: { value: '#e34b75' },  // Primary pink (Zarr primary)
          600: { value: '#cc3363' },
          700: { value: '#bb1085' },  // Magenta (Zarr gradient end)
          800: { value: '#9c1570' },
          900: { value: '#82165f' },
        },
        // Accent - salmon/coral tones
        accent: {
          50: { value: '#fef5f4' },
          100: { value: '#fde8e6' },
          200: { value: '#fcd4d1' },
          300: { value: '#f9b5af' },
          400: { value: '#f28d84' },
          500: { value: '#e58077' },  // Salmon (Zarr gradient start)
          600: { value: '#d4635a' },
          700: { value: '#b24a42' },
          800: { value: '#944039' },
          900: { value: '#7b3a34' },
        },
      },
      fonts: {
        body: { value: "'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" },
        heading: { value: "'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" },
      },
    },
  },
  globalCss: {
    html: {
      scrollBehavior: 'smooth',
    },
  },
})

export const system = createSystem(defaultConfig, config)
