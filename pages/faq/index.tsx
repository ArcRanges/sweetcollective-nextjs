import Container from "components/Container";
import Layout from "containers/Layout";
import React from "react";

import { Collapse } from "antd";
import { client } from "pages/api/client";

const { Panel } = Collapse;

export default function index({ faqs }) {
  return (
    <Layout>
      <Container className="px-5 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqs.map((faq: any, i: number) => (
            <div key={i}>
              <p className="font-bold" key={i}>
                {faq.fields.title}
              </p>
              <Collapse>
                {faq.fields.entries.map((content: any, key: number) => (
                  <Panel header={content.fields.title} key={key}>
                    <p>{content.fields.content}</p>
                  </Panel>
                ))}
              </Collapse>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const { items: faqs } = (await client.getEntries({
    content_type: "faqCollection",
    order: "sys.createdAt",
  })) as any;

  return {
    props: {
      faqs,
    },
    revalidate: 10,
  };
}
