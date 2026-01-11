import {useState, useEffect} from "react";
import {IoMenu} from "react-icons/io5";
import {AiOutlineClose} from "react-icons/ai";
import {Link as RouterLink} from "react-router-dom";
import Logo from "../../images/nav-logo.png";

// Navigation items
const navItems = [
  {id: "about", label: "O mnie"},
  {id: "portfolio", label: "Portfolio"},
  {id: "offer", label: "Oferta"},
  {id: "contact", label: "Kontakt"},
];

function Navbar({sections}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll-based active link highlighting
  useEffect(() => {
    const navLinks = document.querySelectorAll("ul li[data-id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionOffset = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("data-id") === sectionId) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Handle initial scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  const NavItem = ({item, mobile = false, onClick = null}) => {
    const handleClick = () => {
      const element = document.getElementById(item.id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: "smooth",
        });
        window.location.hash = item.id;
      }
      if (onClick) onClick();
    };

    return (
      <li
        data-id={item.id}
        onClick={handleClick}
        className={
          mobile
            ? "text-2xl p-4 font-light tracking-[5px] text-titleGray"
            : "font-light hover:text-[#0009] text-lg tracking-[5px] text-titleGray"
        }
      >
        {item.label}
      </li>
    );
  };

  return (
    <div className='w-full h-auto bg-transparent'>
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
          className={`w-[60%] fixed left-0 top-0 h-screen bg-white flex justify-center items-center ease-in-out duration-500 z-[5] ${
            mobileMenuOpen ? "" : "-translate-x-full"
          }`}
        >
          <ul className='z-10 text-black m-4 flex flex-col items-center cursor-pointer'>
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} mobile={true} onClick={toggleMobileMenu} />
            ))}
          </ul>
        </div>

        <div className='md:hidden w-20 mx-4 h-auto object-scale-down ml-auto'>
          <img src={Logo} alt='Logo' />
        </div>
      </div>

      {/* Desktop header */}
      <div className='w-full bg-white hidden fixed mx-auto h-8 md:flex flex-row py-10 justify-center items-center top-0 left-1/2 -translate-x-1/2 z-10'>
        <ul className='hidden md:flex flex-row gap-x-16 items-center cursor-pointer absolute bg-transparent'>
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>

        <div className='w-20 mx-4 h-auto object-scale-down ml-auto'>
          <RouterLink to='/'>
            <img src={Logo} alt='Logo' />
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
