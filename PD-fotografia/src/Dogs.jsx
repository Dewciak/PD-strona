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
  headerContent as headerContentStatic,
  sessionsContent as sessionsContentStatic,
  cardsContent,
  questionsContent,
} from "./assets/components/TextContent/DogsOffer";
import {aosInnit} from "./assets/Hooks/aosInnit";
import {useEffect, useState} from "react";

function Dogs() {
  const [images, setImages] = useState([]);
  aosInnit();

  useEffect(() => {
    const fetchDogsImages = async () => {
      console.log("--- Start pobierania Dogs Images ---");
      try {
        const domain = "https://pati.wiktordawid.pl";
        // Używamy _embed aby uniknąć dodatkowych fetchów dla każdego media
        const response = await fetch(`${domain}/wp-json/wp/v2/posts?categories=19&per_page=6&_embed`);
        if (!response.ok) throw new Error("Błąd API: " + response.status);

        const posts = await response.json();

        const imageData = posts.map((post) => {
          const media = post._embedded?.["wp:featuredmedia"]?.[0];
          if (!media) return null;
          // Preferuj mniejsze rozmiary (large ~1024px, medium_large ~768px)
          const sizes = media.media_details?.sizes;
          const url = sizes?.large?.source_url || 
                      sizes?.medium_large?.source_url || 
                      sizes?.full?.source_url || 
                      media.source_url;
          return {
            title: post.title.rendered.toLowerCase().replace(/[\s-]/g, ""),
            url: url,
          };
        }).filter((img) => img && img.url);

        // Sortowanie po tytule numerycznie
        const sortedImages = imageData.sort((a, b) => a.title.localeCompare(b.title, undefined, {numeric: true}));

        const fetchedImages = sortedImages.map((img) => img.url);
        console.log("Dogs images:", fetchedImages);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Błąd ładowania Dogs Images:", error);
      }
    };

    fetchDogsImages();
  }, []);

  const headerContent = {
    ...headerContentStatic,
    aboutImage: images[0] || headerContentStatic.aboutImage,
  };

  const sessionsContent = {
    ...sessionsContentStatic,
    image1: images[4] || sessionsContentStatic.image1,
    image2: images[2] || sessionsContentStatic.image2,
    image3: images[5] || sessionsContentStatic.image3,
    image4: images[3] || sessionsContentStatic.image4,
  };

  return (
    <div className='overflow-hidden md:overflow-visible'>
      <Navbar />
      <ScrollToTop />
      <OfferPageHeader backgroundImage={images[1] || Bg} />
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
