import { Row, Col } from "antd";
import { useAuthContext } from "hooks/AuthContext";
import { useCartContext } from "hooks/CartContext";
import React, { useCallback } from "react";

export default function CartTotal() {
  const [{ cart }] = useCartContext();

  const getCartTotal = useCallback(() => {
    let total = 0;
    cart.map((item: any) => (total += item.price * item.quantity));
    return total;
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <Row className="px-5 py-2">
          <Col xs={12}>
            <span className="text-2xl">Cart Total</span>
          </Col>
          <Col xs={12}>
            <span className="text-2xl font-bold">
              ${getCartTotal().toFixed(2)}
            </span>
          </Col>
        </Row>
      ) : (
        <div className="px-5 py-2">
          <span>No items in cart</span>
        </div>
      )}
    </>
  );
}
