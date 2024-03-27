import React from "react";
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

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <About />
      <Portfolio />
      <Offer />
      <CarouselDefault />
      <AccordionCustomIcon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
