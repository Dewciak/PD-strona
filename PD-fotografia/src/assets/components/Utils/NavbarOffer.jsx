import React, {useState} from "react";
import {IoMenu} from "react-icons/io5";
import {AiOutlineClose} from "react-icons/ai";
import {Link} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";
import {MdOutlineArrowBackIos} from "react-icons/md";
import Logo from "../../images/nav-logo.png";

// Navigation items
const NAV_ITEMS = [
  {id: "o-mnie", label: "O sesji", mobileTo: "o-mnie"},
  {id: "sesje", label: "Rodzaje sesji", mobileTo: "sesje"},
  {id: "pakiety", label: "Pakiety", mobileTo: "pakiety"},
  {id: "FAQ", label: "FAQ", mobileHide: true},
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Back to Home link component
  const BackToHomeLink = ({mobile = false}) => (
    <RouterLink
      to='/'
      onClick={() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        if (mobile) toggleMobileMenu();
      }}
      className='flex flex-row items-center justify-start space-x-1'
    >
      <MdOutlineArrowBackIos className='mb-2' />
      <li
        className={
          mobile
            ? "text-2xl p-4 font-light tracking-[5px] text-titleGray"
            : "font-light hover:text-[#0009] text-lg tracking-[5px] text-titleGray"
        }
      >
        Główna
      </li>
    </RouterLink>
  );

  // Nav item component
  const NavItem = ({item, mobile = false}) => (
    <Link
      activeClass='active'
      to={mobile ? item.mobileTo || item.id : item.id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => {
        window.location.hash = item.id;
        if (mobile) toggleMobileMenu();
      }}
    >
      <li
        className={
          mobile
            ? "text-2xl p-4 font-light tracking-[5px] text-titleGray"
            : "font-light hover:text-[#0009] text-lg tracking-[5px] text-titleGray"
        }
      >
        {item.label}
      </li>
    </Link>
  );

  return (
    <div className='h-auto z-[200] mx-auto'>
      {/* Mobile header */}
      <div className='md:hidden w-full mx-auto h-8 flex flex-row py-10 justify-center items-center fixed z-10 top-0 left-1/2 bg-white px-4 -translate-x-1/2'>
        <div
          onClick={toggleMobileMenu}
          className={`transition-transform duration-500 transform ${
            mobileMenuOpen ? "rotate-180" : "rotate-0"
          } block md:hidden z-20 px-10`}
        >
          {mobileMenuOpen ? <AiOutlineClose size={30} /> : <IoMenu size={30} />}
        </div>

        {/* Mobile menu */}
        <div
          className={`w-[60%] fixed left-0 top-0 h-screen bg-[#d5f1fa] flex justify-center items-center ease-in-out duration-500 z-[5] ${
            mobileMenuOpen ? "" : "left-[-60%]"
          }`}
        >
          <ul className='z-10 text-black m-4 flex flex-col items-center cursor-pointer'>
            <BackToHomeLink mobile={true} />

            {NAV_ITEMS.filter((item) => !item.mobileHide).map((item) => (
              <NavItem key={item.id} item={item} mobile={true} />
            ))}
          </ul>
        </div>

        <div className='md:hidden w-20 mx-4 h-auto object-scale-down ml-auto'>
          <img src={Logo} alt='Logo' />
        </div>
      </div>

      {/* Desktop header */}
      <div
        id='NavbarOffer'
        className='w-full bg-white hidden h-8 md:flex flex-row py-10 fixed top-0 left-0 items-center justify-center z-10'
      >
        <div className='w-20 h-10 mx-4 bg-transparent object-scale-down'></div>

        <ul className='hidden md:flex flex-row gap-x-16 items-center cursor-pointer mx-auto'>
          <BackToHomeLink />

          {NAV_ITEMS.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>

        <div className='w-20 mx-4 h-auto object-scale-down'>
          <RouterLink to='/'>
            <img src={Logo} alt='Logo' />
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
