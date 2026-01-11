import ScrollToTop from "./assets/components/Utils/ScrollToTop";
import Navbar from "./assets/components/Utils/NavbarOffer";
import OfferPageHeader from "./assets/components/Utils/Offer/OfferPageHeader";
import OfferPageAbout from "./assets/components/Utils/Offer/OfferPageAbout";
import TypesOfSessions from "./assets/components/Utils/Offer/TypesOfSessions";
import Questions from "./Questions";
import Footer from "./assets/components/Utils/Footer";
import Bg from "./assets/images/Dogs/background.webp";
import {OfferCards} from "./assets/components/Utils/Offer/OfferCards";
import {
  headerContent,
  sessionsContent,
  cardsContent,
  questionsContent,
} from "./assets/components/TextContent/DogsOffer";
import {aosInnit} from "./assets/Hooks/aosInnit";
import {useEffect} from "react";

function Dogs() {
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
    <div className='overflow-hidden md:overflow-visible'>
      <Navbar />
      <ScrollToTop />
      <OfferPageHeader backgroundImage={Bg} />
      <div id='Dogs' className='Bg'>
        <OfferPageAbout props={headerContent} />
        <TypesOfSessions props={sessionsContent} />
        <OfferCards props={cardsContent} />
        <Questions props={questionsContent} />
      </div>
      <Footer />
    </div>
  );
}

export default Dogs;
