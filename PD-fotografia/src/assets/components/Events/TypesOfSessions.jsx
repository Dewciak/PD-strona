import React from "react";

import horse1 from "../../images/Events/wystawy.webp";
import horse2 from "../../images/Events/zawody.webp";
import horse3 from "../../images/Events/inne.webp";

import AOS from "aos";
import "aos/dist/aos.css";

function TypesOfSessions() {
  return (
    // KONTENER NA WSZYSTKO
    <div
      id="Sessions"
      className="max-w-[1100px] flex flex-col justify-center items-center mx-auto relative "
    >
      {/* HEADER */}
      <h1 className="text-center py-16 text-4xl tracking-[5px] font-light text-titleGray">
        Rodzaje sesji
      </h1>
      {/* KONTENER NA SESJE */}
      <div className="w-full flex flex-col justify-center items-center mx-auto md:space-y-28 space-y-6">
        {/* SESJE PLENEROWE  1*/}
        <div
          data-aos="fade-left"
          className="w-full flex md:flex-row flex-col  justify-center items-start"
        >
          {/* ZDJĘCIE */}
          <img
            className="md:w-[50%] w-[80%] rounded-[15px] mx-auto"
            src={horse1}
          ></img>
          {/* TEKST */}
          <div className="md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto">
            <h1 className="text-2xl  pb-6 tracking-[5px] font-light text-titleGray text-center md:text-left ">
              Fotoralacje z wystaw:
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[28px]">
              wystawa psów to wydarzenie, któremu towarzyszą niezwykłe emocje,
              zarówno u psa jak i właściciela. Moim zadaniem jako fotografa jest
              uchwycenie tych niepowtarzalnych oraz najlepszych momentów.
              Podczas wystawy istnieje możliwość wykonania ujęć z ringu, a także
              krótkiej sesji w plenerze.
            </p>
          </div>
        </div>
        {/* SESJE EKSTERIEROWE 2 */}
        <div
          data-aos="fade-right"
          className="w-full flex md:flex-row flex-col-reverse  justify-center items-start"
        >
          {/* TEKST */}
          <div className="md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto">
            <h1 className="text-2xl text-center md:text-left  py-6 tracking-[5px] font-light text-titleGray">
              Fotoralacje z zawodów:
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Wykonuje fotorelacje z zawodów z udziałem psów i koni, gdzie
              dynamika, pasja i ogromne emocje spotykają się na każdym kroku.
              Staram się aby każda fotografia oddawała energię, a także
              skupienie, które towarzyszą tym chwilom.
            </p>
          </div>
          {/* ZDJĘCIE */}
          <img
            className="md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6"
            src={horse2}
          ></img>
        </div>
        {/* SESJE  TRENINGOWE 3*/}
        <div
          data-aos="fade-left"
          className="w-full flex md:flex-row flex-col  justify-center items-start"
        >
          <img
            className="md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6 "
            src={horse3}
          ></img>
          <div className="md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto">
            <h1 className="text-2xl  py-6 tracking-[5px] font-light text-titleGray text-center md:text-left ">
              Inne wydarzenia:
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Organizujesz jakieś wydarzenie w swojej stajni/ na placu
              treningowym i chciałbyś mieć profesjonalną relację z jego
              przebiegu, napisz do mnie i ustalimy szczegóły.
            </p>
          </div>
        </div>
        {/* SESJE MIOTÓW 4*/}
      </div>
    </div>
  );
}

export default TypesOfSessions;
