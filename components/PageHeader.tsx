import React from "react";

export default function PageHeader({ title, subtitle }: any) {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-sans">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
