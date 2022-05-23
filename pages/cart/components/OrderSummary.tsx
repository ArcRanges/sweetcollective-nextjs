import { Col, Row, Select, Input, Button } from "antd";
import AppButton from "components/Button";
import { useCartContext } from "hooks/CartContext";
import React, { useCallback } from "react";

const { Option } = Select;

export default function OrderSummary() {
  const [{ cart }] = useCartContext();

  const getCartTotal = useCallback(() => {
    let total = 0;
    cart.map((item: any) => (total += item.price * item.quantity));
    return total;
  }, [cart]);

  return (
    <Col xs={24} lg={8} className="mt-5 md:mt-0">
      <div className="bg-gray-100 p-7">
        <h4 className="text-xl font-bold border-b pb-3 uppercase">
          Order Summary
        </h4>
        <div className="flex flex-col justify-between items-stretch">
          <Row className="pt-3 mb-3">
            <Col xs={12}>ITEMS: {cart.length}</Col>
            <Col xs={12} className="text-right">
              ${getCartTotal().toFixed(2)}
            </Col>
          </Row>

          <Row className="pt-3">
            <Col xs={24}>SHIPPING</Col>
            <Col xs={24}>
              <Select
                className="w-full shipping-select"
                dropdownClassName=" !py-3 !px-4 !border-0"
                defaultValue={1}
              >
                <Option value={1}>FedEx Express (3 - 5 days) - $22.02</Option>
                <Option value={2}>FedEx Standard (5 - 7 days) - $15.02</Option>
                <Option value={3}>UPS (5 - 7 days) - $11.02</Option>
              </Select>
            </Col>
          </Row>

          <Row className="pt-3 border-t my-5">
            <Col xs={12}>TOTAL COST</Col>
            <Col xs={12} className="text-right">
              ${getCartTotal().toFixed(2)}
            </Col>
          </Row>

          <Row className="pt-3">
            <Col xs={24}>
              <Input.Group compact>
                <Input
                  className="!py-3 !px-4 !border-0"
                  style={{ width: "calc(100% - 76px)" }}
                  placeholder="DISCOUNT CODE"
                />
                <Button
                  className="!py-3 !px-4 !border-0 !w-auto !h-auto"
                  type="primary"
                >
                  APPLY
                </Button>
              </Input.Group>
            </Col>
            <Col xs={24}>
              <AppButton className="my-5 ">CHECKOUT</AppButton>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
}
