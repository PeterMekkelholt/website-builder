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
      bgColor="rgb(100, 161, 207, .25)"
      as="section"
      pt="16"
      pb="2em"
      minH="400px"
    >
      <Container maxW={'3xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }}>
          <Heading
            as="h2"
            fontFamily="Poppins"
            size="2xl"
            color="#284863"
            fontWeight="extrabold"
            letterSpacing="tight"
            fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}
            // pt={{ base: 10, md: 20 }}
          >
            {props.body_title}
          </Heading>
        </Stack>
      </Container>
    </Box>
  )
}

export default M49_body
