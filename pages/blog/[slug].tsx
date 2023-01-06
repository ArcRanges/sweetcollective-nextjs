import Container from "components/Container";
import Layout from "containers/Layout";
import { client } from "pages/api/client";
import { BLOCKS, Node, Text } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageHeader from "components/PageHeader";
import moment from "moment";
import Image from "next/image";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const { file } = node.data.target.fields;
      return (
        <div className="w-1/2">
          <Image src={`https:${file?.url}`} width="250" height="250" />
        </div>
      );
    },
    [BLOCKS.PARAGRAPH]: (node: any) => {
      return <p className="article-font">{node.content[0].value}</p>;
    },
    [BLOCKS.LIST_ITEM]: (node: any) => {
      return (
        <li className="ml-3 list-disc">
          <p className="article-font">{node.content[0].content[0].value}</p>
        </li>
      );
    },
  },
};

export default function Post({
  pageTitle,
  content,
  createdAt,
  updatedAt,
}: any) {
  return (
    <Layout>
      <Container style={{ maxWidth: 600 }}>
        <PageHeader
          title={pageTitle}
          subtitle={`Posted ${moment(createdAt).fromNow()} on ${moment(
            createdAt
          ).format("MMMM DD, YYYY")} `}
        />
        {documentToReactComponents(content, options)}
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  // query for content with type page
  const pageEntries = await client.getEntries({
    content_type: "post",
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
    content_type: "post",
    "fields.slug": params.slug,
  })) as any;

  const { fields, sys } = items[0];
  return {
    props: {
      pageTitle: fields.title,
      content: fields.content,
      createdAt: sys.createdAt,
      updatedAt: sys.updatedAt,
    },
    revalidate: 10,
  };
}
