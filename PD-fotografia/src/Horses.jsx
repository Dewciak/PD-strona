import ScrollToTop from "./assets/components/Utils/ScrollToTop";
import Navbar from "./assets/components/Utils/NavbarOffer";
import OfferPageHeader from "./assets/components/Utils/Offer/OfferPageHeader";
import OfferPageAbout from "./assets/components/Utils/Offer/OfferPageAbout";
import TypesOfSessions from "./assets/components/Utils/Offer/TypesOfSessions";
import Questions from "./Questions";
import Footer from "./assets/components/Utils/Footer";
import Bg from "./assets/images/Events/background.webp";
import {OfferCards} from "./assets/components/Utils/Offer/OfferCards";
import {
  headerContent,
  sessionsContent,
  cardsContent,
  questionsContent,
} from "./assets/components/TextContent/HorsesOffer";
import {aosInnit} from "./assets/Hooks/aosInnit";

function Horses() {
  aosInnit();
  return (
    <div className=" overflow-hidden md:overflow-visible">
      <Navbar />
      <ScrollToTop />
      <OfferPageHeader backgroundImage={Bg} />
      <div className="Bg">
        <OfferPageAbout props={headerContent} />
        <TypesOfSessions props={sessionsContent} />
        <OfferCards props={cardsContent} />
        <Questions props={questionsContent} />
      </div>
      <Footer />
    </div>
  );
}

export default Horses;
