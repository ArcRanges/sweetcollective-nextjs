import Container from "components/Container";
import ContactForm from "components/Forms/ContactForm";
import PageHeader from "components/PageHeader";
import Layout from "containers/Layout/Layout";
import React from "react";

export default function index() {
  return (
    <Layout>
      <Container className="px-5 md:px-10 lg:px-0">
        <PageHeader title={"Contact Us"} />
        <ContactForm />
      </Container>
    </Layout>
  );
}
