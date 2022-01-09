import AppLink from "components/AppLink";
import Icon from "components/Icon";
import Small from "components/Small";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <div className="px-5 md:px-10 lg:px-0 py-5 flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-between items-center">
            <Icon name="bars" className="md:hidden" />
            <AppLink className="mx-2 !pb-0 md:pb-2 !border-0" href="/">
              <Small className="font-bold">SWEETCOLLECTIVECO</Small>
            </AppLink>
          </div>
          <div className="hidden md:inline">
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
