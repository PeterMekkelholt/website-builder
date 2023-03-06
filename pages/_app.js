import * as React from 'react'
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import '../styles/globals.css'
import CookieConsent from 'react-cookie-consent'
import '../components/builder/builder-config'
import { ChakraProvider, extendTheme, Text, Link } from '@chakra-ui/react'

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}
const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },

            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
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
          transition: 'ease all 0.25s',
          _hover: {
            bg: 'brand.gradient2',
            boxShadow: 'md',
          },
        },
        carbon: {
          bg: 'brand.darkBlue',
          color: 'white',
          rounded: 'full',
          fontWeight: '800',
          px: '35px',
          transition: 'ease all 0.25s',
          _hover: {
            bg: 'brand.carbonHover',
            boxShadow: 'md',
          },
        },
        white: {
          bg: 'white',
          color: 'brand.darkBlue',
          rounded: 'full',
          fontWeight: '800',
          px: '35px',
          transition: 'ease all 0.25s',
          _hover: {
            bg: 'brand.lightBlue',
            boxShadow: 'md',
          },
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
      carbonHover: '#555569',
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

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3385298, 6)
  }, [])
  return (
    <ChakraProvider theme={theme} className={[poppins.className]}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Text fontSize="md">
        <CookieConsent
          // debug={true}
          location="bottom"
          buttonText="I Understand"
          cookieName="CquelCookie"
          buttonClasses=""
          style={{
            // fontFamily: 'Poppins',
            background: '#1b2738',
            marginBottom: '20px',
            marginLeft: '5%',
            marginRight: '5%',
            width: '90%',
            borderRadius: '15px',
            paddingLeft: '10px',
            paddingRight: '10px',
            boxShadow: '0 3px 10px 0 rgb(0 0 0 / 32%)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          contentStyle={
            {
              // color: 'red',
            }
          }
          buttonStyle={{
            color: '#3A3A4A',
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '10px 40px',
            fontWeight: '600',
            transition: 'ease all 0.25s',
            _hover: {
              bg: 'brand.lightBlue',
              boxShadow: 'md',
            },
          }}
          expires={150}
        >
          This site uses cookies to provide you with a better user experience.
          For more information, refer to our
          <Link href="/terms" passHref color={'brand.lightBlue'}>
            {' '}
            Terms of Use
          </Link>{' '}
          and{' '}
          <Link href="/privacy" passHref color={'brand.lightBlue'}>
            Privacy Policy
          </Link>
        </CookieConsent>
        {/* <CookieConsent
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{' '}
          <span style={{ fontSize: '10px' }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent> */}
      </Text>
    </ChakraProvider>
  )
}

export default MyApp
