import { BuilderComponent, builder } from '@builder.io/react';

// Replace with your Public API Key.
builder.init('5104cfed9d57493fb6993382c28cd166');

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  const footer = await builder
    .get('footer', { userAttributes: { urlPath } })
    .toPromise();

  return {
    props: {
      footer: footer || null,
    },
  };
}

export default function Page({ footer }) {
  return (
    <>
      <BuilderComponent model="footer" content={footer} />
    </>
  );
}