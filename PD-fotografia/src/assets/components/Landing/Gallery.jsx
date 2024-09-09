import {useState, useEffect} from "react";
import GalleryButtons from "./GalleryButtons";

const Gallery = ({
  sessionType,
  setSessionType,
  setShowDialog,
  dogs,
  horses,
  events,
  setImageIndex,
}) => {
  const sessionTypesButtons = [dogs, horses, events];
  const [showImages, setShowImages] = useState(false);
  const [columns, setColumns] = useState("lg:grid-cols-15 md:w-[5200px]");
  useEffect(() => {
    if (sessionType.name === "Psy") setColumns("lg:grid-cols-15 md:w-[5200px]");
    if (sessionType.name === "Konie")
      setColumns("lg:grid-cols-12 md:w-[4200px]");
    if (sessionType.name === "Wydarzenia")
      setColumns("lg:grid-cols-10 md:w-[3500px]");
    setShowImages(false);
    const timer = setTimeout(() => setShowImages(true), 350);
    return () => clearTimeout(timer);
  }, [sessionType]);

  return (
    <div className="max-w-[1200px] flex flex-col">
      <GalleryButtons
        setSessionType={setSessionType}
        sessionTypesButtons={sessionTypesButtons}
      />
      <div className="w-full px-2 py-2 overflow-x-scroll">
        <div
          className={`grid   mb-4 mx-auto md:grid-cols-2 ${columns} items-start justify-center gap-4`}
        >
          {sessionType.id.map((pic, key) => (
            <img
              onClick={() => {
                setShowDialog(true), setImageIndex(key);
              }}
              src={pic}
              className={`w-full ${
                showImages ? "animate-fadeIn" : "opacity-0"
              } duration-500 object-cover object-center h-60 rounded-xl hover:scale-105 cursor-pointer`}
              loading="lazy"
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
