import { BASE_API_URL } from "settings/constants";

export default function Post({ post }) {
  return <div>{JSON.stringify(post)}</div>;
}

export async function getStaticPaths() {
  const { data: posts } = await (
    await fetch(`${BASE_API_URL}/api/posts`)
  ).json();

  const paths = posts.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //   console.log(params);
  const { slug } = params;

  const { data } = await (
    await fetch(`${BASE_API_URL}/api/posts?filters[slug][$eq]=${slug}`)
  ).json();

  const post = data[0];

  return {
    props: { post },
  };
}
