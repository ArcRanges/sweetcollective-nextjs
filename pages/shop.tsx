import { Empty, Skeleton } from "antd";
import Container from "components/Container";
import PageHeader from "components/PageHeader";
import ProductCard from "components/ProductCard";
import Layout from "containers/Layout/Layout";
import { useLayoutContext } from "hooks/LayoutContext";
import { client } from "pages/api/client";
import { initalAppState, useAppState } from "pages/_app";
import React, { useEffect, useState } from "react";
import { delay } from "utils";
import TagsList from "components/TagsList";

const LoadingPlaceholder = () => (
  <>
    {Array(8)
      .fill(1)
      .map((item, index) => (
        <Skeleton.Button
          key={index}
          style={{ height: 360, width: "100%" }}
          active
        />
      ))}
  </>
);

export default function Shop({ products = [] }: ShopPageProps) {
  const [appState, setAppState] = useAppState();
  const [layoutState, setLayoutState] = useLayoutContext();
  const { filterVisible } = layoutState;
  const [state, setState] = useState({
    loading: false,
    products,
  });
  const { loading, products: shopProducts } = state;

  const fetchData = async (data = {}) => {
    setState({ ...state, loading: true });

    await delay(300);

    const hasFilters = Object.keys(data).length > 0;
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("/api/products", hasFilters ? payload : {});
      const entries = await response.json();

      setState({ ...state, products: entries?.items, loading: false });
    } catch (error) {
      console.log(error);
      setState({ ...state, loading: false });
    }
  };

  useEffect(() => {
    if (!shopProducts.length) fetchData();

    return () => {
      // on onmount clear filters state
      setAppState({ ...appState, shopFilters: initalAppState?.shopFilters });
    };
  }, []);
  console.log("🚀 ~ useEffect ~ shopProducts:", shopProducts);

  useEffect(() => {
    fetchData({ filters: appState?.shopFilters ?? {} });
  }, [appState?.shopFilters?.tags]);

  return (
    <Layout>
      <Container>
        <div className="flex flex-row items-center justify-between ">
          <PageHeader title="Shop" />

          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center mr-5">
              <span
                className="font-bold cursor-pointer hover:opacity-70"
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
          </div>
        </div>

        <TagsList />

        {shopProducts?.length ? (
          <div className="grid grid-cols-2 gap-2 pb-10 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-8">
            {loading ? (
              <LoadingPlaceholder />
            ) : (
              <>
                {shopProducts.map(({ fields, sys }, index: number) => (
                  <ProductCard {...fields} {...sys} key={index} />
                ))}
              </>
            )}
          </div>
        ) : (
          <Empty className="mx-auto !my-10" description="No products found" />
        )}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const entries = (await client.getEntries({
    content_type: "products",
  })) as any;

  return {
    props: { products: entries?.items },
  };
}
