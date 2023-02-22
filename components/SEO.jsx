import Head from 'next/head'

function SEO({ title, description, image, url, keywords }) {
  return (
    <Head>
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
        content={
          description || 'Net Zero, Carbon, Carbon Insetting, Carbon Management'
        }
      />
      <meta property="og:url" content="https://www.cquel.io/" />

      <meta
        property="og:image"
        content={url || 'https://www.cquel.io/cquel_OG.jpg'}
      />
      <meta property="og:site_name" content="CQuel" />
      <meta property="og:locale" content="en_UK" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CQuel" />
      <meta
        name="twitter:description"
        content={
          description || 'Net Zero, Carbon, Carbon Insetting, Carbon Management'
        }
      />

      <meta name="twitter:site" content={title || 'CQuel'} />
      <meta
        name="twitter:image"
        content={url || 'https://www.cquel.io/cquel_OG.jpg'}
      />

      <link rel="canonical" href="https://www.cquel.io/" />

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap"
        rel="stylesheet"
      />

      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JN97VBX73J"
      /> */}
    </Head>
  )
}

export default SEO
