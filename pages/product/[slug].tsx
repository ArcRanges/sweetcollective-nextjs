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
import { useState } from "react";
import { delay } from "utils";

export default function Product() {
  const [state, setState] = useState({
    addToCartLoading: false,
    selectedTabIndex: 0,
  });
  const { addToCartLoading, selectedTabIndex } = state;
  const [layoutState, setLayoutState] = useLayoutContext();
  const [authState, setAuthState] = useAuthContext();
  const { cart } = authState;
  const relatedProducts = [...products].splice(0, 4);
  const { id, url, title, price, tags, description }: any = {
    id: 1,
    url: "https://i.etsystatic.com/24311168/c/2331/1853/39/49/il/3e601d/3011045358/il_340x270.3011045358_41dz.jpg",
    title:
      "FLORA Dangles | Polymer Clay Earrings | Pressed Flower Earrings | Pressed Daisy Dangles Earrings | Ceramic Earrings | Minimalist Boho",
    price: 37.99,
    tag: ["Earring"],
    slug: "flora-dangles-polymer-clay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus mollis venenatis mi, ac luctus ipsum finibus et.",
  };

  const isActiveTab = (index: number) => selectedTabIndex === index;

  const handleAddToCart = async (id: number) => {
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
      return;
    }

    // not found
    setAuthState({
      ...authState,
      cart: [
        ...cart,
        {
          id,
          name: "Flora Dangles...",
          price: 37.99,
          img_url:
            "https://i.etsystatic.com/24311168/c/2331/1853/39/49/il/3e601d/3011045358/il_340x270.3011045358_41dz.jpg",
          size: "M",
          color: "Green",
          quantity: 1,
        },
      ],
    });
  };

  return (
    <Layout>
      <Container className="py-10">
        {/* <PageHeader title={"FLORA Dangles | Polymer Clay Earrings"} /> */}
        <div className="mb-10">
          <Small>Home / Product / Flora Dangles Polymer Clay</Small>
        </div>

        <div className="mb-10 grid md:grid-cols-2 md:gap-16">
          <div className="">
            <div className="mb-4">
              <img src={url} className="w-full" height="500" width="500" />
            </div>
            <div className="grid grid-cols-4">
              <img className="mx-auto" src={url} height="100" width="100" />
              <img className="mx-auto" src={url} height="100" width="100" />
              <img className="mx-auto" src={url} height="100" width="100" />
              <img className="mx-auto" src={url} height="100" width="100" />
            </div>
          </div>
          <div>
            <p className="font-bold font-sans text-2xl">{title}</p>

            <p className="mb-3 text-3xl text-yellow-700">${price}</p>

            <p className="mb-3">{description}</p>

            <div className="flex justify-between mb-3">
              <Button className="w-14 mr-3">
                <Icon name="heart" />
              </Button>
              <Button
                className=""
                onClick={() => handleAddToCart(99)}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(({ url, ...rest }, key) => (
              <ProductCard imgSrc={url} {...rest} key={key} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const { data: posts } = await (
//     await fetch(`${BASE_API_URL}/api/posts`)
//   ).json();

//   const paths = posts.map((post) => ({
//     params: { slug: post.attributes.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   //   console.log(params);
//   const { slug } = params;

//   const { data } = await (
//     await fetch(`${BASE_API_URL}/api/posts?filters[slug][$eq]=${slug}`)
//   ).json();

//   const post = data[0];

//   return {
//     props: { post },
//   };
// }
