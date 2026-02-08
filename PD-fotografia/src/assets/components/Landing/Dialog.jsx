import {useState, useEffect, useCallback, useRef} from "react";

const GalleryDialog = ({images = [], setShowDialog, imageIndex, setImageIndex}) => {
  const [imgWidth, setImgWidth] = useState(0);
  const imgRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const activeThumbnailRef = useRef(null);

  function showNextImage() {
    setImageIndex((index) => {
      if (index >= images.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index <= 0) return images.length - 1;

      return index - 1;
    });
  }
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPrevImage();
      }
    },
    [showNextImage, showPrevImage]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (activeThumbnailRef.current && thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const thumb = activeThumbnailRef.current;
      const scrollLeft = thumb.offsetLeft - container.offsetWidth / 2 + thumb.offsetWidth / 2;
      container.scrollTo({left: scrollLeft, behavior: 'smooth'});
    }
  }, [imageIndex]);

  const updateImgWidth = useCallback(() => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.clientWidth);
    }
  }, []);

  return (
    <div
      className='flex absolute flex-col items-start 
        top-0 left-0  w-full h-full '
    >
      <div onClick={() => setShowDialog(false)} className='fixed top-0 left-0 z-[15] w-full h-full bg-[#000000c1] '>
        <button
          onClick={() => setShowDialog(false)}
          className=' text-6xl z-[16] md:left-[94%] left-[90%] text-white relative md:top-[3vh] top-[1vh] '
        >
          ×
        </button>
      </div>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[94vw] max-w-[1200px] z-[16] flex flex-col items-center'>
        {/* Main image */}
        <div className='relative w-full flex items-center justify-center'>
          <button
            onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
            className='absolute left-2 sm:left-4 z-10 bg-white/90 hover:bg-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center duration-200 shadow-lg'
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <img
            ref={imgRef}
            src={images[imageIndex]}
            key={imageIndex}
            onLoad={updateImgWidth}
            className='max-w-full max-h-[78vh] object-contain rounded-xl'
          />
          <button
            onClick={(e) => { e.stopPropagation(); showNextImage(); }}
            className='absolute right-2 sm:right-4 z-10 bg-white/90 hover:bg-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center duration-200 shadow-lg'
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        {/* Thumbnails */}
        <div
          ref={thumbnailsRef}
          className='mt-3 overflow-x-auto overflow-y-hidden scrollbar-hide'
          style={{width: imgWidth > 0 ? `${imgWidth}px` : '100%'}}
        >
          <div className='flex gap-1.5 sm:gap-2 px-1 w-max mx-auto'>
            {images.map((pic, key) => (
              <img
                src={pic}
                loading='lazy'
                key={key}
                ref={key === imageIndex ? activeThumbnailRef : null}
                className={`w-[44px] h-[44px] sm:w-[64px] sm:h-[64px] flex-shrink-0 object-cover object-center cursor-pointer duration-200 hover:scale-110 rounded-md ${
                  key == imageIndex ? "ring-2 ring-white scale-105" : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => setImageIndex(key)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDialog;
