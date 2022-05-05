import Icon from "components/Icon";
import React, { useReducer } from "react";
import AppButton from "components/Button";
import HeartButton from "components/HeartButton";

interface ProductInfoProps {
  addToCartLoading: boolean;
  title: string;
  price: number;
  shortDescription: string;
  handleAddToCart: () => void;
}

const Title = ({ children }) => (
  <p className="font-bold font-sans text-2xl">{children}</p>
);

const Price = ({ children }) => (
  <p className="mb-3 text-3xl text-yellow-700">${children}</p>
);

export default function ProductInfo(fields: ProductInfoProps) {
  const { title, price, shortDescription, handleAddToCart, addToCartLoading } =
    fields;
  const [isLiked, setIsLiked] = useReducer((prev) => !prev, false);
  return (
    <div>
      <Title>{title}</Title>
      <Price>{price?.toFixed(2)}</Price>
      <p className="mb-3">{shortDescription}</p>

      <div className="flex justify-between mb-3">
        {/* <AppButton className="w-14 mr-3">
          <Icon name="heart" />
        </AppButton> */}
        <HeartButton onChange={setIsLiked} checked={isLiked} className="mr-3" />
        <AppButton
          onClick={handleAddToCart}
          loading={addToCartLoading}
          className="!bg-red-400 !border-0"
        >
          ADD TO CART
        </AppButton>
        <AppButton type="ghost" className="w-14 ml-3 !border-0">
          <Icon name="share" />
        </AppButton>
      </div>
      <div>
        <AppButton type="ghost">BUY NOW</AppButton>
      </div>
    </div>
  );
}
