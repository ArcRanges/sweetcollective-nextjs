import React from "react";
import Image from "next/image";
import noImage from "assets/jacket.png";
import { useProductCardContext } from "./ProductCard";

export default function ProductCardImage() {
  const { state } = useProductCardContext();
  const { showAddToCart, thumbnail } = state;
  const { fields } = thumbnail ?? null;

  const className = showAddToCart ? "scale-125" : "";

  const imageSrc = fields ? `https:${fields?.file?.url}` : noImage;

  return (
    <Image
      src={imageSrc}
      className={`transition-all ease-in-out duration-300 ${className}`}
      layout="responsive"
      width="100%"
      height="100%"
      objectFit="contain"
    />
  );
}
