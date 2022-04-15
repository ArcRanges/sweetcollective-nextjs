import FeaturesSection from "containers/FeaturesSection";
import Layout from "containers/Layout/Layout";
import Newsletter from "containers/Newsletter";
import ProductCollection from "containers/ProductCollection";
import Section from "containers/Section";
import { createClient } from "contentful";

const sectionTypes = {
  section: Section,
  productCollection: ProductCollection,
  featuresSection: FeaturesSection,
};

export default function Home(props: any) {
  return (
    <Layout>
      {props.sections.map((section: any, key: number) => {
        const Component = sectionTypes[section.sys.contentType.sys.id];
        if (Component) return <Component {...section.fields} key={key} />;
        return null;
      })}

      {/* <div className="px-5 md:px-10">
        <Container className="p-3">
          <h2 className="text-3xl font-serif text-center my-3">Recent Posts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
            <div className="col-span-2 row-span-1">
              <Link href="/blog">
                <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
                  <span className="text-2xl block font-bold mb-2">
                    What Makes A Great Artist
                  </span>
                  <Image
                    src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
                    height="200"
                    width="300"
                  />
                </div>
              </Link>
            </div>
            <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
              <span className="text-2xl block font-bold mb-2">
                Top 10 Tools That I Use
              </span>
              <Image
                src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
                height="200"
                width="300"
              />
            </div>
            <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
              <span className="text-2xl block font-bold mb-2">
                A Day In A Life of an Artist
              </span>
              <Image
                src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
                height="200"
                width="300"
              />
            </div>
            <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
              <span className="text-2xl block font-bold mb-2">
                Upgrading My Home Desk
              </span>
              <Image
                src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
                height="200"
                width="300"
              />
            </div>
            <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
              <span className="text-2xl block font-bold mb-2">
                Upgrading My Home Desk
              </span>
              <Image
                src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
                height="200"
                width="300"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
                <span className="text-2xl block font-bold mb-2">
                  What Makes A Great Artist
                </span>
                <Image
                  src="https://i.etsystatic.com/22564438/r/il/4898d2/2979021780/il_794xN.2979021780_8n3o.jpg"
                  height="200"
                  width="300"
                />
              </div>
            </div>
          </div>
        </Container>
      </div> */}

      <Newsletter />
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { fields: page } = (await client.getEntry("5DZxYkJ3V6xzX6rmsaZp2K", {
    include: 2,
  })) as any;

  return {
    props: { sections: page.sections },
  };
}
