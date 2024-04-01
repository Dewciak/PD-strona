import React, { useEffect } from "react";
import AboutImage from "../images/About-img.png";
import Animals from "../images/animals.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div
      id="About"
      className="max-w-[1050px] h-auto md:h-screen mx-auto md:pt-8 overflow-hidden bg-white rounded-xl shadow-[#0000000d]"
    >
      <div className="w-full text-center">
        <h1 className="text-5xl mt-12 md:mt-0 tracking-[3px]">Profesjonalna</h1>
        <h2 className="text-2xl py-4 text-gray-500 tracking-[3px]">
          Fotografia Zwierząt
        </h2>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center md:mt-6 ">
        <div className="flex flex-col md:w-[45%] pl-4">
          <h1
            data-aos="slide-right"
            className="text-4xl pb-8 font-bold tracking-[3px] bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent md:mt-0 bg-clip-text mt-8 text-center md:text-left mx-6 "
          >
            Poznaj mnie!
          </h1>

          <p1 data-aos="slide-right" className="px-6 tracking-[2px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            accusamus, earum consequatur, modi distinctio magnam culpa dolor
            molestias facere id mollitia fugiat tempora voluptatum iure, sequi
            eius temporibus veniam porro quis assumenda exercitationem dolorum
            perferendis vitae quaerat? Ex ullam laborum, temporibus ducimus
          </p1>
        </div>
        {/* zdjęcie about */}
        <div data-aos="slide-left" className="md:ml-auto mx-auto ">
          <img src={AboutImage} className=" md:w-[500px] w-[95%] mx-auto"></img>
        </div>
      </div>
      <div className="w-full flex flex-col mx-auto text-center mt-8">
        <h1 className="text-center w-full text-xl font-medium">
          A to moje <span className="text-blue-400 tracking-[3px]">pupile</span>{" "}
          :)
        </h1>
        <div className="w-[250px] h-14 mx-auto mt-2">
          <img src={Animals}></img>
        </div>
      </div>
    </div>
  );
}

export default About;
