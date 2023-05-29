import {
  Box,
  Button,
  Heading,
  Container,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { HiPlay } from 'react-icons/hi'
export const M49_body = (props) => {
  return (
    <Box
      as="section"
      backgroundImage="url('https://www.mitai.ai/bg-line-features.png')"
      // backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      // objectFit="cover"
      // position="absolute"
      // bg={mode('gray.50', 'gray.800')}
      pt="16"
      pb="24"
    >
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}
          >
            How Mitai can reduce EMC risk and complexity in your PCB design
          </Heading>
        </Stack>
      </Container>
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
        {/* <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '3rem',
            lg: '2rem',
          }}
          mt="8"
          align={{
            lg: 'center',
          }}
          justify="space-between"
        >
          <Box
            flex="1"
            maxW={{
              lg: '520px',
            }}
          >
            <Heading
              as="h1"
              size="3xl"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Get world class talents for your project
            </Heading>
            <Text
              color={mode('gray.600', 'gray.400')}
              mt="4"
              fontSize="lg"
              fontWeight="medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Button
                size="lg"
                minW="210px"
                colorScheme="blue"
                height="14"
                px="8"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                bg="white"
                color="gray.900"
                _hover={{
                  bg: 'gray.50',
                }}
                height="14"
                px="8"
                shadow="base"
                leftIcon={<Box as={HiPlay} fontSize="2xl" />}
              >
                Watch Demo
              </Button>
            </Stack>
            <Text mt="8" color={mode('gray.600', 'gray.400')}>
              Already have an account store?{' '}
              <Link href="#" textDecoration="underline">
                Log in
              </Link>
            </Text>
          </Box>
          <Box
            pos="relative"
            w={{
              base: 'full',
              lg: '560px',
            }}
            h={{
              base: 'auto',
              lg: '560px',
            }}
          >
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{
                lg: '100%',
              }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHklMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Screening talent"
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            />
          </Box>
        </Stack> */}
      </Box>
    </Box>
  )
}

export default M49_body
