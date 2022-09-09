import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Theme } from '../chakra/theme'
import Layout from '../Components/Layout'
function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
