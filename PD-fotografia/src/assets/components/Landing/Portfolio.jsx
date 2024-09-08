import React, {useState} from "react";
import GalleryWithTab from "./GalleryWithTab";
import {Link} from "react-scroll";
import Gallery from "./Gallery";
import GalleryDialog from "./GalleryDialog";

import dog1 from "../../images/Gallery/Dogs/1.webp";
import dog2 from "../../images/Gallery/Dogs/2.jpg";
import dog3 from "../../images/Gallery/Dogs/3.jpg";
import dog4 from "../../images/Gallery/Dogs/4.jpg";
import dog5 from "../../images/Gallery/Dogs/5.jpg";
import dog6 from "../../images/Gallery/Dogs/6.jpg";

import horse1 from "../../images/Gallery/Horses/1.jpg";
import horse2 from "../../images/Gallery/Horses/2.jpg";
import horse3 from "../../images/Gallery/Horses/3.jpg";
import horse4 from "../../images/Gallery/Horses/4.jpg";
import horse5 from "../../images/Gallery/Horses/5.jpg";
import horse6 from "../../images/Gallery/Horses/6.jpg";

import event1 from "../../images/Gallery/Events/1.jpg";
import event2 from "../../images/Gallery/Events/2.jpg";
import event3 from "../../images/Gallery/Events/3.jpg";
import event4 from "../../images/Gallery/Events/4.jpg";
import event5 from "../../images/Gallery/Events/5.jpg";
import event6 from "../../images/Gallery/Events/6.jpg";

function Portfolio() {
  const dogs = {
    id: [dog1, dog2, dog3, dog4, dog5, dog6, dog6, dog6],
    name: "Psy",
  };
  const horses = {
    id: [horse1, horse2, horse3, horse4, horse5, horse6, horse6, horse6],
    name: "Konie",
  };
  const events = {
    id: [event1, event2, event3, event4, event5, event6, event6, event6],
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
