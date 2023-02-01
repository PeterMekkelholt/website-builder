//import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import Router from 'next/router'
import Head from 'next/head';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import Navbar from '../components/Navbar';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function Page({ page }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

async function onSubmit({ first_name, last_name, email, company_name, role, message }, e) {
  const formData = new FormData()
  formData.append('email', email)
  formData.append('first_name', first_name)
  formData.append('last_name', last_name)
  formData.append('company_name', company_name)
  formData.append('role', role)
  formData.append('message', message)

  const requestOptions = {
    method: 'POST',
    body: formData,
  }
//    await setSubmit(true)
    const response = await fetch('/api/contact-us', requestOptions)
//    setSubmit(false)

    const data = await response.json()
    console.log(data)
    if (data.status == 'success') {
      /*
      setDialogContents({
        title: 'THANKS FOR CONTACTING US!',
        message:
          'Business hours are: Monday - Friday: 8am to 5pm EST. We’ll have a real human from our sales team reply to you as quickly as possible!',
        button: 'Close',
      })
      e.target.reset()
      */
    } else {
      /* setDialogContents({
        title: 'Error',
        message: 'Contact Fail.',
        button: 'Cancel',
      })
      */
    }
    //setOpen(true)
  }

  return (
      <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <Navbar/>

    <form onSubmit={handleSubmit(onSubmit)}>      
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