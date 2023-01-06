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
            <p className="mb-3">
              Hi there! My name is Sweetcel and I am the founder of Sweet
              Collective Co. I started this company with the goal of bringing
              unique, handmade clay jewelry to customers all around the world.
            </p>
            <p className="mb-3">
              I have always had a passion for creating with my hands, and I've
              always dreamed of starting my own business. However, it wasn't
              until I was laid off from my job during the start of the pandemic
              that I finally had the push I needed to take the leap and turn my
              dream into a reality.
            </p>
            <p className="mb-3">
              I am thrilled to be able to share my passion for clay jewelry with
              others, and I hope that my pieces bring joy and beauty to your
              life. Thank you for supporting my small business and for being a
              part of this new beginning.
            </p>
            <p>Thanks for visiting my page.</p>
            <Image src={xoxoImg} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
