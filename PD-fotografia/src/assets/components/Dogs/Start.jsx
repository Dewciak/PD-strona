import React from "react";
import Bg from "../../images/Dogs/background.jpg";
import AboutDog from "../../images/Dogs/About.jpg";

function Start() {
  return (
    <div id="Start">
      {/* Zdjęcie góra czarne */}
      <div className="w-full bg-black h-auto">
        <img className="mt-[-100px] w-[70%] mx-auto" src={Bg}></img>
      </div>
      <div className="max-w-[1000px] mx-auto">
        {/* Nagłówek fotografia */}
        <h1 className="text-center text-6xl font-semibold tracking-wider mt-[50px]  ">
          Fotografia Psów
        </h1>
        {/* Nagłówek P tag */}
        <p className="text-center text-[#747474] mt-4 text-base">
          Zapraszam Ciebie i Twojego czworonożnego przyjaciela na <br></br>{" "}
          wyjątkową sesję zdjęciową
        </p>
        {/* Main górny tekst */}
        <div className="mx-auto flex  py-6 flex-col text-lg tracking-wide w-[970px] mt-12">
          <h1 className="font-semibold">
            Jeśli marzysz o pamiątce na długie lata to trafiłeś w dobre ręce.{" "}
          </h1>
          <p className="mt-6 text-base">
            Podczas tworzenia zdjęć każdy szczegół jest dla mnie ważny,
            dodatkowo moje doświadczenie w <br></br>fotografii zwierząt sprawi,
            że Twoje pupile przed obiektywem będą czuły się swobodnie, co
            przełoży <br></br>się na naturalne i ujmujące kadry.
          </p>
        </div>
        {/* Main dolny tekst ze zdjęciem */}
        <div className="w-full flex flex-row mt-10 ">
          <div className="w-[60%] px-4">
            <h1 className="font-bold pb-8 pt-4 text-2xl">
              Czym się kieruje podczas sesji?
            </h1>
            <p className="px-6">
              <span className="text-blue-400 font-semibold">
                Indywidualne podejście
              </span>{" "}
              wiem że każdy pies jest wyjątkowy, dlatego też nasza sesja
              zostanie dostosowana do jego charakteru, temperamentu i ulubionych
              zajęć. Niezależnie od tego, czy Twój pies jest energicznym psem
              sportowym czy też spokojnym i wylegującym się futrzakiem, nasz
              fotograf będzie umiał uchwycić jego osobowość.<br></br>
              <br></br>
              <span className="text-blue-400 font-semibold">
                Bezpieczeństwo
              </span>{" "}
              i dobre samopoczucie Twojego psa jest dla mnie priorytetem.
              <br></br>
              <br></br>
              <span className="text-blue-400 font-semibold">
                Niezwykłe wspomnienia
              </span>{" "}
              które zapewnia sesja zdjęciowa to nie tylko okazja do uwiecznienia
              pięknych chwil z Twoim psem, ale także stworzenia trwałych
              wspomnień, którymi będziesz mógł cieszyć się przez wiele lat. Mam
              nadzieję, że każde stworzone zdjęcie przywoła uśmiech na Twojej
              twarzy za każdym razem, gdy na nie spojrzysz.
            </p>
          </div>
          {/* Dolne zdjęcie */}
          <img className="w-[40%] rounded-[15px] px-2" src={AboutDog}></img>
        </div>
      </div>
    </div>
  );
}

export default Start;
