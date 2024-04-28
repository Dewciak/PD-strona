import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

import { Link } from "react-scroll"; // Import Link from react-scroll

function Footer() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-screen flex flex-row text-center bg-gray-200 py-1">
        <ul className="mx-auto flex flex-row gap-x-8 text-sm items-center justify-center">
          <li>Polityka Prywatności</li>
          <li>Regulamin Sesji</li>
        </ul>
      </div>
      <div className="w-screen py-4 bg-gray-100 mx-auto flex flex-col justify-center cursor-pointer items-center">
        <div className="w-[1080px] h-auto flex flex-row justify-around mx-auto   items-start">
          <div className="w-[33%] flex flex-row gap-x-0 justify-center items-center">
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
          <h1 className=" text-center w-[33%]">
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
