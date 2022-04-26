import { Tag } from "antd";
import { useAppState } from "pages/_app";
import React from "react";

export default function TagsList() {
  const [appState, setAppState] = useAppState();
  const tags = appState?.shopFilters?.tags ?? [];

  const handleFilterRemove = (tagToRemove: string) => {
    const _tags = tags.filter(
      (tag: string) => tag.toLowerCase() !== tagToRemove
    );
    setAppState({
      ...appState,
      shopFilters: { ...appState.shopFilters, tags: _tags },
    });
  };

  return (
    <div className="mb-3">
      {tags?.map((tag: string, key: number) => (
        <Tag
          key={key}
          color="orange"
          closable
          className="!py-1 !px-2 !mb-2 md:!mb-0"
          onClose={() => handleFilterRemove(tag)}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}
