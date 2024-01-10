import { Formik } from "formik";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FaFile } from "react-icons/fa6";
import { MdDriveFolderUpload } from "react-icons/md";
import FileUpload from "../../components/file-upload";
import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import * as yup from "yup";
import {
  OnsubmitPropsType,
  RegisterValuesType,
  Upload3dType,
} from "../../types/types";
import Divider from "../../components/divider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "next/navigation";

const registerSchema = yup.object().shape({
  title: yup.string().required("required"),
  description: yup.string().required("required"),
  file: yup.string().required("required"),
  tags: yup.string().required("required"),
});

const initialRegVal = {
  title: "",
  description: "",
  file: "",
  tags: "",
};

const Upload = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const [isLoading, setIsloading] = useState(false);
  const [imagePath, setimagePath] = useState([]);
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const mode = useMode();
  const token = useMode((state) => state.token);
  const userid = useMode((state) => state.user?.id);
  const navigate = useNavigate();


  console.log("img path here");
  console.log(imagePath);

  const register = async (
    values: Upload3dType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log("values here");
    console.log(values);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log(formData);
    formData.append("file", values.file?.name);
    formData.append("userId", `${userid}`);

    setIsloading(true);
    const registerRes = await fetch("http://localhost:8080/posts/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await registerRes.json();
    console.log(data);
    if (data) {
      toast.success(`Post uploaded.`);
      setTimeout(() => {
        navigate(`/${userid}/profile`);
      }, 2000);
    } else {
      toast.error("Failed uploading.");
    }
    onSubmitProps.resetForm();
    // console.log(data);
  };

  const handleFormSubmitReg = async (
    values: Upload3dType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log(values);
    await register(values, onSubmitProps);
  };

  const handleOnDrop = (acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFileName(acceptedFiles[0].name);
    if (
      (acceptedFiles.length <= 8 &&
        acceptedFiles[0].name.split(".").slice(-1)[0] === "glb") ||
      acceptedFiles[0].name.split(".").slice(-1)[0] === "gltf" ||
      acceptedFiles[0].name.split(".").slice(-1)[0] === "jpeg" ||
      acceptedFiles[0].name.split(".").slice(-1)[0] === "jpg" ||
      acceptedFiles[0].name.split(".").slice(-1)[0] === "png"
    ) {
      setFileType(acceptedFiles[0].name.split(".").slice(-1)[0]);
      setimagePath(
        //@ts-ignore
        acceptedFiles.map((file) => URL.createObjectURL(file))
      );
      toast.success(`${acceptedFiles[0].name} uploaded successfully`);
    } else {
      toast.error(
        `${
          acceptedFiles[0].name.length > 20
            ? acceptedFiles[0].name.slice(0, 10) + "..."
            : acceptedFiles[0].name
        } upload failed. Use gltf / glb / png / jpg / jpeg.`
      );
      return;
    }
  };

  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center pt-[100px] pb-[300px] px-5">
        <div
          className={`flex justify-center items-center px-5 py-9 rounded-xl border-zinc-500/50 border-[1px] xl:w-[1200px] w-full h-full ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          }`}
        >
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
                className="md:flex-row flex-col px-5 flex  justify-center   w-full h-full gap-10"
              >
                {/* UPLOAD SECTION */}
                <div
                  id="file"
                  className="md:w-[60%] w-full h-full gap-3 flex flex-col"
                >
                  <label htmlFor="file">Upload file</label>
                  <Dropzone
                    multiple={false}
                    onDrop={(file) => {
                      setFieldValue("file", file[0]);
                      handleOnDrop(file);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div
                          className={`flex p-12 w-full h-full cursor-pointer ${
                            lightmode
                              ? "border-zinc-500/90 shadow-inner shadow-zinc-950/30 "
                              : "border-zinc-500/90 hover:border-zinc-200 transition-all ease-in-out"
                          } ${
                            isLoading && "animate-pulse"
                          } border-[1px] border-dashed rounded-md`}
                        >
                          <div className="w-full h-full gap-5 flex flex-col p-5 items-center justify-center ">
                            <div className="flex gap-5 flex-col items-center justify-center rounded-full border-[2px] border-orange-700 hover:border-orange-500">
                              <img
                                src={
                                  values.file
                                    ? "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/gradient/copy-dynamic-gradient.png"
                                    : "https://i.pinimg.com/736x/23/c8/e3/23c8e32c6a0498b8af6c384a3005af11.jpg"
                                }
                                className="w-64 h-64 rounded-full"
                                alt="image"
                              />
                            </div>
                            <span className="flex text-sm text-normal text-center font-light">
                              {values.file
                                ? fileType === "glb" || fileType === "glb"
                                  ? `3d file mounted named: ${fileName}`
                                  : (fileType === "png" ||
                                      fileType === "jpg" ||
                                      fileType === "jpeg") &&
                                    `Image file mounted named: ${fileName}`
                                : "File should be gltf or glb or images."}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                  <div className="flex gap-2 flex-col">
                    <div
                      className={`text-normal text-sm flex flex-col ${
                        lightmode ? "font-normal" : "font-light "
                      }`}
                    >
                      <span>
                        * Supported image formats: .jpg / .jpeg / .png
                      </span>
                      <span>* Supported 3d formats: .gltf / .glb </span>
                    </div>
                  </div>
                </div>

                <div className="flex md:w-[40%]  w-full h-full flex-col  justify-between  gap-10">
                  <div className="flex gap-10">
                    <div className=" w-full h-full flex flex-col gap-5">
                      {/* TITLE INPUT */}
                      <div className="flex-col flex gap-3 w-full ">
                        <div className="w-full flex gap-5 items-center justify-between">
                          <label className="text-md" htmlFor={"title"}>
                            Title
                          </label>
                          {/* error handling */}
                          {errors.title && touched.title && (
                            <div className="text-red-500 text-xs">
                              {errors.title}
                            </div>
                          )}
                        </div>
                        <input
                          disabled={isLoading}
                          required
                          type="title"
                          id="title"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${
                            errors.title && touched.title
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

                      {/* DESCRIPTION INPUT */}
                      <div className="flex-col flex gap-2 w-full ">
                        <div className="w-full flex gap-5 justify-between items-center">
                          <label className="text-md" htmlFor="description">
                            Description
                          </label>
                          {/* error handling */}
                          {errors.description && touched.description && (
                            <div className="text-red-500 text-xs">
                              {errors.description}
                            </div>
                          )}
                        </div>
                        <textarea
                          disabled={isLoading}
                          required
                          id="description"
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full h-[280px] ${
                            errors.description && touched.description
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
                      {/* SELECT TAG INPUT */}
                      <div className="flex-col flex gap-2 w-full ">
                        <div className="w-full flex gap-5 justify-between items-center">
                          <label className="text-md" htmlFor="tags">
                            Tag
                          </label>
                          {/* error handling */}
                          {errors.tags && touched.tags && (
                            <div className="text-red-500 text-xs">
                              {errors.tags}
                            </div>
                          )}
                        </div>
                        <select
                          required
                          id="tags"
                          name="tags"
                          value={values.tags}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full  ${
                            errors.tags && touched.tags
                              ? "border-red-500 "
                              : "border-zinc-500/50"
                          } px-2 p-1 text-sm text-normal ${
                            lightmode
                              ? "bg-zinc-100 text-black shadow-inner shadow-zinc-950/20"
                              : "bg-black text-white"
                          } ${
                            isLoading && "animate-pulse"
                          } rounded-md border-[1px] `}
                        >
                          <option value={""}>select a tag</option>
                          {["model", "render"].map((tag) => (
                            <option id={tag} value={tag}>
                              {tag}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <button
                    id="hehe"
                    type="submit"
                    className="hehe w-full py-1 bg-orange-500 text-white rounded-md"
                  >
                    Upload
                  </button>
                </div>
              </form>
            )}
          </Formik>

          {/* UPLOAD SECTION */}
        </div>
      </div>
    </PageLayout>
  );
};

export default Upload;
