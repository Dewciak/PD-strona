import React, {useEffect} from "react";
import Navbar from "./assets/components/Utils/Navbar";
import Hero from "./assets/components/Landing/Hero";
import Offer from "./assets/components/Landing/Offer";
import Contact from "./assets/components/Landing/Contact";
import Footer from "./assets/components/Utils/Footer";
import Portfolio from "./assets/components/Landing/Portfolio";
import ScrollToTop from "./assets/components/Utils/ScrollToTop";
import About from "./assets/components/Landing/About";
import BlueBar from "./assets/components/Landing/BlueBar";
import AccordionCustomIcon from "./assets/components/Landing/AccordionCustomIcon";
import {aosInnit} from "./assets/Hooks/aosInnit";
function App() {
  let sections = document.querySelectorAll("section");
  aosInnit();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className='App overflow-hidden scroll-smooth'>
      <Navbar sections={sections} />
      <ScrollToTop />
      <Hero className='Section' id='hero' />
      <About />
      <Portfolio className='Section' id='portfolio' />
      <BlueBar />
      <AccordionCustomIcon />
      <Offer className='Section' id='offer' />
      <Contact className='Section' id='contact' />
      <Footer />
    </div>
  );
}

export default App;
