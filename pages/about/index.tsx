import Container from "components/Container";
import PageHeader from "components/PageHeader";
import Layout from "containers/Layout/Layout";
import Image from "next/image";
import React from "react";

import scImg from "assets/owner-img-min.png";
import xoxoImg from "assets/xoxo.jpeg";

export default function index() {
  return (
    <Layout>
      <Container className="px-5">
        <PageHeader title="About Me" />
        <div className="grid md:grid-cols-2">
          <div className="block">
            <div className="w-1/2 mx-auto">
              <Image src={scImg} />
            </div>
          </div>
          <div>
            <p className="mb-3">Hi there,</p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mollis venenatis mi, ac luctus ipsum finibus et. Nulla
              sollicitudin, massa quis vulputate gravida, risus nulla mattis
              sapien, non molestie eros velit varius magna. Sed eu magna in
              turpis faucibus consequat nec efficitur urna. Phasellus sagittis
              iaculis leo, ac vehicula libero. augue.
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mollis venenatis mi, ac luctus ipsum finibus et. Nulla
              sollicitudin, massa quis vulputate gravida, risus nulla mattis
              sapien, non molestie eros velit varius magna. Sed eu magna in
              turpis faucibus consequat nec efficitur urna. Phasellus sagittis
              iaculis leo, ac vehicula libero. augue.
            </p>
            <p>Thanks for visiting my page.</p>
            <Image src={xoxoImg} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
