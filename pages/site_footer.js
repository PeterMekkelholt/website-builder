import { BuilderComponent, builder } from '@builder.io/react'

// Replace with your Public API Key.
builder.init('f104907a790a45e18dff1f6d55a358ab')

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



