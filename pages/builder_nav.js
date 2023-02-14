import { BuilderComponent, builder } from '@builder.io/react'

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY)

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '')
  const nav = await builder
    .get('nav', { userAttributes: { urlPath } })
    .toPromise()

  return {
    props: {
      nav: nav || null,
    },
  }
}

export default function Page({ nav }) {
  return (
    <>
      <BuilderComponent model="nav" content={nav} />
    </>
  )
}
