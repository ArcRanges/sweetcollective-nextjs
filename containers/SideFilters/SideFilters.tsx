import { Drawer, Radio, Space } from "antd";
import Icon from "components/Icon";
import { useLayoutContext } from "hooks/LayoutContext";
import React from "react";

export default function SideFilters() {
  const [layoutState, setLayoutState] = useLayoutContext();
  const { filterVisible, sortFilter } = layoutState;

  const onClose = () =>
    setLayoutState({
      ...layoutState,
      filterVisible: !layoutState.filterVisible,
    });

  const onSortSelect = (e: any) =>
    setLayoutState({ ...layoutState, sortFilter: e.target.value });

  return (
    <Drawer
      closeIcon={<Icon name="times" />}
      title="Filters"
      placement="right"
      onClose={onClose}
      visible={filterVisible}
    >
      <div className="mb-4">
        <p className="font-bold text-lg">Sort By</p>
        <Radio.Group onChange={onSortSelect} value={sortFilter}>
          <Space direction="vertical">
            <Radio name="sort" value={1}>
              Price
            </Radio>
            <Radio name="sort" value={2}>
              Rating
            </Radio>
            <Radio name="sort" value={3}>
              Popularity
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <p className="font-bold text-lg">Filter By</p>
      <p className="font-bold text-lg">Tags</p>
    </Drawer>
  );
}
