import React from "react";
import Dog from "../../images/BlueBarDog.jpg";

function BlueBar() {
  return (
    <div>
      <div className="w-screen bg-[#DFF0FA] my-20">
        <div className="max-w-[900px] flex mx-auto flex-row justify-center items-start py-[0px]">
          <div className="flex flex-col items-start justify-start h-full mx-auto w-[50%]">
            <h1 className="text-center mx-auto font-semibold text-3xl py-10">
              Lorem
            </h1>
            <p1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repellat asperiores voluptatibus voluptate, quo unde sequi
              deserunt distinctio ullam alias.
            </p1>
          </div>
          <div className="w-[40%]">
            <img src={Dog}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBar;
