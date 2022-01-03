import Layout from "containers/Layout/Layout";
import { BASE_API_URL } from "settings/constants";

export default function Home({ posts }) {
  return (
    <Layout>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.attributes.title}</li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: posts } = await (
    await fetch(`${BASE_API_URL}/api/posts?populate=author`)
  ).json();

  return {
    props: { posts },
  };
}
