import Link from "next/link";
import React from "react";
import Image from "next/image";
import moment from "moment";

export default function PostItem(item: PostItemProps) {
  const { createdAt, slug, title, imgUrl } = item;

  return (
    <Link href={`/blog/${slug}`}>
      <div className="p-7 bg-white shadow-md hover:shadow-lg hover:bg-cashmere-300 cursor-pointer transition-all duration-400">
        <h3 className="text-2xl block font-bold mb-2">{title}</h3>
        <p>{`Posted ${moment(createdAt).fromNow()}`}</p>
        <Image
          src={`https:${imgUrl}`}
          height="300"
          width="300"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </Link>
  );
}
