import { useState } from "react";
import {
  MdDashboard,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import toast from "react-hot-toast";
import { FaCog, FaPlus } from "react-icons/fa";
import { MdStarPurple500 } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowForward, MdMenu } from "react-icons/md";
import { CgProfile, CgShapeHexagon } from "react-icons/cg";

import Avatar from "./avatar";
import Divider from "./divider";
import useMode from "../hooks/state";
import UserDropdown from "./user-dropdown";
import { useMediaQuery } from "../hooks/use-media-query";

const dummyUserData = {
  name: "Raygun",
};

const navLinks = [
  { label: "Feed", url: "/feed" },
  { label: "Models", url: "/models" },
  { label: "Showcase", url: "/showcase" },
  { label: "Learn", url: "/learn" },
  { label: "About", url: "/about" },
];

const Navbar = () => {
  const lightMode = useMode((state) => state.isDarkMode);
  const setDarkMode = useMode((state) => state.setDarkMode);
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const md = useMediaQuery("(max-width:768px)");
  const isAuth = useMode((state) => state.isLoggedIn);
  const user = useMode((state) => state.user);
  const mode = useMode();
  const navigate = useNavigate();

  const navbarContent = [
    {
      label: "profile",
      icon: <CgProfile />,
      url: `/${user?.id}/profile`,
    },
    {
      label: "dashboard",
      icon: <MdDashboard />,
      url: `/${user?.id}/dashboard`,
    },
    {
      label: "settings",
      icon: <FaCog />,
      url: `/${user?.id}/settings`,
    },
    {
      label: "viewer",
      icon: <MdArrowForward />,
      url: "/viewer",
    },
    {
      label: "models",
      icon: <CgShapeHexagon />,
      url: "/models",
    },
    {
      label: "showcase",
      icon: <MdStarPurple500 />,
      url: "/showcase",
    },
  ];

  const logout = () => {
    mode.setLogout();
    setTimeout(() => {
      toast.dismiss();
      toast.success("Logged out.");
    }, 1);
  };

  return (
    <nav
      className={`shadow-lg w-full text-white font-semibold h-20 z-[100]  
     sticky top-0`}
    >
      <div
        className={`flex items-center justify-between h-full ${
          lightMode ? "bg-slate-200 shadow-lg" : "bg-[#1a1d1d]"
        } `}
      >
        <div className="flex items-center ">
          <Link to={"/"} className="flex mr-4 items-center pl-4">
            <CgShapeHexagon className="w-7 h-7 rotate-0 transition-all hover:text-amber-200 ease-in-out hover:rotate-90 text-orange-400 hover:text-xl hover:scale-[1.1]" />
            <h1
              className={`ml-1 font-extrabold ${
                lightMode ? "text-black" : "text-white"
              }`}
            >
              3D-fy
            </h1>
          </Link>

          {md ? null : (
            <div className="flex gap-2 mt-1 items-center">
              <Link to={"/viewer"}>
                <button
                  type="button"
                  className={`flex border-[1px] border-orange-500/50 items-center px-2 py-1 rounded-md font-normal transition-all ease-in-out
            ${
              lightMode
                ? " hover:border-orange-500 shadow-slate-900/20 shadow-inner text-black"
                : "hover:border-orange-500 shadow-orange-500/30 shadow-inner text-white"
            }`}
                >
                  Viewer
                  <MdArrowForward className="ml-1 h-5 " />
                </button>
              </Link>

              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  className={`text-[13px] font-thin transition-all ease-in-out  p-1 active:bg-slate-800 ${
                    lightMode
                      ? "text-slate-800 hover:text-slate-700"
                      : "text-slate-300 hover:text-slate-200"
                  }`}
                  to={link.url}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {md ? (
          <>
            <div
              className={`w-full z-[-1]  absolute ${
                openMenuBar ? "top-0" : "top-[-1000px]"
              } ${
                lightMode
                  ? "bg-slate-300 text-black"
                  : "bg-[#0e1414] text-white"
              } h-screen transition-all ease-in-out  duration-300`}
            >
              <div className="flex flex-col mt-16 py-8 px-5">
                <div className=" flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar
                      url={
                        isAuth
                          ? user?.profilePic
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                    />

                    <span className="ml-2 text-sm">
                      {user ? user?.username : "Logged out"}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        user ? "bg-green-500" : "bg-red-500"
                      } `}
                    ></div>
                    <span className="text-normal font-light text-sm">
                      {user ? "online" : "offline"}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  {navbarContent.map((lbl, i) => (
                    <Link
                      key={i}
                      onClick={() => setOpenMenuBar(!openMenuBar)}
                      to={lbl.url}
                    >
                      <div
                        className={`flex  text-xl hover:text-3xl transition-all ease-in-out items-center py-2`}
                      >
                        <div className="mr-2 ">{lbl.icon}</div>
                        <span className="text-sm font-thin">{lbl.label}</span>
                      </div>
                      <Divider />
                    </Link>
                  ))}
                  {md && (
                    <div className="w-full">
                      {isAuth ? (
                        <button
                          onClick={() => {
                            logout();
                            setOpenMenuBar(!openMenuBar);
                            navigate("/");
                          }}
                          className={`w-full mt-5 text-white flex items-center justify-center p-[2px] py-1 px-4 border-[1px] border-yellow-200/40 rounded-md font-normal transition-all ease-in-out
                        ${
                          lightMode
                            ? "bg-gradient-to-r from-amber-700/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md"
                            : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-500"
                        }`}
                        >
                          logout
                        </button>
                      ) : (
                        <Link
                          onClick={() => setOpenMenuBar(!openMenuBar)}
                          to={"/login"}
                          type="button"
                          className={`w-full mt-5 text-white flex items-center justify-center p-[2px] py-1 px-4 border-[1px] border-yellow-200/40 rounded-md font-normal transition-all ease-in-out
                      ${
                        lightMode
                          ? "bg-gradient-to-r from-amber-700/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md"
                          : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-500"
                      }`}
                        >
                          login
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex  gap-2">
              <Link to={`/${user?.id}/upload`}>
                <button
                  type="button"
                  className={`flex gap-1 items-center justify-center p-[2px] px-2 border-[1px] border-yellow-200/40 rounded-md font-normal transition-all ease-in-out
            ${
              lightMode
                ? "bg-gradient-to-r from-amber-700/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md"
                : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-500"
            }`}
                >
                  <FaPlus className="text-sm " />
                  Publish
                </button>
              </Link>
              <button
                onClick={setDarkMode}
                className={`text-white ${
                  lightMode ? "shadow-slate-900/60" : "shadow-amber-400/90"
                } w-7 h-7 flex items-center justify-center bg-amber-700 shadow-md rounded-full p-[2px]`}
              >
                {lightMode ? (
                  <MdOutlineLightMode className="w-5 h-5 shadow-xl rounded-full hover:shadow-cyan-100/90 shadow-cyan-300/30 transition-all ease-in-out " />
                ) : (
                  <MdOutlineDarkMode className="w-5 h-5 shadow-xl rounded-full hover:shadow-cyan-100/90 shadow-cyan-300/30 transition-all ease-in-out " />
                )}
              </button>
              <button
                className="pr-4"
                onClick={() => setOpenMenuBar(!openMenuBar)}
              >
                <MdMenu
                  className={`text-[30px] ${
                    lightMode ? "text-black" : "text-white"
                  }`}
                />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center pr-4 gap-2  ">
            {isAuth && (
              <Link to={`/${user?.id}/upload`}>
                <button
                  type="button"
                  className={`flex gap-1 items-center justify-center p-[2px] px-2 border-[1px] border-yellow-200/40 rounded-md font-normal transition-all ease-in-out
            ${
              lightMode
                ? "bg-gradient-to-r from-amber-700/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md"
                : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-500"
            }`}
                >
                  <FaPlus className="text-sm " />
                  Publish
                </button>
              </Link>
            )}
            <button
              onClick={setDarkMode}
              className={`text-white ${
                lightMode ? "shadow-slate-900/60" : "shadow-amber-400/90"
              } w-8 h-8 flex items-center justify-center  bg-amber-700 shadow-md rounded-full`}
            >
              {lightMode ? (
                <MdOutlineLightMode className="w-5 h-5 shadow-xl rounded-full hover:shadow-cyan-100/90 shadow-cyan-300/30 transition-all ease-in-out " />
              ) : (
                <MdOutlineDarkMode className="w-5 h-5 shadow-xl rounded-full hover:shadow-cyan-100/90 shadow-cyan-300/30 transition-all ease-in-out " />
              )}
            </button>
            <Link to={"/user/dashboard"}>
              {isAuth ? (
                <UserDropdown />
              ) : (
                <>
                  <Link
                    to={"/login"}
                    type="button"
                    className={`flex items-center p-[2px] py-1 px-4 border-[1px] border-yellow-200/40 rounded-md font-normal transition-all ease-in-out
                      ${
                        lightMode
                          ? "bg-gradient-to-r from-amber-700/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md"
                          : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-500"
                      }`}
                  >
                    login
                  </Link>
                </>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

/* 
#25B5B8
#00E8EB
#358385
#315152
#293333
*/
