import React from "react";
import GalleryWithTab from "./GalleryWithTab";
import { Link } from "react-scroll";
function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="max-w-[1050px] h-auto py-0 mx-auto md:mt-0 md:mb-32 md:pt-0 pt-16"
    >
      <h1 className="text-center text-6xl pb-4 md:my-14 tracking-[5px] font-light text-titleGray">
        Portfolio
      </h1>
      {/* <h2 className="text-center text-lg pb-10 tracking-[0px] font-[Lora] text-gray-500 font-normal text-[17px] leading-[34px]">
        Zobacz kilka z moich zdjęć
      </h2> */}
      <GalleryWithTab />
    </div>
  );
}

export default Portfolio;
