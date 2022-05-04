import React from "react";
import Tab from "./Tab";
import TabSelect from "./TabSelect";

export default function Tabs({ activeTabIndex, children }: any) {
  if (!children) throw new Error("Children is required for this component");

  if (Object.keys(children).length === 1) {
    <div>{children}</div>;
  }

  // children more than 1
  return <div>{children[activeTabIndex]}</div>;
}

Tabs.Tab = Tab;
Tabs.TabSelect = TabSelect;
