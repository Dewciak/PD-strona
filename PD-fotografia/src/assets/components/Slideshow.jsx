import React, { useState, useEffect, useRef } from "react";

const Slideshow = ({ slides, delay = 5000, initialDelay = 0 }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const delayRef = useRef(delay); // Store the initial delay value

  useEffect(() => {
    // Use the ref to access the initial delay value
    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, delayRef.current); // Use the ref here

      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(initialTimeout);
  }, [slides, initialDelay]); // Removed delay from the dependency array

  return (
    <div className="relative w-full h-full flex justify-center items-center">
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
