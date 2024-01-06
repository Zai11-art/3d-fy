import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Avatar from "./avatar";
import useMode from "../hooks/state";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lightmode = useMode((state) => state.isDarkMode);
  const mode = useMode();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const logout = () => {
    mode.setLogout();
    setTimeout(() => {
      toast.dismiss();
      toast.success("Logged out.");
    }, 1);
  };

  const handleModalClick = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex  relative " ref={dropdownRef}>
      <button onClick={handleModalClick}>
        <Avatar url="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      </button>
      {isOpen && (
        <div
          className={`gap-2 mt-12 absolute right-0 rounded-lg flex flex-col ${
            lightmode
              ? "bg-gradient-gray-light border-zinc-500/50 shadow-lg shadow-zinc-950/30"
              : "bg-gradient-gray border-zinc-500/50 shadow-lg shadow-zinc-200/20"
          } border-[1px] items-center justify-center p-5`}
        >
          {[
            { label: "Profile", route: "/user/profile" },
            { label: "Dashboard", route: "/user/dashboard" },
            { label: "Upload", route: "/user/upload" },
          ].map((btn) => (
            <Link
              to={btn.route}
              key={btn.label}
              className={`text-sm w-32 font-light text-normal ${
                lightmode
                  ? "bg-gradient-gray-light border-zinc-500/50 text-black font-normal hover:border-zinc-500"
                  : "bg-gradient-gray border-zinc-500/50 text-white hover:border-zinc-500"
              } border-[1px] py-2 rounded-md transition-all ease-in-out flex items-center justify-center`}
            >
              {btn.label}
            </Link>
          ))}
          <button
            className="py-1 font-light text-sm bg-orange-500 rounded-md w-32 hover:bg-orange-400 transition-all ease-in-out"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
