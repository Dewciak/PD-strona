import React, { useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Landing/Hero";
import Offer from "./assets/components/Landing/Offer";
import Contact from "./assets/components/Landing/Contact";
import Footer from "./assets/components/Footer";
import Portfolio from "./assets/components/Landing/Portfolio";
import ScrollToTop from "./assets/components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./assets/components/Landing/About";
function App() {
  let sections = document.querySelectorAll("section");
  useEffect(() => {
    AOS.init({
      // You can pass options here if needed
      debug: true, // Enable debugging
    });
  }, []);
  let samt = 0;

  window.addEventListener("scroll", function () {
    samt <= 10 ? samt++ : AOS.refresh();
  });

  return (
    <div className="App">
      <Navbar sections={sections} />
      <ScrollToTop />
      <Hero className="Section" id="Hero" />
      <About />
      <Portfolio className="Section" id="Portfolio" />
      <Offer className="Section" id="Offer" />
      <Contact className="Section" id="Contact" />

      <Footer />
    </div>
  );
}

export default App;
