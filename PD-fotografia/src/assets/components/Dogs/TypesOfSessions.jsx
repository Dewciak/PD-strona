import React from "react";

import Dog1 from "../../images/Dogs/plenerowa.jpg";
import Dog2 from "../../images/Dogs/treningowa.jpg";
import Dog3 from "../../images/Dogs/eksterierowa.jpg";
import Dog4 from "../../images/Dogs/puppy.jpg";

function TypesOfSessions() {
  return (
    // KONTENER NA WSZYSTKO
    <div className="max-w-[1100px] flex flex-col justify-center items-center mx-auto">
      {/* HEADER */}
      <h1 className="text-center py-16 text-4xl font-semibold">
        Rodzaje sesji
      </h1>
      {/* KONTENER NA SESJE */}
      <div className="w-full flex flex-col justify-center items-center mx-auto space-y-28">
        {/* SESJE PLENEROWE */}
        <div className="w-full flex flex-row justify-center items-start">
          {/* ZDJĘCIE */}
          <img className="w-[50%] rounded-[15px] " src={Dog1}></img>
          {/* TEKST */}
          <div className="w-[50%] px-14">
            <h1 className="text-2xl font-semibold py-6">Sesja plenerowa</h1>
            <p>
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
        {/* SESJE EKSTERIEROWE */}
        <div className="w-full flex flex-row justify-center items-start">
          {/* TEKST */}
          <div className="w-[50%] px-14">
            <h1 className="text-2xl font-semibold py-6">Sesja eksterierowa</h1>
            <p>
              Jest to idealny wybór jeśli potrzebujesz zapowiedzi miotu, reklamy
              reproduktora czy po prostu chcesz podkreślić atuty Twojego psa
              <br></br>Sesja trwa do czasu uzyskania najlepszych ujęć z
              uwzględnieniem zmęczenia psiego modela :)
            </p>
          </div>
          {/* ZDJĘCIE */}
          <img className="w-[50%] rounded-[15px] " src={Dog4}></img>
        </div>
        {/* SESJE  TRENINGOWE */}
        <div className="w-full flex flex-row justify-center items-start">
          <img className="w-[50%] rounded-[15px] " src={Dog2}></img>
          <div className="w-[50%] px-14">
            <h1 className="text-2xl font-semibold py-6">Treningowa</h1>
            <p>
              sesja zdjęciowa z treningu psa to doskonała okazja do uwiecznienia
              Waszych postępów i zaangażowania w treningu. Oglądanie zdjęć z
              treningu może pomóc Ci zauważyć i docenić osiągnięcia Twojego psa
              i dodatkowo zmotywuje Was do dalszego rozwoju.
            </p>
          </div>
        </div>
        {/* SESJE MIOTÓW */}
        <div className="w-full flex flex-row justify-center items-start">
          <div className="w-[50%] px-14">
            <h1 className="text-2xl font-semibold py-6">Sesja miotów</h1>
            <p>
              Jeśli w Twojej hodowli urodziły się szczenięta warto zrobić im
              sesje zdjęciową. <br />
              Zdjęcia  możemy wykonać zarówno w domu jak i ogrodzie. Dostępne
              mam odpowiednie akcesoria oraz niewielkie przenośne studio, które
              zabieram ze sobą kiedy nie możemy robić zdjęć na zewnątrz :)
            </p>
          </div>
          <img className="w-[50%] rounded-[15px] " src={Dog3}></img>
        </div>
      </div>
    </div>
  );
}

export default TypesOfSessions;
