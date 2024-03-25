import React, { useState } from "react";
import Logo from "../images/nav-logo.png";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="w-[90%] mx-auto h-8 flex flex-row py-10 justify-center items-center">
        <div
          onClick={handleNav}
          className={
            nav
              ? "transition-transform duration-500 transform rotate-180 block md:hidden z-10 px-10 "
              : "transition-transform duration-500 transform rotate-0 block md:hidden z-10 px-10 "
          }
        >
          {nav ? <AiOutlineClose size={30} /> : <IoMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "w-[100%] fixed left-0 top-0 h-full bg-blue-100 flex justify-center items-center ease-in-out duration-500"
              : "fixed left-[-100%] w-[60%] top-0 h-full bg-blue-200 flex justify-center items-center ease-in-out duration-500"
          }
        >
          <ul className="z-10 text-black  m-4 md:flex flex-row gap-x-16 items-center absolut">
            <a href="#">
              <li className="text-2xl p-4">O mnie</li>
            </a>
            <a href="#">
              <li className="text-2xl p-4">Oferta</li>
            </a>
            <a href="#">
              <li className="text-2xl p-4">Kontakt</li>
            </a>
            <a href="#">
              <li className="text-2xl p-4">Portfolio</li>
            </a>
          </ul>
        </div>
        <ul className="hidden md:flex flex-row gap-x-16 items-center absolute">
          <a href="#">
            <li className="font-medium hover:text-[#0009] text-lg">O mnie</li>
          </a>
          <a href="#">
            <li className="font-medium hover:text-[#0009] text-lg">Oferta</li>
          </a>
          <a href="#">
            <li className="font-medium hover:text-[#0009] text-lg">Kontakt</li>
          </a>
          <a href="#">
            <li className="font-medium hover:text-[#0009] text-lg">
              Portfolio
            </li>
          </a>
        </ul>
        <div className="w-20 mx-4  h-auto object-scale-dow ml-auto">
          <img src={Logo} className="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
