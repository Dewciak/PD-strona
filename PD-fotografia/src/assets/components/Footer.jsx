import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import { Link } from "react-scroll"; // Import Link from react-scroll

function Footer() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-screen flex flex-row text-center bg-gray-200 py-1">
        <ul className="md:w-[1080px] mx-auto flex md:flex-row flex-col space-y-2 gap-x-8 text-sm items-center justify-center">
          <li className="  md:w-[33%]">Creditsy</li>
          <RouterLink
            // to="/PD-strona"
            to="PolitykaPrywatności"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="  md:w-[33%]"
          >
            <li className="hover:text-gray-500">Regulamin Sesji</li>
          </RouterLink>

          <li className="  md:w-[33%]">Polityka Prywatności</li>
        </ul>
      </div>
      <div className="w-screen py-8 bg-gray-100 mx-auto flex flex-col justify-evenly  cursor-pointer items-center">
        <div className="md:w-[1080px] h-auto flex md:flex-row flex-col justify-center items-center md:justify-around mx-auto space-y-4 md:space-y-0  md:items-start">
          <div className="md:w-[33%] flex flex-row gap-x-0 justify-center items-center">
            <h1>Patrycja Dawid</h1>
            <FaCopyright className="" />
          </div>
          <div className="w-[33%] h-full  flex flex-row justify-center items-center gap-x-2">
            <a href="https://m.me/patrycjadawidfotografia" target="blank">
              <FaFacebookMessenger className="text-white text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/patrycjadawidfotografia?locale=pl_PL"
              target="blank"
            >
              <FaFacebook className="text-white text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/patrycjadfotografia/"
              target="blank"
            >
              <FaInstagram className="text-white text-3xl" />
            </a>
          </div>
          <h1 className=" text-center md:w-[33%]">
            Realizacja:{" "}
            <a href="#" className="cursor-pointer hover:text-purple-500 mb-4">
              Wiktor Dawid
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
