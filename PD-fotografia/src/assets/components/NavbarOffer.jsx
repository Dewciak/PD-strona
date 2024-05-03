import React, { useState } from "react";
import Logo from "../images/nav-logo.png";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { Link as RouterLink } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" h-auto z-[200] mx-auto">
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
            <RouterLink
              // to="/PD-strona"
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="flex flex-row items-center justify-start space-x-1"
            >
              <MdOutlineArrowBackIos className="mb-2" />
              <li className="text-2xl p-4 font-light tracking-[5px]  text-titleGray">
                Główna
              </li>
            </RouterLink>
            <Link
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={handleNav}
              duration={500}
            >
              <li className="text-2xl p-4 font-light tracking-[5px]  text-titleGray">
                O sesji
              </li>
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
              <li className="text-2xl p-4 font-light tracking-[5px]  text-titleGray">
                Rodzaje sesji
              </li>
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
              <li className="text-2xl p-4 font-light tracking-[5px]  text-titleGray">
                Pakiety
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden w-20 mx-4 h-auto object-scale-dow ml-auto">
          <img src={Logo} className="" />
        </div>
      </div>
      <div
        id="NavbarOffer"
        className="w-[100%] bg-white hidden h-8 md:flex flex-row py-10 start fixed top-0 left-0 items-center justify-center z-[10]"
      >
        <div className="w-20 h-10 mx-4  bg-transparent object-scale-down  "></div>
        <ul className=" hidden md:flex flex-row gap-x-16 items-center cursor-pointer mx-auto ">
          <RouterLink
            // to="/PD-strona"
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="flex flex-row items-center justify-start space-x-1"
          >
            <MdOutlineArrowBackIos className="mb-2" />
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
              Główna
            </li>
          </RouterLink>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
              O sesji
            </li>
          </Link>
          <Link
            activeClass="active"
            to="Sessions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
              Rodzaje sesji
            </li>
          </Link>
          <Link
            activeClass="active"
            to="Packages"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
              Pakiety
            </li>
          </Link>{" "}
          <Link
            activeClass="active"
            to="FAQ"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
              FAQ
            </li>
          </Link>
        </ul>

        <div className="w-20 mx-4 h-auto  object-scale-down ">
          <RouterLink to="/">
            <img src={Logo} className="" />
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
