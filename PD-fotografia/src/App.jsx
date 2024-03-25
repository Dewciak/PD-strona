import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Offer from "./assets/components/Offer";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Portfolio from "./assets/components/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
