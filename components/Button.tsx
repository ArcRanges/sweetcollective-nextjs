import React from "react";
import Small from "./Small";

export default function Button({
  children,
  className = "",
  type = "primary",
  ...rest
}) {
  const types = {
    primary: "bg-black text-white",
    ghost:
      "border hover:bg-black hover:text-white bg-transparent text-black border-solid border-black",
  };

  return (
    <button
      className={`h-14 w-full text-center py-3 px-4 hover:opacity-50 transition duration-200 ease-linear ${types[type]} ${className}`}
      {...rest}
    >
      <p className="mb-0">{children}</p>
    </button>
  );
}
