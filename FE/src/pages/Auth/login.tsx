import axios from "axios";
import * as yup from "yup";
import { Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

import useMode from "../../hooks/state";
import Divider from "../../components/divider";
import PageLayout from "../../layout/page-layout";
import { LoginValuesType, OnsubmitPropsType } from "../../types/types";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("required")
    .matches(/[a-zA-Z]/, "Incorrect password or email"),
  password: yup
    .string()
    .required("required")
    .matches(/[a-zA-Z]/, "Incorrect password or email"),
});

const initialLogVal = {
  email: "",
  username: "",
  password: "",
};

const Login = () => {
  const currRoute = useLocation().pathname;
  const lightmode = useMode((state) => state.isDarkMode);

  const login = async (
    values: LoginValuesType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log("triggered from login");
    console.log(values);

    const loginRes = await axios.post("http://localhost:8080/login", values, {
      headers: { "Content-Type": "application/json" },
    });

    const loginRes2 = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await loginRes2.json();
    console.log(data);
  };

  const handleFormSubmitLog = async (
    values: LoginValuesType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log(values);
    await login(values, onSubmitProps);
  };

  return (
    <PageLayout>
      <div className={`w-full h-full flex justify-center pb-64 pt-36`}>
        <div
          className={`sm:w-[500px]  w-full h-[100%] mx-5 flex flex-col items-center border-zinc-500/50 border-[1px] ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          }  rounded-md  `}
        >
          <div className="flex flex-col gap-2 w-full items-center justify-center ">
            <div
              className={`flex items-center justify-center w-full rounded-t-md bg-orange-500 h-[130px] mb-5`}
            >
              <div
                className={`rounded-full h-[110px] w-[110px] ${
                  lightmode ? " bg-gradient-gray-light" : "bg-gradient-gray"
                }`}
              ></div>
            </div>
            <h1 className="text-xl">
              {currRoute === "/login" ? "Login" : "Register"}
            </h1>
          </div>

          <div className="w-full flex flex-col gap-5 p-5">
            {/* FORM HERE */}
            <Formik
              //@ts-ignore
              initialValues={initialLogVal}
              onSubmit={handleFormSubmitLog}
              validationSchema={loginSchema}
            >
              {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                resetForm,
                errors,
                touched,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center gap-10"
                >
                  {currRoute === "/login" && (
                    <div className="flex flex-wrap justify-center w-full gap-3">
                      {/* EMAIL INPUT */}
                      <div className="flex-col flex gap-2 w-full">
                        <div className="w-full flex gap-5 justify-between items-center">
                          <label className="text-md" htmlFor={"email"}>
                            Email
                          </label>
                          {/* error handling */}
                          {errors.email && touched.email && (
                            <div className="text-red-500 text-sm">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${
                            errors.email && touched.email
                              ? "border-red-500 "
                              : "border-zinc-500/50"
                          } px-2 p-1 text-sm text-normal ${
                            lightmode
                              ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                              : "bg-black text-white"
                          }  rounded-md border-[1px] focus:bg-black`}
                        />
                      </div>

                      {/* PASSWORD INPUT */}
                      <div className="flex-col flex gap-2 w-full">
                        <div className="w-full flex justify-between items-center gap-5">
                          <label className="text-md" htmlFor={"password"}>
                            Password
                          </label>
                          {/* error handling */}
                          {errors.password && touched.password && (
                            <div className="text-red-500 text-sm">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <input
                          required
                          type="password"
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${
                            errors.password && touched.password
                              ? "border-red-500 "
                              : "border-zinc-500/50"
                          } px-2 p-1 text-sm text-normal ${
                            lightmode
                              ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                              : "bg-black text-white"
                          }  border-[1px] rounded-md`}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    id="hehe"
                    type="submit"
                    className="hehe w-full py-1 bg-orange-500 text-white rounded-md"
                  >
                    {currRoute === "/login" ? "Login" : "Register"}
                  </button>

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
                        onClick={() => {
                          resetForm();
                        }}
                        className="text-xs text-orange-500 hover:underline"
                        to={currRoute === "/login" ? "/register" : "/login"}
                      >
                        {currRoute === "/login" ? "Register" : "Login"} instead?
                      </Link>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
