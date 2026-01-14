import {useEffect, useState} from "react";

function OfferPageHeader({backgroundImage}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 650) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='bg-black h-auto relative'>
      <div
        className={`fixed w-[100%] top-[80px] z-[-1] md:left-1/2 md:transform md:-translate-x-1/2 ${
          isVisible ? "" : "opacity-0"
        }`}
      >
        <div className='w-[100%] bg-black'>
          <img className='md:max-w-[800px] mx-auto' src={backgroundImage} alt='Background' loading='lazy' />
        </div>
      </div>
    </div>
  );
}

export default OfferPageHeader;
