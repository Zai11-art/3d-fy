import React from "react";
import { FaCog } from "react-icons/fa";
import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/divider";
import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import * as yup from "yup";
import { Formik } from "formik";
import { OnsubmitPropsType, RegisterValuesType } from "../../types/types";
import axios from "axios";
import toast from "react-hot-toast";

const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email"),
  username: yup.string(),
  tag: yup.string(),
  bio: yup.string(),
  profilePic: yup.string(),
});

const PasswordForm = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const user = useMode((state) => state.user);
  const token = useMode((state) => state.token);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const initialRegVal = {
    email: `${user?.email}`,
    username: `${user?.username}`,
    tag: `${user?.tag}`,
    bio: `${user?.bio}`,
    profilePic: `${user?.profilePic}`,
  };

  const update = async (
    values: RegisterValuesType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    try {
      console.log("values here");
      console.log(values);

      // const formData = new FormData();
      // Object.entries(values).forEach(([key, value]) => {
      //   formData.append(key, value);
      // });
      // formData.append("profilePic", values.profilePic.name);

      setIsloading(true);

      const response = await axios.put(
        `http://localhost:8080/users/${user?.id}/update`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.statusText === "OK") {
        toast.success("User info updated.");
        setTimeout(() => {
          navigate(`/${user?.id}/profile`);
        }, 2000);
      }

      // onSubmitProps.resetForm();
    } catch (error) {
      toast.error(`Updating failed failed. Error: ${error}`);
    } finally {
      setIsloading(false);
    }
  };

  const handleFormSubmitReg = async (
    values: RegisterValuesType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log(values);
    await update(values, onSubmitProps);
  };

  return (
    <PageLayout>
      <div className="w-full h-full justify-center flex px-5 pb-32">
        <div
          className={`rounded-xl md:w-[1000px] w-full h-[500px] bg-[red] mt-12 flex flex-col items-center border-zinc-500/50 border-[1px] ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          } p-8 text-normal`}
        >
          <div className="w-full justify-between flex ">
            <div className="flex gap-2 items-center ">
              <RiLockPasswordLine className="text-xl" />
              <h1 className="text-2xl">Password Settings</h1>
            </div>

            <Link
              to={`/user/settings`}
              className="hover:bg-orange-400 text-white bg-orange-600 p-2 text-sm rounded-md flex gap-1 items-center"
            >
              <IoIosInformationCircleOutline className="text-xl" />
              To Credentials
            </Link>
          </div>

          <Divider />

          <div className="w-full py-2 text-sm font-light">
            Change info that you want to change below.
          </div>

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
                className="w-full flex flex-col items-center gap-5"
              >
                <>
                  <div className="flex-col flex gap-3 w-full ">
                    <div className="w-full flex gap-5 justify-between items-center">
                      <label className="text-md" htmlFor="currentPassword">
                        Current Password
                      </label>

                      {errors.currentPassword && touched.currentPassword && (
                        <div className="text-red-500 text-xs">
                          {errors.currentPassword}
                        </div>
                      )}
                    </div>
                    <input
                      disabled={isLoading}
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={values.currentPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${
                        errors.currentPassword && touched.currentPassword
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

                  <div className="flex-col flex gap-3 w-full ">
                    <div className="w-full flex gap-5 justify-between items-center">
                      <label className="text-md" htmlFor="password">
                        New Password
                      </label>

                      {errors.password && touched.password && (
                        <div className="text-red-500 text-xs">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <input
                      disabled={isLoading}
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

                  <div className="flex-col flex gap-3 w-full ">
                    <div className="w-full flex items-center justify-between">
                      <label className="text-sm" htmlFor={"confirmPassword"}>
                        Confirm Password
                      </label>

                      {errors.confirmPassword && touched.confirmPassword && (
                        <div className="text-red-500 text-xs">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                    <input
                      disabled={isLoading}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      // value={user?.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${
                        errors.confirmPassword && touched.confirmPassword
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
                </>

                <button
                  id="hehe"
                  type="submit"
                  className="hehe w-full py-1 bg-orange-500 text-white rounded-md"
                >
                  Save Changes
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </PageLayout>
  );
};

export default PasswordForm;
