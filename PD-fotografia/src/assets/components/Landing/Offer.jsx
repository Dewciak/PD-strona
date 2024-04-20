import React, { useEffect } from "react";
import Horse from "../../images/offer-horse.jpg";
import Dog from "../../images/offer-dog.jpg";
import Event from "../../images/offer-event.jpg";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Offer() {
  return (
    <div
      id="Offer"
      className="max-w-[1050px] justify-center mx-auto flex flex-col md:mt-[0px]  md:pt-20 mt-[-50px]"
    >
      <h1 className="text-center md:text-6xl text-6xl tracking-[3px] mx-auto">
        Oferta
      </h1>
      <div className="flex flex-col md:flex-row gap-y-8 gap-x-8 mt-14 mx-auto">
        <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
          <img src={Horse} alt="Horse" className="w-full h-auto " />
          <h1 className="absolute tracking-[3px] inset-0 flex justify-center items-center text-white text-4xl z-10 cursor-pointer">
            Konie
          </h1>
        </div>
        <RouterLink
          to="/oferta-psy"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
            <img src={Dog} alt="dog" className="w-full h-auto " />
            <h1 className="absolute  tracking-[3px] inset-0 flex justify-center items-center text-white text-4xl  z-10 cursor-pointer">
              Psy
            </h1>
          </div>
        </RouterLink>
        <div className="relative w-[300px] h-auto hover:scale-105 transition duration-300">
          <img src={Event} alt="wydarzenia" className="w-full h-auto " />
          <h1 className="absolute inset-0  tracking-[3px] flex justify-center items-center text-white text-4xl  z-10 cursor-pointer">
            Wydarzenia
          </h1>
        </div>
      </div>
      <div className=" mx-auto h-auto py-8 mt-12">
        <h2
          data-aos="slide-up"
          className="mx-auto max-w-[900px] text-center  tracking-[3px] pb-4 overflow-visible z-10 "
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
