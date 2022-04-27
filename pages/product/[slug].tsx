import { message } from "antd";
import AppLink from "components/AppLink";
import Button from "components/Button";
import Container from "components/Container";
import Icon from "components/Icon";
import ProductCard from "components/ProductCard";
import Small from "components/Small";
import Tabs from "components/Tabs";
import Layout from "containers/Layout/Layout";
import { useAuthContext } from "hooks/AuthContext";
import { useLayoutContext } from "hooks/LayoutContext";
import products from "mock/products.json";
import { client } from "pages/api/client";
import { useState } from "react";
import { delay, truncate } from "utils";

interface ProductPageProps {
  product: {
    fields: {
      price: number;
      shortDescription: string;
      slug: string;
      tags: string[];
      thumbnail: any;
      title: string;
    };
    sys: any;
  };
}

const Title = ({ children }) => (
  <p className="font-bold font-sans text-2xl">{children}</p>
);

const Price = ({ children }) => (
  <p className="mb-3 text-3xl text-yellow-700">${children}</p>
);

export default function Product({ product }: ProductPageProps) {
  const { fields, sys } = product;
  // console.log("🚀 ~ file: [slug].tsx ~ line 36 ~ Product ~ productInfo", sys);
  const [state, setState] = useState({
    addToCartLoading: false,
    selectedTabIndex: 0,
  });
  const { addToCartLoading, selectedTabIndex } = state;
  const [layoutState, setLayoutState] = useLayoutContext();
  const [authState, setAuthState] = useAuthContext();
  const { cart } = authState;
  const relatedProducts: any = [...products].splice(0, 4);
  const { id, url, title, price, tags, description }: any = {
    id: 1,
    url: "https://i.etsystatic.com/24311168/c/2331/1853/39/49/il/3e601d/3011045358/il_340x270.3011045358_41dz.jpg",
    title:
      "FLORA Dangles | Polymer Clay Earrings | Pressed Flower Earrings | Pressed Daisy Dangles Earrings | Ceramic Earrings | Minimalist Boho",
    price: 37.99,
    tags: ["Earring"],
    slug: "flora-dangles-polymer-clay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.",
  };

  const isActiveTab = (index: number) => selectedTabIndex === index;

  const handleAddToCart = async (id: string) => {
    setState({ ...state, addToCartLoading: true });
    await delay(1000);
    setState({ ...state, addToCartLoading: false });
    setLayoutState({ ...layoutState, cartVisible: true });

    // check if item id already exists
    const item = cart.find((cartItem: any) => cartItem.id === id);

    if (item) {
      const newCart = cart.map((cartItem: any) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setAuthState({
        ...authState,
        cart: newCart,
      });
    } else {
      // not found
      setAuthState({
        ...authState,
        cart: [
          ...cart,
          {
            id,
            name: truncate(fields.title),
            price: fields.price.toFixed(2),
            img_url: `https:${fields?.thumbnail?.fields?.file?.url}`,
            quantity: 1,
          },
        ],
      });
    }
    message.success("Added to Cart");
  };

  return (
    <Layout>
      <Container className="py-10">
        <div className="mb-10 grid md:grid-cols-2 md:gap-16">
          <div className="">
            <div className="mb-4">
              <img
                src={`https:${fields?.thumbnail?.fields?.file?.url}`}
                className="w-full"
                height="500"
                width="500"
              />
            </div>
          </div>
          <div>
            <Title>{fields?.title}</Title>
            <Price>{fields?.price?.toFixed(2)}</Price>
            <p className="mb-3">{fields?.shortDescription}</p>

            <div className="flex justify-between mb-3">
              <Button className="w-14 mr-3">
                <Icon name="heart" />
              </Button>
              <Button
                className=""
                onClick={() => handleAddToCart(sys.id)}
                loading={addToCartLoading}
              >
                ADD TO CART
              </Button>
              <Button className="w-14 ml-3">
                <Icon name="share" />
              </Button>
            </div>
            <div>
              <Button type="ghost">BUY NOW</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-b py-10">
          <div className="flex flex-row justify-center">
            <div className="mr-10">
              <AppLink
                href="#"
                className={`${
                  isActiveTab(0)
                    ? "hover:!opacity-100 border-b-2 border-yellow-700"
                    : ""
                }`}
                onClick={(e: any) => e.preventDefault()}
              >
                <span
                  className={`cursor-pointer text-2xl ${
                    !isActiveTab(0) ? "text-gray-300" : "text-black"
                  } `}
                  onClick={() => setState({ ...state, selectedTabIndex: 0 })}
                >
                  Description
                </span>
              </AppLink>
            </div>
            <div className="mr-10">
              <AppLink
                href="#"
                className={`${
                  isActiveTab(1)
                    ? "hover:!opacity-100 border-b-2 border-yellow-700"
                    : ""
                }`}
                onClick={(e: any) => e.preventDefault()}
              >
                <span
                  className={`cursor-pointer text-2xl ${
                    !isActiveTab(1) ? "text-gray-300" : "text-black"
                  }`}
                  onClick={() => setState({ ...state, selectedTabIndex: 1 })}
                >
                  More Information
                </span>
              </AppLink>
            </div>
            <div>
              <AppLink
                href="#"
                className={`${
                  isActiveTab(2)
                    ? "hover:!opacity-100 border-b-2 border-yellow-700"
                    : ""
                }`}
                onClick={(e: any) => e.preventDefault()}
              >
                <span
                  className={`cursor-pointer text-2xl ${
                    !isActiveTab(2) ? "text-gray-300" : "text-black"
                  }`}
                  onClick={() => setState({ ...state, selectedTabIndex: 2 })}
                >
                  Reviews
                </span>
              </AppLink>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="grid md:grid-cols-2 gap-16">
            <Tabs activeTabIndex={selectedTabIndex}>
              <Tabs.Tab title="Description">
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
              </Tabs.Tab>
              <Tabs.Tab title="More Information">
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
              </Tabs.Tab>
              <Tabs.Tab title="Reviews">
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
              </Tabs.Tab>
            </Tabs>

            <div className="flex justify-center">
              <img src="https://demo3.drfuri.com/supro/wp-content/uploads/sites/3/2018/05/6b-470x600.jpg" />
            </div>
          </div>
        </div>

        <div className="py-10">
          <p className="font-bold text-xl mb-3 text-center">Related Products</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
