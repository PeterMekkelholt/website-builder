import React, { useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Flex,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import HexagonSection from '../HexagonSection'

export const CQuel_Hero_Full = (props) => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: 'xl', md: '7xl' }}
          mx="auto"
          px={{ base: '6', md: '8' }}
          color="white"
        >
          <Box maxW="xl">
            <Heading
              as="h1"
              color="white"
              fontFamily="Poppins"
              size="3xl"
              lineHeight="1"
              fontWeight="bold"
              letterSpacing="tight"
            >
              <Text
                dangerouslySetInnerHTML={createMarkup(props.hero_title)}
              ></Text>
            </Heading>

            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Button variant="carbon">{props.hero_CTA}</Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <HexagonSection variant="hero"></HexagonSection>
          {/* <Img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          /> */}
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}

function createMarkup(content) {
  return { __html: content }
}

export default CQuel_Hero_Full
