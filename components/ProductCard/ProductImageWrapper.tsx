import { Button, message } from "antd";
import Tag from "components/Tag";
import { useCartContext } from "hooks/CartContext";
import { useLayoutContext } from "hooks/LayoutContext";
import Link from "next/link";
import React from "react";
import { truncate } from "utils";
import { useProductCardContext } from "./ProductCard";
import ProductCardImage from "./ProductCardImage";

export default function ProductImageWrapper() {
  const { state, handlers } = useProductCardContext();
  const [layoutState, setLayoutState] = useLayoutContext();
  const [cartState, setCartState] = useCartContext();
  const { showAddToCart, ...productProps } = state;
  const { id, slug, tags = [] } = productProps;
  const { onMouseEnter, onMouseLeave } = handlers;

  const href = `/product/${slug}`;

  const handleAddToCart = () => {
    const item = {
      id,
      name: truncate(productProps.title),
      slug: productProps.slug,
      price: productProps.price.toFixed(2),
      img_url: `https:${productProps?.thumbnail?.fields?.file?.url}`,
      quantity: 1,
    };

    setCartState({
      type: "ADD_TO_CART",
      item,
    });

    setLayoutState({ ...layoutState, cartVisible: true });
    message.success("Added to Cart");
  };

  return (
    <div
      className="relative mb-2 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {tags.length > 0 && <Tag>{tags[0]}</Tag>}
      <Link href={href} passHref>
        <a>
          <ProductCardImage />
        </a>
      </Link>
      <div
        className={`absolute bottom-0 h-10 w-full bg-white transition-all ease-in ${
          showAddToCart ? "" : "translate-y-10"
        }`}
      >
        <div className="flex items-center justify-between px-3 py-1">
          <Button
            type="link"
            className="!m-0 !p-0 !text-red-400"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <i className="text-red-400 uil uil-heart"></i>
        </div>
      </div>
    </div>
  );
}
