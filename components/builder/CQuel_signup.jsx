import { Builder, withChildren } from '@builder.io/react' // import withChildren
import { useState } from 'react'
import Subscribe from '../../lib/mailerlite'
import { toast } from 'react-toastify'
import {
  Box,
  Button,
  Heading,
  Container,
  Stack,
  Text,
  Center,
  FormControl,
  Input,
  Flex,
  useColorModeValue as mode,
} from '@chakra-ui/react'

export const CQuel_signup = (props) => {
  const [email, setEmail] = useState('')
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
        toast.success(
          (`Thanks! Your email has been successfully registered.`,
          {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        )
        /*setTimeout(() => {
          window.location.reload()
        }, 3900)*/
      })
      .catch((err) => {
        console.log(err)
      })
  }
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
          <FormControl id="email" pr="2">
            <Input
              backgroundColor="white"
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="hello@email.com"
              onChange={(e) => setEmail(e.target.value)}
              // value={formik.values.email}
            />
          </FormControl>
          <Button
            //isFullWidth
            fontSize=".75em"
            type="submit"
            colorScheme="gray"
            width="150px"
            onClick={subscribeEmail}
            // pl="1"
            // pr="1"
            // width="fit-content"
          >
            subscribe
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default CQuel_signup
