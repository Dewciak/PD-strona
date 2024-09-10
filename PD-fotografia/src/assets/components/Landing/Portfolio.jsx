import React, {useState} from "react";
import {Link} from "react-scroll";
import Gallery from "./Gallery";
import GalleryDialog from "./Dialog";
import {dogs, horses, events} from "./GalleryImages";
function Portfolio() {
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
