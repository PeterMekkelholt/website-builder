import * as React from 'react'
import { Poppins, Quicksand } from '@next/font/google'

import '../styles/globals.css'
import '../components/builder/builder-config'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        variant: 'carbon',
      },
      variants: {
        nav: {
          bg: 'brand.gradient1',
          color: 'white',
          fontWeight: '800',
          rounded: 'full',
          px: '25px',
        },
        carbon: {
          bg: 'brand.carbon',
          color: 'white',
          rounded: 'full',
          fontWeight: '800',
          px: '35px',
        },
        white: {
          bg: 'white',
          color: 'brand.carbon',
          rounded: 'full',
          fontWeight: '800',
          px: '35px',
        },
      },
    },
  },
  colors: {
    brand: {
      carbonLight: '#E9E9E9',
      lightBlue: '#84BDCD',
      darkBlue: '#1B4965',
      lightGreen: '#BFE4E5',
      darkGreen: '#70C190',
      carbon: '#3A3A4A',
      gradient1: 'linear-gradient(135deg, #52A1CF 0%, #70C190 100%)',
      gradient2: 'linear-gradient(135deg, #7AB6C9 0%, #C7E8E7 100%)',
      gradient3: 'linear-gradient(90deg, #7AB6C9 0%, #C7E8E7 100%)',
    },
  },
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
