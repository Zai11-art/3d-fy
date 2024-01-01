import React from "react";
import { Toaster } from "react-hot-toast";
import useMode from "../hooks/state";

const ToasterProvider = () => {
  const lightmode = useMode((state) => state.isDarkMode);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            width: "100%",
            height: "100%",
            marginTop: '80px',
            fontSize: "15px",
            backgroundColor: lightmode ? "white" : "black",
            color: lightmode ? "black" : "white",
            boxShadow: lightmode
              ? "0px 0px 19px -4px rgba(0,0,0,0.48)"
              : "0px 0px 19px -4px rgba(250,202,76,0.48)",
          },
        }}
        position="top-center"
        reverseOrder={true}
      />
    </>
  );
};

export default ToasterProvider;
