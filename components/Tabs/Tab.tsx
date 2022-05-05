import React from "react";

export default function Tab({ title, children }: any) {
  return (
    <div>
      {title && <span className="text-xs">{title}</span>}
      {children}
    </div>
  );
}
