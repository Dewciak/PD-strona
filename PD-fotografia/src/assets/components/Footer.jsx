import React from "react";
import Ig from "../images/footer-ig.png";
import Fb from "../images/footer-fb.png";
import Mail from "../images/footer-mail.png";
import Mess from "../images/footer-mess.png";

function Footer() {
  return (
    <div className="w-full max-w-[1050px] mx-auto flex flex-col justify-center items-center">
      <ul className="w-[60%]">
        <a href="">
          <li className="text-center ">
            <h1 className="border-b text-3xl py-4 text-gray-500">Główna</h1>
          </li>
        </a>
        <a href="#">
          <li className="text-center ">
            <h1 className="border-b text-3xl py-4 text-gray-500 cursor-pointer">
              O mnie
            </h1>
          </li>
        </a>
        <a href="#">
          <li className="text-center ">
            <h1 className="border-b text-3xl py-4 text-gray-500 cursor-pointer">
              Portfolio
            </h1>
          </li>
        </a>
        <a href="#">
          <li className="text-center ">
            <h1 className="border-b text-3xl py-4 text-gray-500 cursor-pointer">
              Oferta
            </h1>
          </li>
        </a>
        <a href="#">
          <li className="text-center ">
            <h1 className="border-b text-3xl py-4 text-gray-500 cursor-pointer">
              Kontakt
            </h1>
          </li>
        </a>
      </ul>
      <div className="flex flex-row items-center justify-center my-8 space-x-1">
        <a href="#">
          <img src={Fb} width={45}></img>
        </a>
        <a href="#">
          <img src={Mess} width={45}></img>
        </a>
        <a href="#">
          <img src={Ig} width={45}></img>
        </a>
        <a href="#">
          <img src={Mail} width={45}></img>
        </a>
      </div>
      <h1>Patrycja Dawid©</h1>
      <h1 className="mb-6">
        Projekt Graficzny i oprogramowanie:{" "}
        <a href="#" className="cursor-pointer hover:text-purple-500">
          Wiktor Dawid
        </a>
      </h1>
    </div>
  );
}

export default Footer;
