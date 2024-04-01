import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Offer from "./assets/components/Offer";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Portfolio from "./assets/components/Portfolio";
import ScrollToTop from "./assets/components/ScrollToTop";
import CarouselDefault from "./assets/components/Carousel";
import AccordionCustomIcon from "./assets/components/AccordionCustomIcon";
import SlideText from "./assets/components/SlideText";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Ensure animations are triggered correctly
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <About />
      <Portfolio />
      <Offer />
      <SlideText />
      <CarouselDefault />
      <AccordionCustomIcon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
