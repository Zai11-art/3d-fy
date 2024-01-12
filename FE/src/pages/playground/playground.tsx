import React, { useState, useEffect } from "react";

const Playground = () => {
  const [topPosition, setTopPosition] = useState("50%");

  const handleScroll = () => {
    const containerHeight = document.getElementById("container").clientHeight;
    const centeredDivHeight =
      document.getElementById("centeredDiv").clientHeight;

    // Calculate the position to keep the div centered
    const newTopPosition =
      (containerHeight - centeredDivHeight) / 2 + window.scrollY;

    // Set the top position of the centered div
    setTopPosition(`${newTopPosition}px`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div id="container" className="relative h-screen bg-gray-200">
      <div
        id="centeredDiv"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border rounded"
        style={{ top: topPosition }}
      >
        This div is centered and follows you while scrolling
      </div>
    </div>
  );
};

export default Playground;
