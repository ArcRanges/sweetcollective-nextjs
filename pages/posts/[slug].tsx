import Container from "components/Container";
import Layout from "containers/Layout";
import { client } from "pages/api/client";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageHeader from "components/PageHeader";
import moment from "moment";
import Image from "next/image";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file } = node.data.target.fields;
      return (
        <div className="w-1/2">
          <Image src={`https:${file?.url}`} width="250" height="250" />
        </div>
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
      <Container>
        <PageHeader
          title={pageTitle}
          subtitle={`Posted ${moment(createdAt).fromNow()} ${moment(
            createdAt
          ).format("MMM-DD-YYYY")} `}
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
  };
}
