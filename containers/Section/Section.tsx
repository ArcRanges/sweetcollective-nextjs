import Container from "components/Container";
import Small from "components/Small";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Section({
  backgroundColor = "white",
  image,
  title,
  heading,
  content,
  buttonProps,
}: SectionProps) {
  return (
    <div style={{ backgroundColor }}>
      <Container>
        <div className="w-full py-20">
          <div className="grid md:grid-cols-2">
            <div className="">
              {title && (
                <Small bold className="block mb-4 gucci-text-red">
                  {title}
                </Small>
              )}
              {heading && <h1 className="text-5xl mb-4 w-2/3">{heading}</h1>}
              {content && <p className="mb-4">{content}</p>}

              {buttonProps?.link && buttonProps?.title && (
                <Link href={buttonProps.link}>
                  <button className="bg-black text-white py-2 px-4 hover:opacity-50 transition duration-200 ease-linear">
                    <div className="flex flex-row items-center">
                      <Small className="mb-0">{buttonProps.title}</Small>
                      &nbsp;
                      <i className="uil uil-arrow-right text-lg"></i>
                    </div>
                  </button>
                </Link>
              )}
            </div>
            {image && (
              <div className="!hidden md:!block">
                <Image
                  src={`https:${image?.fields?.file?.url}`}
                  layout="responsive"
                  width="500"
                  height="500"
                  objectFit="contain"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
