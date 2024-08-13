import { Row, Col, Input } from "antd";
import Icon from "components/Icon";
import React, { ChangeEvent } from "react";

import Image from "next/image";

export default function CartItem({
  id,
  name,
  price,
  img_url,
  size,
  color,
  quantity,
  className = "",
  handleRemove,
  handleChangeQuantity,
}: any) {
  return (
    <Row key={id} className={`relative border-b ${className}`}>
      <Col xs={8} className="p-3">
        <Image src={img_url} height="300" width="300" layout="responsive" />
      </Col>
      <Col xs={16} className="p-3">
        <h4>{name}</h4>
        <Icon
          name="times"
          className="absolute right-0 text-gray-500 cursor-pointer top-2"
          onClick={() => handleRemove(id)}
        />
        {/* <Row>
          <Col xs={12}>Size: {size}</Col>
          <Col xs={12}>Color: {color}</Col>
        </Row> */}
        <Row className="mt-2">
          <Col xs={24}>
            <div className="flex flex-row justify-between align-center">
              <span className="font-bold ">${price}</span>
              <span>Qty: {quantity}</span>
            </div>
          </Col>
        </Row>
      </Col>
      {/* <Col xs={24}>
        <div className="flex flex-row items-center justify-around">
          <Icon
            name="plus"
            className="ml-auto text-blue-500 cursor-pointer hover:opacity-70"
            onClick={() => handleChangeQuantity(id, "INC")}
          />
          <div className="w-1/2 mx-auto">
            <Input
              pattern="/d+/"
              value={quantity}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeQuantity(id, "CUS", parseInt(e.target.value))
              }
              className="!focus:border-0 !hover:border-0 text-center"
            />
          </div>
          <Icon
            name="minus"
            className="mr-auto text-blue-500 cursor-pointer hover:opacity-70"
            onClick={() => handleChangeQuantity(id, "DEC")}
          />
        </div>
      </Col> */}
    </Row>
  );
}
