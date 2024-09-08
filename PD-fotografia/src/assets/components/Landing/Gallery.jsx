import {useState, useEffect} from "react";
import GalleryButtons from "./GalleryButtons";

const Gallery = ({
  sessionType,
  setSessionType,
  setShowDialog,
  setBigPic,
  dogs,
  horses,
  events,
}) => {
  const sessionTypesButtons = [dogs, horses, events];
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    setShowImages(false);
    const timer = setTimeout(() => setShowImages(true), 350); // krótki opóźnienie na animację
    return () => clearTimeout(timer);
  }, [sessionType]);

  return (
    <div className="max-w-[1200px] flex flex-col">
      <GalleryButtons
        setSessionType={setSessionType}
        sessionTypesButtons={sessionTypesButtons}
      />
      <div className="w-full py-2 overflow-x-scroll">
        <div className="grid w-[1500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-center gap-4">
          {sessionType.id.map((pic, key) => (
            <img
              onClick={() => {
                setShowDialog(true), setBigPic(pic);
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
