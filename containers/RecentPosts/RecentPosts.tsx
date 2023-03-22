import Container from "components/Container";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function RecentPosts({ posts }: any) {
  return (
    <div className="py-10 bg-gray-100">
      <Container>
        <h2 className="my-3 font-serif text-5xl text-center">Recent Posts</h2>
        <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:grid-cols-3">
          {posts?.map(({ fields }, key: number) => (
            <Link href={`/blog/${fields?.slug}`} key={key}>
              <div className="transition-all duration-500 bg-white shadow-md cursor-pointer p-7 hover:shadow-lg hover:bg-cashmere-300">
                <span className="block mb-2 text-2xl font-bold">
                  {fields?.title}
                </span>
                <Image
                  src={`https:${fields?.featuredImage?.fields?.file?.url}`}
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
