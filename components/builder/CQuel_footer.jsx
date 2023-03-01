import Link from 'next/link'
import { Logo } from '../Logo'
import { useState } from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import {
  Box,
  Container,
  Button,
  SimpleGrid,
  Stack,
  IconButton,
  ButtonGroup,
  Flex,
  Text,
  Center,
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
        <Container maxW={'3xl'}>
          <Text
            as="p"
            color="white"
            pt="2em"
            fontSize="lg"
            fontWeight="regular"
            margin="1em 0"
          >
            {props.footer_copy}
          </Text>
        </Container>

        <Flex
          flexDirection="column"
          justifyContent="center"
          flex="1"
          // maxW={{
          //   lg: '520px',
          // }}
          mt="2em"
          mb="2em"
        >
          <Flex flexDirection="row" justifyContent="space-between">
            <Box display={{ base: 'none', sm: 'none', md: 'inline' }}>
              <Logo height="70px" />
            </Box>

            <Flex
              flexDirection="row"
              gap={10}
              mt="2em"
              width="100%"
              justifyContent={{ base: 'center', sm: 'center', md: 'right' }}
            >
              <Button width="fit-content" variant="white">
                Contact us
              </Button>
              <ButtonGroup variant="ghost" color="white">
                <Text mt=".5em" fontWeight={800}>
                  Follow Us
                </Text>
                <IconButton
                  as="a"
                  href={props.footer_URL}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="40px" />}
                  _hover={{
                    color: 'brand.lightBlue',
                  }}
                />
              </ButtonGroup>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default CQuel_footer
