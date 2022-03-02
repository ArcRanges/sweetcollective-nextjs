import Link from "next/link";
import Small from "./Small";

export default function ProductCard({ tag, title, imgSrc, price, slug }: any) {
  return (
    <Link href={`/product/${slug}`}>
      <div className="w-auto cursor-pointer">
        <div className="relative">
          <Small className="absolute top-4 left-4 text-white py-1 px-2 rounded gucci-bg-yellow mb-2">
            {tag}
          </Small>
          <img src={imgSrc} height="200" className="my-2" />
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

        <p className="mb-2 gucci-text-red">${price}</p>
        {/* <button className="bg-black text-white py-2 px-4 hover:opacity-50 transition duration-200 ease-linear">
        <div className="flex flex-row items-center">
          <Small className="mb-0">ADD TO CART</Small>
          &nbsp;
          <i className="uil uil-shopping-cart-alt text-lg"></i>
        </div>
      </button> */}
      </div>
    </Link>
  );
}
