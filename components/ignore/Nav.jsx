import NextLink from 'next/link'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  // useColorMode,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from './NavLink'

export const Nav = ({}) => {
  const navLinks = [
    {
      href: '/',
      label: 'TEST',
      key: 'key-product',
    },
    {
      href: '/team',
      label: 'Team',
      key: 'key-team',
    },
    {
      href: '/faq',
      label: 'FAQ',
      key: 'key-faq',
    },
    {
      href: '/press',
      label: 'Press',
      key: 'key-press',
    },
    {
      href: '/contact-us',
      label: 'Contact Us',
      key: 'key-contact-us',
    },
  ]

  return (
    <Box
      as="header"
      zIndex={'1'}
      bg="white"
      position="sticky"
      top="0em"
      transition="0.5s linear"
    >
      <Box
        maxW="7xl"
        mx="auto"
        py="4"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Flex as="nav" justify="space-between">
          <HStack spacing="8">
            <Box
              as="div"
              href="#"
              rel="home"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <VisuallyHidden>LogoIpsum</VisuallyHidden>
              <NextLink href="/" passHref>
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  <Logo />
                  {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                </Link>
              </NextLink>
            </Box>
            <HStack
              display={{
                base: 'none',
                lg2: 'flex',
              }}
              spacing="8"
            >
              {navLinks.map((link) => (
                <NextLink key={link.key} href={link.href}>
                  <NavLink.Desktop active="#">{link.label}</NavLink.Desktop>
                </NextLink>
              ))}
            </HStack>
          </HStack>
          <Flex align="center">
            <HStack
              spacing="8"
              display={{
                base: 'none',
                lg2: 'flex',
              }}
            >
              <NextLink href="/sign-up?plan=generic" passHref>
                <Button colorScheme="green" rounded="full">
                  Sign Up
                </Button>
              </NextLink>
              <NextLink href="/sign-in" passHref>
                <Button colorScheme="green" rounded="full">
                  Sign In
                </Button>
              </NextLink>
            </HStack>
            <Box ml="5">
              <MobileNav navLinks={navLinks} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Nav
