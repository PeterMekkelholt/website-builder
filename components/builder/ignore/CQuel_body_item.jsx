import {
  AspectRatio,
  Center,
  Flex,
  Image,
  Heading,
  Button,
  Text,
  useTheme,
} from '@chakra-ui/react'
import mask from '../../public/smoke_mask.png'
import Link from 'next/link'

const CQuelBodyItem = (props) => {
  const {
    item_headline: headline,
    item_description: description,
    item_button: buttonText,
    item_button_url: buttonUrl = '#',
    image_left: left = true,
  } = props
  const {
    colors: {
      brand: { carbonLight },
    },
  } = useTheme()

  return (
    <Flex
      flex={1}
      justify="center"
      align="center"
      background={left ? `${carbonLight} url(${mask.src}) repeat ` : 'none'}
    >
      <Flex
        justify="space-between"
        wrap="wrap"
        direction={left ? 'row' : 'row-reverse'}
        flex={1}
        maxW="8xl"
      >
        <Flex grow={1} w="50%" justify="center" minW="sm">
          <AspectRatio
            ratio={1.565}
            bg="white"
            margin={{
              base: '3em',
            }}
            maxW="600px"
            minW="300px"
            w="100%"
            boxShadow="lg"
            borderRadius="2xl"
          >
            <Center p={10}>
              <Image
                height="100%"
                objectFit="cover"
                src={props.item_image}
                alt="Alt"
              />
            </Center>
          </AspectRatio>
        </Flex>
        <Flex grow={1} w="50%" justify="center" minW="sm">
          <Flex
            flexDirection="column"
            justifyContent="center"
            flex="1"
            maxW={{
              lg: '520px',
            }}
            m={{
              base: 10,
            }}
          >
            <Heading
              as="h2"
              fontFamily="Poppins"
              color="#284863"
              fontWeight="bold"
              letterSpacing="tight"
              fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
              lineHeight={'110%'}
            >
              {headline}
            </Heading>
            <Text
              as="p"
              color="gray.600"
              mt="4"
              fontSize="lg"
              fontWeight="regular"
            >
              {description}
            </Text>
            <Link href={buttonUrl}>
              <Button width="fit-content" mt="2em" variant="carbon">
                {buttonText}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CQuelBodyItem
