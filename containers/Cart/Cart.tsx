import { Drawer } from "antd";
import { useLayoutContext } from "hooks/LayoutContext";
import React, { useState } from "react";

export default function Cart() {
  const [layoutState, setLayoutState] = useLayoutContext();
  const { cartVisible } = layoutState;

  const onClose = () =>
    setLayoutState({ ...layoutState, cartVisible: !layoutState.cartVisible });

  return (
    <Drawer
      title="Your Cart"
      placement="right"
      onClose={onClose}
      visible={cartVisible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
