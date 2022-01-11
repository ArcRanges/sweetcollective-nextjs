import Container from "components/Container";
import Layout from "containers/Layout/Layout";
import Small from "components/Small";
import { BASE_API_URL } from "settings/constants";
import { themeColors } from "settings/theme";

import sampleProduct from "assets/sample-product.png";
import womenImg from "assets/women.png";
import Image from "next/image";
import ProductCard from "components/ProductCard";
import Link from "next/link";

// export default function Home({ posts }) {
export default function Home() {
  return (
    <Layout>
      <div
        className="px-5 md:px-10"
        style={{ backgroundColor: themeColors.primary }}
      >
        <Container>
          <div className="w-full py-20">
            <div className="grid md:grid-cols-2">
              <div className="">
                <Small bold className="block mb-4 gucci-text-red">
                  New Collection
                </Small>
                <h1 className="text-5xl mb-4 w-1/2">WINTER WONDERLAND 2022</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Nulla
                  sollicitudin, massa quis vulputate gravida, risus nulla mattis
                  sapien, non molestie eros velit varius magna. Sed eu magna in
                  turpis faucibus consequat nec efficitur urna. Phasellus
                  sagittis iaculis leo, ac vehicula libero. augue.
                </p>

                <Link href="/shop">
                  <button className="bg-black text-white py-2 px-4 hover:opacity-50 transition duration-200 ease-linear">
                    <div className="flex flex-row items-center">
                      <Small className="mb-0">SHOP NOW</Small>
                      &nbsp;
                      <i className="uil uil-arrow-right text-lg"></i>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="!hidden md:!block">
                <Image src={sampleProduct} height="500" width="500" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-100">
        <Container>
          <div className="px-20 py-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <i className="uil uil-plane mr-2 mb-2 text-gray-700 text-2xl"></i>
                <Small bold className="mb-2 text-gray-700">
                  Free Worldwide Shipping
                </Small>
                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mollis venenatis mi, ac luctus ipsum finibus et.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="uil uil-corner-down-left mr-2 text-gray-700 mb-2 text-2xl"></i>
                <Small bold className="mb-2 text-gray-700">
                  30-day Free Returns
                </Small>
                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mollis venenatis mi, ac luctus ipsum finibus et.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="uil uil-truck mr-2 mb-2 text-gray-700 text-2xl"></i>
                <Small bold className="mb-2 text-gray-700">
                  Express Delivery
                </Small>
                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mollis venenatis mi, ac luctus ipsum finibus et.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="px-5 md:px-10">
        <Container className="md:border-b border-gray-200">
          <div className="w-full py-20">
            <div className="grid md:grid-cols-2">
              <div className="">
                <Small bold className="block mb-4 gucci-text-red">
                  Our Story
                </Small>
                <h1 className="text-5xl mb-4 md:w-1/2">CARED FOR SINCE 2021</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mollis venenatis mi, ac luctus ipsum finibus et. Nulla
                  sollicitudin, massa quis vulputate gravida, risus nulla mattis
                  sapien, non molestie eros velit varius magna. Sed eu magna in
                  turpis faucibus consequat nec efficitur urna. Phasellus
                  sagittis iaculis leo, ac vehicula libero. augue.
                </p>

                <Link href="/shop">
                  <button className="bg-black text-white py-2 px-4 hover:opacity-50 transition duration-200 ease-linear">
                    <div className="flex flex-row items-center">
                      <Small className="mb-0">SHOP NOW</Small>
                      &nbsp;
                      <i className="uil uil-arrow-right text-lg"></i>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="text-center hidden md:block">
                <Image src={womenImg} height="400" width="400" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="px-5 md:px-10">
        <Container className="my-10">
          <h1 className="text-5xl">Hottest Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-10">
            <ProductCard
              tag="Earring"
              imgSrc="https://i.etsystatic.com/24311168/c/2331/1853/39/49/il/3e601d/3011045358/il_340x270.3011045358_41dz.jpg"
              title="FLORA Dangles | Polymer Clay Earrings | Pressed Flower Earrings | Pressed Daisy Dangles Earrings | Ceramic Earrings | Minimalist Boho"
              price="37.99"
            />
            <ProductCard
              tag="Studs"
              imgSrc="https://i.etsystatic.com/24311168/r/il/3625b5/3230346094/il_680x540.3230346094_mta3.jpg"
              title="FLORA Dangles | Polymer Clay Earrings | Pressed Flower Earrings | Pressed Daisy Dangles Earrings | Ceramic Earrings | Minimalist Boho"
              price="37.99"
            />
            <ProductCard
              tag="Earring"
              imgSrc="https://i.etsystatic.com/24311168/r/il/401bdb/3278081893/il_340x270.3278081893_ijod.jpg"
              title="WILLOW Dangles |Polymer Clay Earrings | Statement Earring Simple, Stainless Steel, Dangle Clay Hypoallergenic Jewelry | Ceramic Jewelry Gift"
              price="32.99"
            />
            <ProductCard
              tag="Earring"
              imgSrc="https://i.etsystatic.com/24311168/r/il/489995/3058739123/il_340x270.3058739123_qwek.jpg"
              title="Shell Trinket Dish | Sea Shell Candle Dish | Handmade Jesmonite Sea Shell Trinket Tray | Jewellery Dish | Gift for Her | Ceramic Decoration"
              price="29.99"
            />
            <ProductCard
              tag="Earring"
              imgSrc="https://i.etsystatic.com/24311168/c/2331/1853/39/49/il/3e601d/3011045358/il_340x270.3011045358_41dz.jpg"
              title="FLORA Dangles | Polymer Clay Earrings | Pressed Flower Earrings | Pressed Daisy Dangles Earrings | Ceramic Earrings | Minimalist Boho"
              price="37.99"
            />
            <ProductCard
              tag="Studs"
              imgSrc="https://i.etsystatic.com/24311168/r/il/3625b5/3230346094/il_680x540.3230346094_mta3.jpg"
              title="FLORA Dangles | Polymer Clay Earrings | Pressed Flower Earrings | Pressed Daisy Dangles Earrings | Ceramic Earrings | Minimalist Boho"
              price="37.99"
            />
            <ProductCard
              tag="Earring"
              imgSrc="https://i.etsystatic.com/24311168/r/il/401bdb/3278081893/il_340x270.3278081893_ijod.jpg"
              title="WILLOW Dangles |Polymer Clay Earrings | Statement Earring Simple, Stainless Steel, Dangle Clay Hypoallergenic Jewelry | Ceramic Jewelry Gift"
              price="32.99"
            />
            <ProductCard
              tag="Earring"
              imgSrc="https://i.etsystatic.com/24311168/r/il/489995/3058739123/il_340x270.3058739123_qwek.jpg"
              title="Shell Trinket Dish | Sea Shell Candle Dish | Handmade Jesmonite Sea Shell Trinket Tray | Jewellery Dish | Gift for Her | Ceramic Decoration"
              price="29.99"
            />
          </div>
          <p className="block text-center">
            <Small bold className="cursor-pointer">
              View More
            </Small>
          </p>
        </Container>
      </div>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const { data: posts } = await (
//     await fetch(`${BASE_API_URL}/api/posts?populate=author`)
//   ).json();

//   return {
//     props: { posts },
//   };
// }
