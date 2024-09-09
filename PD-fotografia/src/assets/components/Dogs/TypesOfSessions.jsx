import React from "react";

import Dog1 from "../../images/Dogs/plenerowe.webp";
import Dog3 from "../../images/Dogs/treningowa.webp";
import Dog2 from "../../images/Dogs/eksterier.webp";
import Dog4 from "../../images/Dogs/mioty.webp";

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
            src={Dog1}
          ></img>
          {/* TEKST */}
          <div className="md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto">
            <h1 className="text-2xl  pb-6 tracking-[5px] font-normal text-titleGray text-center md:text-left ">
              Sesja plenerowa
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Podczas tej sesji mogę wykonać zarówno zdjęcia samego psa jak i
              uchwycić Wasze wspólne chwile.
              <br />
              Zazwyczaj zdjęcia zajmują nam około 1-1,5 h. To oferta dla osób,
              które chcą mieć pamiątkę na długie lata pod postacią zdjęć
              ukazujących osobowość i charakter swojego psa.
              <br />
              Podczas sesji wspólnie wybieramy miejsce gdzie będziemy
              fotografować, tak by Twój pupil czuł się komfortowo. {" "}
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
              Sesja eksterierowa
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Jest to idealny wybór jeśli potrzebujesz zapowiedzi miotu, reklamy
              reproduktora czy po prostu chcesz podkreślić atuty Twojego psa
              <br></br>Sesja trwa do czasu uzyskania najlepszych ujęć z
              uwzględnieniem zmęczenia psiego modela :)
            </p>
          </div>
          {/* ZDJĘCIE */}
          <img
            className="md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6"
            src={Dog2}
          ></img>
        </div>
        {/* SESJE  TRENINGOWE 3*/}
        <div
          data-aos="fade-left"
          className="w-full flex md:flex-row flex-col  justify-center items-start"
        >
          <img
            className="md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6 "
            src={Dog3}
          ></img>
          <div className="md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto">
            <h1 className="text-2xl  py-6 tracking-[5px] font-light text-titleGray text-center md:text-left ">
              Sesja treningowa
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Sesja zdjęciowa z treningu psa to doskonała okazja do uwiecznienia
              Waszych postępów i zaangażowania w treningu. Oglądanie zdjęć z
              treningu może pomóc Ci zauważyć i docenić osiągnięcia Twojego psa
              i dodatkowo zmotywuje Was do dalszego rozwoju.
            </p>
          </div>
        </div>
        {/* SESJE MIOTÓW 4*/}
        <div
          data-aos="fade-right"
          className="w-full flex md:flex-row flex-col-reverse  justify-center items-start"
        >
          <div className="md:w-[50%] w-[70%] md:px-14 mt-6 md:mt-0 mx-auto">
            <h1 className="text-2xl  py-6 tracking-[5px] font-light text-titleGray text-center md:text-left ">
              Sesja miotów
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px] ">
              Jeśli w Twojej hodowli urodziły się szczenięta warto zrobić im
              sesje zdjęciową. <br />
              Zdjęcia  możemy wykonać zarówno w domu jak i ogrodzie. Dostępne
              mam odpowiednie akcesoria oraz niewielkie przenośne studio, które
              zabieram ze sobą kiedy nie możemy robić zdjęć na zewnątrz :)
            </p>
          </div>
          <img
            className="md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6"
            src={Dog4}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TypesOfSessions;
