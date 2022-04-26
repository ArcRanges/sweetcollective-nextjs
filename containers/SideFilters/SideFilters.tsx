import { Checkbox, Drawer, Radio, Space } from "antd";
import Icon from "components/Icon";
import { useAppContext } from "hooks/AppContext";
import { useLayoutContext } from "hooks/LayoutContext";
import React from "react";

const options = [
  { label: "Hot", value: "hot" },
  { label: "New", value: "new" },
  { label: "Trending", value: "trending" },
  { label: "Seasonal", value: "seasonal" },
  { label: "Limited", value: "limited" },
];

const SectionTitle = ({ children }) => (
  <h3 className="text-2xl font-semibold">{children}</h3>
);

const Span = ({ children }) => (
  <span className="text-md hover:text-cashmere-600 transition-all ease-in-out">
    {children}
  </span>
);

export default function SideFilters() {
  const [appState, setAppState] = useAppContext();
  const tags = appState?.shopFilters?.tags ?? [];
  const sort = appState?.shopFilters?.sort ?? -1;

  const [layoutState, setLayoutState] = useLayoutContext();
  const { filterVisible } = layoutState;

  const onClose = () =>
    setLayoutState({
      ...layoutState,
      filterVisible: !layoutState.filterVisible,
    });

  const onSortSelect = (e: any) =>
    setAppState({
      ...appState,
      shopFilters: { ...appState.shopFilters, sort: e?.target?.value },
    });

  const onTagsSelect = (checkedValues: any) =>
    setAppState({
      ...appState,
      shopFilters: { ...appState.shopFilters, tags: checkedValues },
    });

  return (
    <Drawer
      closeIcon={<Icon name="times" />}
      placement="right"
      onClose={onClose}
      visible={filterVisible}
      headerStyle={{ borderBottom: 0 }}
      bodyStyle={{ padding: 30 }}
    >
      <div className="mb-4">
        <SectionTitle>Sort By</SectionTitle>
        <Radio.Group onChange={onSortSelect} value={sort}>
          <Space direction="vertical">
            <Radio name="sort" value={-1}>
              <Span>Default</Span>
            </Radio>
            <Radio name="sort" value="popular">
              <Span>Popularity</Span>
            </Radio>
            <Radio name="sort" value="rating">
              <Span>Average Rating</Span>
            </Radio>
            <Radio name="sort" value="newest">
              <Span>Newest</Span>
            </Radio>
            <Radio name="sort" value="highest_price">
              <Span>Highest Price</Span>
            </Radio>
            <Radio name="sort" value="lowest_price">
              <Span>Lowest Price</Span>
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="mb-4">
        <SectionTitle>Tags</SectionTitle>
        <Checkbox.Group className="w-full" onChange={onTagsSelect} value={tags}>
          <Space
            direction="horizontal"
            className="flex-col justify-start !items-stretch w-full"
          >
            {options.map(({ label, value }) => (
              <Checkbox className="block" value={value} key={value}>
                <Span>{label}</Span>
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </div>
    </Drawer>
  );
}
