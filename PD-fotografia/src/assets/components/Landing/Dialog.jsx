import {useState, useEffect, useCallback} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLessThan, faGreaterThan} from "@fortawesome/free-solid-svg-icons";

const GalleryDialog = ({
  sessionType,
  setShowDialog,
  imageIndex,
  setImageIndex,
}) => {
  function showNextImage() {
    setImageIndex((index) => {
      if (index >= sessionType.id.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index <= 0) return sessionType.id.length - 1;

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

  return (
    <div
      className="flex absolute flex-col items-start bg-red-500 
        top-0 left-0  w-full h-full "
    >
      <div
        onClick={() => setShowDialog(false)}
        className="fixed top-0 left-0 z-[15] w-full h-full bg-[#000000c1] "
      >
        <button
          onClick={() => setShowDialog(false)}
          className=" text-6xl z-[16] md:left-[94%] left-[90%] text-white relative md:top-[3vh] top-[1vh] "
        >
          ×
        </button>
      </div>
      <div className="fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45vh] overflow-hidden md:w-1/2 flex items-center justify-center z-[16]">
        <div className="max-w-[97%]  md:max-w-[700px]">
          <div className="flex flex-col overflow-hidden">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row ">
                {sessionType.id.map((pic, key) => (
                  <img
                    src={pic}
                    loading="lazy"
                    key={key}
                    className=" object-cover object-center rounded-3xl cursor-pointer duration-300"
                    style={{translate: `${-100 * imageIndex}%`}}
                  />
                ))}
              </div>
            </div>
            <div className="justify-between py-2  mt-6 overflow-hidden flex flex-row mx-auto ">
              <button
                onClick={showPrevImage}
                className="bg-gray-400 md:px-2 px-2   z-[16] h-[115px] duration-100 text-2xl opacity-50 hover:opacity-70"
              >
                <FontAwesomeIcon icon={faLessThan} />
              </button>

              <div className="flex flex-row justify-between gap-x-2 ">
                {sessionType.id.map((pic, key) => (
                  <img
                    src={pic}
                    loading="lazy"
                    key={key}
                    className={`w-[10vh] sm:w-[16vh] object-cover object-center cursor-pointer duration-300 hover:scale-105 ${
                      key == imageIndex ? "border border-white" : ""
                    }`}
                    style={{
                      translate: `${-100 * imageIndex}%`,
                      boxSizing: "border-box",
                    }}
                    onClick={() => setImageIndex(key)}
                  />
                ))}
              </div>
              <button
                onClick={showNextImage}
                className="bg-gray-400 md:px-2 px-2 z-[16] h-[115px] duration-100 text-2xl opacity-50 hover:opacity-70"
              >
                <FontAwesomeIcon icon={faGreaterThan} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDialog;
