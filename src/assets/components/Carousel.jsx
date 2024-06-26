import { Carousel } from "@material-tailwind/react";
import item1 from "../images/carousel-1.jpg";
import item2 from "../images/carousel-2.jpg";
import item3 from "../images/carousel-3.jpg";
import React, { useEffect } from "react";

export function CarouselDefault() {
  return (
    <>
      <Carousel
        autoplay={true}
        autoplayDelay={4000}
        loop={true}
        className="rounded-md mx-auto mb-14 max-w-[1050px]"
        prevArrow={false}
        nextArrow={false}
      >
        <img
          src={item1}
          alt="image 1"
          className="h-auto md:w-[70%] w-[90%] object-cover mx-auto rounded-xl"
        />

        <img
          src={item2}
          alt="image 2"
          className="h-auto md:w-[70%] w-[90%] object-cover mx-auto rounded-xl"
        />
        <img
          src={item3}
          alt="image 3"
          className="h-auto md:w-[70%] w-[90%] object-cover mx-auto rounded-xl"
        />
      </Carousel>
    </>
  );
}

export default CarouselDefault;
