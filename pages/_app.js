import * as React from 'react'
import { Poppins, Quicksand } from 'next/font/google'

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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400'] })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={theme}
      className={[poppins.className, quicksand.className]}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
