import Icon from "components/Icon";
import React from "react";

export default function ProductRating() {
  return (
    <div className="mb-2">
      <div className="inline">
        <Icon type="uis" name="star" className="text-red-400 !text-sm" />
        <Icon type="uis" name="star" className="text-red-400 !text-sm" />
        <Icon type="uis" name="star" className="text-red-400 !text-sm" />
        <Icon type="uis" name="star" className="text-red-400 !text-sm" />
        <Icon
          type="uis"
          name="star-half-alt"
          className="text-red-400 !text-sm"
        />
      </div>
    </div>
  );
}
