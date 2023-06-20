import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import React from 'react'
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
//import SEO from '../components/SEO'
//import Nav from '../components/Nav.jsx'
//import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
builder.init('3d66fe99c10643848fbb66599e9e1f8f')

export async function getStaticProps({ params }) {
  /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise()
  /* 
    modified default from null to "/" because I want the default path to 
    always fall back to the home page 
  */
  return {
    props: {
      page: page ?? '/',
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  /*
      Fetch all published pages for the current model.
      Using the `fields` option will limit the size of the response
      and only return the `data.url` field from the matching pages.
    */
  const pages = await builder.getAll('page', {
    fields: 'data.url', // only request the `data.url` field
    options: { noTargeting: true },
    limit: 0,
  })

  return {
    paths: pages.map((page) => `${page?.data?.url}`),
    fallback: true,
  }
}

export default function Page({ page }) {
  const router = useRouter()
  /*
    This flag indicates if you are viewing the page in the Builder editor.
  */
  const isPreviewing = useIsPreviewing()

  if (router.isFallback) {
    return <h1>And breathe...</h1>
  }

  const title = page?.data?.title ?? 'No Title'
  const description = page?.data?.description ?? 'No Description'

  /*
    Add your error page here. This will happen if there are no matching
    content entries published in Builder.
  */
  if (!page && !isPreviewing) {
    //return <h1>DEBUG: Error here ...</h1>;
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        {/* 
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>CQuel</title>
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

        <meta property="og:title" content="CQuel" />
        <meta
          property="og:description"
          content="Effectively implementing your Net Zero strategy at scale."
        />
        <meta property="og:url" content="https://www.cquel.io/" />

        <meta property="og:image" content="https://www.cquel.io/cquel_OG.jpg" />
        <meta property="og:site_name" content="CQuel" />
        <meta property="og:locale" content="en_UK" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CQuel" />
        <meta
          name="twitter:description"
          content="Effectively implementing your Net Zero strategy at scale."
        />

        <meta name="twitter:site" content="CQuel" />
        <meta
          name="twitter:image"
          content="https://www.cquel.io/cquel_OG.jpg"
        />

        <link rel="canonical" href="https://www.cquel.io/" />

        <link rel="icon" href="/favicon.ico" />
      */}
      </Head>

      {
      /* Render the Builder page 
      <BuilderComponent model="page" content={page} />
      <BuilderComponent model="sitefooter" />
      */
      }
      <div className='container'> 
        <h1>EvolVR ... coming Soon ...</h1>
        <style jsx>{`
        .container {
          margin: auto;
          width: 50%;
          padding: 10px;
        }
        h1 {
          font-size: 40px;
        }
        `}</style>
      </div>
    </>
  )
}
