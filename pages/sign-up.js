import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Router from 'next/router'
import Head from 'next/head';
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
    //Flex,
    useToast,
  } from '@chakra-ui/react'

export default function Page({ page }) {
    const toast = useToast()
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();
    
    function onSubmit(data) {
        axios
            .post("https://eosynbo208gy57x.m.pipedream.net", data)
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
            .then(() => new Promise(resolve => setTimeout(resolve, 5000)))
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
        <title>Sign Up</title>
      </Head>
        {/* <Navbar /> */}
        <ToastContainer />
<form onSubmit={handleSubmit(onSubmit)} method="post">
  <FormControl>
    <FormLabel>Email address</FormLabel>
    <input {...register("email")}></input>
  </FormControl>
  <FormControl>
    <FormLabel for="first">First name:</FormLabel>
    <input {...register("first_name")}></input>
  </FormControl>
  <FormControl>
    <FormLabel for="last">Last name:</FormLabel>
    <input {...register("last_name")}></input>
  </FormControl>  
  <FormControl>
    <FormLabel for="last">Company name:</FormLabel>
    <input {...register("company_name")}></input>
  </FormControl>
  <FormControl>
    <FormLabel for="last">Role:</FormLabel>
    <input {...register("role")}></input>
  </FormControl>
  <FormControl>  
    <FormLabel for="last">Message:</FormLabel>
    <input {...register("message")} type="textarea"></input>
  </FormControl>
  <button role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
</form>

{/* 
<BuilderComponent model="footer" />
*/}
      </>
    );
  }