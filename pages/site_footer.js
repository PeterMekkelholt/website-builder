import { BuilderComponent, builder } from '@builder.io/react'

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY)

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '')
  const sitefooter = await builder
    .get('sitefooter', { userAttributes: { urlPath } })
    .toPromise()

  return {
    props: {
      sitefooter: sitefooter || null,

    },
  }
}

export default function Page({ sitefooter }) {
  return (
    <>
    <BuilderComponent
      content={sitefooter}
      model="sitefooter" />
  </>
  )
}



