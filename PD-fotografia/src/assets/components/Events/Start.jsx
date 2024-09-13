import React, {useState, useEffect} from "react";
import About from "../../images/Events/About.webp";
import Bg from "../../images/Events/background.webp";
import TypesOfSessions from "./TypesOfSessions";
import Pakiety from "./Pakiety";
import Questions from "../../../Questions";
import Footer from "../Utils/Footer";

function Start() {
  const [isVisible, setIsVisible] = useState(true);

  const questionsText = {
    header1: "Czy trzeba zapisywać się na zdjęcia przed wydarzeniem?",
    text1:
      "Nie trzeba, ale zapisanie się daje Ci gwarancję, że Was uchwycę. Nie robię zdjęć wszystkim uczestnikom danego wydarzenia.",

    header2: "W jakiej formie otrzymam zdjęcia?",
    text2:
      "Zdjęcia przesyłam w dwóch formatach, pomniejszony do internetu oraz oryginalny do druku.",
    header4: "Dodatkowe informacje",
    text4: `
              Do 3 dni roboczych od wydarzenia dostaniesz ode mnie galerię zdjęć do wyboru.
               
              Pamiętaj, że ostateczny wybór zdjęć należy do Ciebie.
              
              Jeśli potrzebujesz faktury za zdjęcia, nie ma problemu - wystawiam
              faktury bez VAT.`,
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Adjust the value 200 based on how far you want the user to scroll before the div becomes invisible
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
          <h1 className="text-center text-4xl md:text-6xl md:mt-[0px] tracking-[5px] font-light text-titleGray">
            Reportaże z Wydarzeń
          </h1>

          {/* Main górny tekst */}
          <div
            id="About"
            className="mx-auto flex py-6 flex-col text-lg tracking-wide md:w-[970px] w-[80%] md:mt-12 mt-6"
          >
            <h1 className="tracking-[5px] font-light bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">
              Moja pasja do zwierząt prowadzi mnie w podróż przez wyjątkowe
              wydarzenia, na których głównym tematem są psy i konie.
            </h1>
            <p className="mt-6 text-base text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Od zawodów i pokazów po wystawy i szkolenia. Staram się uchwycić
              najlepsze momenty podczas Waszych wspólnych startów, oraz oddać
              towarzyszące Wam emocje. Na moich social mediach regularnie
              publikuje daty imprez na jakich pojawię się z&nbsp;aparatem,
              dlatego zachęcam do śledzenia postów na bieżąco.
            </p>
          </div>
          {/* Main dolny tekst ze zdjęciem */}
          <div className="w-full flex md:flex-row flex-col mt-10">
            <div className="md:w-[60%] px-4 mx-auto">
              <h1 className="pb-8 md:pt-4 md:text-2xl text-3xl text-center md:text-start tracking-[5px] font-light text-titleGray">
                Dlaczego warto wybrać mnie do stworzenia fotorelacji z Waszych
                zmagań?
              </h1>
              <p className="md:px-6 px-4 text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Uchwycenie akcji
                </span>{" "}
                zawody z udziałem zwierząt to często szereg dynamicznych
                sytuacji. Potrafię szybko reagować dzięki czemu mogę uchwycić
                najbardziej ekscytujące chwile podczas Waszych przebiegów.
                <br />
                <br />
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Indywidualne Podejście
                </span>{" "}
                każde zlecenie traktuję indywidualnie. Staram się zrozumieć
                Wasze oczekiwania i uchwycić najlepsze momenty Waszych zmagań.
                <br />
                <br />
                <span className="text-blue-400 font-semibold tracking-[0px] font-[Lora] text-[17px] leading-[34px]">
                  Dyspozycyjność
                </span>{" "}
                wybierając mnie do wykonania Waszej fotorelacji, zyskujecie
                pewność, że na pewno otrzymacie fotorelację, której oczekujecie.
                Staram się nie planować zdjęć dla większej ilości osób jeśli
                wiem, że godziny startów/przebiegów mogą mi się nałożyć.
              </p>
            </div>
            {/* Dolne zdjęcie */}
            <img
              className="md:w-[40%] w-[80%] mx-auto mt-16 md:mt-0 rounded-[15px] px-2"
              src={About}
              alt="About Event"
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
