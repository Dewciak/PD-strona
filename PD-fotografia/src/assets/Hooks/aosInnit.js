import AOS from "aos";
import {useEffect, useRef} from "react";

export const aosInnit = () => {
  const samtRef = useRef(0);

  useEffect(() => {
    AOS.init({
      debug: false,
    });

    const handleScroll = () => {
      if (samtRef.current <= 10) {
        samtRef.current++;
      } else {
        AOS.refresh();
        samtRef.current = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Funkcja czyszcząca
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default aosInnit;
