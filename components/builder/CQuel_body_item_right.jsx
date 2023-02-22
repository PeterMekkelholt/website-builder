import React, { useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Container,
  Stack,
  Text,
  Center,
  Flex,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react'

const Body_Item = (props) => {
  return (
    <Box width="100%" height="100%" bgColor="white">
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
        <Stack
          // direction={{
          //   sm: 'column',
          //   md: 'row',
          // }}
          flexDirection={{
            base: 'column-reverse',
            md: 'column-reverse',
            lg2: 'row',
          }}
          spacing={{
            sm: '2rem',
            md: '2rem',
          }}
          // mt="8"
          align={{
            lg: 'center',
          }}
          justify="space-between"
          mb={{
            sm: '5em',
            md: '0',
          }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            flex="1"
            maxW={{
              lg: '520px',
            }}
          >
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color="#98D897"
              letterSpacing="wide"
              pb="2em"
            >
              {props.item_number}
            </Text>
            <Heading
              as="h2"
              fontFamily="Poppins"
              size="2xl"
              color="#284863"
              fontWeight="extrabold"
              letterSpacing="tight"
              fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
              lineHeight={'110%'}
            >
              {props.item_headline}
            </Heading>
            <Text
              as="p"
              color={mode('gray.600', 'gray.400')}
              mt="4"
              fontSize="lg"
              fontWeight="regular"
            >
              {props.item_description}
            </Text>
          </Flex>
          <Center
            width="100%"
            flex="1"
            maxW={{
              lg: '520px',
            }}
          >
            <Box
              bg="white"
              margin={{
                sm: '0',
                md: '3em',
              }}
              width="325px"
              height="250px"
              boxShadow="lg"
              borderRadius="xl"
            >
              {' '}
              <Center>
                <Image
                  height="250px"
                  padding="2em"
                  objectFit="cover"
                  src={props.item_image}
                  alt="Alt"
                />
              </Center>
            </Box>
          </Center>
        </Stack>
      </Box>
    </Box>
  )
}

export default Body_Item
