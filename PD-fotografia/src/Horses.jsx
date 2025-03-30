import {
  cardsContent,
  headerContent,
  questionsContent,
  sessionsContent,
} from "./assets/components/TextContent/HorsesOffer";
import Footer from "./assets/components/Utils/Footer";
import Navbar from "./assets/components/Utils/NavbarOffer";
import {OfferCards} from "./assets/components/Utils/Offer/OfferCards";
import OfferPageAbout from "./assets/components/Utils/Offer/OfferPageAbout";
import OfferPageHeader from "./assets/components/Utils/Offer/OfferPageHeader";
import TypesOfSessions from "./assets/components/Utils/Offer/TypesOfSessions";
import ScrollToTop from "./assets/components/Utils/ScrollToTop";
import {aosInnit} from "./assets/Hooks/aosInnit";
import Bg from "./assets/images/Horses/background.webp";
import Questions from "./Questions";

function Horses() {
  aosInnit();
  return (
    <div className=' overflow-hidden md:overflow-visible'>
      <Navbar />
      <ScrollToTop />
      <OfferPageHeader backgroundImage={Bg} />
      <div className='Bg'>
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
