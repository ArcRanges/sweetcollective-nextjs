import { Drawer, Empty } from "antd";
import Button from "components/Button";
import Icon from "components/Icon";
import { useAuthContext } from "hooks/AuthContext";
import { useCartContext } from "hooks/CartContext";
import { useLayoutContext } from "hooks/LayoutContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function Cart() {
  const router = useRouter();
  const [authState, setAuthState] = useAuthContext();
  const [{ cart }, setCartState] = useCartContext();
  const [layoutState, setLayoutState] = useLayoutContext();
  const { cartVisible } = layoutState;

  const onClose = () =>
    setLayoutState({ ...layoutState, cartVisible: !layoutState.cartVisible });

  const handleShopNow = () => {
    setLayoutState({ ...layoutState, cartVisible: false });
    router.push("/shop");
  };

  const handleViewAll = () => {
    setLayoutState({ ...layoutState, cartVisible: false });
    router.push("/cart");
  };

  const handleRemoveItem = (id: number) => {
    setCartState({
      type: "REMOVE_ITEM",
      id,
    });
  };

  const handleChangeQuantity = (
    id: string,
    type: string,
    quantity?: number
  ) => {
    switch (type) {
      case "DEC": {
        return setCartState({
          type: "CHANGE_QUANTITY",
          id,
          quantity: -1,
        });
      }
      case "INC": {
        return setCartState({
          type: "CHANGE_QUANTITY",
          id,
          quantity: 1,
        });
      }
      case "CUS": {
        return setCartState({
          type: "CHANGE_QUANTITY",
          id,
          quantity: isNaN(quantity) ? 0 : quantity,
        });
      }
    }
  };

  return (
    <Drawer
      closeIcon={<Icon name="times" />}
      title={
        <div className="flex flex-row justify-between">
          <span>Your Order</span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={handleViewAll}
          >
            View All
          </span>
        </div>
      }
      placement="right"
      onClose={onClose}
      visible={cartVisible}
      footer={<CartTotal />}
    >
      {cart.map((cartItem: any, i: number) => (
        <CartItem
          {...cartItem}
          key={i}
          handleRemove={handleRemoveItem}
          handleChangeQuantity={handleChangeQuantity}
          className={i === cart.length - 1 ? "mb-10" : ""}
        />
      ))}

      {!cart.length && (
        <Empty description="Start adding items to cart">
          <Button onClick={handleShopNow}>Shop Now</Button>
        </Empty>
      )}
    </Drawer>
  );
}
