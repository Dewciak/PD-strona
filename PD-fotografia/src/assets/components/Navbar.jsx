import React, { useState } from "react";
import Logo from "../images/nav-logo.png";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll"; // Import Link from react-scroll

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-auto bg-transparent">
      <div className="md:hidden w-[100%] mx-auto h-8 flex flex-row py-10 justify-center items-center fixed z-[10] top-0 left-[50%] bg-white px-4 translate-x-[-50%]">
        <div
          onClick={handleNav}
          className={
            nav
              ? "transition-transform duration-500 transform rotate-180 block md:hidden z-20 px-10 "
              : "transition-transform duration-500 transform rotate-0 block md:hidden z-20 px-10 "
          }
        >
          {nav ? <AiOutlineClose size={30} /> : <IoMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "w-[60%] fixed left-0 top-0 h-screen bg-blue-100 flex justify-center items-center ease-in-out duration-500 z-[5]"
              : "fixed left-[-60%] w-[60%] top-0 h-screen bg-blue-200 flex justify-center items-center ease-in-out duration-500 z-[5]"
          }
        >
          <ul className="z-10 text-black m-4 md:flex flex-row gap-x-16 items-center cursor-pointer">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNav}
            >
              <li className="text-2xl p-4 ">O mnie</li>
            </Link>
            <Link
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={handleNav}
              duration={500}
            >
              <li className="text-2xl p-4">Portfolio</li>
            </Link>
            <Link
              activeClass="active"
              to="Offer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNav}
            >
              <li className="text-2xl p-4">Oferta</li>
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={handleNav}
              duration={500}
            >
              <li className="text-2xl p-4">Kontakt</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden w-20 mx-4 h-auto object-scale-dow ml-auto">
          <img src={Logo} className="" />
        </div>
      </div>
      <div className="w-[90%] bg-transparent hidden mx-auto h-8 md:flex flex-row py-10 justify-center items-center absolute top-0 left-[50%] translate-x-[-50%] z-[10]">
        <ul className="hidden md:flex flex-row gap-x-16 items-center cursor-pointer absolute bg-transparent">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="font-medium hover:text-[#0009] text-lg tracking-[4px]">
              O mnie
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
            <li className="font-medium hover:text-[#0009] text-lg tracking-[4px]">
              Portfolio
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
            <li className="font-medium hover:text-[#0009] text-lg tracking-[4px]">
              Oferta
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
            <li className="font-medium hover:text-[#0009] text-lg tracking-[4px]">
              Kontakt
            </li>
          </Link>
        </ul>
        <div className="w-20 mx-4 h-auto object-scale-dow ml-auto ">
          <img src={Logo} className="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
