import React, { useState, useEffect } from "react";

const Slideshow = ({ slides, delay = 0, initialDelay = 0 }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Set the initial delay for the first slide change
    const initialTimeout = setTimeout(() => {
      // After the initial delay, start changing slides at the specified interval
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, delay);

      // Cleanup function to clear the interval
      return () => clearInterval(interval);
    }, initialDelay);

    // Cleanup function to clear the initial timeout
    return () => clearTimeout(initialTimeout);
  }, [slides, delay]);

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
