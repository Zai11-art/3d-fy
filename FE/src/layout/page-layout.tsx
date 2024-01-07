import React from "react";
import useMode from "../hooks/state";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const lightmode = useMode((state) => state.isDarkMode);

  return (
    <div
      className={`w-full md:h-full h-full  ${
        lightmode
          ? "custom-bg-page-light text-black"
          : "custom-bg-page text-white"
      } pb-[200px]`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
