import { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Divider from "../../components/divider";
import PageLayout from "../../layout/page-layout";
import { FcGoogle } from "react-icons/fc";
import useMode from "../../hooks/state";

const Auth = () => {
  const currRoute = useLocation().pathname;
  const lightmode = useMode((state) => state.isDarkMode);

  const formContent =
    currRoute === "/Login"
      ? ["email", "password"]
      : ["username", "email", "password"];

  return (
    <PageLayout>
      <div
        className={`w-full h-full flex justify-center pb-64  ${
          currRoute === "/Register" ? "pt-28" : "pt-36"
        }`}
      >
        <div
          className={`w-[400px] h-[100%]  flex flex-col items-center border-zinc-500/50 border-[1px] ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          }  rounded-md  `}
        >
          <div className="flex flex-col gap-2 w-full items-center justify-center ">
            <div
              className={`flex items-center justify-center w-full rounded-t-md bg-orange-500 h-[175px] mb-5`}
            >
              <div
                className={`rounded-full h-[110px] w-[110px] ${
                  lightmode ? " bg-gradient-gray-light" : "bg-gradient-gray"
                }`}
              ></div>
            </div>
            <h1 className="text-xl">
              {currRoute === "/Login" ? "Login" : "Register"}
            </h1>
          </div>

          <div className="w-full flex flex-col gap-5 p-5">
            <form action="" className="flex flex-col items-center gap-4">
              {formContent.map((label) => (
                <div className="flex-col flex gap-2 w-full">
                  <label className="text-md" htmlFor={label}>
                    {label.toLocaleString()}
                  </label>
                  <input
                    required
                    type={label}
                    id={label}
                    name={label}
                    className={` px-2 p-1 text-sm text-normal ${
                      lightmode
                        ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                        : "bg-black text-white"
                    }  border-[1px] border-zinc-500/50 rounded-md`}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full py-1 bg-orange-500 text-white rounded-md"
              >
                {currRoute === "/Login" ? "Login" : "Register"}
              </button>
            </form>
            <div></div>

            <div className="flex gap-2 w-full items-center">
              <Divider />
              <span>or</span>
              <Divider />
            </div>

            <div className="flex flex-col w-full h-full items-center justify-center gap-3">
              <button
                className={`flex w-full p-2 rounded-md items-center justify-center gap-2 ${
                  lightmode
                    ? "bg-zinc-100 border-zinc-500/30 hover:border-zinc-500 shadow-sm shadow-zinc-950/20"
                    : "bg-black border-zinc-500/50 hover:border-zinc-500"
                }  border-[1px]  transition-all ease-in-out`}
              >
                <span className="text-sm">Sign in with</span>
                <FcGoogle />
              </button>
              <div>
                <Link
                  className="text-xs text-orange-500 hover:underline"
                  to={currRoute === "/Login" ? "/Register" : "/Login"}
                >
                  {currRoute === "/Login" ? "Register" : "Login"} instead?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Auth;
