import DynamicSection from "components/DynamicSection";
import Layout from "containers/Layout/Layout";
import { createClient } from "contentful";

export default function Home({ sections }: any) {
  return (
    <Layout>
      <DynamicSection sections={sections} />
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { fields: page } = (await client.getEntry("5DZxYkJ3V6xzX6rmsaZp2K", {
    include: 2,
  })) as any;

  return {
    props: { sections: page.sections },
  };
}
