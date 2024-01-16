import { MdClose } from "react-icons/md";
import { useState } from "react";
import Divider from "./divider";
import useMode from "../hooks/state";
import useInputModal from "../hooks/use-input-modal";
import { Formik } from "formik";
import { RiSendPlane2Fill } from "react-icons/ri";
import { CommentType, OnsubmitPropsType } from "../types/types";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const commentSchema = yup.object().shape({
  content: yup.string().notRequired().max(100),
});

const initialCommVal = {
  content: "",
};

const textareaExtend = (e: React.FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = "auto";
  target.style.height = `${target.scrollHeight}px`;
};

const InputModal = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modalState = useInputModal((state) => state.isOpen);
  const token = useMode((state) => state.token);
  const useModal = useInputModal();
  const infoData = useInputModal().data;
  const { postId } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const user = useMode((state) => state.user);

  const fetchComments = async () => {
    try {
      const comments = await axios
        .get(`http://localhost:8080/posts/${postId}/comments`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res: { data: any }) => res.data);

      if (!comments) return;
    } catch (error) {
      toast.error("Error fetching comments.");
    }
  };

  const handleModalClick = (e: {
    target: { closest: (arg0: string) => any };
    stopPropagation: () => void;
  }) => {
    // event delegation
    if (e.target.closest(".modal-content")) return;
    e.stopPropagation();
    useModal.onClose();
  };

  const editComment = async (
    values: CommentType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    try {
      //   const formData = new FormData();
      //   Object.entries(values).forEach(([key, value]) => {
      //     formData.append(key, value);
      //   });

      const comment = await axios.patch(
        `http://localhost:8080/posts/comment/${infoData?.commentId}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setIsloading(true);
      fetchComments();

      if (!comment) {
        setIsloading(false);
        toast.error("Failed commenting.");
      } else {
        toast.success(`Commented.`);
      }

      onSubmitProps.resetForm();
    } catch (error) {
      toast.error("Failed commenting.");
    } finally {
      setIsloading(false);
    }
  };

  const handleFormSubmitComm = async (
    values: CommentType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log(values);
    await editComment(values, onSubmitProps);
  };

  return (
    <>
      {modalState && (
        <div
          // @ts-ignore
          onClick={handleModalClick}
          className="relative z-[200]"
        >
          {/* FILTER AND MAIN DIALOG */}
          <div className="fixed inset-0  w-screen overflow-y-auto flex z-10 items-center justify-center ">
            <div className="bg-black w-screen h-screen absolute z-[5] opacity-80"></div>
            <div className="w-[600px] md:h-[300px] h-[300px] z-10 flex">
              <div
                className={`w-full h-full mx-6  ${
                  lightmode
                    ? "bg-gradient-gray-light text-black border-[1px] border-white shadow-2xl shadow-black"
                    : "bg-gradient-gray text-white  shadow-lg border-white shadow-zinc-200/20 border-zinc-100/20"
                }  rounded-2xl gap-4 flex p-4 md:flex-row flex-col border-[1px] `}
              >
                {/* FILTER */}
                <div className="flex w-full h-full items-center justify-center modal-content">
                  <div
                    className={`w-full h-full flex items-center  p-4 ${
                      lightmode
                        ? "bg-gradient-gray-light shadow-md shadow-zinc-950/60 border-[1px] border-white"
                        : "bg-gradient-gray shadow-md shadow-zinc-950/60 border-[1px] border-zinc-100/20"
                    } rounded-xl flex-col  p-6`}
                  >
                    <div className="flex items-center w-full justify-between">
                      <span className="md:text-2xl text-lg">
                        {infoData?.title}
                      </span>

                      <button
                        onClick={useModal.onClose}
                        className={` flex items-center justify-center md:w-9 md:h-9 w-6 h-6 
                    ${
                      lightmode
                        ? "shadow-red-600/50 hover:shadow-red-500 bg-slate-200"
                        : "shadow-red-600/50 hover:shadow-red-500 bg-slate-900"
                    } shadow-md hover:shadow-lg rounded-full transition-all ease-in-out`}
                      >
                        <MdClose className="w-6 h-6 text-red-500 " />
                      </button>
                    </div>

                    <Divider />

                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <Formik
                          //@ts-ignore
                          initialValues={initialCommVal}
                          onSubmit={handleFormSubmitComm}
                          validationSchema={commentSchema}
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
                              className="w-full flex flex-col gap-2"
                            >
                              <div className="w-full items-center justify-between">
                                {errors.content && touched.content && (
                                  <div className="text-red-500 text-xs">
                                    {errors.content}
                                  </div>
                                )}
                              </div>

                              <div className="w-full flex gap-4">
                                <textarea
                                  maxLength={100}
                                  disabled={isLoading}
                                  id="content"
                                  name="content"
                                  placeholder={infoData?.content}
                                  rows={2}
                                  onInput={textareaExtend}
                                  value={values.content}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={`w-full h-full resize-none flex p-2 rounded-md focus:outline-none focus:border-amber-500 focus:ring-[1.5px] focus:ring-amber-500 ${
                                    lightmode
                                      ? "bg-zinc-100 border-zinc-500/50 border-[1px]"
                                      : "bg-zinc-950 border-zinc-500/50 border-[1px]"
                                  }`}
                                />
                              </div>
                              <p
                                className={`md:text-[15px] sm:text-[12.5px] text-[14px] text-normal  ${
                                  lightmode ? "font-normal" : "font-light"
                                } `}
                              >
                                {infoData?.description}
                              </p>
                              <div className="w-full flex-row-reverse flex my-1 gap-2">
                                <button
                                  type="submit"
                                  onClick={() => {
                                    setTimeout(() => {
                                      useModal.data?.refetcher();
                                      useModal.onClose();
                                    }, 1000);
                                  }}
                                  className={`px-3 py-2 flex rounded-full ${
                                    lightmode
                                      ? "bg-green-500 hover:bg-green-400 shadow-md shadow-zinc-950/20"
                                      : "bg-green-600 hover:bg-green-500"
                                  }   text-white font-normal text-xs transition-all ease-in-out`}
                                >
                                  Update
                                </button>
                                <button
                                  type="button"
                                  onClick={useModal.onClose}
                                  className={`px-3 py-2 flex rounded-full ${
                                    lightmode
                                      ? "bg-red-500 hover:bg-red-400 shadow-md shadow-zinc-950/20"
                                      : "bg-red-600 hover:bg-red-500"
                                  }   text-white font-normal text-xs transition-all ease-in-out`}
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MAIN DIALOG */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputModal;
