import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Questions() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div id="FAQ" className="flex flex-col justify-center items-center">
      <div className="w-[80%] max-w-[1000px]  md:w-[85%] pt-16  mx-auto mb-10">
        <h1 className="text-center text-3xl font-semibold py-8 mb-10">
          Często zadawane pytania
        </h1>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="font-Montserrat"
            onClick={() => handleOpen(1)}
          >
            W jakiej formie są zdjęcia?
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            Oferuję różne opcje dostawy zdjęć, w tym pliki cyfrowe wysokiej
            jakości oraz wydruki w formie odbitek, zdjęć na płótnie czy albumów
            fotograficznych. Możemy omówić Twoje preferencje i dostosować ofertę
            do Twoich potrzeb.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className="font-Montserrat"
            onClick={() => handleOpen(2)}
          >
            Jak przygotować mojego pupila do sesji?
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            Przed sesją zdjęciową ważne jest, aby konie i psy były odpowiednio
            przygotowane. Wskazówki obejmują czyszczenie i pielęgnację sierści,
            wypoczęcie zwierzęcia, przygotowanie odpowiednich rekwizytów oraz
            przygotowanie miejsca, w którym odbędzie się sesja.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className="font-Montserrat"
            onClick={() => handleOpen(3)}
          >
            Czy dostępne są sesje zdjęciowe w studio oraz na zewnątrz?
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            Tak, oferuję zarówno sesje w studio, które są idealne do uzyskania
            czystych i profesjonalnych portretów, jak i sesje na zewnątrz, które
            pozwalają na uchwycenie naturalnej radości i energii zwierząt w
            otwartym powietrzu.
          </AccordionBody>
        </Accordion>
      </div>
      <a href="">
        <button className="bg-blue-200 rounded-[50px] mx-auto px-6 py-4 mb-16 mt-10">
          Regulamin sesji
        </button>
      </a>
    </div>
  );
}

export default Questions;
