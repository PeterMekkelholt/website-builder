import { BuilderComponent, builder } from '@builder.io/react'
import Link from 'next/link'

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY)

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '')
  const site_footer = await builder
    .get('site_footer', { userAttributes: { urlPath } })
    .toPromise()

  return {
    props: {
      site_footer: site_footer || null,

    },
  }
}

export default function Page({ site_footer }) {
  return (
    <>
    <BuilderComponent
      content={site_footer}
      model="site_footer" />
  </>
  )
}



