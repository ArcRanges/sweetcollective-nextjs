import Container from "components/Container";
import Small from "components/Small";
import React from "react";

export default function FeaturesSection(fields: FeaturesSectionProps) {
  if (fields?.features?.length > 0)
    return (
      <div className="bg-gray-100">
        <Container>
          <div className="py-10 md:px-20">
            <div className="grid gap-8 sm:grid-cols-3">
              {fields?.features?.map(({ fields }: any) => (
                <div className="flex flex-col items-center" key={fields?.title}>
                  <i
                    className={`uil uil-${fields?.icon} mr-2 mb-2 text-gray-700 text-2xl`}
                  ></i>
                  <Small bold className="mb-2 text-center text-gray-700">
                    {fields?.title}
                  </Small>
                  <p className="text-sm text-center">{fields?.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );

  return null;
}
