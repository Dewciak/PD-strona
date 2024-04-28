import React from "react";
import { UnderlineTabs } from "../UnderLineTabs";

function Pakiety() {
  return (
    <div
      id="Packages"
      className="max-w-[1150px] h-[1800px] sm:h-auto  mx-auto md:mt-32 pt-20 z-1 relative  "
    >
      <h1 className="text-5xl  trackig-widest font-semibold text-center">
        Pakiety
      </h1>
      <p className="text-center text-gray-500 text-semibold pt-2 tracking-widest pb-[50px] text-3xl">
        sesja
      </p>
      <UnderlineTabs />
    </div>
  );
}

export default Pakiety;
