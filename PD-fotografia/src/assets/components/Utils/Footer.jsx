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
        <ul className="md:w-[1080px]  mx-auto flex md:flex-row flex-col  text-sm md:items-start items-center justify-center">
          <RouterLink
            to="/Regulamin-Sesji"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="  md:w-[50%]  h-full"
          >
            <li className="hover:text-gray-500 tracking-[5px] text-center font-light text-titleGray">
              Regulamin Sesji
            </li>
          </RouterLink>
          <RouterLink
            // to="/PD-strona"
            to="/Polityka-Prywatności"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="  md:w-[50%]  h-full"
          >
            <li className="hover:text-gray-500 tracking-[5px] font-light text-titleGray text-center">
              Polityka Prywatności
            </li>
          </RouterLink>
        </ul>
      </div>
      <div className="w-screen py-8 bg-gray-100 mx-auto flex flex-col justify-evenly  items-center">
        <div className="md:w-[1080px] h-auto flex md:flex-row flex-col justify-center items-center md:justify-around mx-auto space-y-4 md:space-y-0  md:items-start">
          <div className="md:w-[33%] cursor-default flex flex-row gap-x-0 justify-center items-center tracking-[5px] font-light text-titleGray">
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
          <h1 className=" text-center md:w-[33%] tracking-[5px] font-light text-titleGray">
            Realizacja:{" "}
            <a
              href="https://x.com/Dewu54082478"
              className="cursor-pointer hover:text-gray-500 mb-4 tracking-[5px] font-light text-titleGray"
            >
              Wiktor Dawid
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
