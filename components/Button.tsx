import { Button } from "antd";
import React from "react";
import Small from "./Small";

export default function AppButton({
  children,
  className = "",
  type = "primary",
  ...rest
}) {
  const types = {
    primary: "!bg-black !text-white",
    ghost:
      "!border !border-solid !border-black hover:!bg-black hover:!text-white !bg-transparent !text-black ",
    default: "",
  };

  return (
    <Button
      className={`!flex !items-center !justify-center !h-14 w-full text-center py-3 px-4 hover:!opacity-80 !transition !duration-200 !ease-linear ${types[type]} ${className}`}
      {...rest}
    >
      <p className="mb-0">{children}</p>
    </Button>
  );
}
