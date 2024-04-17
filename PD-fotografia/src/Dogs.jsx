import React from "react";
import Navbar from "./assets/components/NavbarOffer";
import Start from "./assets/components/Dogs/Start";
import TypesOfSessions from "./assets/components/Dogs/TypesOfSessions";
import ScrollToTop from "./assets/components/ScrollToTop";
import Pakiety from "./assets/components/Dogs/Pakiety";
import Questions from "./assets/components/Dogs/Questions";
import Footer from "./assets/components/Footer";

function Dogs() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Start />
      <TypesOfSessions />
      <Pakiety />
      <Questions />
      <Footer />
    </>
  );
}

export default Dogs;
