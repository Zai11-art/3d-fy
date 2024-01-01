import { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";
import useMode from "../hooks/state";

const ScrollToTop = () => {
  const [showButton, setshowButton] = useState(false);
  const lightmode = useMode((state) => state.isDarkMode);

  useEffect(() => {
    const scrollHeightChecker = () => {
      if (!showButton && window.pageYOffset > 200) {
        console.log(showButton);
        setshowButton(true);
      } else if (showButton && window.pageYOffset <= 200) {
        setshowButton(false);
      }
    };

    window.addEventListener("scroll", scrollHeightChecker);
    return () => {
      window.removeEventListener("scroll", scrollHeightChecker);
    };
  }, [showButton]);

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className={`hover:opacity-80 ${
            lightmode
              ? "shadow-slate-900 hover:shadow-black hover:shadow-lg shadow-md"
              : "shadow-amber-500 hover:shadow-amber-400 hover:shadow-lg shadow-md"
          }  fixed bg-amber-700 md:h-12 md:w-12 h-10 w-10 bottom-[30px] z-50 md:right-10 right-5 transition-all ease-in-out rounded-full items-center justify-center flex`}
          onClick={scrolltoTop}
        >
          <MdArrowUpward className="w-8 h-8 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
