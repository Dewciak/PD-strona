import React from "react";
import GalleryWithTab from "./GalleryWithTab";
import { Link } from "react-scroll";
function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="max-w-[1050px] h-auto py-0 mx-auto md:mt-14 md:pt-14 pt-16"
    >
      <h1 className="text-center text-6xl pb-4 tracking-[5px] font-light text-titleGray">
        Portfolio
      </h1>
      <h2 className="text-center text-lg pb-10 tracking-[0px] font-[Lora] text-gray-500 font-normal text-[17px] leading-[34px]">
        Zobacz kilka z moich zdjęć
      </h2>
      <GalleryWithTab />
    </div>
  );
}

export default Portfolio;
