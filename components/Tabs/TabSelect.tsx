import AppLink from "components/AppLink";
import React from "react";

export default function TabSelect({
  options,
  activeTabIndex,
  onTabSelect,
}: TabSelectProps) {
  return (
    <div className="border-t border-b py-10">
      <div className="flex flex-row justify-center">
        {options.map((opt: string, index: number) => (
          <div className="mr-10" key={index}>
            <span
              className={`pb-2 transition duration-300 ease-linear ${
                activeTabIndex === index
                  ? "hover:opacity-70  border-yellow-700 border-b-2"
                  : " hover:border-b-2 hover:border-yellow-700"
              }`}
              onClick={() => false}
            >
              <span
                className={`cursor-pointer text-2xl ${
                  activeTabIndex !== index ? "text-gray-300" : "text-black"
                } `}
                onClick={() => onTabSelect(index)}
              >
                {opt}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
