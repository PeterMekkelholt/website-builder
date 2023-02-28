import React, {useState} from 'react'
import Head from 'next/head';
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
  //Flex,
  useToast,
} from '@chakra-ui/react'
import { Logo } from '../components/Logo'

export default function Page({ page }) {
  const toast = useToast()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  function login() {
    toast({
      title: 'Login Unsuccessful.',
      description: "Apologies the Vendor Area is currently offline .",
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
  <form>
    <FormControl>
    <FormLabel htmlFor="email">Email address</FormLabel>
    <input id="email" ></input>
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="Password">Password:</FormLabel>
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormControl>
    </form>



  <button role="submit" onClick={login}>Log in</button>

{/* 
<BuilderComponent model="footer" />
*/}
      </>
    );
  }