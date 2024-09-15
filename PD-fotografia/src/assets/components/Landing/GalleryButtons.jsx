import {useState} from "react";

const GalleryButtons = ({setSessionType, sessionTypesButtons}) => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <ul className=" mb-4 py-1 bg-gray-100 rounded-xl text-center flex-row flex mx-2">
      {sessionTypesButtons.map((type, key) => (
        <li
          key={key}
          className={`w-[33%]
            ${
              activeButton === key
                ? "bg-white shadow-sm font-semibold rounded-lg"
                : ""
            }`}
        >
          <button
            className="w-full py-2 px-2  cursor-pointer transition-all duration-800 delay-800 ease-in-out"
            onClick={() => {
              setSessionType(type);
              setActiveButton(key);
            }}
          >
            {type.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GalleryButtons;
