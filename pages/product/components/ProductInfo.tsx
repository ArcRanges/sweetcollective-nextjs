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
  <p className="mb-3 font-bold font-sans text-2xl">{children}</p>
);

const Price = ({ children }) => (
  <p className="mb-3 text-3xl text-yellow-700">${children}</p>
);

export default function ProductInfo(fields: ProductInfoProps) {
  const { title, price, shortDescription, handleAddToCart, addToCartLoading } =
    fields;

  return (
    <div className="relative">
      <Title>{title}</Title>
      <Price>{price?.toFixed(2)}</Price>

      <p className="mb-3">{shortDescription}</p>

      <div className="flex justify-between mb-3">
        <AppButton
          onClick={handleAddToCart}
          loading={addToCartLoading}
          className="!bg-red-400 !border-0"
        >
          ADD TO CART
        </AppButton>
      </div>
      <div>
        <AppButton type="ghost">BUY NOW</AppButton>
      </div>
    </div>
  );
}
