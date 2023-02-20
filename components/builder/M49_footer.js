import Link from 'next/link'
import { Logo } from '../Logo'
import { useState } from 'react'
import Subscribe from '../../lib/mailerlite'
import { toast, ToastContainer } from 'react-toastify'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  FormControl,
  Button,
  Input,
  useToast,
} from '@chakra-ui/react' 

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export const M49_footer = (props) => {
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
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              &copy; {new Date().getFullYear()} {props.brand_name}. All rights
              reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            {props.product.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            {props.company.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            {props.support.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            {props.social.map((menu, idx) => (
              <div key={idx}>
                <Link href={menu.url}>{menu.caption} </Link>
              </div>
            ))}
          </Stack>
        </SimpleGrid>

        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />

        <FormControl id="email" pr="2">
          <Input
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


      </Container>
    </Box>

  )
}

export default M49_footer
