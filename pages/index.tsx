import DynamicSection from "components/DynamicSection";
import Layout from "containers/Layout/Layout";
import { client } from "./api/client";

export default function Home({ sections }: any) {
  return (
    <Layout>
      <DynamicSection sections={sections} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { fields: page } = (await client.getEntry("5DZxYkJ3V6xzX6rmsaZp2K", {
    include: 2,
  })) as any;

  return {
    props: { sections: page.sections },
    revalidate: 10,
  };
}
