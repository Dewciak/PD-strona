import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({id, open}) {
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

export function Questions({
  props: {header1, text1, header2, text2, header3, text3, header4, text4},
}) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div id="FAQ" className="flex flex-col justify-center items-center  ">
      <div className="w-[80%] max-w-[1000px]  md:w-[85%] pt-16  mx-auto md:mb-0 mb-28 md:min-h-[750px] min-h-[820px]">
        <h1 className="text-center text-3xl  py-8 mb-10 tracking-[5px] font-light text-titleGray">
          Często zadawane pytania
        </h1>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="font-Montserrat tracking-[5px] font-light text-titleGray "
            onClick={() => handleOpen(1)}
          >
            {header1}
          </AccordionHeader>
          <AccordionBody className="font-Montserrat tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
            {text1}
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className="font-Montserrat tracking-[5px] font-light text-titleGray"
            onClick={() => handleOpen(2)}
          >
            {header2}
          </AccordionHeader>
          <AccordionBody className="font-Montserrat tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
            {text2}
          </AccordionBody>
        </Accordion>
        {header3 ? (
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              className="font-Montserrat tracking-[5px] font-light text-titleGray"
              onClick={() => handleOpen(3)}
            >
              {header3}
            </AccordionHeader>
            <AccordionBody className="font-Montserrat tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              {text3}
            </AccordionBody>
          </Accordion>
        ) : (
          ""
        )}
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            className="font-Montserrat tracking-[5px] font-light text-titleGray"
            onClick={() => handleOpen(4)}
          >
            {header4}
          </AccordionHeader>
          <AccordionBody className="flex flex-col">
            <p className="font-Montserrat whitespace-pre-line tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]">
              {text4}
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
