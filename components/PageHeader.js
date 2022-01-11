import React from "react";

export default function PageHeader({ title }) {
  return (
    <div className="my-10 flex justify-between items-center">
      <h1 className="text-3xl font-sans">{title}</h1>
      <div>
        <span>Filters</span>
      </div>
    </div>
  );
}
