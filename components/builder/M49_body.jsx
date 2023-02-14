import { Builder, withChildren } from '@builder.io/react' // import withChildren
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
      backgroundRepeat="no-repeat"
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      pt="16"
      pb="24"
    >
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 18 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}
          >
            {props.body_title}
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
        <div>{props.children}</div>
      </Box>
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
