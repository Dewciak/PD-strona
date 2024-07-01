import React from "react";
import Navbar from "./NavbarLink";
import Logo from "../images/nav-logo.png";
import Footer from "./Footer";
import { Link as RouterLink } from "react-router-dom";

function PolicyPrivacy() {
  return (
    <div id="PolitykaPrywatności" className="flex flex-col w-screen">
      {/*  */}
      <Navbar />
      <div className="w-screen h-[300px] bg-blue-100 flex items-center justify-center">
        <h1 className="text-center   text-4xl tracking-[5px] font-light text-titleGray">
          Polityka Prywatności
        </h1>
      </div>
      <div className="flex flex-col space-y-12 mx-auto max-w-[1080px] pt-16 mt h-auto justify-center items-center mb-32">
        <h1 className="text-start mr-auto text-3xl tracking-[5px] font-light text-titleGray">
          Naszym Celem
        </h1>
        <h2 className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
          jest zapewnienie Państwu poczucia bezpieczeństwa na naszym Portalu,
          dlatego też Państwa prywatność i ochrona danych osobowych są dla nas
          bardzo ważne. Prosimy o staranne zapoznanie się z poniższym
          podsumowaniem, z którego dowiedzą się Państwo w jaki sposób działa
          nasz Portal. Zapewniamy, że Państwa dane będą przetwarzane w sposób
          przejrzysty i uczciwy, oraz że dołożymy wszelkich starań, aby były
          traktowane z zachowaniem ostrożności i odpowiedzialnie.
        </h2>
        <h3 className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
          Poniższa Polityka prywatności ma na celu poinformowanie o sposobie
          wykorzystywania przez nas Państwa danych osobowych, względem których
          spełniamy wszystkie wymogi Rozporządzenia Parlamentu Europejskiego i
          Rady (UE) 2016/679 UE z dnia 27 kwietnia 2016 r. (dalej jako: „RODO”).
        </h3>
        {/* prettier-ignore */}
        <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px] whitespace-pre-line">
          1. Polityka prywatności określa, jak zbierane, przetwarzane i przechowywane są dane osobowe Użytkowników niezbędne do świadczenia usług drogą elektroniczną za pośrednictwem serwisu internetowego patrycjadawid.com
          2. Serwis zbiera tylko dane osobowe niezbędne do świadczenia i rozwoju usług w nim oferowanych.
          3. Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o ochronie danych osobowych z dnia 10 maja 2018 r.
          4. Administratorem danych jest firma
          Patrycja Dawid Fotografia
          ul. Leśna 126
          43-394 Roztropice
          NIP 9372736038
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PolicyPrivacy;
