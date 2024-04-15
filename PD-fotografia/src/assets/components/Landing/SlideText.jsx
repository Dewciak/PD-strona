import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function SlideText() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Ensure animations are triggered correctly
  }, []);

  return (
    <>
      <div className="w-[98.8vw] mx-auto h-auto py-8 mt-12">
        <h2 className="mx-auto max-w-[300px] text-center md:text-left tracking-[3px] overflow-visible z-10 ">
          Jeśli sesja jaka Cię interesuje nie znajduję się w tej zakładce,
          napisz do mnie, a na pewno razem coś wymyślimy :)
        </h2>
      </div>
    </>
  );
}

export default SlideText;
