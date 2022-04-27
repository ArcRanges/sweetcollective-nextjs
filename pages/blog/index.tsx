import Container from "components/Container";
import PageHeader from "components/PageHeader";
import Layout from "containers/Layout/Layout";
import { client } from "pages/api/client";
import React from "react";
import PostItem from "./components/PostItem";

export default function index({ posts }: any) {
  return (
    <Layout>
      <Container>
        <PageHeader title="Blog" />
        <div className="grid grid-cols-3 gap-8 py-3">
          {posts?.map(({ fields, sys }: any, key: number) => (
            <PostItem
              key={key}
              slug={fields?.slug}
              title={fields?.title}
              createdAt={sys?.createdAt}
              imgUrl={fields?.featuredImage?.fields?.file?.url}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const { items: posts } = (await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
  })) as any;

  return {
    props: {
      posts,
    },
  };
}
