import Container from "components/Container";
import DynamicSection from "components/DynamicSection";
import PageHeader from "components/PageHeader";
import Layout from "containers/Layout";
import { createClient } from "contentful";
import React from "react";
import { client } from "./api/client";

export default function Page(props: PageProps) {
  const { pageTitle, sections } = props;
  return (
    <Layout>
      <Container>
        <PageHeader title={pageTitle ?? "Untitled Page"} />
      </Container>
      <DynamicSection sections={sections} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // query for content with type page
  const pageEntries = await client.getEntries({
    content_type: "page",
  });

  // generate paths by mapping through entries
  const paths = pageEntries.items.map((entry: any) => {
    return {
      params: {
        slug: entry.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // query the proper page based on slug (unique)
  const { items } = (await client.getEntries({
    content_type: "page",
    "fields.slug": params.slug,
  })) as any;

  const page = items[0].fields;

  return {
    props: {
      pageTitle: page.title,
      sections: page.sections,
    },
  };
}
