import React, {useState, useEffect} from "react";
import Bg from "../../images/Dogs/bg2.jpg";
import AboutDog from "../../images/Dogs/About.jpg";
import TypesOfSessions from "./TypesOfSessions";
import Pakiety from "./Pakiety";
import Questions from "../../../Questions";
import Footer from "../Utils/Footer";

function Start() {
  const [isVisible, setIsVisible] = useState(true);

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
    <div id="Start" className="mx-auto  ">
      {/* Zdjęcie góra czarne */}
      <div className=" bg-black h-auto relative ">
        <div
          className={`fixed w-[100%] top-0 z-[-1] md:left-1/2 md:transform md:-translate-x-1/2 ${
            isVisible ? "" : "opacity-0"
          }`}
        >
          <div className="w-[100%] bg-black">
            <img
              className="md:mt-[0px] mt-[100px] md:max-w-[1280px] mx-auto "
              src={Bg}
            ></img>
          </div>
        </div>
      </div>
      <div className="w-[100%]  relative z-0 mx-auto bg-white">
        <div className="max-w-[1000px] mx-auto md:mt-[670px] mt-[330px] z-[10] relative  pt-8">
          {/* Nagłówek fotografia */}
          <h1 className="text-center text-4xl md:text-6xl  md:mt-[50px] tracking-[5px] font-light text-titleGray ">
            Fotografia Psów
          </h1>
          {/* Nagłówek P tag */}
          <p className="text-center text-[#747474] mt-4 text-sm  tracking-[0px] font-[Lora]  font-normal text-[20px] leading-[34px]">
            Zapraszam Ciebie i Twojego czworonożnego przyjaciela na wyjątkową
            sesję zdjęciową
          </p>
          {/* Main górny tekst */}
          <div
            id="About"
            className="mx-auto flex  py-6 flex-col text-lg tracking-wide md:w-[970px] w-[80%] md:mt-12 mt-6"
          >
            <h1 className=" tracking-[5px] font-light  bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text ">
              Jeśli marzysz o pamiątce na długie lata to trafiłeś w dobre ręce.{" "}
            </h1>
            <p className="mt-6 text-base text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Podczas tworzenia zdjęć każdy szczegół jest dla mnie ważny,
              dodatkowo moje doświadczenie w fotografii zwierząt sprawi, że
              Twoje pupile przed obiektywem będą czuły się swobodnie, co
              przełoży się na naturalne i ujmujące kadry.
            </p>
          </div>
          {/* Main dolny tekst ze zdjęciem */}
          <div className="w-full flex md:flex-row flex-col mt-10 ">
            <div className="md:w-[60%] px-4 mx-auto ">
              <h1 className=" pb-8 md:pt-4 md:text-2xl text-3xl text-center md:text-start tracking-[5px] font-light text-titleGray">
                Czym się kieruje podczas sesji?
              </h1>
              <p className="md:px-6 px-4 text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora]  text-[17px] leading-[34px]">
                  Indywidualne podejście
                </span>{" "}
                wiem że każdy pies jest wyjątkowy, dlatego też nasza sesja
                zostanie dostosowana do jego charakteru, temperamentu i
                ulubionych zajęć. Niezależnie od tego, czy Twój pies jest
                energicznym psem sportowym czy też spokojnym i wylegującym się
                futrzakiem, nasz fotograf będzie umiał uchwycić jego osobowość.
                <br></br>
                <br></br>
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora]  text-[17px] leading-[34px]">
                  Bezpieczeństwo
                </span>{" "}
                i dobre samopoczucie Twojego psa jest dla mnie priorytetem.
                <br></br>
                <br></br>
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora]   text-[17px] leading-[34px]">
                  Niezwykłe wspomnienia
                </span>{" "}
                które zapewnia sesja zdjęciowa to nie tylko okazja do
                uwiecznienia pięknych chwil z Twoim psem, ale także stworzenia
                trwałych wspomnień, którymi będziesz mógł cieszyć się przez
                wiele lat. Mam nadzieję, że każde stworzone zdjęcie przywoła
                uśmiech na Twojej twarzy za każdym razem, gdy na nie spojrzysz.
              </p>
            </div>
            {/* Dolne zdjęcie */}
            <img
              className="md:w-[40%] w-[80%] mx-auto mt-16 md:mt-0 rounded-[15px] px-2"
              src={AboutDog}
            ></img>
          </div>
        </div>
      </div>
      <TypesOfSessions />
      <Pakiety />
      <Questions />
      <Footer />
    </div>
  );
}

export default Start;
