import React, { useState } from "react";
import Fb from "../../images/fb.png";
import Ig from "../../images/ig.png";
import Mail from "../../images/mail.png";
import Mess from "../../images/messenger.png";
import AccordionCustomIcon from "./AccordionCustomIcon";
import { Link } from "react-scroll";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);
  const [showHiddenText, setShowHiddenText] = useState(false); // Step 1: New state for hidden text visibility

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setShowHiddenText(false); // Hide the hidden text when checkbox is checked
    }
  };

  const handleSubmitClick = (event) => {
    if (!isChecked) {
      setShowHiddenText(true); // Show the hidden text when submit button is clicked and checkbox is unchecked
      event.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div>
      <AccordionCustomIcon className="py-6" />
      <div
        id="Contact"
        className="max-w-[850px] flex justify-center flex-col items-center mx-auto mb-0 md:mb-10 md:pt-20 pb-10"
      >
        <h1 className="text-6xl text-center">Skontaktuj</h1>
        <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text md:mt-0">
          się ze mną!
        </h2>

        <div className="w-full h-full flex flex-col md:flex-row mt-2 justify-between items-start py-4 ">
          <div className="md:w-[50%] w-[70%] flex flex-col ">
            <h1 className="text-center text-2xl font-semibold text-[#4b4b4b] py-3">
              Zapytaj o termin!
            </h1>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col justify-center items-center "
            >
              <div className="md:min-w-[355px] min-w-[295px] flex flex-col justify-start space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                ></input>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="np. email@gmail.com"
                  className="w-[100%] rounded-lg bg-gray-300 py-2 border-transparent pl-4"
                ></input>
                <textarea
                  name="message"
                  required
                  placeholder="tutaj możesz wpisać jaki termin cie interesuje"
                  className="w-[100%] pb-[100px] rounded-xl bg-gray-300 py-2 px-4 border-none text-"
                ></textarea>
                <div className="w-[130px] cursor-pointer bg-red-500 flex justify-center items-center py-1 rounded-[50px] bg-gradient-to-r from-blue-300 to-purple-300">
                  <button
                    type="submit"
                    onClick={handleSubmitClick} // Modify the onClick event
                    id="ContactButton"
                    className="rounded-[50px] mx-auto bg-white mr-auto w-[120px] py-1 text-[17px] font-bold text-[#747474] hover:text-[#9b9b9b]"
                  >
                    Wyślij
                  </button>
                </div>

                <div className="flex flex-row items-start justify-center">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="mt-1 mr-2 "
                    onChange={handleCheckboxChange}
                  ></input>
                  <p className="text-xs text-gray-400">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w
                    celach kontaktowych przez administratora strony
                  </p>
                </div>
                <p
                  id="needed"
                  className={`text-red-200 text-xs ${
                    showHiddenText ? "" : "hidden"
                  }`}
                >
                  *Zaznaczenie tej zgody jest wymagane
                </p>
              </div>
            </form>
          </div>
          <div className="md:w-[50%] ml-10 h-full md:mb-6 flex justify-center mx-auto md:pt-20">
            <ul>
              <a href="https://www.facebook.com/patrycjadawidfotografia?locale=pl_PL">
                <li className="flex flex-row py-2 items-center space-x-2 text-xl">
                  <img src={Fb} width={40}></img>
                  <p>Patrycja Dawid Fotografia</p>
                </li>
              </a>
              <a href="https://m.me/patrycjadawidfotografia">
                <li className="flex flex-row py-2 items-center space-x-2 text-xl">
                  <img src={Mess} width={40}></img>
                  <p>Patrycja Dawid Fotografia</p>
                </li>
              </a>
              <a href="https://www.instagram.com/patrycjadfotografia/">
                <li className="flex flex-row py-2 items-center space-x-2 text-xl">
                  <img src={Ig} width={40}></img>
                  <p>patrycjadfotografia</p>
                </li>
              </a>
              <a href="mailto:wiktorskid@wp.pl">
                <li className="flex flex-row py-2 items-center space-x-2 text-xl">
                  <img src={Mail} width={40}></img>
                  <p>patrycjad20@gmail.com</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
