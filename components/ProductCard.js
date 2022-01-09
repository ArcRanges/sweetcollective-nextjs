import Small from "./Small";

export default function ProductCard({ tag, title, imgSrc, price, id }) {
  return (
    <div className="w-auto border cursor-pointer border-gray-200 hover:shadow-lg p-6 transition duration-200 ease-linear">
      <Small className="text-white py-1 px-2 rounded gucci-bg-yellow mb-2">
        {tag}
      </Small>
      <img src={imgSrc} height="200" className="my-4" />
      <Small bold className="block truncate mb-2">
        <p className="truncate">{title}</p>
      </Small>
      <p className="mb-2 gucci-text-red">${price}</p>
      <button className="bg-black text-white py-2 px-4 hover:opacity-50 transition duration-200 ease-linear">
        <div className="flex flex-row items-center">
          <Small className="mb-0">ADD TO CART</Small>
          &nbsp;
          <i className="uil uil-shopping-cart-alt text-lg"></i>
        </div>
      </button>
    </div>
  );
}
