import Container from "components/Container";
import PageHeader from "components/PageHeader";
import Layout from "containers/Layout/Layout";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <Layout>
      <Container>
        <PageHeader title="BLOG" />
        <div className="grid grid-cols-3 gap-8 py-3">
          <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
            <span className="text-2xl block font-bold mb-2">
              What Makes A Great Artist
            </span>
            <Image
              src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
              height="200"
              width="300"
            />
          </div>
          <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
            <span className="text-2xl block font-bold mb-2">
              A Heart For Everyone
            </span>
            <Image
              src="https://www.shingirl.com/media/product/K/-/K-4-.jpg"
              height="200"
              width="300"
            />
          </div>
          <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
            <span className="text-2xl block font-bold mb-2">
              A Beautiful Necklace
            </span>
            <Image
              src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
              height="200"
              width="300"
            />
          </div>
          <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
            <span className="text-2xl block font-bold mb-2">
              What Makes A Great Artist
            </span>
            <Image
              src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
              height="200"
              width="300"
            />
          </div>
          <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
            <span className="text-2xl block font-bold mb-2">
              A Heart For Everyone
            </span>
            <Image
              src="https://www.shingirl.com/media/product/K/-/K-4-.jpg"
              height="200"
              width="300"
            />
          </div>
          <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
            <span className="text-2xl block font-bold mb-2">
              A Beautiful Necklace
            </span>
            <Image
              src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
              height="200"
              width="300"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
