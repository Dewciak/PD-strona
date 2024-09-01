import React, {useEffect} from "react";
import Navbar from "./assets/components/Utils/Navbar";
import Hero from "./assets/components/Landing/Hero";
import Offer from "./assets/components/Landing/Offer";
import Contact from "./assets/components/Landing/Contact";
import Footer from "./assets/components/Utils/Footer";
import Portfolio from "./assets/components/Landing/Portfolio";
import ScrollToTop from "./assets/components/Utils/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./assets/components/Landing/About";
import BlueBar from "./assets/components/Landing/BlueBar";
import AccordionCustomIcon from "./assets/components/Landing/AccordionCustomIcon";
function App() {
  let sections = document.querySelectorAll("section");
  useEffect(() => {
    AOS.init({
      debug: true,
    });
  }, []);
  let samt = 0;

  window.addEventListener("scroll", function () {
    samt <= 10 ? samt++ : AOS.refresh();
  });

  return (
    <div className="App overflow-hidden scroll-smooth">
      <Navbar sections={sections} />
      <ScrollToTop />
      <Hero className="Section" id="Hero" />
      <About />
      <Portfolio className="Section" id="Portfolio" />
      <BlueBar />
      <AccordionCustomIcon />

      <Offer className="Section" id="Offer" />
      <Contact className="Section" id="Contact" />

      <Footer />
    </div>
  );
}

export default App;
