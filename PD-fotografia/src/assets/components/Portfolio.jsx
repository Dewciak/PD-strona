import React from "react";
import GalleryWithTab from "./GalleryWithTab";

function Portfolio() {
  return (
    <div className="max-w-[1050px] h-auto py-0 mx-auto pb-24 mt-8  md:mt-[-40px] ">
      <h1 className="text-center text-5xl pb-12 tracking-[3px]">Portfolio</h1>
      <GalleryWithTab />
    </div>
  );
}

export default Portfolio;
