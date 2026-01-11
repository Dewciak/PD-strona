import {
  cardsContent,
  headerContent as headerContentStatic,
  questionsContent,
  sessionsContent as sessionsContentStatic,
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
import {useEffect, useState} from "react";

function Horses() {
  const [images, setImages] = useState([]);
  aosInnit();

  useEffect(() => {
    const fetchHorsesImages = async () => {
      console.log("--- Start pobierania Horses Images ---");
      try {
        const domain = "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io";
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=17&per_page=20`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();

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

        // Sortowanie po tytule numerycznie
        const sortedImages = imageData.sort((a, b) => a.title.localeCompare(b.title, undefined, {numeric: true}));

        const fetchedImages = sortedImages.map((img) => img.url);
        console.log("Horses images:", fetchedImages);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Błąd ładowania Horses Images:", error);
      }
    };

    fetchHorsesImages();
  }, []);

  const headerContent = {
    ...headerContentStatic,
    aboutImage: images[0] || headerContentStatic.aboutImage,
  };

  const sessionsContent = {
    ...sessionsContentStatic,
    image1: images[3] || sessionsContentStatic.image1,
    image2: images[5] || sessionsContentStatic.image2,
    image3: images[4] || sessionsContentStatic.image3,
    image4: images[2] || sessionsContentStatic.image4,
  };

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
    <div className=' overflow-hidden md:overflow-visible'>
      <Navbar />
      <ScrollToTop />
      <OfferPageHeader backgroundImage={images[1] || Bg} />
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
