import React, {useState, useEffect, useRef} from "react";

const Slideshow = ({slides, delay = 0, initialDelay = 0, width, height}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const startSlideshow = () => {
      timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          if (document.visibilityState === "visible") {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }
        }, Number(delay));
      }, Number(initialDelay));
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startSlideshow();
      } else {
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startSlideshow();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [slides, delay, initialDelay]);

  return (
    <div className='relative flex justify-center items-center' style={{width, height}}>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlideIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
