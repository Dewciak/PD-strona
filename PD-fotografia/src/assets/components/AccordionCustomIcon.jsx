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

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-[85%] md:w-[55%]  py-6 mb-10 mx-auto">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          W jakiej formie są zdjęcia?
        </AccordionHeader>
        <AccordionBody>
          Oferuję różne opcje dostawy zdjęć, w tym pliki cyfrowe wysokiej
          jakości oraz wydruki w formie odbitek, zdjęć na płótnie czy albumów
          fotograficznych. Możemy omówić Twoje preferencje i dostosować ofertę
          do Twoich potrzeb.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Jak przygotować mojego pupila do sesji?
        </AccordionHeader>
        <AccordionBody>
          Przed sesją zdjęciową ważne jest, aby konie i psy były odpowiednio
          przygotowane. Wskazówki obejmują czyszczenie i pielęgnację sierści,
          wypoczęcie zwierzęcia, przygotowanie odpowiednich rekwizytów oraz
          przygotowanie miejsca, w którym odbędzie się sesja.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Czy dostępne są sesje zdjęciowe w studio oraz na zewnątrz?
        </AccordionHeader>
        <AccordionBody>
          Tak, oferuję zarówno sesje w studio, które są idealne do uzyskania
          czystych i profesjonalnych portretów, jak i sesje na zewnątrz, które
          pozwalają na uchwycenie naturalnej radości i energii zwierząt w
          otwartym powietrzu.
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default AccordionCustomIcon;
