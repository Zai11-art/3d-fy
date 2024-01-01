import React from "react";

const Avatar = ({ url }: { url: string }) => {
  return (
    <div className="md:w-9 md:h-9 sm:w-9 sm:h-9  w-9 h-9 rounded-full bg-amber-500">
      <img src={url} alt="" className="md:w-9 md:h-9 p-[2px]  rounded-full" />
    </div>
  );
};

export default Avatar;
