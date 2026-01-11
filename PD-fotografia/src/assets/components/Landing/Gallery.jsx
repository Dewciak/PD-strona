import {useState, useEffect} from "react";
import GalleryButtons from "./GalleryButtons";

const Gallery = ({images, sessionType, setSessionType, setShowDialog, setImageIndex}) => {
  const [showImages, setShowImages] = useState(false);
  const [columns, setColumns] = useState("grid-cols-16 w-[5600px]");

  const sessionTypesButtons = [
    {name: "Psy", id: 3},
    {name: "Konie", id: 4},
    {name: "Wydarzenia", id: 5},
  ];

  useEffect(() => {
    if (sessionType?.name === "Psy") setColumns("grid-cols-16 w-[5600px]");
    if (sessionType?.name === "Konie") setColumns("grid-cols-12 w-[4200px]");
    if (sessionType?.name === "Wydarzenia") setColumns("grid-cols-10 w-[3500px]");

    setShowImages(true);
  }, [sessionType]);

  return (
    <div className='max-w-[1200px] flex flex-col'>
      <GalleryButtons setSessionType={setSessionType} sessionTypesButtons={sessionTypesButtons} />

      <div className='horizontal-scroll-container w-[95%] mx-auto px-2 py-2 overflow-x-scroll'>
        <div className={`grid mb-4 mx-auto ${columns} items-start justify-center gap-4`}>
          {images.map((pic, key) => (
            <img
              onClick={() => {
                setShowDialog(true);
                setImageIndex(key);
              }}
              src={pic}
              alt={`Image ${key + 1}`}
              className={`w-full ${
                showImages ? "animate-fadeIn" : "opacity-0"
              } duration-500 object-cover object-center h-60 rounded-xl hover:scale-105 cursor-pointer`}
              loading='lazy'
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
