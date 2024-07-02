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
    <div id="FAQ" className="flex flex-col justify-center items-center  ">
      <div className="w-[80%] max-w-[1000px]  md:w-[85%] pt-16  mx-auto md:mb-0 mb-28 min-h-[550px]">
        <h1 className="text-center text-3xl  py-8 mb-10 tracking-[5px] font-light text-titleGray">
          Często zadawane pytania
        </h1>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="font-Montserrat tracking-[5px] font-light text-titleGray "
            onClick={() => handleOpen(1)}
          >
            W jakiej formie są zdjęcia?
          </AccordionHeader>
          <AccordionBody className="font-Montserrat tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
            Oferuję różne opcje dostawy zdjęć, w tym pliki cyfrowe wysokiej
            jakości oraz wydruki w formie odbitek, zdjęć na płótnie czy albumów
            fotograficznych. Możemy omówić Twoje preferencje i dostosować ofertę
            do Twoich potrzeb.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className="font-Montserrat tracking-[5px] font-light text-titleGray"
            onClick={() => handleOpen(2)}
          >
            Jak przygotować mojego pupila do sesji?
          </AccordionHeader>
          <AccordionBody className="font-Montserrat tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
            Przed sesją zdjęciową ważne jest, aby konie i psy były odpowiednio
            przygotowane. Wskazówki obejmują czyszczenie i pielęgnację sierści,
            wypoczęcie zwierzęcia, przygotowanie odpowiednich rekwizytów oraz
            przygotowanie miejsca, w którym odbędzie się sesja.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className="font-Montserrat tracking-[5px] font-light text-titleGray"
            onClick={() => handleOpen(3)}
          >
            Czy dostępne są sesje zdjęciowe w studio oraz na zewnątrz?
          </AccordionHeader>
          <AccordionBody className="font-Montserrat tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
            Tak, oferuję zarówno sesje w studio, które są idealne do uzyskania
            czystych i profesjonalnych portretów, jak i sesje na zewnątrz, które
            pozwalają na uchwycenie naturalnej radości i energii zwierząt w
            otwartym powietrzu.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            className="font-Montserrat tracking-[5px] font-light text-titleGray"
            onClick={() => handleOpen(4)}
          >
            Dodatkowe informacje
          </AccordionHeader>
          <AccordionBody className="flex flex-col">
            <p className="font-Montserrat tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              <br />
              Do 10 dni roboczych od wykonania sesji zdjęciowej dostaniesz ode
              mnie galerię zdjęć do wyboru. <br />
              <br /> Pamiętaj, że ostateczny wybór zdjęć należy do Ciebie.{" "}
              <br />
              <br /> Do ceny każdej sesji doliczam również koszty dojazdu.{" "}
              <br />
              <br />
              Wybrane ujęcia otrzymasz w dwóch formatach - oryginalnym do druku
              oraz pomniejszonym do publikacji w social mediach <br />
              <br />
              Jeśli potrzebujesz faktury za zdjęcia, nie ma problemu - wystawiam
              faktury bez VAT.
            </p>
          </AccordionBody>
        </Accordion>
      </div>
      {/* <a href="">
        <button className="bg-blue-200 rounded-[50px] mx-auto px-6 py-4 mb-16 mt-10">
          Regulamin sesji
        </button>
      </a> */}
    </div>
  );
}

export default Questions;
