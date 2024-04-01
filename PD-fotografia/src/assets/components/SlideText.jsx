import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function SlideText() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <>
      <p
        className="mx-auto max-w-[300px] text-center md:text-left py-12 tracking-[3px]"
        data-aos="fade-left"
      >
        Jeśli sesja jaka Cię interesuje nie znajduję się w tej zakładce, napisz
        do mnie, a na pewno razem coś wymyślimy :)
      </p>
    </>
  );
}

export default SlideText;
