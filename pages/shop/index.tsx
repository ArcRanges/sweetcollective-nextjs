import Container from "components/Container";
import PageHeader from "components/PageHeader";
import ProductCard from "components/ProductCard";
import Layout from "containers/Layout/Layout";
import React from "react";

import products from "mock/products.json";

export default function Shop() {
  return (
    <Layout>
      <Container>
        <PageHeader title={"Shop All"} />
        {/* 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-10">
         
        </div> */}

        <div className="grid md:grid-cols-4">
          <div className="col-span-0 md:col-span-1">
            <div className="hidden md:block ">
              <span className="font-bold mb-3">Filter Products</span>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Jewelry
                </label>
              </div>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Necklace
                </label>
              </div>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Studs
                </label>
              </div>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Bracelet
                </label>
              </div>

              <span className="font-bold mb-3">Category</span>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Jewelry
                </label>
              </div>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Necklace
                </label>
              </div>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Studs
                </label>
              </div>
              <div>
                <label htmlFor="#tag_jewelry">
                  <input type="checkbox" /> Bracelet
                </label>
              </div>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
              {products.map(({ url, ...rest }, index) => (
                <ProductCard imgSrc={url} {...rest} key={index} />
              ))}
              {products.map(({ url, ...rest }, index) => (
                <ProductCard imgSrc={url} {...rest} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
