import { sectionTypes } from "pages/sections";
import React from "react";

export default function DynamicSection({ sections = [] }: any) {
  return (
    <>
      {sections.map((section: any, key: number) => {
        const Component = sectionTypes[section.sys.contentType.sys.id];
        if (Component) return <Component {...section.fields} key={key} />;
        return null;
      })}
    </>
  );
}
