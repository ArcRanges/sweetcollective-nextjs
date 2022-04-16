import Container from "components/Container";
import ProductCard from "components/ProductCard";
import Small from "components/Small";
import React from "react";

export default function ProductCollection({ title, subtitle, products }: any) {
  return (
    <div className="px-5 md:px-10">
      <Container className="my-10">
        <h1 className="text-5xl">{title || "Untitled Section"}</h1>
        <Small className="block mb-4 text-gray-400">{subtitle}</Small>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-10">
          {products?.map(({ fields, sys }) => (
            <ProductCard {...fields} id={sys?.id} key={sys?.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}
