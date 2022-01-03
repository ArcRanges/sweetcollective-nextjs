import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="py-5 flex flex-row justify-between  w-full">
          <span>SweetCollectiveCo</span>
          <div className="inline">
            <span className="mr-2">Home</span>
            <span className="mr-2">About</span>
            <span className="mr-2">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}
