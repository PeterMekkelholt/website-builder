import NextLink from 'next/link'
import { Logo } from '../Logo'
// import { MobileNav } from '../MobileNav'
import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Flex,
  HStack,
  Link,
  Portal,
  Text,
  VStack,
  useBoolean,
  useFocusOnShow,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from '../NavLink'
import { useRouter } from 'next/router'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { RemoveScroll } from 'react-remove-scroll'
import FocusLock from 'react-focus-lock'
import { motion } from 'framer-motion'

export const M49_nav = (props) => {
  const [show, { toggle, off }] = useBoolean()
  // useFocusOnShow(ref, {
  //   visible: show,
  //   shouldFocus: true,
  // })
  const { nav_items } = props
  return (
    <Box
      as="header"
      zIndex={'1'}
      bg="white"
      position="sticky"
      top="0em"
      transition="0.5s linear"
      boxShadow="lg"
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
              <Link
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <VisuallyHidden>{props?.brand_title}</VisuallyHidden>
                <Logo height="60px"></Logo>
              </Link>
            </Box>
            <HStack
              display={{
                base: 'none',
                lg2: 'flex',
              }}
              spacing="8"
            >
              {nav_items?.map((menu, idx) => (
                <div key={idx}>
                  <NavLink.Desktop active={menu.url}>
                    {menu.caption}
                  </NavLink.Desktop>
                </div>
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
              <Button variant="nav">Account Login</Button>

              <Button variant="nav">Vendor Login</Button>
            </HStack>

            <Box ml="5">
              <Box
                as="button"
                type="button"
                p="1"
                fontSize="2xl"
                color="gray.600"
                onClick={toggle}
                display={{
                  base: 'block',
                  lg2: 'none',
                }}
              >
                <HiOutlineMenu />
              </Box>

              <Transition in={show}>
                <RemoveScroll enabled={show}>
                  <Backdrop show={show} />
                </RemoveScroll>
                <FocusLock disabled={!show} returnFocus>
                  <Box
                    bg={mode('white', 'gray.700')}
                    shadow="lg"
                    rounded="lg"
                    tabIndex={0}
                    outline={0}
                  >
                    <Box pt="5" pb="6" px="5">
                      <Flex justify="space-between" align="center">
                        <Logo />
                        <Box mr="-2" mt="-2">
                          <Center
                            as="button"
                            type="button"
                            onClick={off}
                            rounded="base"
                            p="1"
                            color={mode('gray.600', 'gray.400')}
                            _hover={{
                              bg: mode('gray.100', 'gray.600'),
                            }}
                          >
                            <Box srOnly>Close menu</Box>
                            <HiOutlineX aria-hidden fontSize="1.5rem" />
                          </Center>
                        </Box>
                      </Flex>
                      <SimpleGrid
                        as="nav"
                        gap="6"
                        mt="8"
                        columns={{
                          base: 2,
                          sm: 2,
                        }}
                      >
                        {nav_items?.map((menu, idx) => (
                          <div key={idx}>
                            <NavLink.Desktop active={menu.url}>
                              {menu.caption}
                            </NavLink.Desktop>
                          </div>
                        ))}
                      </SimpleGrid>
                      <VStack mt="8" spacing="4">
                        <NextLink href="#" passHref>
                          <Button colorScheme="green" rounded="full">
                            Account Login
                          </Button>
                        </NextLink>
                        <NextLink href="#" passHref>
                          <Button colorScheme="green" rounded="full">
                            Vendor Login
                          </Button>
                        </NextLink>
                      </VStack>
                    </Box>
                  </Box>
                </FocusLock>
              </Transition>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default M49_nav

const variants = {
  show: {
    display: 'revert',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

const Backdrop = ({ show }) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? 'show' : 'hide'}
      transition={{
        duration: 0.1,
      }}
      variants={{
        show: {
          opacity: 1,
          display: 'revert',
        },
        hide: {
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        },
      }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        background: 'rgba(0,0,0,0.2)',
        inset: 0,
      }}
    />
  </Portal>
)

const Transition = (props) => {
  const { in: inProp, ...rest } = props
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? 'show' : 'hide'}
      style={{
        transformOrigin: 'top right',
        position: 'absolute',
        width: 'calc(100% - 32px)',
        top: '24px',
        left: '16px',
        margin: '0 auto',
        zIndex: 1,
      }}
    />
  )
}
