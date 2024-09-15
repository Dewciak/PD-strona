import {useState, useEffect} from "react";
import Logo from "../../images/nav-logo.png";
import {IoMenu} from "react-icons/io5";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-scroll"; // Import Link from react-scroll
import {Link as RouterLink} from "react-router-dom";

function Navbar({sections}) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll("ul li a");
    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };
  }, [sections]);

  return (
    <div className="w-full h-auto bg-transparent">
      <div className="md:hidden w-[100%]  mx-auto h-8 flex flex-row py-10 justify-center items-center fixed z-[10] top-0 left-[50%] bg-white px-4 translate-x-[-50%]">
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
              ? "w-[60%] fixed left-0 top-0 h-screen bg-[#d5f1fa] flex justify-center items-center ease-in-out duration-500 z-[5]"
              : "fixed left-[-60%] w-[60%] top-0 h-screen bg-[#d5f1fa] flex justify-center items-center ease-in-out duration-500 z-[5]"
          }
        >
          <ul className="z-10 text-black  m-4 md:flex flex-row gap-x-16 items-center cursor-pointer">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNav}
            >
              <li className="text-2xl p-4 font-light tracking-[5px]  text-titleGray">
                O mnie
              </li>
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
              <li className="text-2xl p-4 font-light tracking-[5px]  text-titleGray">
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
              onClick={handleNav}
            >
              <li className="text-2xl p-4 font-light tracking-[5px]  text-titleGray">
                Oferta
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
                Kontakt
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden w-20 mx-4 h-auto object-scale-dow ml-auto">
          <img src={Logo} />
        </div>
      </div>
      <div className="w-[100%] bg-white hidden fixed mx-auto h-8 md:flex flex-row py-10 justify-center items-center  top-0 left-[50%] translate-x-[-50%] z-[10]">
        <ul className="hidden md:flex  flex-row gap-x-16 items-center cursor-pointer absolute bg-transparent">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
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
            <li className="hover:text-[#0009]  font-light text-lg tracking-[5px]  text-titleGray">
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
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
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
            <li className="font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray">
              Kontakt
            </li>
          </Link>
        </ul>

        <div className="w-20 mx-4 h-auto object-scale-dow ml-auto ">
          <RouterLink to="/">
            <img src={Logo} className="" />
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
