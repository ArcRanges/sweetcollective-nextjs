import { Badge } from "antd";
import AppLink from "components/AppLink";
import Icon from "components/Icon";
import { useCartContext } from "hooks/CartContext";
import { useLayoutContext } from "hooks/LayoutContext";
import React from "react";

export default function Navbar() {
  const [{ cart }] = useCartContext();
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
        <div className="flex flex-row items-center justify-between w-full px-5 py-5 md:px-10 xl:px-0">
          <div className="flex flex-row items-center justify-between">
            <Icon name="bars" className="md:hidden" />
            <AppLink className="!pb-0 md:pb-2 !border-0 ml-2 md:ml-0" href="/">
              <span className="uppercase text-md">SWEETCOLLECTIVECO</span>
            </AppLink>
          </div>
          <div className="hidden md:flex md:flex-row md:items-center">
            <div className="mr-5">
              <AppLink
                className="mx-2 text-black hover:text-black"
                href="/shop"
              >
                <span className="uppercase text-md">Shop</span>
              </AppLink>
              <AppLink
                className="mx-2 text-black hover:text-black"
                href="/blog"
              >
                <span className="uppercase text-md">Blog</span>
              </AppLink>
              <AppLink className="mx-2 text-black hover:text-black" href="/faq">
                <span className="uppercase text-md">FAQ</span>
              </AppLink>
              <AppLink
                className="mx-2 text-black hover:text-black"
                href="/about"
              >
                <span className="uppercase text-md">About Us</span>
              </AppLink>
              <AppLink
                className="ml-2 text-black hover:text-black"
                href="/contact"
              >
                <span className="uppercase text-md">Contact</span>
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
              {/* <Icon name="user" className="ml-3 cursor-pointer" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
