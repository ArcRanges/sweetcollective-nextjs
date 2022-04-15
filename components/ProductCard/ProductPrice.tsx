import React from "react";
import { useProductCardContext } from "./ProductCard";

export default function ProductPrice() {
  const { state } = useProductCardContext();
  const { price } = state;

  return <p className="mb-2 text-gray-500 text-md">${price}</p>;
}
