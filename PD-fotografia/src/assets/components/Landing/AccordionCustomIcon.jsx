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
    <div className="w-[85%]  max-w-[900px]  md:w-[55%] py-8  mx-auto">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="font-[Montserrat] tracking-[5px] font-light text-titleGray"
          onClick={() => handleOpen(1)}
        >
          Jak przygotować się przed sesją?
        </AccordionHeader>
        <AccordionBody className=" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
          Przed sesją warto nakreślić mi swoje oczekiwania co do zdjęć. Jeśli
          robisz ujęcia swojego pupila zadbaj o to by był on wypoczęty, jego
          sierść nie była posklejana i brudna, a na sesje zabierz ulubione
          smaczki.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="font-[Montserrat] tracking-[5px] font-light text-titleGray"
          onClick={() => handleOpen(2)}
        >
          Czy mogę dostać nieobrobione zdjęcia z sesji?
        </AccordionHeader>
        <AccordionBody className=" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
          Nie wysyłam nieobrobionych zdjęć. Po sesji wybieram najlepsze kadry i
          poddaje je starannej obróbce, aby zapewnić najlepszą jakość materiału
          który otrzymasz.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          className="font-[Montserrat]  tracking-[5px] font-light text-titleGray"
          onClick={() => handleOpen(3)}
        >
          Ile zwierząt mogę zabrać na sesje?
        </AccordionHeader>
        <AccordionBody className=" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px] ">
          Co do zasady ile chcesz, jednak pamiętaj, że najlepiej jest nam się
          skupić na mniejszej ilości modeli. Jeśli planujesz ujęcia z większą
          ilością zwierzaków, napisz mi to wcześniej :)
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default AccordionCustomIcon;
