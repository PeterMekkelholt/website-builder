import Router from 'next/router'
import Head from 'next/head';
import { ToastContainer } from 'react-toastify'

//import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
//import Navbar from '../components/Navbar';
//builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
import {
    //Button,
    FormControl,
    //Input,
    FormLabel,
    //Flex,
    useToast,
  } from '@chakra-ui/react'

export default function Page({ page }) {
    const toast = useToast()
    
    function login() {
      toast({
        title: 'Login Unsuccessful.',
        description: "Apologies the Vendor Area is currently offline .",
        status: 'warn',
        duration: 5000,
        isClosable: true,
      })
    }
  return (
      <>
      <Head>
        <title>Login Up</title>
      </Head>
        {/* <Navbar /> */}
        <ToastContainer />
  <FormControl>
    <FormLabel for="email">Email address</FormLabel>
    <input id="email" ></input>
  </FormControl>
  <FormControl for="password">
    <FormLabel for="Password">Password:</FormLabel>
    <input id="password" ></input>
  </FormControl>

  <button role="submit" onClick={login}>Log in</button>

{/* 
<BuilderComponent model="footer" />
*/}
      </>
    );
  }