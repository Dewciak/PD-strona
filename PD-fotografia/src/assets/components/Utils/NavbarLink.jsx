import React, {useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import {IoMenu} from "react-icons/io5";
import {AiOutlineClose} from "react-icons/ai";
import Logo from "../../images/nav-logo.png";

const navItems = [
  {title: "O mnie", mobilePath: 700, desktopPath: 500},
  {title: "Portfolio", mobilePath: 1600, desktopPath: 1300},
  {title: "Oferta", mobilePath: 3600, desktopPath: 2200},
  {title: "Kontakt", mobilePath: 9000, desktopPath: 4000},
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-auto bg-transparent'>
      <MobileNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <DesktopNavbar />
    </div>
  );
}

function MobileNavbar({isMenuOpen, toggleMenu}) {
  const MenuIcon = isMenuOpen ? AiOutlineClose : IoMenu;

  const handleNavigation = (path) => {
    toggleMenu();
    window.scrollTo(0, path);
  };

  return (
    <div className='md:hidden w-full mx-auto h-8 flex flex-row py-10 items-center justify-between fixed z-10 top-0 left-1/2 bg-white px-4 -translate-x-1/2'>
      <div
        onClick={toggleMenu}
        className={`transition-transform duration-500 transform ${
          isMenuOpen ? "rotate-180" : "rotate-0"
        } block md:hidden z-20 px-10`}
      >
        <MenuIcon size={30} />
      </div>

      <div
        className={`w-3/5 fixed left-0 top-0 h-screen ${
          isMenuOpen ? "bg-blue-100" : "bg-blue-200 -left-3/5"
        } flex justify-center items-center ease-in-out duration-500 z-5`}
      >
        <ul className='z-10 text-black m-4 flex flex-col items-center cursor-pointer'>
          {navItems.map((item, index) => (
            <RouterLink key={index} to='/PD-strona' onClick={() => handleNavigation(item.mobilePath)}>
              <li className='text-2xl p-4 font-light tracking-[5px] text-titleGray'>{item.title}</li>
            </RouterLink>
          ))}
        </ul>
      </div>

      <RouterLink to='/' className='md:hidden w-20 mx-4 h-auto object-scale-down ml-auto'>
        <img src={Logo} alt='Logo' />
      </RouterLink>
    </div>
  );
}

function DesktopNavbar() {
  const handleNavigation = (path) => {
    window.scrollTo(0, path);
  };

  return (
    <div className='w-full bg-white hidden fixed mx-auto h-8 md:flex flex-row py-10 justify-center items-center top-0 left-1/2 -translate-x-1/2 z-10'>
      <ul className='hidden md:flex flex-row gap-x-16 items-center cursor-pointer absolute bg-transparent'>
        {navItems.map((item, index) => (
          <RouterLink key={index} to='/' onClick={() => handleNavigation(item.desktopPath)}>
            <li className='font-light hover:text-[#0009] text-lg tracking-[5px] text-titleGray'>{item.title}</li>
          </RouterLink>
        ))}
      </ul>

      <RouterLink to='/' className='w-20 mx-4 h-auto object-scale-down ml-auto'>
        <img src={Logo} alt='Logo' />
      </RouterLink>
    </div>
  );
}

export default Navbar;
