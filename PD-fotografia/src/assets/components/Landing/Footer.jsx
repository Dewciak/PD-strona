import React from "react";
import Ig from "../images/footer-ig.png";
import Fb from "../images/footer-fb.png";
import Mail from "../images/footer-mail.png";
import Mess from "../images/footer-mess.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

function Footer() {
  return (
    <div className="w-full max-w-[1050px]  mx-auto flex flex-col justify-center cursor-pointer items-center">
      <ul className="md:w-[60%] w-[90%]">
        <Link
          activeClass="active"
          to="Hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="text-center ">
            <h1 className="border-b text-3xl py-2 text-gray-500">Główna</h1>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="text-center ">
            <h1 className="border-b text-3xl py-2 text-gray-500 cursor-pointer">
              O mnie
            </h1>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="text-center ">
            <h1 className="border-b text-3xl py-2 text-gray-500 cursor-pointer">
              Portfolio
            </h1>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="Offer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="text-center ">
            <h1 className="border-b text-3xl py-2 text-gray-500 cursor-pointer">
              Oferta
            </h1>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="text-center ">
            <h1 className="border-b text-3xl py-2 text-gray-500 cursor-pointer">
              Kontakt
            </h1>
          </li>
        </Link>
      </ul>
      {/* <div className="flex flex-row items-center justify-center my-6 space-x-1">
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
      </div> */}
      <div className="w-full h-auto flex flex-col justify-center items-center mt-6">
        <h1>Patrycja Dawid©</h1>
        <h1 className="w-[90%] text-center">
          Projekt Graficzny i oprogramowanie:
        </h1>
        <a href="#" className="cursor-pointer hover:text-purple-500 mb-4">
          Wiktor Dawid
        </a>
      </div>
    </div>
  );
}

export default Footer;
