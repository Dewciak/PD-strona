import React from "react";
import Dog from "../../images/BlueBarDog.jpg";

function BlueBar() {
  return (
    <div>
      <div className="w-screen bg-[#DFF0FA] md:my-10  py-[0px] ">
        <div className="max-w-[900px] flex mx-auto md:flex-row flex-row justify-center items-center py-[30px]">
          <div className="flex flex-col px-6 md:items-start  items-start justify-start h-full mx-auto md:w-[60%]">
            <p1 className="text-start text-2xl pb-6   tracking-[2px] font-light leading-10 ">
              K I L K A   P O W O D Ó W  <br /> D L A C Z E G O . . .
            </p1>
            <p1 className="tracking-[1.7px]  text-myGray font-light text-[18px] leading-[32px]  mr-10">
              • Zyskujesz wspaniałą pamiątkę na całe życie <br />
              {/* <br />• Sesja może być dobrym sposobem na spędzenie wspólnie czasu{" "} */}
              <br />
              • Twój czworonożny przyjaciel zostanie uwieczniony w najlepszy
              możliwy sposób
              <br />
              <br />• Ukażę na fotografiach piękną więź, jaka was łączy
              <br />
              <br />• Zdjęcia są wysokiej rozdzielczości idealne do wydruków,
              foto książek i innych niekomercyjnych zastosowań.
            </p1>
          </div>
          <div className="md:w-[37%] w-[90%] h-full my-4 md:my-0">
            <img src={Dog}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBar;
