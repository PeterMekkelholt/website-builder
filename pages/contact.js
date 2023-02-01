import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Router from 'next/router'
import Head from 'next/head';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import Navbar from '../components/Navbar';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function Page({ page }) {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function onSubmit(data) {
    axios
    .post("https://eosynbo208gy57x.m.pipedream.net", data)
    .then((response) => {
      Router.push('/')
    })
    .catch((e) => console.error(e)); 
  }

  return (
      <>

      <Head>
        <title>Contact Us</title>
      </Head>

      <Navbar/>

<form onSubmit={handleSubmit(onSubmit)} method="post">
  <label for="last">Email:</label>
  <input {...register("email")} ></input>

  <label for="first">First name:</label>
  <input {...register("first_name")}></input>
  
  <label for="last">Last name:</label>
  <input {...register("last_name")}></input>

  <label for="last">Company name:</label>
  <input {...register("company_name")}></input>

  <label for="last">Role:</label>
  <input {...register("role")}></input>
  
  <label for="last">Message:</label>
  <input {...register("message")} type="textarea"></input>

  <button role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
</form>

      <BuilderComponent model="footer" />
      </>
    );
  }