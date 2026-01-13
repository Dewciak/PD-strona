import {useEffect, useState} from "react";
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
    const fetchAllImages = async () => {
      console.log("--- Start pobierania wszystkich obrazów ---");
      try {
        const domain = "https://pati.wiktordawid.pl/";
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=3,4,5,11,12,13,14&per_page=100&_embed`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();

        // Funkcja pomocnicza do pobierania obrazów z postów
        const getImagesFromPosts = async (filteredPosts, sort = false) => {
          const imagePromises = filteredPosts.map(async (post) => {
            if (!post.featured_media) return null;
            try {
              const media =
                post._embedded?.["wp:featuredmedia"]?.[0] ||
                (await fetch(`${domain}/wp-json/wp/v2/media/${post.featured_media}`).then((r) => r.json()));
              return {
                title: post.title.rendered.toLowerCase().replace(/[\s-]/g, ""),
                url: media.source_url || media.media_details?.sizes?.full?.source_url,
              };
            } catch (err) {
              console.error("Błąd pobierania media dla posta:", post.title.rendered, err);
              return null;
            }
          });

          const imageData = (await Promise.all(imagePromises)).filter((img) => img && img.url);
          if (sort) {
            return imageData.sort((a, b) => a.title.localeCompare(b.title, undefined, {numeric: true}));
          }
          return imageData;
        };

        // Hero (kategoria 11)
        const heroPosts = posts.filter((p) => p.categories.includes(11));
        const heroImageData = await getImagesFromPosts(heroPosts, true);
        const heroSlidesFormatted = [];
        for (let i = 0; i < heroImageData.length && heroSlidesFormatted.length < 4; i += 2) {
          const firstImg = heroImageData[i].url;
          const secondImg = heroImageData[i + 1]?.url || heroImageData[i].url;
          heroSlidesFormatted.push([firstImg, secondImg]);
        }
        setHeroSlides(heroSlidesFormatted);

        // Portfolio (kategorie 3,4,5)
        const portfolioData = {};
        const portfolioCats = [
          {name: "Psy", id: 3},
          {name: "Konie", id: 4},
          {name: "Wydarzenia", id: 5},
        ];
        for (const cat of portfolioCats) {
          const catPosts = posts.filter((p) => p.categories.includes(cat.id));
          const images = (await getImagesFromPosts(catPosts)).map((img) => img.url);
          portfolioData[cat.name] = images;
        }
        setPortfolioImages(portfolioData);

        // About (kategoria 12)
        const aboutPosts = posts.filter((p) => p.categories.includes(12));
        if (aboutPosts.length > 0) {
          const aboutImageData = await getImagesFromPosts(aboutPosts);
          setAboutImage(aboutImageData[0]?.url || "");
        }

        // BlueBar (kategoria 13)
        const blueBarPosts = posts.filter((p) => p.categories.includes(13));
        if (blueBarPosts.length > 0) {
          const blueBarImageData = await getImagesFromPosts(blueBarPosts);
          setBlueBarImage(blueBarImageData[0]?.url || "");
        }

        // Offer (kategoria 14)
        const offerPosts = posts.filter((p) => p.categories.includes(14));
        const offerImageData = await getImagesFromPosts(offerPosts, true);
        setOfferImages(offerImageData.map((img) => img.url));
      } catch (error) {
        console.error("Błąd ładowania obrazów:", error);
      }
    };

    fetchAllImages();
  }, []);

  return (
    <div className='App overflow-hidden scroll-smooth'>
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
