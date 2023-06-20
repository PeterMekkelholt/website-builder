import {
    Box,
    Button,
    Heading,
    Stack,
    Text,
    Center,
    Flex,
    Image,
    useColorModeValue as mode,
    useTheme,
  } from '@chakra-ui/react'
  
  const Container_Item_Left = (props) => {
    const {
      colors: {
        brand: { carbonLight },
      },
    } = useTheme()
    return (
      <Box
        id="here"
        width="100%"
        height="100%"
        background={`${carbonLight} repeat `}
        padding="2em"
        //padding={{ base: '2em 0', md: '0' }}
      >
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
              base: 'column',
              md: 'column',
              lg2: 'row',
            }}
            spacing={{
              sm: '2rem',
              md: '2rem',
            }}
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
                width="390px"
                height="250px"
                boxShadow="lg"
                borderRadius="xl"
                overflow="hidden"
              >
                <Center>
                  <Image
                    height="250px"
                    // padding="2em"
                    objectFit="cover"
                    src={props.item_image}
                    alt="Alt"
                  />
                </Center>
              </Box>
            </Center>
            <Flex
              flexDirection="column"
              justifyContent="center"
              flex="1"
              maxW={{
                lg: '520px',
              }}
            >
              <Heading
                as="h2"
                // fontFamily="Poppins"
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
              <Button width="fit-content" mt="2em" variant="carbon">
                {props.item_button}
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Box>
    )
  }
  
  export default Container_Item_Left