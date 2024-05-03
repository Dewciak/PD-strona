import React from "react";
import Dog from "../../images/BlueBarDog.jpg";

function BlueBar() {
  return (
    <div>
      <div className="w-screen bg-[#DFF0FA] md:my-20 my-10 ">
        <div className="max-w-[900px] flex mx-auto md:flex-row flex-col justify-center md:items-start items-center py-[0px]">
          <div className="flex flex-col px-6 md:items-start items-center justify-center md:justify-start h-full mx-auto md:w-[50%]">
            <h1 className="text-center mx-auto text-3xl py-10 tracking-[5px] font-light">
              Lorem
            </h1>
            <p1 className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repellat asperiores voluptatibus voluptate, quo unde sequi
              deserunt distinctio ullam alias.
            </p1>
          </div>
          <div className="md:w-[40%] w-[90%] my-4 md:my-0">
            <img src={Dog}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBar;
