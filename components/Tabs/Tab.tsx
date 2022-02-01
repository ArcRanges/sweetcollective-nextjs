import React from "react";

export default function Tab({ title, children }) {
  return (
    <div>
      <span className="text-xs">{title}</span>
      {children}
    </div>
  );
}
