import FeaturesSection from "containers/FeaturesSection";
import Layout from "containers/Layout/Layout";
import ProductCollection from "containers/ProductCollection";
import RecentPosts from "containers/RecentPosts";
import Section from "containers/Section";
import { createClient } from "contentful";

const sectionTypes = {
  section: Section,
  productCollection: ProductCollection,
  featuresSection: FeaturesSection,
  posts: RecentPosts,
};

export default function Home(props: any) {
  return (
    <Layout>
      {props.sections.map((section: any, key: number) => {
        const Component = sectionTypes[section.sys.contentType.sys.id];
        if (Component) return <Component {...section.fields} key={key} />;
        return null;
      })}
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
