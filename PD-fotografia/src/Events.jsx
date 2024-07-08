import React, { useEffect } from "react";
import Navbar from "./assets/components/NavbarOffer";
import Start from "./assets/components/Events/Start";
import TypesOfSessions from "./assets/components/Events/TypesOfSessions";
import ScrollToTop from "./assets/components/ScrollToTop";
import Pakiety from "./assets/components/Events/Pakiety";
import Questions from "./Questions";
import Footer from "./assets/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Events() {
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
    <div id="Events" className="overflow-hidden md:overflow-visible">
      <Navbar />
      <ScrollToTop />
      <Start />
    </div>
  );
}

export default Events;
