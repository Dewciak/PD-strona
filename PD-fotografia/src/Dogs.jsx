import React, { useEffect } from "react";
import Navbar from "./assets/components/NavbarOffer";
import Start from "./assets/components/Dogs/Start";
import TypesOfSessions from "./assets/components/Dogs/TypesOfSessions";
import ScrollToTop from "./assets/components/ScrollToTop";
import Pakiety from "./assets/components/Dogs/Pakiety";
import Questions from "./assets/components/Dogs/Questions";
import Footer from "./assets/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Dogs() {
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
    <div id="Dogs" className="overflow-hidden md:overflow-visible">
      <Navbar />
      <ScrollToTop />
      <Start />
    </div>
  );
}

export default Dogs;
