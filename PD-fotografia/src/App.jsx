import React, { useEffect } from "react";
import Navbar from "./assets/components/Landing/Navbar";
import Hero from "./assets/components/Landing/Hero";
import About from "./assets/components/Landing/About";
import Offer from "./assets/components/Landing/Offer";
import Contact from "./assets/components/Landing/Contact";
import Footer from "./assets/components/Landing/Footer";
import Portfolio from "./assets/components/Landing/Portfolio";
import ScrollToTop from "./assets/components/Landing/ScrollToTop";
import CarouselDefault from "./assets/components/Landing/Carousel";
import AccordionCustomIcon from "./assets/components/Landing/AccordionCustomIcon";
import SlideText from "./assets/components/Landing/SlideText";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <About />
      <Portfolio />
      <Offer />
      <SlideText />
      {/* <CarouselDefault /> */}
      <AccordionCustomIcon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
