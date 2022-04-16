import React from "react";
import { useProductCardContext } from "./ProductCard";

export default function ProductTitle() {
  const { state } = useProductCardContext();
  const { title } = state;

  return <p className="text-md font-bold block truncate mb-0">{title}</p>;
}
