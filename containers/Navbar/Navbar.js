import Small from "components/Small";
import React from "react";

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="container mx-auto">
        <div className="p-5 flex flex-row justify-between  w-full">
          <Small className="font-bold">SWEETCOLLECTIVECO</Small>
          <div className="inline">
            <Small className="mr-3 font-bold">FAQ</Small>
            <Small className="mr-3 font-bold">Support</Small>
            <Small className="mr-3 font-bold">About Us</Small>
            <Small className="mr-3 font-bold">Contact</Small>
          </div>
        </div>
      </div>
    </div>
  );
}
