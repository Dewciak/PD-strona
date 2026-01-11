import React, {useState, useEffect} from "react";
import GalleryDialog from "./Dialog";
import Gallery from "./Gallery";

function Portfolio({portfolioImages}) {
  const [showDialog, setShowDialog] = useState(false);
  const [sessionType, setSessionType] = useState({name: "Psy", id: 3});
  const [imageIndex, setImageIndex] = useState(0);
  const [imagesByCategory, setImagesByCategory] = useState({
    Psy: [],
    Konie: [],
    Wydarzenia: [],
  });

  useEffect(() => {
    setImagesByCategory(portfolioImages);
  }, [portfolioImages]);

  return (
    <section id='Portfolio' className='max-w-[1050px] h-auto py-0 mx-auto md:mt-0 md:mb-32 md:pt-0 pt-16'>
      <h2 className='text-center text-6xl pb-12 md:pb-4 md:my-14 tracking-[5px] font-light text-titleGray'>
        Portfolio
      </h2>
      <Gallery
        images={imagesByCategory[sessionType.name] || []}
        sessionType={sessionType}
        setSessionType={setSessionType}
        setShowDialog={setShowDialog}
        setImageIndex={setImageIndex}
      />
      {showDialog === true ? (
        <GalleryDialog
          images={imagesByCategory[sessionType.name] || []}
          setShowDialog={setShowDialog}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Portfolio;
