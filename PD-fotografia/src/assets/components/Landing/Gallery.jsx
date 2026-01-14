import {useState, useEffect, useRef, useCallback} from "react";
import GalleryButtons from "./GalleryButtons";

const IMAGES_PER_PAGE = 8; // Ilość obrazów ładowanych na raz

const Gallery = ({images, sessionType, setSessionType, setShowDialog, setImageIndex}) => {
  const [showImages, setShowImages] = useState(false);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [columns, setColumns] = useState("w-[5600px]");
  const scrollContainerRef = useRef(null);
  const sentinelRef = useRef(null);

  const sessionTypesButtons = [
    {name: "Psy", id: 3},
    {name: "Konie", id: 4},
    {name: "Wydarzenia", id: 5},
  ];

  // Reset przy zmianie kategorii
  useEffect(() => {
    setVisibleCount(IMAGES_PER_PAGE);
    setShowImages(true);
    
    // Stała szerokość na podstawie kategorii (jak było wcześniej)
    if (sessionType?.name === "Psy") setColumns("w-[5600px]");
    if (sessionType?.name === "Konie") setColumns("w-[4200px]");
    if (sessionType?.name === "Wydarzenia") setColumns("w-[3500px]");
    
    // Scroll do początku przy zmianie kategorii
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [sessionType]);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const loadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    // Małe opóźnienie dla lepszego UX (pokazanie spinnera)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, images.length));
      setIsLoading(false);
    }, 300);
  }, [images.length, isLoading]);

  // Infinite scroll z IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    const container = scrollContainerRef.current;
    
    if (!sentinel || !container || !hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      {
        root: container,
        rootMargin: "0px 300px 0px 0px", // Załaduj 300px przed końcem
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, loadMore, isLoading]);

  return (
    <div className='max-w-[1200px] flex flex-col'>
      <GalleryButtons setSessionType={setSessionType} sessionTypesButtons={sessionTypesButtons} />

      <div 
        ref={scrollContainerRef}
        className='horizontal-scroll-container w-[95%] mx-auto px-2 py-2 overflow-x-scroll'
      >
        <div 
          className={`grid grid-rows-2 grid-flow-col mb-4 items-start justify-start gap-4 ${columns}`}
        >
          {visibleImages.map((pic, key) => (
            <img
              onClick={() => {
                setShowDialog(true);
                setImageIndex(key);
              }}
              src={pic}
              alt={`Image ${key + 1}`}
              className={`${
                showImages ? "animate-fadeIn" : "opacity-0"
              } duration-500 object-cover object-center h-60 w-[350px] rounded-xl hover:scale-105 cursor-pointer`}
              loading='lazy'
              key={key}
            />
          ))}
          
          {/* Spinner loading na końcu galerii */}
          {hasMore && (
            <div 
              ref={sentinelRef} 
              className='flex items-center justify-center w-[100px] h-60'
              aria-hidden='true'
            >
              {isLoading && (
                <div className='animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-500'></div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
