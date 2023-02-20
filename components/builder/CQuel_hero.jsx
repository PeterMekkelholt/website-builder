import React, { useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { HiArrowRight } from 'react-icons/hi'

export const CQuel_Hero = (props) => {
  return (
    <Box
      as="section"
      bgGradient="linear(to-tr, #C7E8E7, #77B4C8)"
      pb="24"
      pos="relative"
      px={{
        base: '6',
        lg: '12',
      }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{
            lg: 'md',
            xl: 'xl',
          }}
          pt={{
            base: '20',
            lg: '40',
          }}
          pb={{
            base: '16',
            lg: '24',
          }}
        >
          <Heading
            as="h1"
            color="white"
            fontFamily="Poppins"
            size="3xl"
            lineHeight="1"
            fontWeight="extrabold"
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
            <Button
              size="lg"
              backgroundColor="white"
              boxShadow="lg"
              // colorScheme="blue"
              height="14"
              px="8"
              fontSize="md"
              _hover={{
                boxShadow: 'xl',
              }}
            >
              {props.hero_CTA}
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        display={{
          sm: 'none',
          lg2: 'inline',
        }}
        pos={{
          lg: 'absolute',
        }}
        insetY={{
          lg: '0',
        }}
        insetEnd={{
          lg: '0',
        }}
        bg="gray.50"
        w={{
          base: 'full',
          lg: '50%',
        }}
        height={{
          base: '96',
          lg: 'full',
        }}
        sx={{
          clipPath: {
            lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
        }}
      >
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src={props.hero_image}
          alt={props.hero_image_alt}
        />
      </Box>
    </Box>
  )
}

function createMarkup(content) {
  return { __html: content }
}

export default CQuel_Hero
