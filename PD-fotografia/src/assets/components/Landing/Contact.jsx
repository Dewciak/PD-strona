import React from "react";
import Fb from "../../images/fb.png";
import Ig from "../../images/ig.png";
import Mail from "../../images/mail.png";
import Mess from "../../images/messenger.png";
import AccordionCustomIcon from "./AccordionCustomIcon";
import { Link } from "react-scroll";

function Contact() {
  return (
    <div
      id="Contact"
      className="max-w-[850px] flex justify-center flex-col items-center mx-auto  mb-6 md:mb-10"
    >
      <h1 className="text-6xl text-center">Skontaktuj</h1>
      <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent md:mt-0 bg-clip-text">
        się ze mną!
      </h2>
      <div className="w-full  h-full flex flex-col md:flex-row mt-2 justify-between items-center py-4 ">
        <div className="md:w-[50%] w-[70%] flex flex-col ">
          <h1 className="text-center text-2xl font-medium py-3">
            Zapytaj o termin!
          </h1>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col justify-center items-center "
          >
            <div className="md:min-w-[355px] min-w-[295px] flex flex-col space-y-6">
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
              <button
                type="submit"
                className="px-6 py-[10px] md:mr-auto mx-auto font-semibold mt-2 text-white rounded-xl text-center bg-gradient-to-r from-blue-500 to-purple-500"
              >
                wyślij
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-[50%] h-full md:mb-6 flex justify-center mx-auto pt-4">
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
  );
}

export default Contact;
