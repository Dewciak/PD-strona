import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 transition-opacity duration-500 ease-in-out z-10">
      <button
        onClick={goToTop}
        className={`bg-blue-500 h-[42px] hover:bg-blue-700 text-white font-bold px-4 rounded text-3xl ${
          showTopBtn ? "opacity-100 duration-300" : "opacity-0 duration-300"
        }`}
      >
        ^
      </button>
    </div>
  );
};

export default ScrollToTop;
