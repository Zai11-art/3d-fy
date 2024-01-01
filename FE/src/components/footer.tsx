import useMode from "../hooks/state";

const Footer = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  return (
    <div
      className={` w-full z-[32] flex justify-center  items-center h-10 md:text-sm  text-xs ${
        lightmode
          ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:bg-cyan-100"
          : "bg-[#1a1d1d] text-slate-300 font-thin"
      }  bottom-0 mb-auto  p-1  `}
    >
      All rights reserved - ZyCod @ 2023
    </div>
  );
};

export default Footer;
