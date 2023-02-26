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

export const CQuel_body = (props) => {
  return (
    <Box
      as="section"
      backgroundRepeat="no-repeat"
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      padding="2em 0"
      minH="400px"
    >
      {/* <Container maxW={'3xl'}>
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
      </Container> */}
      <div>{props.children}</div>
    </Box>
  )
}

export default CQuel_body
