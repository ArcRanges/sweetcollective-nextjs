import Container from "components/Container";
import Small from "components/Small";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Section({
  backgroundColor = "white",
  image,
  title,
  heading,
  content,
  buttonText,
  buttonLink,
}: SectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

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
              {heading && (
                <h1 className="mb-4 text-2xl md:text-5xl">{heading}</h1>
              )}
              {content && <div>{documentToReactComponents(content)}</div>}

              {buttonLink && buttonText && (
                <Link href={buttonLink}>
                  <div>
                    <button
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      className="px-4 py-2 text-white bg-black hover:opacity-50 "
                    >
                      <div className="flex flex-row items-center">
                        <Small className="mb-0">{buttonText}</Small>
                        &nbsp;
                        <i
                          className={`uil uil-arrow-right text-lg transition-all duration-200 ${
                            isHovered ? "translate-x-2" : ""
                          }`}
                        ></i>
                      </div>
                    </button>
                  </div>
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
