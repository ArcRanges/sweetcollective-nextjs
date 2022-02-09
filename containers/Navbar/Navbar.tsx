import AppLink from "components/AppLink";
import Icon from "components/Icon";
import Small from "components/Small";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <div className="px-5 md:px-10 xl:px-0 py-5 flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-between items-center">
            <Icon name="bars" className="md:hidden" />
            <AppLink className="!pb-0 md:pb-2 !border-0 ml-2 md:ml-0" href="/">
              <Small className="font-bold">SWEETCOLLECTIVECO</Small>
            </AppLink>
          </div>
          <div className="hidden md:inline">
            <AppLink className="mx-2" href="/shop">
              <Small className="font-bold">Shop</Small>
            </AppLink>
            <AppLink className="mx-2" href="/blog">
              <Small className="font-bold">Blog</Small>
            </AppLink>
            <AppLink className="mx-2" href="/faq">
              <Small className="font-bold">FAQ</Small>
            </AppLink>
            <AppLink className="ml-2" href="/about">
              <Small className="font-bold">About Us</Small>
            </AppLink>
            <AppLink className="mx-2" href="/contact">
              <Small className="font-bold">Contact</Small>
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  );
}
