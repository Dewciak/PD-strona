import {useState, useEffect} from "react";
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
  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "ArrowLeft") {
      showPrevImage();
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, true);
    console.log("listener");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("istner usutnięty");
    };
  }, []);

  return (
    <div
      className="flex absolute flex-col items-start  
        top-0 left-0  w-full h-full "
    >
      <div
        onClick={() => setShowDialog(false)}
        className="fixed top-0 left-0 z-[15] w-full h-full bg-[#000000c1] "
      ></div>
      <div className="fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] overflow-hidden md:w-1/2 flex items-center justify-center z-[16]">
        <div className="max-w-[97%]  md:max-w-[700px]">
          <button
            onClick={() => setShowDialog(false)}
            className=" text-6xl z-[16] md:left-[92%] left-[90%] text-white relative md:top-[8vh] top-[6vh] "
          >
            ×
          </button>
          <div className="flex flex-col overflow-hidden">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row ">
                {sessionType.id.map((pic, key) => (
                  <img
                    src={pic}
                    loading="lazy"
                    key={key}
                    className="w-full object-cover object-center cursor-pointer duration-300"
                    style={{translate: `${-100 * imageIndex}%`}}
                  />
                ))}
              </div>
            </div>
            <div className="w-[700px]  mt-6 overflow-hidden flex flex-row mx-auto ">
              <div className=" flex flex-row items-center justify-between absolute  md:w-[700px] w-[97%]">
                <button
                  onClick={showPrevImage}
                  className="bg-gray-400 md:px-1 px-2   z-[16] h-[113px] duration-100 text-2xl opacity-50 hover:opacity-70"
                >
                  <FontAwesomeIcon icon={faLessThan} />
                </button>
                <button
                  onClick={showNextImage}
                  className="bg-gray-400 md:px-1 px-2 z-[16] h-[113px] duration-100 text-2xl opacity-50 hover:opacity-70"
                >
                  <FontAwesomeIcon icon={faGreaterThan} />
                </button>
              </div>

              <div className="flex flex-row justify-between gap-x-2  ">
                {sessionType.id.map((pic, key) => (
                  <img
                    src={pic}
                    loading="lazy"
                    key={key}
                    className={`w-[24%] object-cover object-center cursor-pointer duration-300 hover:scale-105 ${
                      key == imageIndex ? " border-white" : ""
                    }`}
                    style={{
                      translate: `${-65 * imageIndex}%`,
                      boxSizing: "border-box",
                    }}
                    onClick={() => setImageIndex(key)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDialog;
