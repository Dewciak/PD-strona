import React from "react";
import Footer from "./Footer";
import Navbar from "./NavbarLink";

function Credits() {
  return (
    <div id="Źródła" className="flex flex-col w-screen">
      {/*  */}
      <Navbar />
      <div className="w-screen h-[300px] md:mt-10 bg-blue-100 flex items-center justify-center">
        <h1 className="text-center   text-4xl tracking-[5px] font-light text-titleGray">
          Źródła
        </h1>
      </div>
      <div className="flex flex-col space-y-12 mx-auto max-w-[1080px] pt-16 mt h-auto justify-center items-center mb-32"></div>
      <Footer />
    </div>
  );
}

export default Credits;
