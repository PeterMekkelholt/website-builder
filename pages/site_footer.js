import { BuilderComponent, builder } from '@builder.io/react'

// Replace with your Public API Key.
builder.init('3d66fe99c10643848fbb66599e9e1f8f')

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



