import React, {useState, useEffect, Suspense} from "react";

// Lazy-loaded components
const TypesOfSessions = React.lazy(() => import("./TypesOfSessions"));
const Pakiety = React.lazy(() => import("./Pakiety"));
const Questions = React.lazy(() => import("../../../Questions"));
const Footer = React.lazy(() => import("../Utils/Footer"));

// Lazy-loaded images
import AboutDog from "../../images/Dogs/About.webp";
import Bg from "../../images/Dogs/background.webp";

function Start() {
  const questionsText = {
    header1: "W jakiej formie otrzymam zdjęcia?",
    text1: `Oferuję różne opcje dostawy zdjęć, w tym pliki cyfrowe wysokiej
            jakości oraz wydruki w formie odbitek, zdjęć na płótnie czy albumów
            fotograficznych. Możemy omówić Twoje preferencje i dostosować ofertę
            do Twoich potrzeb.`,
    header2: "Jak przygotować mojego pupila do sesji?",
    text2:
      "Przed sesją zdjęciową ważne jest, aby psy były odpowiednio przygotowane. Warto aby pies był wyczyszczony, bez błota na łapach, na sesje zabierz ulubione smaczki oraz zabawkę. Jeśli Twój pupil ma nadmiar energii możesz przed zdjęciami zabrać go na spacer 😊",
    header3: "Czy dostępne są sesje zdjęciowe w studio oraz na zewnątrz?",
    text3:
      "Preferuje sesje w plenerze, ale kiedy pogoda nie dopisuje mam też małe przenośne studio, które głownie sprawdza się do fotografii szczeniąt.",
    header4: "Dodatkowe informacje",
    text4: `
              Do 10 dni roboczych od wykonania sesji zdjęciowej dostaniesz ode mnie galerię zdjęć do wyboru.

              Pamiętaj, że ostateczny wybór zdjęć należy do Ciebie.
              
              Do ceny każdej sesji doliczam również koszty dojazdu.
              
              Wybrane ujęcia otrzymasz w dwóch formatach - oryginalnym do druku oraz pomniejszonym do publikacji w social mediach 
              
              Jeśli potrzebujesz faktury za zdjęcia, nie ma problemu - wystawiam
              faktury bez VAT.`,
  };

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
    <div id="Start" className="mx-auto">
      {/* Zdjęcie góra czarne */}
      <div className="bg-black h-auto relative">
        <div
          className={`fixed w-[100%] top-[80px] z-[-1] md:left-1/2 md:transform md:-translate-x-1/2 ${
            isVisible ? "" : "opacity-0"
          }`}
        >
          <Suspense fallback={<div>Loading background...</div>}>
            <div className="w-[100%] bg-black">
              <img
                className="md:mt-[0px] mt-[100px] md:max-w-[800px] mx-auto"
                src={Bg}
                alt="Background"
              />
            </div>
          </Suspense>
        </div>
      </div>
      <div className="w-[100%] relative z-0 mx-auto">
        <div className="max-w-[1000px] mx-auto md:mt-[610px] mt-[330px] z-[10] relative pt-8">
          {/* Nagłówek fotografia */}
          <h1 className="text-center text-4xl md:text-6xl md:mt-[0px] tracking-[5px] font-light text-titleGray">
            Fotografia Psów
          </h1>
          {/* Nagłówek P tag */}
          <p className="text-center text-[#747474] mt-4 text-sm tracking-[0px] font-[Lora] font-normal text-[20px] leading-[34px]">
            Zapraszam Ciebie i Twojego czworonożnego przyjaciela na wyjątkową
            sesję zdjęciową
          </p>
          {/* Main górny tekst */}
          <div
            id="About"
            className="mx-auto flex py-6 flex-col text-lg tracking-wide md:w-[970px] w-[80%] md:mt-12 mt-6"
          >
            <h1 className="tracking-[5px] font-light bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">
              Jeśli marzysz o pamiątce na długie lata to trafiłeś w dobre ręce.{" "}
            </h1>
            <p className="mt-6 text-base text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Podczas tworzenia zdjęć każdy szczegół jest dla mnie ważny,
              dodatkowo moje doświadczenie w fotografii zwierząt sprawi, że
              Twoje pupile przed obiektywem będą czuły się swobodnie, co
              przełoży się na naturalne i&nbsp;ujmujące kadry.
            </p>
          </div>
          {/* Main dolny tekst ze zdjęciem */}
          <div className="w-full flex md:flex-row flex-col mt-10">
            <div className="md:w-[60%] px-4 mx-auto">
              <h1 className="pb-8 md:pt-4 md:text-2xl text-3xl text-center md:text-start tracking-[5px] font-light text-titleGray">
                Czym się kieruje podczas sesji?
              </h1>
              <p className="md:px-6 px-4 text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Indywidualne podejście
                </span>{" "}
                wiem że każdy pies jest wyjątkowy, dlatego też nasza sesja
                zostanie dostosowana do jego charakteru, temperamentu
                i&nbsp;ulubionych zajęć. Niezależnie od tego, czy Twój pies jest
                energicznym psem sportowym czy też spokojnym i&nbsp;wylegującym
                się futrzakiem, uchwycenie jego osobowości nie będzie stanowiło
                dla mnie problemu
                <br></br>
                <br></br>
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Bezpieczeństwo
                </span>{" "}
                i dobre samopoczucie Twojego psa jest dla mnie priorytetem.
                <br></br>
                <br></br>
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
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
            <Suspense fallback={<div>Loading image...</div>}>
              <img
                className="md:w-[40%] w-[80%] mx-auto mt-16 md:mt-0 rounded-[15px] px-2"
                src={AboutDog}
                alt="About Dog"
              />
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading sessions...</div>}>
        <TypesOfSessions />
      </Suspense>
      <Suspense fallback={<div>Loading packages...</div>}>
        <Pakiety />
      </Suspense>
      <Suspense fallback={<div>Loading questions...</div>}>
        <Questions prop={questionsText} />
      </Suspense>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Start;
