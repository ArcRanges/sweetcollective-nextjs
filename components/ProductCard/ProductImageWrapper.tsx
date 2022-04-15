import { Button } from "antd";
import Tag from "components/Tag";
import Link from "next/link";
import React from "react";
import { useProductCardContext } from "./ProductCard";
import ProductCardImage from "./ProductCardImage";

export default function ProductImageWrapper() {
  const { state, handlers } = useProductCardContext();
  const { showAddToCart, slug, tags = [] } = state;
  const { onMouseEnter, onMouseLeave } = handlers;

  const href = `/product/${slug}`;

  return (
    <div
      className="relative overflow-hidden mb-2"
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
        <div className="flex items-center justify-between py-1 px-3">
          <Button type="link" className="!m-0 !p-0 !text-red-400">
            Add to Cart
          </Button>
          <i className="uil uil-heart text-red-400"></i>
        </div>
      </div>
    </div>
  );
}
