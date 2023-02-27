import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Router from 'next/router'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Subscribe from '../lib/mailerlite'
//import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
//import Navbar from '../components/Navbar';
//builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
import {
  //Button,
  FormControl,
  //Input,
  FormLabel,
  Flex,
  Box,
  Stack,
  Heading,
  useToast,
  Text,
  Textarea,
  Center,
  Input,
  Container,
  FormHelperText,
  FormErrorMessage,
  Checkbox,
  CheckboxGroup,
  Button,
} from '@chakra-ui/react'
import { Logo } from '../components/Logo'

export default function Page({ page }) {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  function onSubmit(data) {
    axios
      .post('https://eosynbo208gy57x.m.pipedream.net', data)
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
      .then((res) => {
        Subscribe.postMailerLite({
          email: data.email,
          groups: ['81177811922978791'],
          fields: {
            name: 'anonym',
            last_name: 'anonym',
          },
        })
      })
      .then(() => new Promise((resolve) => setTimeout(resolve, 5000)))
      .then((res) => {
        Router.push('/')
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
    <>
      <Head>
        <title>CQuel Sign Up</title>
        <meta name="description" content="CQuel Sign Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Effectively implementing your Net Zero strategy at scale."
        />
        <meta
          name="keywords"
          content="Net Zero, Carbon, Carbon Insetting, Carbon Management"
        />
        <link rel="icon" href="https://www.cquel.io/cquel.ico" />

        <link rel="icon" type="image" href="https://www.cquel.io/cquel.icns" />

        <meta property="og:title" content="CQuel Sign Up" />
        <meta
          property="og:description"
          content="Effectively implementing your Net Zero strategy at scale."
        />
        <meta property="og:url" content="https://www.cquel.io/" />

        <meta property="og:image" content="https://www.cquel.io/cquel_OG.jpg" />
        <meta property="og:site_name" content="CQuel Sign Up" />
        <meta property="og:locale" content="en_UK" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CQuel Sign Up" />
        <meta
          name="twitter:description"
          content="Effectively implementing your Net Zero strategy at scale."
        />

        <meta name="twitter:site" content="CQuel Sign Up" />
        <meta
          name="twitter:image"
          content="https://www.cquel.io/cquel_OG.jpg"
        />

        <link rel="canonical" href="https://www.cquel.io/" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <ToastContainer />
      <Box
        as="header"
        zIndex={'1'}
        bg="white"
        position="relative"
        top="0em"
        transition="0.5s linear"
        // boxShadow="lg"
        padding="2em"
      >
        <Center>
          <Logo></Logo>
        </Center>
        {/* <Text>Test</Text> */}
      </Box>
      <Box
        bgColor="white"
        as="section"
        padding="2em 0"
        // minH="200px"
      >
        <Stack as={Box} textAlign={'center'} spacing={{ base: 2, md: 4 }}>
          <Heading
            as="h2"
            fontFamily="Poppins"
            size="2xl"
            color="brand.darkBlue"
            fontWeight="extrabold"
            letterSpacing="tight"
            fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}
          >
            Contact Us
          </Heading>

          <Text
            as="p"
            color="brand.darkBlue"
            pt="2em"
            fontSize="lg"
            fontWeight="regular"
            margin="1em 0"
          >
            Want a demo, have a question or just want to say hi? We’d love to
            hear from you.
          </Text>
        </Stack>
        <Box
          as="section"
          bg="bg-surface"
          pt="12"
          pb={{
            base: '4',
            md: '8',
          }}
        >
          <Container maxW="lg">
            <Stack spacing="10">
              <form onSubmit={handleSubmit(onSubmit)} method="post">
                <FormControl
                  variant="floating"
                  id="email"
                  isRequired
                  // isInvalid
                >
                  <Input placeholder=" " />
                  <FormLabel>Email address</FormLabel>
                  <FormHelperText>email@domain.com</FormHelperText>
                  <FormErrorMessage>Your email is invalid</FormErrorMessage>
                  <input {...register('email')}></input>
                </FormControl>
                <FormControl
                  variant="floating"
                  id="first_name"
                  isRequired
                  // isInvalid
                >
                  <Input placeholder=" " />
                  <FormLabel for="first">First name:</FormLabel>
                  <FormHelperText>Jane</FormHelperText>
                  <FormErrorMessage>
                    Your first name is invalid
                  </FormErrorMessage>
                  <input {...register('first_name')}></input>
                </FormControl>
                <FormControl
                  variant="floating"
                  id="last_name"
                  isRequired
                  // isInvalid
                >
                  <Input placeholder=" " />
                  <FormLabel for="last">Last name:</FormLabel>
                  <FormHelperText>Doe</FormHelperText>
                  <FormErrorMessage>Your last name is invalid</FormErrorMessage>
                  <input {...register('last_name')}></input>
                </FormControl>
                <FormControl
                  variant="floating"
                  id="company_name"
                  isRequired
                  // isInvalid
                >
                  <Input placeholder=" " />
                  <FormLabel for="last">Company name:</FormLabel>
                  <FormHelperText>Acme Co</FormHelperText>
                  <FormErrorMessage>
                    Your Company name is invalid
                  </FormErrorMessage>
                  <input {...register('company_name')}></input>
                </FormControl>
                <FormControl
                  variant="floating"
                  id="role"
                  isRequired
                  // isInvalid
                >
                  <Input placeholder=" " />
                  <FormLabel for="last">Role:</FormLabel>
                  <FormHelperText>Manager</FormHelperText>
                  <FormErrorMessage>Please add a role.</FormErrorMessage>
                  <input {...register('role')}></input>
                </FormControl>
                <FormControl
                  variant="floating"
                  id="role"
                  isRequired
                  // isInvalid
                >
                  <Textarea placeholder=" " />
                  <FormLabel for="last">Message:</FormLabel>
                  <FormHelperText>How can we help?</FormHelperText>
                  <FormErrorMessage>
                    Please write a message for us.
                  </FormErrorMessage>
                  <input {...register('message')} type="textarea"></input>
                </FormControl>
                <Stack spacing={5} direction="column">
                  <Checkbox>Checkbox Title 1</Checkbox>
                  <Checkbox>Checkbox Title 2</Checkbox>
                  <Checkbox>Checkbox Title 3</Checkbox>
                  <Checkbox>Checkbox Title 4</Checkbox>
                </Stack>

                <Button
                  role="submit"
                  width="fit-content"
                  mt="2em"
                  variant="carbon"
                >
                  {isSubmitting ? 'Submitting' : 'Submit'}
                </Button>
              </form>
            </Stack>
          </Container>
        </Box>
      </Box>

      {/* 
<BuilderComponent model="footer" />
*/}
    </>
  )
}
