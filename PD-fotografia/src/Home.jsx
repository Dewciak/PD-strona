import {useState, useEffect} from "react";
import Navbar from "./assets/components/Utils/Navbar";
import Hero from "./assets/components/Landing/Hero";
import ScrollToTop from "./assets/components/Utils/ScrollToTop";
import About from "./assets/components/Landing/About";
import Portfolio from "./assets/components/Landing/Portfolio";
import BlueBar from "./assets/components/Landing/BlueBar";
import AccordionCustomIcon from "./assets/components/Landing/AccordionCustomIcon";
import Offer from "./assets/components/Landing/Offer";
import Contact from "./assets/components/Landing/Contact";
import Footer from "./assets/components/Utils/Footer";
import BackgroundImage from "./assets/components/UI/BackgroundImage";
import {aosInnit} from "./assets/Hooks/aosInnit";

function App() {
  const [heroSlides, setHeroSlides] = useState([[], [], [], []]);
  const [portfolioImages, setPortfolioImages] = useState({
    Psy: [],
    Konie: [],
    Wydarzenia: [],
  });
  const [aboutImage, setAboutImage] = useState("");
  const [blueBarImage, setBlueBarImage] = useState("");
  const [offerImages, setOfferImages] = useState([]);
  const [sections, setSections] = useState(null);

  // AOS wywołujemy tutaj - to naprawia błąd "Invalid hook call"
  aosInnit();

  useEffect(() => {
    // Pobieramy sekcje do Navbara po zamontowaniu komponentu
    setSections(document.querySelectorAll("section"));
  }, []);

  useEffect(() => {
    const domain = "https://pati.wiktordawid.pl";

    // Funkcja pomocnicza - używa TYLKO _embed, bez dodatkowych fetchów
    // Preferuje mniejsze rozmiary (large ~1024px, medium_large ~768px) dla szybszego ładowania
    const getImageFromPost = (post) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0];
      if (!media) return null;
      const sizes = media.media_details?.sizes;
      const url =
        sizes?.large?.source_url || sizes?.medium_large?.source_url || sizes?.full?.source_url || media.source_url;
      return {
        title: post.title.rendered.toLowerCase().replace(/[\s-]/g, ""),
        url: url,
      };
    };

    // PRIORYTET 1: Hero (kategoria 11) - ładuj najpierw
    const fetchHero = async () => {
      console.log("--- Pobieranie Hero (priorytet) ---");
      try {
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=11&per_page=8&_embed`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();
        const heroImageData = posts
          .map(getImageFromPost)
          .filter((img) => img?.url)
          .sort((a, b) => a.title.localeCompare(b.title, undefined, {numeric: true}));

        const heroSlidesFormatted = [];
        for (let i = 0; i < heroImageData.length && heroSlidesFormatted.length < 4; i += 2) {
          heroSlidesFormatted.push([heroImageData[i].url, heroImageData[i + 1]?.url || heroImageData[i].url]);
        }
        setHeroSlides(heroSlidesFormatted);
        console.log("--- Hero załadowane ---");
      } catch (error) {
        console.error("Błąd ładowania Hero:", error);
      }
    };

    // PRIORYTET 2: Reszta obrazów - ładuj w tle
    const fetchRest = async () => {
      console.log("--- Pobieranie pozostałych obrazów ---");
      try {
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=3,4,5,12,13,14&per_page=100&_embed`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();

        // Portfolio (kategorie 3,4,5)
        const portfolioCats = [
          {name: "Psy", id: 3},
          {name: "Konie", id: 4},
          {name: "Wydarzenia", id: 5},
        ];
        const portfolioData = Object.fromEntries(
          portfolioCats.map((cat) => [
            cat.name,
            posts
              .filter((p) => p.categories.includes(cat.id))
              .map(getImageFromPost)
              .filter((img) => img?.url)
              .map((img) => img.url),
          ])
        );
        setPortfolioImages(portfolioData);

        // About (kategoria 12)
        const aboutPost = posts.find((p) => p.categories.includes(12));
        setAboutImage(getImageFromPost(aboutPost)?.url || "");

        // BlueBar (kategoria 13)
        const blueBarPost = posts.find((p) => p.categories.includes(13));
        setBlueBarImage(getImageFromPost(blueBarPost)?.url || "");

        // Offer (kategoria 14)
        const offerImageData = posts
          .filter((p) => p.categories.includes(14))
          .map(getImageFromPost)
          .filter((img) => img?.url)
          .sort((a, b) => a.title.localeCompare(b.title, undefined, {numeric: true}))
          .map((img) => img.url);
        setOfferImages(offerImageData);

        console.log("--- Pozostałe obrazy załadowane ---");
      } catch (error) {
        console.error("Błąd ładowania obrazów:", error);
      }
    };

    // Najpierw Hero, potem reszta równolegle
    fetchHero();
    fetchRest();
  }, []);

  return (
    <div className='overflow-hidden scroll-smooth relative'>
      <BackgroundImage priority={true} />
      <Navbar sections={sections} />
      <ScrollToTop />
      <Hero slides={heroSlides} />
      <About aboutImage={aboutImage} />
      <Portfolio portfolioImages={portfolioImages} />
      <BlueBar blueBarImage={blueBarImage} />
      <AccordionCustomIcon />
      <Offer offerImages={offerImages} className='Section' id='offer' />
      <Contact className='Section' id='contact' />
      <Footer />
    </div>
  );
}

export default App;
