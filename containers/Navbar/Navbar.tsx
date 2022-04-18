import { Badge } from "antd";
import AppLink from "components/AppLink";
import Icon from "components/Icon";
import Small from "components/Small";
import { useAuthContext } from "hooks/AuthContext";
import { useLayoutContext } from "hooks/LayoutContext";
import React from "react";

export default function Navbar() {
  const [{ cart }] = useAuthContext();
  const [layoutState, setLayoutState] = useLayoutContext();
  const { cartVisible } = layoutState;

  const toggleCart = () =>
    setLayoutState({ ...layoutState, cartVisible: !cartVisible });

  const getCartItemCount = () => {
    let count = 0;
    cart.map((cartItem: any) => {
      count += cartItem.quantity;
    });
    return count;
  };

  return (
    <div className="shadow">
      <div className="container mx-auto">
        <div className="px-5 md:px-10 xl:px-0 py-5 flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-between items-center">
            <Icon name="bars" className="md:hidden" />
            <AppLink className="!pb-0 md:pb-2 !border-0 ml-2 md:ml-0" href="/">
              <span className="text-md">SWEETCOLLECTIVECO</span>
            </AppLink>
          </div>
          <div className="hidden md:flex md:flex-row md:items-center">
            <div className="mr-5">
              <AppLink
                className="mx-2 text-black hover:text-black"
                href="/shop"
              >
                <span className="text-md">Shop</span>
              </AppLink>
              <AppLink
                className="mx-2 text-black hover:text-black"
                href="/blog"
              >
                <span className="text-md">Blog</span>
              </AppLink>
              <AppLink className="mx-2 text-black hover:text-black" href="/faq">
                <span className="text-md">FAQ</span>
              </AppLink>
              <AppLink
                className="mx-2 text-black hover:text-black"
                href="/about-us"
              >
                <span className="text-md">About Us</span>
              </AppLink>
              <AppLink
                className="ml-2 text-black hover:text-black"
                href="/contact"
              >
                <span className="text-md">Contact</span>
              </AppLink>
            </div>
            <div className="flex flex-row">
              <Badge count={getCartItemCount()} size="small">
                <Icon
                  className={`cursor-pointer ${
                    cartVisible ? "text-cashmere-800" : ""
                  }`}
                  name="shopping-cart-alt"
                  onClick={toggleCart}
                />
              </Badge>
              <Icon name="user" className="ml-3 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
