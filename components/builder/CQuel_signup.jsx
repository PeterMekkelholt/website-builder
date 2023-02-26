import { useState } from 'react'
import Subscribe from '../../lib/mailerlite'
import { ToastContainer } from 'react-toastify'
import {
  Box,
  Button,
  Heading,
  Container,
  Stack,
  Text,
  FormControl,
  Input,
  Flex,
  useColorModeValue as mode,
  useToast,
  Center,
} from '@chakra-ui/react'
import HexagonSection from '../HexagonSection'

export const CQuel_signup = (props) => {
  const [email, setEmail] = useState('')
  const toast = useToast()
  const subscribeEmail = () => {
    if (!email) {
      alert('Please provide you email address')
      return
    }
    Subscribe.postMailerLite({
      email: email,
      groups: ['80367673303631436'],
      fields: {
        name: 'anonym',
        last_name: 'anonym',
      },
    })
      .then((res) => {
        console.log(res)
        toast({
          title: 'Sign Up Successful.',
          description: "We've added your email to our mailing list.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      })
      .catch((err) => {
        console.log(err)
        toast({
          title: 'Sign Up Unsuccessful.',
          description: "Hmmm. Something went wrong, we're looking into it.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }
  return (
    // <HexagonSection>
    <Center
      // bgColor="rgb(100, 161, 207, .25)"
      as="section"
      // pt="16"
      // pb="2em"
      // minH="400px"
    >
      <HexagonSection width="100%">
        <Container maxW={'3xl'}>
          <ToastContainer />

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
            >
              {props.signup_title}
            </Heading>
            <Text
              as="p"
              color={mode('gray.600', 'gray.400')}
              mt="4"
              fontSize="lg"
              fontWeight="regular"
            >
              {props.signup_body}
            </Text>
            <Flex flexDirection="column">
              <Flex flexDirection="row" w="100%">
                <FormControl id="email" pr="2">
                  <Input
                    backgroundColor="white"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="hello@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <Button
                  fontSize=".75em"
                  type="submit"
                  colorScheme="gray"
                  width="150px"
                  onClick={subscribeEmail}
                >
                  Subscribe
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </Container>
      </HexagonSection>
      {/* <HexagonSection
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="top bottom"
        position="absolute"
      ></HexagonSection> */}
    </Center>
    // </HexagonSection>
  )
}

export default CQuel_signup
