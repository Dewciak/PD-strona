import React from "react";
import GalleryWithTab from "./GalleryWithTab";
import { Link } from "react-scroll";
function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="max-w-[1050px] h-auto py-0 mx-auto mt-6 pt-20 "
    >
      <h1 className="text-center text-6xl pb-12 tracking-[3px]">Portfolio</h1>
      <GalleryWithTab />
    </div>
  );
}

export default Portfolio;
