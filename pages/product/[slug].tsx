import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { message } from "antd";
import AppButton from "components/Button";
import Container from "components/Container";
import HeartButton from "components/HeartButton";
import Icon from "components/Icon";
import ProductCard from "components/ProductCard";
import Tabs from "components/Tabs";
import Layout from "containers/Layout/Layout";
import { useAuthContext } from "hooks/AuthContext";
import { useCartContext } from "hooks/CartContext";
import { useLayoutContext } from "hooks/LayoutContext";
import products from "mock/products.json";
import { client } from "pages/api/client";
import { useReducer, useState } from "react";
import { delay, truncate } from "utils";
import ProductInfo from "_pages/product/components/ProductInfo";

interface ProductPageProps {
  product: {
    fields: Omit<ProductItem, "id">;
    sys: any;
  };
}

export default function Product({ product }: ProductPageProps) {
  const { fields, sys } = product;
  const [state, setState] = useState({
    addToCartLoading: false,
    selectedTabIndex: 0,
  });
  const { addToCartLoading, selectedTabIndex } = state;
  const [isLiked, setIsLiked] = useReducer((prev) => !prev, false);
  const [layoutState, setLayoutState] = useLayoutContext();
  const [authState, setAuthState] = useAuthContext();
  const [cartState, setCartState] = useCartContext();
  const { cart } = cartState;

  const relatedProducts: any = [...products].splice(0, 4);

  const handleAddToCart = async (id: string) => {
    setState({ ...state, addToCartLoading: true });
    await delay(1000);
    setState({ ...state, addToCartLoading: false });
    setLayoutState({ ...layoutState, cartVisible: true });

    const item = {
      id,
      name: truncate(fields.title),
      slug: fields.slug,
      price: fields.price.toFixed(2),
      img_url: `https:${fields?.thumbnail?.fields?.file?.url}`,
      quantity: 1,
    };

    setCartState({
      type: "ADD_TO_CART",
      item,
    });

    message.success("Added to Cart");
  };

  return (
    <Layout>
      <Container className="md:my-10">
        <div className="fixed bottom-0 left-0 z-10 w-full sm:hidden">
          <AppButton
            onClick={handleAddToCart}
            loading={addToCartLoading}
            className="!border-0"
          >
            ADD TO CART
          </AppButton>
        </div>

        <div className="grid mt-5 mb-10 md:grid-cols-2 md:gap-16">
          <div className="">
            <div className="relative mb-4">
              <img
                src={`https:${fields?.thumbnail?.fields?.file?.url}`}
                className="w-full"
                height="500"
                width="500"
              />
              <div className="absolute bg-white rounded-full bottom-4 left-4">
                <HeartButton onChange={setIsLiked} checked={isLiked} />
              </div>
              <div className="absolute bg-white rounded-full bottom-4 right-4">
                <AppButton
                  type="default"
                  className="w-14 !border-0 !bg-transparent"
                >
                  <Icon name="share" />
                </AppButton>
              </div>
            </div>
          </div>
          <ProductInfo
            title={fields?.title}
            price={fields?.price}
            shortDescription={fields?.shortDescription}
            handleAddToCart={() => handleAddToCart(sys.id)}
            addToCartLoading={addToCartLoading}
          />
        </div>

        <Tabs.TabSelect
          options={["Description", "Reviews"]}
          activeTabIndex={selectedTabIndex}
          onTabSelect={(id: number) =>
            setState({ ...state, selectedTabIndex: id })
          }
        />

        <div className="py-10">
          <div className="grid grid-cols-1">
            <Tabs activeTabIndex={selectedTabIndex}>
              {fields?.longDescription ? (
                <Tabs.Tab>
                  {documentToReactComponents(fields?.longDescription)}
                </Tabs.Tab>
              ) : (
                <p>No description provided.</p>
              )}
              {/* <Tabs.Tab title="More Information">
                <p className="mb-3">
                  With ultralight, quality cotton canvas, the JanSport Houston
                  backpack is ideal for a life-on-the-go. This backpack features
                  premium faux leather bottom and trim details, padded 15 in
                  laptop sleeve and tricot lined tablet sleeve
                </p>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.
                </p>
                <p className="mb-3">
                  With ultralight, quality cotton canvas, the JanSport Houston
                  backpack is ideal for a life-on-the-go. This backpack features
                  premium faux leather bottom and trim details, padded 15 in
                  laptop sleeve and tricot lined tablet sleeve
                </p>
              </Tabs.Tab> */}
              <Tabs.Tab>
                <p className="text-center">No reviews yet. Add one below.</p>
                <AppButton className="max-w-md mx-auto">Add Review</AppButton>
              </Tabs.Tab>
            </Tabs>

            {/* <div className="flex justify-center">
              <img src="https://demo3.drfuri.com/supro/wp-content/uploads/sites/3/2018/05/6b-470x600.jpg" />
            </div> */}
          </div>
        </div>

        <div className="py-10">
          <p className="mb-3 text-xl font-bold text-center">Related Products</p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {relatedProducts.map(({ fields }, key) => (
              <ProductCard {...fields} key={key} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const response = await client.getEntries({
    content_type: "products",
    "fields.slug[match]": slug,
  });

  if (response?.items?.length > 0) {
    const { fields, sys } = response.items[0];
    return {
      props: { product: { fields, sys } },
    };
  }
  return {
    props: {},
  };
}
