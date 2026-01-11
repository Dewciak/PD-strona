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
    const fetchHeroImages = async () => {
      console.log("--- Start pobierania Hero (_embed) ---");
      try {
        const domain = "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io";

        // Pobieramy posty z kategorii 11 bez _embed
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=11&per_page=20`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();

        // Dla każdego posta, jeśli ma featured_media, pobierz media
        const imagePromises = posts.map(async (post) => {
          if (!post.featured_media) return null;
          try {
            const mediaResponse = await fetch(`${domain}/wp-json/wp/v2/media/${post.featured_media}`);
            if (!mediaResponse.ok) return null;
            const media = await mediaResponse.json();
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

        console.log("imageData po map i filter:", imageData);

        console.log("imageData po map i filter:", imageData);

        // Sortowanie (żeby s11 było przed s12)
        const sorted = imageData.sort((a, b) => a.title.localeCompare(b.title, undefined, {numeric: true}));

        // Budujemy pary dla Slideshow (max 4 pary)
        const heroSlidesFormatted = [];
        for (let i = 0; i < sorted.length && heroSlidesFormatted.length < 4; i += 2) {
          const firstImg = sorted[i].url;
          const secondImg = sorted[i + 1]?.url || sorted[i].url; // Fallback do tego samego zdjęcia jeśli brak pary
          heroSlidesFormatted.push([firstImg, secondImg]);
        }

        console.log("Finalne pary dla Hero:", heroSlidesFormatted);
        setHeroSlides(heroSlidesFormatted);
      } catch (error) {
        console.error("Błąd ładowania Hero:", error);
      }
    };

    fetchHeroImages();
  }, []);

  useEffect(() => {
    const fetchPortfolioImages = async () => {
      console.log("--- Start pobierania Portfolio ---");
      try {
        const domain = "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io";
        const categories = [
          {name: "Psy", id: 3},
          {name: "Konie", id: 4},
          {name: "Wydarzenia", id: 5},
        ];

        const portfolioData = {};

        for (const cat of categories) {
          const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=${cat.id}&per_page=20`);
          if (!response.ok) throw new Error("Błąd API: " + response.status);

          const posts = await response.json();

          const imagePromises = posts.map(async (post) => {
            if (!post.featured_media) return null;
            try {
              const mediaResponse = await fetch(`${domain}/wp-json/wp/v2/media/${post.featured_media}`);
              if (!mediaResponse.ok) return null;
              const media = await mediaResponse.json();
              return media.source_url || media.media_details?.sizes?.full?.source_url;
            } catch (err) {
              console.error("Błąd pobierania media dla posta:", post.title.rendered, err);
              return null;
            }
          });

          const images = (await Promise.all(imagePromises)).filter((img) => img);
          portfolioData[cat.name] = images;
        }

        console.log("Portfolio data:", portfolioData);
        setPortfolioImages(portfolioData);
      } catch (error) {
        console.error("Błąd ładowania Portfolio:", error);
      }
    };

    fetchPortfolioImages();
  }, []);

  useEffect(() => {
    const fetchAboutImage = async () => {
      console.log("--- Start pobierania About Image ---");
      try {
        const domain = "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io";
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=12&per_page=1`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();
        if (posts.length === 0) return;

        const post = posts[0];
        if (!post.featured_media) return;

        const mediaResponse = await fetch(`${domain}/wp-json/wp/v2/media/${post.featured_media}`);
        if (!mediaResponse.ok) return;
        const media = await mediaResponse.json();
        const imageUrl = media.source_url || media.media_details?.sizes?.full?.source_url;

        console.log("About image:", imageUrl);
        setAboutImage(imageUrl);
      } catch (error) {
        console.error("Błąd ładowania About Image:", error);
      }
    };

    fetchAboutImage();
  }, []);

  useEffect(() => {
    const fetchBlueBarImage = async () => {
      console.log("--- Start pobierania BlueBar Image ---");
      try {
        const domain = "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io";
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=13&per_page=1`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();
        if (posts.length === 0) return;

        const post = posts[0];
        if (!post.featured_media) return;

        const mediaResponse = await fetch(`${domain}/wp-json/wp/v2/media/${post.featured_media}`);
        if (!mediaResponse.ok) return;
        const media = await mediaResponse.json();
        const imageUrl = media.source_url || media.media_details?.sizes?.full?.source_url;

        console.log("BlueBar image:", imageUrl);
        setBlueBarImage(imageUrl);
      } catch (error) {
        console.error("Błąd ładowania BlueBar Image:", error);
      }
    };

    fetchBlueBarImage();
  }, []);

  useEffect(() => {
    const fetchOfferImages = async () => {
      console.log("--- Start pobierania Offer Images ---");
      try {
        const domain = "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io";
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=14&per_page=3`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();

        const imagePromises = posts.map(async (post) => {
          if (!post.featured_media) return null;
          try {
            const mediaResponse = await fetch(`${domain}/wp-json/wp/v2/media/${post.featured_media}`);
            if (!mediaResponse.ok) return null;
            const media = await mediaResponse.json();
            return media.source_url || media.media_details?.sizes?.full?.source_url;
          } catch (err) {
            console.error("Błąd pobierania media dla posta:", post.title.rendered, err);
            return null;
          }
        });

        const images = (await Promise.all(imagePromises)).filter((img) => img);
        console.log("Offer images:", images);
        setOfferImages(images);
      } catch (error) {
        console.error("Błąd ładowania Offer Images:", error);
      }
    };

    fetchOfferImages();
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
