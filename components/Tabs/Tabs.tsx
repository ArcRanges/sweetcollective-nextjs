import React, { useState } from "react";
import Tab from "./Tab";

export default function Tabs({ activeTabIndex, children }) {
  if (!children) throw new Error("Children is required for this component");

  if (Object.keys(children).length === 1) {
    <div>{children}</div>;
  }

  // children more than 1
  return <div>{children[activeTabIndex]}</div>;
}

Tabs.Tab = Tab;
