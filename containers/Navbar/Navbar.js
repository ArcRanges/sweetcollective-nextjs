import AppLink from "components/AppLink";
import Small from "components/Small";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <div className="py-5 flex flex-row justify-between items-center w-full">
          <div className="inline">
            <AppLink className="mx-2 !border-0" href="/">
              <Small className="font-bold">SWEETCOLLECTIVECO</Small>
            </AppLink>
          </div>
          <div className="inline">
            <AppLink className="mx-2" href="/blog">
              <Small className="font-bold">Blog</Small>
            </AppLink>
            <AppLink className="mx-2" href="/faq">
              <Small className="font-bold">FAQ</Small>
            </AppLink>
            <AppLink className="mx-2" href="/support">
              <Small className="font-bold">Support</Small>
            </AppLink>
            <AppLink className="mx-2" href="/about">
              <Small className="font-bold">About Us</Small>
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  );
}
