import React from "react";

import horse1 from "../../images/Horses/plenerowa.jpg";
import horse3 from "../../images/Horses/sprzedazowa.jpg";
import horse4 from "../../images/Horses/czarnetlo.jpg";
import horse2 from "../../images/Dogs/miot1.jpg";

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
              Sesja plenerowa
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[28px]">
              Podczas tej sesji mogę wykonać zarówno zdjęcia samego konia jak i
              uchwycić Was wspólnie.
              <br />
              <br /> Zazwyczaj zdjęcia zajmują nam około 1-1,5 h. To oferta dla
              osób, które chcą mieć pamiątkę na długie lata.
              <br />
              <br /> Podczas sesji wspólnie wybieramy miejsce gdzie będziemy
              fotografować, tak by Twój pupil czuł się komfortowo, może to być
              zarówno teren stajni, pastwisko czy pobliski las.
              <br /> (Dostępne są III pakiety cenowe opisane poniżej)
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
              Sesja treningowa
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Jeśli chcesz mieć pamiątkę z treningu, jest to oferta skeirowana
              idelanie dla Ciebie.
              <br /> Podczas tego rodzaju sesji jestem dla Was dostępna przez
              cały trening łąpiąc najlepsze momenty.
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
              Sesja sprzedażowa / sesja ogiera
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              Z przyjemnością oferuję Ci profesjonalną sesję zdjęciową, która
              pomoże w promocji Twojego konia i przyciągnie potencjalnych
              klientów. <br />
              <br />
              Podczas tego rodzaju sesji skupiam się głównie na ujęciach
              zootechnicznych, portretowych oraz zdjęciach z przodu konia. Jeśli
              masz ochotę możemy wykonać również ujęcia w ruchu.
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
              Portrety na czarnym tle
            </h1>
            <p className="tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px] ">
              Jeśli marzysz o portretach swojego konia na czarnym tle, jestem do
              dyspozycji
            </p>
          </div>
          <img
            className="md:w-[50%] w-[80%] rounded-[15px] mx-auto mt-6"
            src={horse4}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TypesOfSessions;
