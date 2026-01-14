import React, {useState, useEffect} from "react";
import desktopBg from "../../images/bg3.webp";
import mobileBg from "../../images/bg-mobile2.webp";

export const BackgroundImage = ({priority = false, className = ""}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <img
      src={isMobile ? mobileBg : desktopBg}
      alt=""
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      className={`fixed inset-0 w-full h-full object-cover -z-10 ${className}`}
    />
  );
};

export default BackgroundImage;
