import React, { useState } from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
//import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
//import Navbar from '../components/Navbar';
//builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
  Box,
  Flex,
  Center,
  Stack,
  Heading,
  useToast,
  Container,
  SimpleGrid,
  FormHelperText,
  FormErrorMessage,
  Link,
} from '@chakra-ui/react'
import { Logo } from '../components/Logo'

export default function Page({ page }) {
  const toast = useToast()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  function login() {
    toast({
      title: 'Login Unsuccessful.',
      description: 'Apologies, this area is currently offline.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }
  return (
    <>
      <Head>
        <title>CQuel Login</title>
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
        padding="2em"
      >
        <Center>
          <Link href="/" passHref>
            <Logo></Logo>
          </Link>
        </Center>
      </Box>
      <Box bgColor="white" as="section" padding="2em 0" height="100vh">
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
            Account Login
          </Heading>
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
          <Container>
            <SimpleGrid columns={1} spacing={20}>
              <Stack spacing={5} direction="column">
                <form>
                  <FormControl variant="floating" id="email" pb="2em">
                    <Input placeholder=" " />
                    <FormLabel>Email address</FormLabel>

                    <FormErrorMessage>Your email is invalid</FormErrorMessage>
                    {/* <input {...register('email')}></input> */}
                  </FormControl>
                  <FormControl variant="floating" id="password" pb="2em">
                    {/* <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder=" "
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup> */}
                    <InputGroup>
                      <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder=" "
                      />
                      <FormLabel htmlFor="Password">Password</FormLabel>
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Center>
                    <Button
                      //type="submit"
                      width="fit-content"
                      mt="2em"
                      variant="carbon"
                      onClick={login}
                    >
                      Log in
                    </Button>
                  </Center>
                </form>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>

      {/* 
<BuilderComponent model="footer" />
*/}
    </>
  )
}
