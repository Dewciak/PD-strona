import React, { useEffect } from "react";
import Horse from "../images/offer-horse.png";
import Dog from "../images/offer-dog.png";
import Event from "../images/offer-event.png";
import Carousel, { CarouselDefault } from "./Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

function Offer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="max-w-[1050px] justify-center mx-auto flex flex-col md:mt-[-30px] mt-[-50px]">
      <h1 className="text-center md:text-5xl text-6xl">Oferta</h1>
      <div className="flex flex-col md:flex-row gap-y-8 gap-x-8 mt-14 mx-auto">
        <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
          <img src={Horse} alt="Horse" className="w-full h-auto " />
          <h1 className="absolute tracking-[3px] inset-0 flex justify-center items-center text-white text-4xl z-10 cursor-pointer">
            Konie
          </h1>
        </div>
        <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
          <img src={Dog} alt="dog" className="w-full h-auto " />
          <h1 className="absolute  tracking-[3px] inset-0 flex justify-center items-center text-white text-4xl  z-10 cursor-pointer">
            Psy
          </h1>
        </div>
        <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
          <img src={Event} alt="wydarzenia" className="w-full h-auto " />
          <h1 className="absolute inset-0  tracking-[3px] flex justify-center items-center text-white text-4xl  z-10 cursor-pointer">
            Wydarzenia
          </h1>
        </div>
      </div>
      <p
        className="mx-auto max-w-[300px] text-center md:text-left py-12 tracking-[3px]"
        data-aos="slide-up"
      >
        Jeśli sesja jaka Cię interesuje nie znajduję się w tej zakładce, napisz
        do mnie, a na pewno razem coś wymyślimy :)
      </p>
    </div>
  );
}

export default Offer;
