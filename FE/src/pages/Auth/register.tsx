import axios from "axios";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useMode from "../../hooks/state";
import Divider from "../../components/divider";
import PageLayout from "../../layout/page-layout";
import { OnsubmitPropsType, RegisterValuesType } from "../../types/types";
import Dropzone from "react-dropzone";
import toast from "react-hot-toast";

const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("required"),
  username: yup.string().required("required"),
  tag: yup.string().required("required"),
  bio: yup.string().required("required"),
  profilePic: yup.string().required("required"),
  // banner: yup.string().required("required"),
  password: yup.string().required("required"),
  confirmPassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password")], `Passwords don't match.`),
});

const initialRegVal = {
  email: "",
  username: "",
  tag: "",
  bio: "",
  password: "",
  confirmPassword: "",
  profilePic: "",
  // banner: "",
};

const Register = () => {
  const currRoute = useLocation().pathname;
  const lightmode = useMode((state) => state.isDarkMode);
  const [isLoading, setIsloading] = useState(false);
  const [imagePath, setimagePath] = useState([]);
  const [imagePathBanner, setimagePathBanner] = useState([]);
  const mode = useMode();
  const navigate = useNavigate();

  const register = async (
    values: RegisterValuesType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    try {
      console.log("values here");
      console.log(values);
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("profilePic", values.profilePic.name);

      // Object.entries(parsedValues).forEach(([key, value]) => {
      //   if (key === "images" && Array.isArray(value)) {
      //     value.forEach((imageFile, index) => {
      //       formData.append(`images[${index}]`, imageFile);
      //     });
      //   } else {
      //     formData.append(key, value);
      //   }
      // });
      // console.log(JSON.stringify(parsedValues));
      // formData.append("banner", values.banner.name);

      setIsloading(true);
      const registerRes = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        body: formData,
      });

      console.log(registerRes);

      const data = await registerRes.json();

      if (registerRes.ok) {
        mode.setToken(data);
        toast.success(`Registered. Please login.`);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      onSubmitProps.resetForm();
    } catch (error) {
      toast.success(`Register failed. Error: ${error}`);
    } finally {
      setIsloading(false);
    }
  };

  const handleFormSubmitReg = async (
    values: RegisterValuesType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log(values);
    await register(values, onSubmitProps);
  };

  return (
    <PageLayout>
      <div className={`w-full h-full flex justify-center pb-64 pt-28`}>
        <div
          className={`sm:w-[1000px]  w-full h-[100%] mx-5 flex flex-col items-center border-zinc-500/50 border-[1px] ${
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
              initialValues={initialRegVal}
              onSubmit={handleFormSubmitReg}
              validationSchema={registerSchema}
            >
              {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
                errors,
                touched,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center gap-10"
                >
                  {currRoute === "/register" && (
                    <>
                      <div className="flex md:flex-row flex-col  justify-center w-full gap-10">
                        <div className="md:w-[50%] w-full h-full flex flex-col gap-5">
                          {/* EMAIL INPUT */}
                          <div className="flex-col flex gap-3 w-full ">
                            <div className="w-full flex gap-5 items-center justify-between">
                              <label className="text-md" htmlFor={"email"}>
                                Email
                              </label>
                              {/* error handling */}
                              {errors.email && touched.email && (
                                <div className="text-red-500 text-xs">
                                  {errors.email}
                                </div>
                              )}
                            </div>
                            <input
                              disabled={isLoading}
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
                              } ${
                                isLoading && "animate-pulse"
                              } border-[1px] rounded-md`}
                            />
                          </div>

                          <div className="w-full h-full flex justify-between gap-5">
                            {/* USERNAME INPUT */}
                            <div className="flex-col flex gap-3 w-full ">
                              <div className="w-full flex gap-5 justify-between items-center">
                                <label className="text-sm" htmlFor={"username"}>
                                  Username
                                </label>
                                {/* error handling */}
                                {errors.username && touched.username && (
                                  <div className="text-red-500 text-xs">
                                    {errors.username}
                                  </div>
                                )}
                              </div>
                              <input
                                disabled={isLoading}
                                required
                                type="username"
                                id="username"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full ${
                                  errors.username && touched.username
                                    ? "border-red-500 "
                                    : "border-zinc-500/50"
                                } px-2 p-1 text-sm text-normal ${
                                  lightmode
                                    ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                                    : "bg-black text-white"
                                } ${
                                  isLoading && "animate-pulse"
                                } rounded-md border-[1px] `}
                              />
                            </div>

                            {/* TAG INPUT */}
                            <div className="flex-col flex gap-3 w-full ">
                              <div className="w-full flex gap-5 justify-between items-center">
                                <label className="text-sm" htmlFor="tag">
                                  User Tag
                                </label>
                                {/* error handling */}
                                {errors.tag && touched.tag && (
                                  <div className="text-red-500 text-xs">
                                    {errors.tag}
                                  </div>
                                )}
                              </div>
                              <input
                                disabled={isLoading}
                                required
                                type="text"
                                id="tag"
                                name="tag"
                                value={values.tag}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full ${
                                  errors.tag && touched.tag
                                    ? "border-red-500 "
                                    : "border-zinc-500/50"
                                } px-2 p-1 text-sm text-normal ${
                                  lightmode
                                    ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                                    : "bg-black text-white"
                                } ${
                                  isLoading && "animate-pulse"
                                } rounded-md border-[1px] `}
                              />
                            </div>
                          </div>

                          {/* BIO INPUT */}
                          <div className="flex-col flex gap-2 w-full ">
                            <div className="w-full flex gap-5 justify-between items-center">
                              <label className="text-md" htmlFor="bio">
                                Bio
                              </label>
                              {/* error handling */}
                              {errors.bio && touched.bio && (
                                <div className="text-red-500 text-xs">
                                  {errors.bio}
                                </div>
                              )}
                            </div>
                            <textarea
                              disabled={isLoading}
                              required
                              id="bio"
                              name="bio"
                              value={values.bio}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`w-full h-[280px] ${
                                errors.bio && touched.bio
                                  ? "border-red-500 "
                                  : "border-zinc-500/50"
                              } px-2 p-1 text-sm text-normal ${
                                lightmode
                                  ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                                  : "bg-black text-white"
                              } ${
                                isLoading && "animate-pulse"
                              } rounded-md border-[1px] `}
                            />
                          </div>
                        </div>

                        <div className="md:w-[50%] w-full h-full flex flex-col gap-5">
                          {/* PASSWORD INPUT */}
                          <div className="flex-col flex gap-3 w-full ">
                            <div className="w-full flex gap-5 justify-between items-center">
                              <label className="text-md" htmlFor="password">
                                Password
                              </label>
                              {/* error handling */}
                              {errors.password && touched.password && (
                                <div className="text-red-500 text-xs">
                                  {errors.password}
                                </div>
                              )}
                            </div>
                            <input
                              disabled={isLoading}
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
                              } ${
                                isLoading && "animate-pulse"
                              } rounded-md border-[1px] `}
                            />
                          </div>

                          {/* CONFIRM PASSWORD INPUT */}
                          <div className="flex-col flex gap-3 w-full ">
                            <div className="w-full flex items-center justify-between">
                              <label
                                className="text-sm"
                                htmlFor={"confirmPassword"}
                              >
                                Confirm Password
                              </label>
                              {/* error handling */}
                              {errors.confirmPassword &&
                                touched.confirmPassword && (
                                  <div className="text-red-500 text-xs">
                                    {errors.confirmPassword}
                                  </div>
                                )}
                            </div>
                            <input
                              disabled={isLoading}
                              required
                              type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              // value={values.confirmPassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`${
                                errors.confirmPassword &&
                                touched.confirmPassword
                                  ? "border-red-500 "
                                  : "border-zinc-500/50"
                              } px-2 p-1 text-sm text-normal ${
                                lightmode
                                  ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                                  : "bg-black text-white"
                              } ${
                                isLoading && "animate-pulse"
                              } border-[1px]  rounded-md`}
                            />
                          </div>

                          <div id="profilePic" className="gap-3 flex flex-col">
                            <label htmlFor="profilePic">Profile Picture</label>

                            <Dropzone
                              accept={{
                                "image/png": [".png"],
                                "image/jpg": [".jpg"],
                                "image/jpeg": [".jpeg"],
                              }}
                              multiple={false}
                              onDrop={(file) => {
                                setFieldValue("profilePic", file[0]);
                                setimagePath(
                                  //@ts-ignore
                                  file.map((file) => URL.createObjectURL(file))
                                );
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <div
                                    className={`w-full h-[100%] cursor-pointer ${
                                      lightmode
                                        ? "border-zinc-500/90 shadow-inner shadow-zinc-950/30 "
                                        : "border-zinc-500/90 hover:border-zinc-200 transition-all ease-in-out"
                                    } ${
                                      isLoading && "animate-pulse"
                                    } border-[1px] border-dashed rounded-md flex`}
                                  >
                                    <div className="w-full h-full gap-5 flex flex-col p-5 items-center justify-center ">
                                      <div className="flex gap-5 flex-col items-center justify-center rounded-full border-[2px] border-orange-700 hover:border-orange-500">
                                        <img
                                          src={
                                            values.profilePic
                                              ? imagePath[0]
                                              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                          }
                                          className="w-64 h-64 rounded-full"
                                          alt="image"
                                        />
                                      </div>
                                      <span className="flex text-sm text-normal text-center font-light">
                                        Change profile pic here. or leave this
                                        as default
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </div>
                        </div>
                      </div>

                      {/* BANNER FEATURE TO BE FIXED */}
                      {/* <div className="w-full h-full ">
                        <div id="banner" className="gap-3 flex flex-col">
                          <label htmlFor="banner">Banner Picture</label>
                          <Dropzone
                            accept={{
                              "image/png": [".png"],
                              "image/jpg": [".jpg"],
                              "image/jpeg": [".jpeg"],
                            }}
                            multiple={false}
                            onDrop={(file) => {
                              setFieldValue("banner", file[0]);
                              setimagePathBanner(
                                //@ts-ignore
                                file.map((file) => URL.createObjectURL(file))
                              );
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div
                                  className={`w-full h-[100%] cursor-pointer ${
                                    lightmode
                                      ? "border-zinc-500/90 shadow-inner shadow-zinc-950/30 "
                                      : "border-zinc-500/90 hover:border-zinc-200 transition-all ease-in-out"
                                  } ${
                                    isLoading && "animate-pulse"
                                  } border-[1px] border-dashed rounded-md flex`}
                                >
                                  <div className="w-full h-full gap-5 flex flex-col p-5 items-center justify-center ">
                                    <div className="flex w-full h-full gap-5 flex-col items-center justify-center">
                                      <img
                                        src={
                                          values.banner
                                            ? imagePathBanner[0]
                                            : "https://png.pngtree.com/thumb_back/fh260/background/20200719/pngtree-geometric-grey-background-gradient-pattern-nature-image_357219.jpg"
                                        }
                                        className="w-full h-64 "
                                        alt="image"
                                      />
                                    </div>
                                    <span className="flex text-sm text-normal text-center font-light">
                                      Choose a banner. or leave this as default
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                        </div>
                      </div> */}
                    </>
                  )}

                  <button
                    id="hehe"
                    type="submit"
                    className="hehe w-full py-1 bg-orange-500 text-white rounded-md"
                  >
                    Register
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

export default Register;
