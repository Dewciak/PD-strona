import { Carousel } from "@material-tailwind/react";
import item1 from "../images/carousel-1.png";
import item2 from "../images/carousel-2.png";
import item3 from "../images/carousel-3.png";

export function CarouselDefault() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={4000}
      loop={true}
      className="rounded-md, bg-red-500, "
      prevArrow={false}
      nextArrow={false}
    >
      <img
        src={item1}
        alt="image 1"
        className="h-auto w-[70%] object-cover mx-auto rounded-XL"
      />

      <img
        src={item2}
        alt="image 2"
        className="h-auto w-[70%] object-cover mx-auto rounded-XL"
      />
      <img
        src={item3}
        alt="image 3"
        className="h-auto w-[70%] object-cover mx-auto rounded-XL"
      />
    </Carousel>
  );
}

export default CarouselDefault;
