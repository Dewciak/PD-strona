import React from "react";
import Dog from "../../images/BlueBarDog.webp";

function BlueBar() {
  const header = `
              K I L K A   P O W O D Ó W  
              D L A C Z E G O . . .
  `;
  return (
    <div>
      <div className="w-screen bg-[#eef5f9] md:my-10  py-[0px] mt-12 md:mt-0 ">
        <div className="max-w-[900px] flex-col flex mx-auto md:flex-row  justify-center items-center py-[30px]">
          <div className="flex flex-col px-4 md:items-start  items-start justify-start h-full mx-auto md:w-[60%] ">
            <p className="text-center mx-auto lg:text-start lg:mx-0 whitespace-pre-line  md:text-2xl text-[24px] pb-6   tracking-[2px] leading-10 font-normal  bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text ">
              {header}
            </p>
            <p className="tracking-[1.7px]  text-myGray font-light text-[18px] leading-[32px]  md:mr-10 pb-6 md:pb-0">
              • Zyskujesz wspaniałą pamiątkę na całe życie <br />
              <br />
              • Twój czworonożny przyjaciel zostanie uwieczniony w najlepszy
              możliwy sposób
              <br />
              <br />• Ukażę na fotografiach piękną więź jaka was łączy
              <br />
              <br />• Zdjęcia są wysokiej rozdzielczości idealne do wydruków,
              foto książek i innych niekomercyjnych zastosowań.
            </p>
          </div>
          <div className="md:w-[37%] w-[90%] h-full my-4 md:my-0">
            <img src={Dog} loading="lazy"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBar;
