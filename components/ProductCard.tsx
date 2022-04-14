import Image from "next/image";
import Link from "next/link";
import Small from "./Small";
import noImage from "assets/jacket.png";
import { useState } from "react";
import { Button } from "antd";

export default function ProductCard({
  tag,
  title,
  imgSrc,
  price,
  slug,
  thumbnail,
}: any) {
  const { fields } = thumbnail || "";
  const [showAddToCart, setShowAddToCart] = useState(false);

  return (
    <div className="w-auto cursor-pointer">
      <div
        className="relative overflow-hidden mb-2"
        onMouseEnter={() => setShowAddToCart(true)}
        onMouseLeave={() => setShowAddToCart(false)}
      >
        <Link href={`/product/${slug}`}>
          <Image
            src={fields ? `https:${fields?.file?.url}` : noImage}
            className=" hover:scale-125 transition-all ease-in-out duration-300"
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
          />
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
      <p className="text-md font-bold block truncate mb-0">{title}</p>

      <div className="mb-2">
        <div className="inline">
          <i className="uis uis-star text-red-400"></i>
          <i className="uis uis-star text-red-400"></i>
          <i className="uis uis-star text-red-400"></i>
          <i className="uis uis-star text-red-400"></i>
          <i className="uis uis-star-half-alt text-red-400"></i>
        </div>
      </div>

      <p className="mb-2 text-gray-500 text-md">${price}</p>
    </div>
  );
}
