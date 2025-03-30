import React from "react";
import Slideshow from "./Slideshow";
import {Link as ScrollTo} from "react-scroll";

import firstTileImg1 from "../../images/Hero/s1-1.webp";
import firstTileImg2 from "../../images/Hero/s1-2.webp";

import secondTileImg1 from "../../images/Hero/s2-1.webp";
import secondTileImg2 from "../../images/Hero/s2-2.webp";

import thirdTileImg1 from "../../images/Hero/s3-1.webp";
import thirdTileImg2 from "../../images/Hero/s3-2.webp";

import fourthTileImg1 from "../../images/Hero/s4-1.webp";
import fourthTileImg2 from "../../images/Hero/s4-2.webp";

const slides = [
  [firstTileImg1, firstTileImg2],
  [secondTileImg1, secondTileImg2],
  [thirdTileImg1, thirdTileImg2],
  [fourthTileImg1, fourthTileImg2],
];

function Hero() {
  return (
    <section
      id='Hero'
      className='max-w-[1050px] md:mt-[40px] w-full
        h-auto mx-auto flex md:flex-row flex-col-reverse justify-center mt-10 pt-14  '
    >
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  );
}

function HeroLeftSide() {
  return (
    <div className='w-full md:w-[500px] px-6 md:mt-12 flex flex-col items-center md:items-start'>
      <h1 className='text-5xl md:py-6 mx-auto  md:mx-0 tracking-[5px] font-light text-titleGray'>Cześć</h1>
      <h2 className='mt-2 py-4 md:py-0 tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]'>
        Zajmuję się fotografią psów i koni. Pokazanie ich atutów oraz charakteru to coś co definiuje moje zdjęcia.
        Zapewnij sobie świetną pamiątkę ze swoim pupilem!
      </h2>
      <ScrollTo activeClass='active' to='Portfolio' spy={true} smooth={true} offset={-70} duration={500}>
        <div className='w-[130px] cursor-pointer mt-6 flex justify-center items-center py-1 rounded-[50px] bg-gradient-to-r from-[#66c4fb] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200'>
          <div className='rounded-[50px] tracking-[1px] flex items-center justify-center mx-auto bg-white mr-auto w-[122px] py-1 text-[17px] font-bold text-black hover:text-[#9b9b9b]'>
            <button className='text-center text-lg font-normal bg-gradient-to-r from-[#56c0fd] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200 inline-block text-transparent bg-clip-text md:mt-0'>
              Portfolio
            </button>
          </div>
        </div>
      </ScrollTo>
    </div>
  );
}

function HeroRightSide() {
  return (
    <div className='  w-[100%] max-w-[480px] px-4 md:w-[50%] md:max-w-[480px] h-[400px]  md:ml-auto mx-auto'>
      <div className='w-[100%] h-[180px] flex flex-row items-end'>
        <Slideshow slides={slides[0]} delay='10000' initialDelay='2000' width={"70%"} height={"150px"} />
        <Slideshow slides={slides[1]} delay='10000' initialDelay='6000' width={"30%"} height={"100%"} />
      </div>
      <div className='w-[100%] h-[180px]  flex flex-row'>
        <Slideshow slides={slides[2]} delay='10000' initialDelay='8000' width={"135px"} height={"180px"} />
        <Slideshow slides={slides[3]} delay='10000' initialDelay='4000' width={"70%"} height={"150px"} />
      </div>
    </div>
  );
}

export default Hero;
