import Container from "components/Container";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function RecentPosts({ posts }: any) {
  return (
    <div className="bg-gray-100 py-10">
      <Container>
        <h2 className="text-5xl font-serif text-center my-3">Recent Posts</h2>
        <div className="grid grid-cols-2 md:grid-cols-3  gap-8 py-4">
          {posts?.map(({ fields }, key: number) => (
            <Link href={`/blog/${fields?.slug}`} key={key}>
              <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-500">
                <span className="text-2xl block font-bold mb-2">
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
