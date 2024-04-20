import React from "react";
import Navbar from "../Navbar";
import Slideshow from "./Slideshow";
import { Link } from "react-scroll";

import s11 from "../../images/Hero/s1-1.jpg";
import s12 from "../../images/Hero/s1-2.jpg";

import s21 from "../../images/Hero/s2-1.jpg";
import s22 from "../../images/Hero/s2-2.jpg";

import s31 from "../../images/Hero/s3-1.jpg";
import s32 from "../../images/Hero/s3-2.jpg";

import s41 from "../../images/Hero/s4-1.jpg";
import s42 from "../../images/Hero/s4-2.jpg";

function Hero() {
  const slides1 = [s11, s12];
  const slides2 = [s21, s22];
  const slides3 = [s31, s32];
  const slides4 = [s41, s42];

  return (
    <>
      <div
        id="Hero"
        className="max-w-[1050px] md:mt-[40px] w-full h-auto mx-auto flex md:flex-row flex-col-reverse justify-center mt-10 pt-14  "
      >
        <div className="w-full md:w-[500px] px-6 md:mt-12 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:py-6 mx-auto  md:mx-0 tracking-[5px]">
            Cześć
          </h1>
          <p className="mt-2 py-4 md:py-0 tracking-[3px]">
            Zajmuję się fotografią psów i koni. Pokazanie ich atutów oraz
            charakteru to coś co definiuje moje zdjęcia. Zapewnij sobie świetną
            pamiątke ze swoim pupilem!
          </p>
          <Link
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              className="px-6 tracking-[1.5px] w-fit mx-auto md:mx-0 py-[10px] md:mt-6 mt-2 text-white rounded-md text-center 
          bg-gradient-to-r from-blue-200 to-purple-300 font-bold"
            >
              Portfolio
            </button>
          </Link>
        </div>
        <div className="  w-[100%] max-w-[480px] px-4 md:w-[50%] md:max-w-[480px] h-[400px]  md:ml-auto mx-auto">
          <div className="w-[100%] h-[180px] flex flex-row items-end">
            <div className="w-[70%] h-[150px]">
              <Slideshow slides={slides1} delay="10000" initialDelay="2000" />
              {/* <img src={Img1} /> */}
            </div>
            <div className="w-[30%] h-[100%] ">
              <Slideshow slides={slides2} delay="10000" initialDelay="6000" />
            </div>
          </div>
          <div className="w-[100%] h-[180px]  flex flex-row">
            <div className="w-[135px] h-[180px] ">
              <Slideshow slides={slides3} delay="10000" initialDelay="8000" />
            </div>
            <div className="w-[70%] h-[150px] ">
              <Slideshow slides={slides4} delay="10000" initialDelay="4000" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
