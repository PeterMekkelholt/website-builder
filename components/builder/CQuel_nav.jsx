import { Logo } from '../Logo'
import { Box, Flex, HStack, Link, VisuallyHidden } from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from '../NavLink'

export const CQuel_nav = (props) => {
  return (
    <Box
      as="header"
      zIndex={'9999'}
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
                <VisuallyHidden>{props.brand_title}</VisuallyHidden>
                <Logo></Logo>
              </Link>
            </Box>
            {/* <HStack
              display={{
                base: 'none',
                lg2: 'flex',
              }}
              spacing="8"
            >
              {props.thing.map((menu, idx) => (
                <div key={idx}>
                  <NavLink.Desktop active={menu.url}>
                    {menu.caption}{' '}
                  </NavLink.Desktop>
                </div>
              ))}
            </HStack> */}
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default CQuel_nav
