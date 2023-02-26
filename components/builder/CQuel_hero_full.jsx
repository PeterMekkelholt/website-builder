import React, { useState } from 'react'
import { HinesLogo } from '../HinesLogo'
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
    <Box as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Flex
          maxW={{ base: '2xl', md: '7xl' }}
          mx="auto"
          px={{ base: '6', md: '8' }}
          color="white"
          direction="row"
        >
          <Flex maxW="2xl" direction="column">
            <Heading
              as="h1"
              color="white"
              fontFamily="Poppins"
              size="2xl"
              lineHeight="1.3"
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
          </Flex>
          <Flex
            display={{
              base: 'none',
              lg2: 'flex',
            }}
            width="100%"
            justifyContent="flex-end"
          >
            <HinesLogo></HinesLogo>
          </Flex>
        </Flex>
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
          <HexagonSection
            variant="hero"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          ></HexagonSection>
          <Box position="absolute" w="full" h="full" />
        </Box>
      </Flex>
    </Box>
  )
}

function createMarkup(content) {
  return { __html: content }
}

export default CQuel_Hero_Full
