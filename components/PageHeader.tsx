import React from "react";

export default function PageHeader({ title, subtitle }: any) {
  return (
    <div className="mt-10 mb-5">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
