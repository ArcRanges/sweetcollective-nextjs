import React from "react";
import Small from "./Small";

export default function Tag({ children }) {
  return (
    <Small className="absolute top-4 left-4 text-white py-1 px-2 rounded gucci-bg-yellow mb-2 z-10">
      {children}
    </Small>
  );
}
