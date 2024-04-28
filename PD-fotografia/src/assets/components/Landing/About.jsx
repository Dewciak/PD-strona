import React, { useEffect } from "react";
import AboutImage from "../../images/About-img.jpg";
import Animals from "../../images/animals.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

import Dog1 from "../../images/AboutMe/dog1.jpg";
import Dog2 from "../../images/AboutMe/dog2.jpg";
import Dog3 from "../../images/AboutMe/dog3.jpg";
import horse1 from "../../images/AboutMe/horse1.jpg";
import horse2 from "../../images/AboutMe/horse2.jpg";

function About() {
  return (
    <>
      <div
        id="About"
        className="max-w-[1050px] h-auto  mx-auto md:pt-24 mt-10 overflow-hidden  shadow-[#0000000d]"
      >
        <div className="w-full text-center ">
          <h1 className="md:text-5xl text-4xl mt-10 md:mt-0 tracking-[3px]">
            Profesjonalna
          </h1>
          <h2 className="md:text-2xl text-xl md:py-4 py-2 mb-4 text-gray-500 tracking-[3px]">
            fotografia zwierząt
          </h2>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center md:mt-6 ">
          <div className="flex flex-col md:w-[45%] pl-4">
            <h1
              data-aos="slide-right"
              className="text-4xl pb-8 font-bold tracking-[3px]  text-blue-400  mt-8 text-center md:text-left mx-6 "
            >
              Poznaj mnie!
            </h1>

            <p
              data-aos="slide-right"
              className="px-6 tracking-[0px] text-justify"
            >
              Czesc, nazywam sie Patrycja Dawid. Swoją pasję do fotografii
              odkryłam w 2014 roku dorastając w otoczeniu zwierząt, które zawsze
              były moimi najlepszymi modelami. Dzięki temu łatwo jest mi
              uchwycić ich naturalne piękno i charakter. W wolnych chwilach
              najbardziej lubię zapuszczać się w długie tereny na końskim
              grzbiecie i spacerować po lesie
            </p>
          </div>
          {/* zdjęcie about */}
          <div data-aos="slide-left" className="md:ml-auto mx-auto ">
            <img
              src={AboutImage}
              className=" md:w-[500px] mx-auto w-[90%] rounded-xl"
            ></img>
          </div>
        </div>
        <div className="w-full flex flex-col mx-auto text-center mt-8">
          <h1 className="text-center w-full text-xl font-medium">
            A to moje{" "}
            <span className="text-blue-400 tracking-[3px]">pupile</span> :)
          </h1>
          <div className="w-[300px] h-14 mx-auto mt-2 flex flex-row justify-center items-center gap-x-2">
            <img src={Dog1} className="w-[20%] rounded-[50%]"></img>
            <img src={Dog2} className="w-[20%] rounded-[50%]"></img>
            <img src={Dog3} className="w-[20%] rounded-[50%]"></img>
            <img src={horse1} className="w-[20%] rounded-[50%]"></img>
            <img src={horse2} className="w-[20%] rounded-[50%]"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
