import * as React from 'react'

import '../styles/globals.css'
import '../components/builder/builder-config'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'rgb(185, 227, 239, .2)',
      },
    },
  },
  breakpoints: {
    lg2: '68em',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
