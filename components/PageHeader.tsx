import React from "react";

export default function PageHeader({ title, subtitle }: any) {
  return (
    <div className="mt-10 mb-5">
      <h1 className="mb-0 text-2xl font-bold md:text-4xl">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
