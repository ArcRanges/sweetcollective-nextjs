import Container from "components/Container";
import ProductCard from "components/ProductCard";
import Small from "components/Small";
import React from "react";

export default function ProductCollection({ title, subtitle, products }: any) {
  return (
    <div className="md:px-10">
      <Container className="px-0 my-10">
        <div className="px-5">
          <h1 className="text-2xl md:text-5xl">
            {title || "Untitled Section"}
          </h1>
          <Small className="block mb-4 text-gray-400">{subtitle}</Small>
        </div>
        <div className="grid grid-cols-2 gap-2 py-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {products?.map(({ fields, sys }) => (
            <ProductCard {...fields} id={sys?.id} key={sys?.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}
