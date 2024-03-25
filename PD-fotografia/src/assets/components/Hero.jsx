import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="max-w-[1050px] md:mt-[60px] mt-[20px] w-full h-auto mx-auto flex md:flex-row flex-col-reverse justify-center  ">
      <div className="w-full md:w-[500px] px-6">
        <h1 className="text-5xl md:py-6">Cześć</h1>
        <p className="mt-2">
          Zajmuję się fotografią psów i koni. Pokazanie ich atutów oraz
          charakteru to coś co definiuje moje zdjęcia. Zapewnij sobie świetną
          pamiątke ze swoim pupilem!
        </p>
        <button className="px-6 py-[10px] mt-6 text-white rounded-md text-center bg-gradient-to-r from-blue-500 to-purple-500">
          Portfolio
        </button>
      </div>
      <div className="  w-[100%] max-w-[480px] px-4 md:w-[50%] md:max-w-[480px] h-[400px]  md:ml-auto mx-auto">
        <div className="w-[100%] h-[180px] flex flex-row items-end">
          <div className="w-[70%] h-[150px] bg-purple-500"></div>
          <div className="w-[30%] h-[100%] bg-yellow-500"></div>
        </div>
        <div className="w-[100%] h-[180px]  flex flex-row">
          <div className="w-[30%] h-[150px] bg-green-500"></div>
          <div className="w-[70%] h-[100%] bg-amber-600"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
