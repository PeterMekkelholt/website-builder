import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Router from 'next/router'
import Head from 'next/head';

export default function Page({ page }) {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function onSubmit(data) {
    axios
    .post("https://eoybedhwtqhuxat.m.pipedream.net", data)
    .then((response) => {
      Router.push('/')
    })
    .catch((e) => console.error(e)); 
  }

  return (
      <>

      <Head>
        <title>Waitlist </title>
      </Head>


<form onSubmit={handleSubmit(onSubmit)} method="post">
  <label htmlFor="last">Email:</label>
  <input {...register("email")} ></input>

  <label htmlFor="first">First name:</label>
  <input {...register("first_name")}></input>
  
  <label htmlFor="last">Last name:</label>
  <input {...register("last_name")}></input>

  <button role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
</form>

      </>
    );
  }