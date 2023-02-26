import Link from 'next/link'
import { Logo } from '../Logo'
import { useState } from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  IconButton,
  ButtonGroup,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const CQuel_footer = (props) => {
  return (
    <Box bg="brand.darkBlue" color={useColorModeValue('gray.700', 'gray.200')}>
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          flex="1"
          maxW={{
            lg: '520px',
          }}
          mt="4em"
          mb="4em"
        >
          <Text
            as="p"
            color="white"
            mt="4"
            fontSize="lg"
            fontWeight="regular"
            margin="1em 0"
          >
            {props.footer_copy}
          </Text>
          <Flex flexDirection="row">
            <Logo
              height="40px"
              color={useColorModeValue('gray.700', 'white')}
            />
            <ButtonGroup variant="ghost" color="white">
              <IconButton
                as="a"
                href={props.footer_URL}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="40px" />}
                _hover={{
                  color: 'grey',
                }}
              />
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
      {/* <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              &copy; {new Date().getFullYear()} {props.brand_name}. All rights
              reserved
            </Text>
          </Stack>
        </SimpleGrid>
      </Container> */}
    </Box>
  )
}

export default CQuel_footer
