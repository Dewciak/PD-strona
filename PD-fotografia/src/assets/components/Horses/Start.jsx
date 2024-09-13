import React, {useState, useEffect} from "react";
import Bg from "../../images/Horses/background.webp";
import About from "../../images/Horses/About.webp";
import TypesOfSessions from "./TypesOfSessions";
import Pakiety from "./Pakiety";
import Questions from "../../../Questions";
import Footer from "../Utils/Footer";

function Start() {
  const [isVisible, setIsVisible] = useState(true);

  const questionsText = {
    header1: "W jakiej formie otrzymam zdjęcia?",
    text1: `Oferuję różne opcje dostawy zdjęć, w tym pliki cyfrowe wysokiej
            jakości oraz wydruki w formie odbitek, zdjęć na płótnie czy albumów
            fotograficznych. Możemy omówić Twoje preferencje i dostosować ofertę
            do Twoich potrzeb.`,

    header2: "Jak przygotować mojego konia do sesji?",
    text2:
      "Przed sesją zdjęciową ważne jest, aby konie były odpowiednio przygotowane. Najważniejsze jest dokładne wyczyszczenie sierści, usunięcie wszystkich zaklejek i wyczesanie grzywy.",
    header4: "Dodatkowe informacje",

    text4: `
              Do 10 dni roboczych od wykonania sesji zdjęciowej dostaniesz ode mnie galerię zdjęć do wyboru.
               
              Pamiętaj, że ostateczny wybór zdjęć należy do Ciebie.
              
              Do ceny każdej sesji doliczam również koszty dojazdu.
              
              Wybrane ujęcia otrzymasz w dwóch formatach - oryginalnym do druku
              oraz pomniejszonym do publikacji w social mediach 
              
              Jeśli potrzebujesz faktury za zdjęcia, nie ma problemu - wystawiam
              faktury bez VAT.`,
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 650) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Start" className="mx-auto">
      {/* Zdjęcie góra czarne */}
      <div className="bg-black h-auto relative">
        <div
          className={`fixed w-[100%] md:top-[80px] top-[-30px] z-[-1] md:left-1/2 md:transform md:-translate-x-1/2 ${
            isVisible ? "" : "opacity-0"
          }`}
        >
          <div className="w-[100%] bg-black">
            <img
              className="md:mt-[0px] mt-[100px] md:max-w-[800px] mx-auto"
              src={Bg}
              alt="Background"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] relative z-0 mx-auto">
        <div className="max-w-[1000px] mx-auto md:mt-[610px] mt-[330px] z-[10] relative pt-8">
          {/* Nagłówek fotografia */}
          <h1 className="text-center text-4xl md:text-6xl md:mt-[20px] tracking-[5px] font-light text-titleGray">
            Fotografia Koni
          </h1>
          {/* Nagłówek P tag */}
          <p className="text-center text-[#747474] mt-4 text-sm tracking-[0px] font-[Lora] font-normal text-[20px] leading-[34px]">
            Czy jeździectwo jest Twoją pasją i&nbsp;chcesz uwiecznić
            niezapomniane chwile spędzone z Twoim końskim przyjacielem?
          </p>
          {/* Main górny tekst */}
          <div
            id="About"
            className="mx-auto flex py-6 flex-col text-lg tracking-wide md:w-[970px] w-[80%] md:mt-12 mt-2"
          >
            <h1 className="tracking-[2px] md:tracking-[5px] font-light text-lg bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">
              Zapraszam Cię na sesje jeździeckie, gdzie stworzymy piękne
              fotografie, którymi będziesz mógł cieszyć się przez całe życie!{" "}
            </h1>
            <p className="mt-6 text-base text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Przed samą sesją konsultuje z Wami rodzaj i&nbsp;charakter zdjęć
              tak by efekty w pełni Was zadowoliły. Jeśli chcesz mieć pamiątkę
              ze swoim koniem, pamiętaj, że nie musisz być profesjonalnym
              modelem, to moim zadaniem jest oddać więź jaka łączy Ciebie
              i&nbsp;Twojego kopytnego pupila, staram się wkładać w to całe
              swoje serducho i&nbsp;pokłady humoru :)
            </p>
          </div>
          {/* Main dolny tekst ze zdjęciem */}
          <div className="w-full flex md:flex-row flex-col mt-10">
            <div className="md:w-[60%] px-4 mx-auto">
              <h1 className="pb-8 md:pt-4 md:text-2xl text-3xl text-center md:text-start tracking-[5px] font-light text-titleGray">
                Co sprawia że dobrze uchwycę Waszego konia podczas sesji?
              </h1>
              <p className="md:px-6 px-4 text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Pracuję z cierpliwością i empatią
                </span>{" "}
                aby koń czuł się komfortowo. Na zdjęcia przeznaczam tyle czasu
                ile trzeba żeby uzyskać najlepsze kadry.
                <br />
                <br />
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Pasja i zrozumienie jego natury
                </span>{" "}
                uchwycenie piękna i&nbsp;charakteru Waszego konia
                w&nbsp;aparacie wymaga nie tylko umiejętności technicznych, ale
                również wyczucia, pasji i&nbsp;zrozumienia jego natury. Każde
                zdjęcie, które tworzę, jest efektem długich lat obserwowania
                końskich zachowań, a&nbsp;także darzenia ich ogromnym
                szacunkiem.
                <br />
                <br />
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Przedstawienie koni w naturalny sposób
                </span>{" "}
                jest to dla mnie szczególnie ważne aby podkreślić ich piękno bez
                zbędnego retuszu. Dlatego też staram się fotografować je
                w&nbsp;naturalnym środowisku, gdzie mogą pokazać w&nbsp;pełni
                swój charakter.
              </p>
            </div>
            {/* Dolne zdjęcie */}
            <img
              className="md:w-[40%] w-[80%] mx-auto mt-16 md:mt-0 rounded-[15px] px-2"
              src={About}
              alt="About Horse"
            />
          </div>
        </div>
      </div>
      <TypesOfSessions />
      <Pakiety />
      <Questions prop={questionsText} />
      <Footer />
    </div>
  );
}

export default Start;
