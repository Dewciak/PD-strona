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
          <h1 className="text-5xl md:py-6 mx-auto  md:mx-0 tracking-[5px] font-light text-titleGray">
            Cześć
          </h1>
          <p className="mt-2 py-4 md:py-0 tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
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
            <div className="w-[130px] cursor-pointer mt-6 flex justify-center items-center py-1 rounded-[50px] bg-gradient-to-r from-[#66c4fb] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200">
              <div className="rounded-[50px] tracking-[1px] flex items-center justify-center mx-auto bg-white mr-auto w-[122px] py-1 text-[17px] font-bold text-black hover:text-[#9b9b9b]">
                <h2 className="text-center text-lg font-normal bg-gradient-to-r from-[#56c0fd] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200 inline-block text-transparent bg-clip-text md:mt-0">
                  Portfolio
                </h2>
              </div>
            </div>
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
