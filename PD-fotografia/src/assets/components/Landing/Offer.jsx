import React from "react";
import {Link as RouterLink} from "react-router-dom";
import "aos/dist/aos.css";

import Dog from "../../images/offercard-dog.webp";
import Event from "../../images/offercard-event.webp";
import Horse from "../../images/offercard-horse.webp";

const offers = [
  {path: "/oferta-konie", image: Horse, alt: "Konie", title: "Konie"},
  {path: "/oferta-psy", image: Dog, alt: "Psy", title: "Psy"},
  {path: "/oferta-wydarzenia", image: Event, alt: "Wydarzenia", title: "Wydarzenia"},
];

function Offer() {
  return (
    <section id='offer' className='max-w-[1050px] justify-center mx-auto flex flex-col md:mt-[60px] md:pt-0 mt-[50px]'>
      <h2 className='text-center md:text-6xl text-6xl pb-4 mx-auto tracking-[5px] font-light text-titleGray'>Oferta</h2>
      <div className='flex flex-col lg:flex-row gap-y-8 gap-x-8 mt-14 mx-auto'>
        {offers.map((offer, index) => (
          <RouterLink key={index} to={offer.path} onClick={() => window.scrollTo(0, 0)}>
            <div className='relative w-[300px] h-auto hover:scale-105 transition duration-300'>
              <img src={offer.image} alt={offer.alt} loading='lazy' className='w-full h-auto' />
              <h1 className='absolute tracking-[5px] font-light inset-0 flex justify-center items-start pt-16 text-white text-4xl z-4 cursor-pointer'>
                {offer.title}
              </h1>
            </div>
          </RouterLink>
        ))}
      </div>
      <div className='mx-auto h-auto py-8 md:mt-20 mt-4'>
        <h3
          data-aos='slide-up'
          className='mx-auto max-w-[900px] text-center px-6 tracking-[0px] font-[Lora] text-gray-700 font-normal text-[20px] leading-[34px] py-8 overflow-visible z-4'
        >
          Jeśli sesja jaka Cię interesuje nie znajduje się w tej zakładce,
          <br />
          napisz do mnie, a na pewno razem coś wymyślimy :)
        </h3>
      </div>
    </section>
  );
}

export default Offer;
