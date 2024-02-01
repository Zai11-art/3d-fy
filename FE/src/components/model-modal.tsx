import { Link, useNavigate } from "react-router-dom";

import Avatar from "./avatar";
import Divider from "./divider";
import {
  MdOutlineRemoveRedEye,
  MdOutlineThumbUp,
  MdClose,
  MdArrowForward,
} from "react-icons/md";
import useMode from "../hooks/state";
import useModelModal from "../hooks/use-model-modal";
import ViewerComponent from "./for-3d/viewer-component";
import { useMediaQuery } from "../hooks/use-media-query";
import { FaCommentAlt } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi";
import { Comment, Post } from "../types/types";
import CommentSection from "./comment-section";
import axios from "axios";
import { useEffect, useState } from "react";
import { dateConverter, dateReformat } from "../utils/utils";

const ModelModal = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modalState = useModelModal((state) => state.isOpen);
  const useModal = useModelModal();
  const md = useMediaQuery("(max-width: 768px)");
  const data = useModelModal((state) => state.data);
  const navigate = useNavigate();

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // event delegation
    if ((e.target as HTMLElement).closest(".modal-content")) return;
    e.stopPropagation();
    useModal.onClose();
  };

  return (
    <>
      {modalState && (
        <div onClick={handleModalClick} className="relative z-10">
          {/* FILTER AND MAIN DIALOG */}
          <div className="fixed inset-0  w-screen overflow-y-auto flex z-10 items-center justify-center p-5">
            <div className="bg-black w-screen h-screen absolute z-[5] opacity-80"></div>

            <div
              className={`modal-content xl:w-[1200px] lg:w-[90%] w-full md:h-[600px] h-[500px]  z-10 ${
                lightmode
                  ? "bg-gradient-gray-light text-black shadow-2xl shadow-black"
                  : "bg-gradient-gray text-white shadow-lg shadow-zinc-200/20 border-zinc-100/20"
              }  rounded-2xl gap-2 flex p-2 md:flex-row flex-col border-[1px] md:mt-[90px] mt-16`}
            >
              {/* MODEL VIEWER */}
              <div className="relative border-[1px] rounded-xl border-zinc-100/40 flex md:w-[70%] w-full md:h-full h-[300px] items-center justify-center ">
                {/* <ViewerComponent /> */}
                <div className="bottom-5 inset-x-0 absolute w-full flex items-center justify-center z-[200]">
                  <button
                    onClick={() => {
                      useModal.onClose();
                      navigate(`/post/${data?.id}`);
                    }}
                    className={`py-2 px-5 rounded-full ${
                      lightmode
                        ? "bg-gradient-to-r from-orange-500/70 to-orange-500 hover:bg-orange-500 shadow-slate-500/40 shadow-md text-white"
                        : "bg-gradient-to-r from-orange-500/50 to-orange-500 hover:bg-orange-300 border-[1px] border-orange-300"
                    }`}
                  >
                    View details Here
                  </button>
                </div>
              </div>

              {/* MAIN DIALOG */}
              <div
                className={`modal-content overflow-y-scroll  ${
                  lightmode ? "bg-slate-100" : "bg-zinc-800 "
                } md:w-[40%] shadow-inner shadow-black rounded-xl`}
              >
                <div className="p-4 w-full h-full flex flex-col">
                  <div className="flex gap-2 flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3  items-center justify-center">
                        <div className="flex flex-col gap-2">
                          <span className="md:text-2xl text-xl">
                            {data?.title}
                          </span>
                        </div>
                      </div>

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

                    <div className="flex items-center">
                      <Link
                        onClick={useModal.onClose}
                        to={`/${data?.userId}/profile`}
                        className="mr-2"
                      >
                        <Avatar url={data?.profileImage} />
                      </Link>
                      <div className="flex flex-col">
                        <span
                          className={`md:text-[12.5px] sm:text-[12px] text-xs ${
                            lightmode ? "text-slate-800" : "text-slate-300"
                          } `}
                        >
                          author: {data?.username}
                        </span>
                        <span
                          className={`md:text-[12.5px] sm:text-[12px] text-xs ${
                            lightmode ? "text-slate-800" : "text-slate-300"
                          } text-slate-300`}
                        >
                          published:{`${dateConverter(`${data?.createdAt}`)}`}
                        </span>
                      </div>
                    </div>

                    <Divider />

                    <div>
                      <span className="md:text-md text-[14px]">
                        Description:
                      </span>
                      <p className="md:text-sm sm:text-[12.5px] text-[11.5px] mt-2">
                        {data?.description}
                      </p>
                    </div>

                    <div className="gap-2 flex items-center md:mt-5 mt-2 ">
                      {/* LIKES */}
                      <Link
                        onClick={useModal.onClose}
                        to={`/post/${data?.id}`}
                        className={`group flex ${
                          lightmode
                            ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                            : "bg-black"
                        } px-2 md:p-1 p-[3px]  gap-1 rounded-md`}
                      >
                        <MdOutlineThumbUp
                          className={`group-hover:text-orange-500 md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                            lightmode ? "text-slate-900" : "text-slate-300"
                          }`}
                        />
                        <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                          {`${data?.likes.length}`}
                        </span>
                      </Link>

                      {/* COMMENT */}
                      <Link
                        onClick={useModal.onClose}
                        to={`/post/${data?.id}`}
                        className={`group flex ${
                          lightmode
                            ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                            : "bg-black"
                        } px-3 py-1 gap-1 rounded-md`}
                      >
                        <BiSolidComment
                          className={`group-hover:text-orange-500 md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                            lightmode ? "text-slate-900" : "text-slate-300"
                          } `}
                        />
                        <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                          {`${data?.comments.length}`}
                        </span>
                      </Link>

                      {/* VIEWS */}
                      <Link
                        onClick={useModal.onClose}
                        to={`/post/${data?.id}`}
                        className={`group flex ${
                          lightmode
                            ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                            : "bg-black"
                        } px-2 md:p-1 p-[3px]  gap-1 rounded-md`}
                      >
                        <MdOutlineRemoveRedEye
                          className={`group-hover:text-orange-500 md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                            lightmode ? "text-slate-900" : "text-slate-300"
                          }`}
                        />
                        <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                          {`${data?.views}`}
                        </span>
                      </Link>

                      {/* PLACE NO. OF VIEWS HERE */}
                    </div>

                    {/* TAGS SECTION */}
                    <div className="md:mt-5 mt-2">
                      <div
                        className={`flex flex-col md:text-sm text-xs ${
                          lightmode ? "text-black" : "text-slate-300"
                        } `}
                      >
                        <span>Tags:</span>
                        <div className="w-full h-full flex gap-2 mt-2">
                          <button
                            className={`text-[13px] text-normal rounded-full hover:underline`}
                          >
                            {data?.tags}
                          </button>
                        </div>
                      </div>
                    </div>

                    <Divider />
                    {/* COMMENTS */}

                    <div className="w-full h-[160px] flex items-center justify-center bg-black/40">
                      <button className="px-1 py-1 text-xs bg-orange-600 text-white rounded-full border-[1px] border-orange-200">
                        View details for comments
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModelModal;
