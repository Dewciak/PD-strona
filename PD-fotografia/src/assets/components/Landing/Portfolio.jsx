import React, {useState} from "react";
import GalleryWithTab from "./GalleryWithTab";
import {Link} from "react-scroll";
import Gallery from "./Gallery";
import GalleryDialog from "./GalleryDialog";

import dog1 from "../../images/Gallery/Dogs/1.webp";
import dog2 from "../../images/Gallery/Dogs/2.webp";
import dog3 from "../../images/Gallery/Dogs/3.webp";
import dog4 from "../../images/Gallery/Dogs/4.webp";
import dog5 from "../../images/Gallery/Dogs/5.webp";
import dog6 from "../../images/Gallery/Dogs/6.webp";
import dog7 from "../../images/Gallery/Dogs/7.webp";
import dog8 from "../../images/Gallery/Dogs/8.webp";
import dog9 from "../../images/Gallery/Dogs/9.webp";
import dog10 from "../../images/Gallery/Dogs/10.webp";
import dog11 from "../../images/Gallery/Dogs/11.webp";
import dog12 from "../../images/Gallery/Dogs/12.webp";
import dog13 from "../../images/Gallery/Dogs/13.webp";
import dog14 from "../../images/Gallery/Dogs/14.webp";
import dog15 from "../../images/Gallery/Dogs/15.webp";
import dog16 from "../../images/Gallery/Dogs/16.webp";
import dog17 from "../../images/Gallery/Dogs/17.webp";
import dog18 from "../../images/Gallery/Dogs/18.webp";
import dog19 from "../../images/Gallery/Dogs/19.webp";
import dog20 from "../../images/Gallery/Dogs/20.webp";
import dog21 from "../../images/Gallery/Dogs/21.webp";
import dog22 from "../../images/Gallery/Dogs/22.webp";
import dog23 from "../../images/Gallery/Dogs/23.webp";
import dog24 from "../../images/Gallery/Dogs/24.webp";
import dog25 from "../../images/Gallery/Dogs/25.webp";
import dog26 from "../../images/Gallery/Dogs/26.webp";
import dog27 from "../../images/Gallery/Dogs/27.webp";
import dog28 from "../../images/Gallery/Dogs/28.webp";
import dog29 from "../../images/Gallery/Dogs/29.webp";
import dog30 from "../../images/Gallery/Dogs/30.webp";
// import dog31 from "../../images/Gallery/Dogs/31.webp";
// import dog32 from "../../images/Gallery/Dogs/32.webp";
// import dog33 from "../../images/Gallery/Dogs/33.webp";

import horse1 from "../../images/Gallery/Horses/1.webp";
import horse2 from "../../images/Gallery/Horses/2.webp";
import horse3 from "../../images/Gallery/Horses/3.webp";
import horse4 from "../../images/Gallery/Horses/4.webp";
import horse5 from "../../images/Gallery/Horses/5.webp";
import horse6 from "../../images/Gallery/Horses/6.webp";
import horse7 from "../../images/Gallery/Horses/7.webp";
import horse8 from "../../images/Gallery/Horses/8.webp";
import horse9 from "../../images/Gallery/Horses/9.webp";
import horse10 from "../../images/Gallery/Horses/10.webp";
import horse11 from "../../images/Gallery/Horses/11.webp";
import horse12 from "../../images/Gallery/Horses/12.webp";
import horse13 from "../../images/Gallery/Horses/13.webp";
import horse14 from "../../images/Gallery/Horses/14.webp";
import horse15 from "../../images/Gallery/Horses/15.webp";
import horse16 from "../../images/Gallery/Horses/16.webp";
import horse17 from "../../images/Gallery/Horses/17.webp";
import horse18 from "../../images/Gallery/Horses/18.webp";
import horse19 from "../../images/Gallery/Horses/19.webp";
import horse20 from "../../images/Gallery/Horses/20.webp";
import horse21 from "../../images/Gallery/Horses/21.webp";
import horse22 from "../../images/Gallery/Horses/22.webp";
import horse23 from "../../images/Gallery/Horses/23.webp";
import horse24 from "../../images/Gallery/Horses/24.webp";

import event1 from "../../images/Gallery/Events/1.webp";
import event2 from "../../images/Gallery/Events/2.webp";
import event3 from "../../images/Gallery/Events/3.webp";
import event4 from "../../images/Gallery/Events/4.webp";
import event5 from "../../images/Gallery/Events/5.webp";
import event6 from "../../images/Gallery/Events/6.webp";
import event7 from "../../images/Gallery/Events/7.webp";
import event8 from "../../images/Gallery/Events/8.webp";
import event9 from "../../images/Gallery/Events/9.webp";
import event10 from "../../images/Gallery/Events/10.webp";
import event11 from "../../images/Gallery/Events/11.webp";
import event12 from "../../images/Gallery/Events/12.webp";
import event13 from "../../images/Gallery/Events/13.webp";
import event14 from "../../images/Gallery/Events/14.webp";
import event15 from "../../images/Gallery/Events/15.webp";
import event16 from "../../images/Gallery/Events/16.webp";
import event17 from "../../images/Gallery/Events/17.webp";
import event18 from "../../images/Gallery/Events/18.webp";
import event19 from "../../images/Gallery/Events/19.webp";
import event20 from "../../images/Gallery/Events/20.webp";

function Portfolio() {
  const dogs = {
    id: [
      dog1,
      dog2,
      dog3,
      dog4,
      dog5,
      dog6,
      dog7,
      dog8,
      dog9,
      dog10,
      dog11,
      dog12,
      dog13,
      dog14,
      dog15,
      dog16,
      dog17,
      dog18,
      dog19,
      dog20,
      dog21,
      dog22,
      dog23,
      dog24,
      dog25,
      dog26,
      dog27,
      dog28,
      dog29,
      dog30,
      // dog31,
      // dog32,
    ],
    name: "Psy",
  };
  const horses = {
    id: [
      horse1,
      horse2,
      horse3,
      horse4,
      horse5,
      horse6,
      horse7,
      horse8,
      horse9,
      horse10,
      horse11,
      horse12,
      horse13,
      horse14,
      horse15,
      horse16,
      horse17,
      horse18,
      horse19,
      horse20,
      horse21,
      horse22,
      horse23,
      horse24,
    ],
    name: "Konie",
  };
  const events = {
    id: [
      event1,
      event2,
      event3,
      event4,
      event5,
      event6,
      event7,
      event8,
      event9,
      event10,
      event11,
      event12,
      event13,
      event14,
      event15,
      event16,
      event17,
      event18,
      event19,
      event20,
    ],
    name: "Wydarzenia",
  };

  const [showDialog, setShowDialog] = useState(false);
  const [sessionType, setSessionType] = useState(dogs);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div
      id="Portfolio"
      className="max-w-[1050px] h-auto py-0 mx-auto md:mt-0 md:mb-32 md:pt-0 pt-16"
    >
      <h1 className="text-center text-6xl pb-12 md:pb-4 md:my-14 tracking-[5px] font-light text-titleGray">
        Portfolio
      </h1>
      {/* <h2 className="text-center text-lg pb-10 tracking-[0px] font-[Lora] text-gray-500 font-normal text-[17px] leading-[34px]">
        Zobacz kilka z moich zdjęć
      </h2> */}
      {/* <GalleryWithTab /> */}
      <Gallery
        sessionType={sessionType}
        setSessionType={setSessionType}
        setShowDialog={setShowDialog}
        dogs={dogs}
        horses={horses}
        events={events}
        setImageIndex={setImageIndex}
      />
      {showDialog === true ? (
        <GalleryDialog
          sessionType={sessionType}
          setShowDialog={setShowDialog}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Portfolio;
