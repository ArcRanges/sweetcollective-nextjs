import { Drawer, Empty } from "antd";
import Button from "components/Button";
import Icon from "components/Icon";
import { useAuthContext } from "hooks/AuthContext";
import { useLayoutContext } from "hooks/LayoutContext";
import { useRouter } from "next/router";
import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function Cart() {
  const router = useRouter();
  const [authState, setAuthState] = useAuthContext();
  const { cart } = authState;
  const [layoutState, setLayoutState] = useLayoutContext();
  const { cartVisible } = layoutState;

  const onClose = () =>
    setLayoutState({ ...layoutState, cartVisible: !layoutState.cartVisible });

  const handleRemoveItem = (id: number) => {
    const newCart = cart.filter((item: any) => item.id !== id);
    setAuthState({ ...authState, cart: newCart });
  };

  const handleShopNow = () => {
    setLayoutState({ ...layoutState, cartVisible: false });
    router.push("/shop");
  };

  const handleChangeQuantity = (
    id: number,
    type: string,
    quantity?: number
  ) => {
    const newCart = cart
      .map((cartItem: any) => {
        if (cartItem.id === id) {
          if (type === "INC") cartItem.quantity++;
          if (type === "DEC") cartItem.quantity--;
          if (type === "CUS")
            cartItem.quantity = isNaN(quantity) ? 0 : quantity;
        }
        return cartItem;
      })
      .filter((cartItem: any) => cartItem.quantity !== 0);

    setAuthState({ ...authState, cart: newCart });
  };

  return (
    <Drawer
      closeIcon={<Icon name="times" />}
      title="Your Order"
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
