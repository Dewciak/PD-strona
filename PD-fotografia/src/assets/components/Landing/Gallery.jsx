import {useState, useEffect} from "react";
import GalleryButtons from "./GalleryButtons";

const IMAGES_PER_PAGE = 8; // Ilość obrazów ładowanych na raz

const Gallery = ({images, sessionType, setSessionType, setShowDialog, setImageIndex}) => {
  const [showImages, setShowImages] = useState(false);
  const [columns, setColumns] = useState("grid-cols-16 w-[5600px]");
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

  const sessionTypesButtons = [
    {name: "Psy", id: 3},
    {name: "Konie", id: 4},
    {name: "Wydarzenia", id: 5},
  ];

  useEffect(() => {
    // Reset widocznych obrazów przy zmianie kategorii
    setVisibleCount(IMAGES_PER_PAGE);

    // Ustaw szerokość na podstawie kategorii (oryginalna logika)
    // Kolumny = połowa obrazów (bo 2 rzędy)
    if (sessionType?.name === "Psy") setColumns("w-[5600px]");
    if (sessionType?.name === "Konie") setColumns("w-[4200px]");
    if (sessionType?.name === "Wydarzenia") setColumns("w-[3500px]");

    setShowImages(true);
  }, [sessionType]);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, images.length));
  };

  return (
    <div className='max-w-[1200px] flex flex-col'>
      <GalleryButtons setSessionType={setSessionType} sessionTypesButtons={sessionTypesButtons} />

      <div className='horizontal-scroll-container w-[95%] mx-auto px-2 py-2 overflow-x-scroll'>
        <div className={`grid grid-rows-2 grid-flow-col mb-4 mx-auto ${columns} items-start justify-start gap-4`}>
          {visibleImages.map((pic, key) => (
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

      {/* Przycisk "Pokaż więcej" */}
      {hasMore && (
        <button
          onClick={loadMore}
          className='mx-auto mt-4 mb-8 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity tracking-[2px] font-light'
        >
          Pokaż więcej ({images.length - visibleCount} pozostało)
        </button>
      )}
    </div>
  );
};

export default Gallery;
