import { useAuthContext } from "hooks/AuthContext";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Col, Input } from "antd";
import { useCartContext } from "hooks/CartContext";
import AppButton from "components/Button";
import { useRouter } from "next/router";

const CartItems = () => {
  const router = useRouter();
  const [{ cart }, setCartState] = useCartContext();

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const quantity = parseInt(e.currentTarget.value);

    setCartState({
      type: "CHANGE_QUANTITY",
      isCustom: true,
      id,
      quantity,
    });
  };

  return (
    <Col xs={24} lg={16} className="block lg:flex lg:flex-col h-60 md:h-auto">
      <table className="w-full table-auto">
        <thead className="border">
          <tr className="text-left">
            <th className="p-3">Product Details</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Price</th>
            <th className="p-3">Total</th>
          </tr>
        </thead>
        {cart?.length > 0 && (
          <tbody>
            {cart.map((item: any, index: number) => (
              <tr
                key={item.id}
                className={`${
                  index !== cart.length - 1 ? "border-b" : ""
                } mb-3`}
              >
                <td className="pt-3">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      <Link href={`product/${item.slug}`}>
                        <a>
                          <Image
                            src={item.img_url}
                            layout="fixed"
                            width="150px"
                            height="150px"
                            objectFit="contain"
                          />
                        </a>
                      </Link>
                    </div>
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="p-3">
                  <Input
                    className="!border-0 hover:bg-gray-100 no-border !w-auto"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                  />
                </td>
                <td className="p-3">
                  <span>${item.price}</span>
                </td>
                <td className="p-3">
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {cart.length === 0 && (
        <div className="my-auto ">
          <div className="flex flex-col items-center justify-center h-40">
            <span>
              You currently do not have any items in your cart. Shop now.
            </span>
            <AppButton
              className="max-w-sm"
              onClick={() => router.push("/shop")}
            >
              SHOP NOW
            </AppButton>
          </div>
        </div>
      )}
    </Col>
  );
};

export default CartItems;
