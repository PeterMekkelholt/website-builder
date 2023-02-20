import { Builder, withChildren } from '@builder.io/react' // import withChildren
import {
  Box,
  Button,
  Heading,
  Container,
  Stack,
  Text,
  Center,
  Flex,
  useColorModeValue as mode,
} from '@chakra-ui/react'

export const M49_body = (props) => {
  return (
    <Box
      // bgColor="rgb(185, 227, 239, .2)"
      as="section"
      backgroundRepeat="no-repeat"
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      pt="16"
      pb="2em"
      minH="400px"
    >
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          // py={{ base: 10, md: 20 }}
        >
          <Heading
            as="h2"
            fontFamily="Poppins"
            size="2xl"
            color="#284863"
            fontWeight="extrabold"
            letterSpacing="tight"
            fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}
            pt={{ base: 10, md: 20 }}
          >
            {props.body_title}
          </Heading>
        </Stack>
      </Container>
      <div>{props.children}</div>
      {/* <Box width="100%" height="100%" bgColor="white">
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
            direction={{
              sm: 'column',
              md: 'row',
            }}
            spacing={{
              sm: '2rem',
              md: '2rem',
            }}
            mt="8"
            align={{
              lg: 'center',
            }}
            justify="space-between"
            mb={{
              sm: '5em',
              md: '0',
            }}
          >
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
              ></Box>
            </Center>
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
                01
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
                Get world class talents for your project
              </Heading>
              <Text
                as="p"
                color={mode('gray.600', 'gray.400')}
                mt="4"
                fontSize="lg"
                fontWeight="regular"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Box> */}
      {/* <Box
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
        <div>{props.children}</div>
      </Box> */}
    </Box>
  )
}

export default M49_body

// pass your custom component to withChildren()
const HeroWithBuilderChildren = withChildren(M49_body)

// specify defaultChildren when you register the component
Builder.registerComponent(HeroWithBuilderChildren, {
  name: 'M49_body',
  // Adding defaults is important for easy usability
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'I am child text block!' } },
    },
  ],
})
