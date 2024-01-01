import React from "react";
import useMode from "../hooks/state";

const Container = ({ children }: { children: React.ReactNode }) => {
  const lightmode = useMode((state) => state.isDarkMode);

  return (
    <div
      className={`w-[500px] flex items-center justify-center ${
        lightmode
          ? "shadow-lg bg-gradient-gray-light shadow-zinc-950/20"
          : "bg-gradient-gray border-zinc-700 shadow-black shadow-xl"
      }  rounded-3xl border-[1px]`}
    >
      {children}
    </div>
  );
};

export default Container;
