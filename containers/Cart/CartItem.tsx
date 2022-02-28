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
    <Row key={id} className={`relative p-3 ${className}`}>
      <Icon
        name="times"
        className="text-red-500 absolute -top-3 -right-3 cursor-pointer"
        onClick={() => handleRemove(id)}
      />
      <Col xs={8} className="p-3">
        <Image src={img_url} height="300" width="300" layout="responsive" />
      </Col>
      <Col xs={16} className="p-3">
        <h4 className="font-bold text-xl">{name}</h4>
        <Row>
          <Col xs={12}>Size: {size}</Col>
          <Col xs={12}>Color: {color}</Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            <h4 className="font-bold text-lg">${price}</h4>
          </Col>
        </Row>
      </Col>
      <Col xs={24}>
        <div className="flex flex-row items-center justify-around">
          <Icon
            name="plus"
            className="ml-auto cursor-pointer text-blue-500 hover:opacity-70"
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
            className="mr-auto cursor-pointer text-blue-500 hover:opacity-70"
            onClick={() => handleChangeQuantity(id, "DEC")}
          />
        </div>
      </Col>
    </Row>
  );
}
