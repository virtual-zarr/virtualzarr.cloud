import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { system } from '@/theme'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
