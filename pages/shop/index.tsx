import { Select, Tag } from "antd";
import Container from "components/Container";
import PageHeader from "components/PageHeader";
import ProductCard from "components/ProductCard";
import Layout from "containers/Layout/Layout";
import { useLayoutContext } from "hooks/LayoutContext";
import React from "react";
import { client } from "pages/api/client";

const { Option } = Select;

interface ShopPageProps {
  products: any;
}

export default function Shop({ products }: ShopPageProps) {
  const [layoutState, setLayoutState] = useLayoutContext();
  const { filterVisible } = layoutState;

  return (
    <Layout>
      <Container>
        <div className="flex flex-row items-center justify-between">
          <PageHeader title="Shop" />

          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center mr-5">
              <span
                className="font-bold text-blue-500 cursor-pointer"
                onClick={() =>
                  setLayoutState({
                    ...layoutState,
                    filterVisible: !filterVisible,
                  })
                }
              >
                Filters
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-bold">Sort By</span>
              <Select
                dropdownClassName="!font-bold"
                bordered={false}
                style={{ width: 120 }}
                placeholder="Select Sort"
              >
                <Option name="sort" value="price">
                  Price
                </Option>
                <Option name="sort" value="rating">
                  Rating
                </Option>
                <Option name="sort" value="popularity">
                  Popularity
                </Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
          {products.map(({ fields }, index: number) => (
            <ProductCard {...fields} key={index} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = (await client.getEntries({
    content_type: "products",
  })) as any;

  return {
    props: { products: entries?.items },
  };
}
