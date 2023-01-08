import AppButton from "components/Button";
import React from "react";

interface ProductInfoProps {
  addToCartLoading: boolean;
  title: string;
  price: number;
  shortDescription: string;
  handleAddToCart: () => void;
}

const Title = ({ children }) => (
  <p className="mb-3 font-sans text-2xl font-bold">{children}</p>
);

const Price = ({ children }) => (
  <p className="mb-3 text-3xl text-yellow-700">${children}</p>
);

export default function ProductInfo(fields: ProductInfoProps) {
  const { title, price, shortDescription, handleAddToCart, addToCartLoading } =
    fields;

  return (
    <div className="relative flex flex-col h-full">
      <Title>{title}</Title>
      <Price>{price?.toFixed(2)}</Price>

      <div className="flex flex-col items-stretch h-full">
        <p className="my-auto ">{shortDescription}</p>

        <div className="mt-3 md:my-auto">
          <AppButton
            onClick={handleAddToCart}
            loading={addToCartLoading}
            className="!bg-red-400 !border-0 mb-3"
          >
            ADD TO CART
          </AppButton>
          <AppButton type="ghost">BUY NOW</AppButton>
        </div>
      </div>
    </div>
  );
}
