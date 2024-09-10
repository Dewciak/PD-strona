import React, {useEffect} from "react";
import Horse from "../../images/offercard-horse.webp";
import Dog from "../../images/offercard-dog.webp";
import Event from "../../images/offercard-event.webp";
import {Link} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Offer() {
  return (
    <div
      id="Offer"
      className="max-w-[1050px] justify-center mx-auto flex flex-col md:mt-[60px] md:pt-0 mt-[50px]"
    >
      <h1 className="text-center md:text-6xl text-6xl pb-4 mx-auto tracking-[5px] font-light text-titleGray">
        Oferta
      </h1>
      {/* <h2 className="text-center  text-lg pb-0 trakcing-[2px] text-gray-500 tracking-[3px] font-[Lora] font-light"></h2> */}
      <div className="flex flex-col lg:flex-row gap-y-8 gap-x-8 mt-14 mx-auto">
        <RouterLink
          to="/oferta-konie"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
            <img
              src={Horse}
              alt="Horse"
              loading="lazy"
              className="w-full h-auto "
            />
            <h1 className="absolute tracking-[5px] font-light inset-0 flex justify-center items-start pt-16 text-white text-4xl z-4 cursor-pointer">
              Konie
            </h1>
          </div>
        </RouterLink>
        <RouterLink
          to="/oferta-psy"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
            <img
              src={Dog}
              alt="dog"
              loading="lazy"
              className="w-full h-auto "
            />
            <h1 className="absolute  tracking-[5px] font-light inset-0 flex justify-center items-start pt-16 text-white text-4xl  z-4 cursor-pointer">
              Psy
            </h1>
          </div>
        </RouterLink>
        <RouterLink
          to="/oferta-wydarzenia"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
            <img
              src={Event}
              alt="wydarzenia"
              loading="lazy"
              className="w-full h-auto "
            />
            <h1 className="absolute inset-0  tracking-[5px] font-light flex justify-center items-start pt-16 text-white text-4xl  z-4 cursor-pointer">
              Wydarzenia
            </h1>
          </div>
        </RouterLink>
      </div>
      <div className=" mx-auto h-auto py-8 mt-20">
        <h2
          data-aos="slide-up"
          className="mx-auto max-w-[900px] text-center px-6    tracking-[0px] font-[Lora] text-gray-700 font-normal text-[20px] leading-[34px] pb-4 overflow-visible z-4 "
        >
          Jeśli sesja jaka Cię interesuje nie znajduję się w tej zakładce,
          <br></br>
          napisz do mnie, a na pewno razem coś wymyślimy :)
        </h2>
      </div>
    </div>
  );
}

export default Offer;
