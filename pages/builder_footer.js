import { BuilderComponent, builder } from '@builder.io/react';

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

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