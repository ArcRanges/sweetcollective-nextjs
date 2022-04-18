import Container from "components/Container";
import PageHeader from "components/PageHeader";
import { Layout } from "containers/Layout";

export default function Blog() {
  return (
    <Layout>
      <Container className="py-10">
        <h1 className="font-sans text-2xl">How I made $10,000 in 30 days</h1>
        <p>Posted on November 21, 2022</p>

        <div className="text-lg">
          {Array(10)
            .fill(0)
            .map((_, i: number) => (
              <>
                <p key={i}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  rem praesentium unde ab amet, itaque, veritatis libero beatae
                  voluptatem reiciendis error odio aliquid veniam similique at
                  quo deserunt dicta sunt?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aut rem praesentium unde ab amet, itaque,
                  veritatis libero beatae voluptatem reiciendis error odio
                  aliquid veniam similique at quo deserunt dicta sunt?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Aut rem
                  praesentium unde ab amet, itaque, veritatis libero beatae
                  voluptatem reiciendis error odio aliquid veniam similique at
                  quo deserunt dicta sunt?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aut rem praesentium unde ab amet, itaque,
                  veritatis libero beatae voluptatem reiciendis error odio
                  aliquid veniam similique at quo deserunt dicta sunt?
                </p>
                {i % 2 === 0 && (
                  <div className="my-3 w-50">
                    <img src="https://demo3.drfuri.com/supro/wp-content/uploads/sites/3/2018/05/6b-470x600.jpg" />
                  </div>
                )}
              </>
            ))}
        </div>
      </Container>
    </Layout>
  );
}
