import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaCog, FaExpandArrowsAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/post";
import Avatar from "../../components/avatar";
import Divider from "../../components/divider";
import ModelViewer from "../../components/model-viewer";
import TextCarousel from "../../components/text-carousel";
import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import Viewer from "../Viewer/Viewer";
import base from "/textures/food_apple_01_diff_4k.jpg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck, FaX } from "react-icons/fa6";

const hdris = [
  "apartment",
  "city",
  "dawn",
  "forest",
  "lobby",
  "night",
  "park",
  "studio",
  "sunset",
  "warehouse",
];

const Post = () => {
  const { postId } = useParams();
  const lightmode = useMode((state) => state.isDarkMode);
  // maps
  const [isSelected, setSelected] = useState("Base");
  const [toggleBar, setToggleBar] = useState(false);

  const {
    isError,
    data: postData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(postId as string),
  });

  console.log(postData);

  return (
    <PageLayout>
      <div className="w-full h-full flex lg:px-12 px-5 pt-12">
        <div
          className={`flex lg:flex-row flex-col w-full h-full border-[1px] border-zinc-500/50 rounded-lg p-5 ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          } gap-7`}
        >
          {/* 3D VIEWER */}
          <div className="lg:w-[70%] w-full lg:h-[800px] h-[600px] relative font-light text-normal border-[1px] border-zinc-500/50 rounded-lg">
            <Viewer showLeva={false} />

            {!toggleBar && (
              <button
                onClick={() => setToggleBar(!toggleBar)}
                className={`absolute left-4 top-4 rounded-full p-2 border-[1px] border-zinc-500/50  hover:scale-[1.05] ${
                  lightmode
                    ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
                    : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
                } transition-all ease-in-out z-[10]`}
              >
                <FaCog />
              </button>
            )}

            <div
              className={`p-3 overflow-y-scroll absolute rounded-l-lg ${
                toggleBar
                  ? "z-[11] left-0 opacity-100"
                  : "z-[-2] left-[-20px] opacity-0"
              }  inset-y-0 md:w-[250px] w-[180px] h-full ${
                lightmode ? "bg-zinc-100" : "bg-zinc-950/90"
              } transition-all ease-in-out`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex gap-1 items-center">
                  <FaCog />
                  <h1 className="text-lg font-bold">Settings</h1>
                </div>
                <button
                  onClick={() => setToggleBar(false)}
                  className={` rounded-full p-2 border-[1px] border-zinc-500/50  hover:scale-[1.05] ${
                    lightmode
                      ? "bg-gradient-gray-light text-red-500 shadow-black shadow-2xl hover:bg-red-500"
                      : "bg-gradient-gray text-red-500 shadow-orange-500/10 shadow-2xl"
                  } transition-all ease-in-out `}
                >
                  <AiOutlineClose className="font-bold" />
                </button>
              </div>
              <Divider />

              {/* MAPS */}
              <div className="flex flex-col gap-3">
                <h2 className="font-bold">Maps</h2>
                {[
                  { label: "Base", imgUrl: base },
                  { label: "Normal", imgUrl: "" },
                  { label: "Metallic", imgUrl: "" },
                  { label: "Specular", imgUrl: "" },
                  { label: "Roughness", imgUrl: "" },
                  { label: "Displacement", imgUrl: "" },
                ].map((content, i) => (
                  <div
                    key={i}
                    onClick={() => setSelected(content.label)}
                    className={`flex flex-col gap-2 border-[1px] border-zinc-500/50 hover:border-zinc-500 rounded-md px-2 py-1 ${
                      lightmode
                        ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
                        : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl "
                    } transition-all ease-in-out ${
                      isSelected === content.label && "border-orange-500"
                    }`}
                  >
                    <div className="w-full justify-between flex">
                      <span
                        className={`text-sm ${
                          lightmode ? "font-normal" : "font-light"
                        } `}
                      >
                        {content.label}
                      </span>
                      {content.imgUrl ? (
                        <FaCheck className="text-sm text-green-500" />
                      ) : (
                        <FaX className="text-sm text-red-500" />
                      )}
                    </div>
                    {isSelected === content.label && (
                      <div className="p-1 border-zinc-500/50 border-[1px] rounded-md">
                        {content.imgUrl ? (
                          <img src={content.imgUrl} className="" />
                        ) : (
                          <div className="w-full h-32 text-xs font-light flex items-center justify-center text-center">
                            No {content.label} map available
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Divider />

              {/* MATCAPS */}
              <div className="flex flex-col gap-3">
                <h2 className="font-bold">MatCaps</h2>
                {[
                  {
                    label: "Clay",
                    imgUrl:
                      "https://img.freepik.com/free-photo/stucco-texture-light-color_1194-7686.jpg",
                  },
                  {
                    label: "Metal",
                    imgUrl:
                      "https://img.freepik.com/free-photo/dirty-metal-texture_1048-4784.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704758400&semt=ais",
                  },
                  {
                    label: "Rocky",
                    imgUrl:
                      "https://img.freepik.com/premium-photo/background-texture-spots-green-moss-natural-rock-surface_533998-4921.jpg",
                  },
                  {
                    label: "Rusty",
                    imgUrl:
                      "https://www.textures4photoshop.com/tex/thumbs/rust-texture-for-photoshop-thumb26.jpg",
                  },
                ].map((content, i) => (
                  <div
                    key={i}
                    onClick={() => setSelected(content.label)}
                    className={`flex flex-col gap-2 border-[1px] border-zinc-500/50 hover:border-zinc-500 rounded-md px-2 py-1 ${
                      lightmode
                        ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
                        : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
                    } transition-all ease-in-out ${
                      isSelected === content.label && "border-orange-500"
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        lightmode ? "font-normal" : "font-light"
                      } `}
                    >
                      {content.label}
                    </span>
                    {isSelected === content.label && (
                      <div className="p-1 border-zinc-500/50 border-[1px] rounded-md">
                        {content.imgUrl ? (
                          <img src={content.imgUrl} className="" />
                        ) : (
                          <div className="w-full h-32 text-xs font-light flex items-center justify-center text-center">
                            No {content.label} map available
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Divider />

              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <h2 className="font-bold">Wireframe</h2>
                  <input className="rounded-md w-6 h-5 " type="color" />
                </div>
                <div className="flex items-center gap-2">
                  <input className="rounded-md w-4 h-4 " type="checkbox" />
                  <span className="text-sm">Enable</span>
                </div>
              </div>
            </div>

            {/*  FULL SCREEN  BUTTON */}
            <button
              className={`absolute right-4 top-4 rounded-full p-2 border-[1px] border-zinc-500/50  hover:scale-[1.05] ${
                lightmode
                  ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
                  : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
              } transition-all ease-in-out`}
            >
              <FaExpandArrowsAlt />
            </button>

            {/* DASHBOARD */}
            <div
              className={`absolute flex items-center justify-center inset-x-0 bottom-0 h-[60px] bg-zinc-950/10   rounded-b-lg`}
            >
              <div className="flex w-[200px]  items-center justify-center ">
                <TextCarousel data={hdris} />
              </div>
            </div>

            {/* DASHBOARD TOP*/}
            <div className="absolute flex items-center justify-center inset-x-0 top-0">
              <div
                className={`flex w-[150px] h-full items-center justify-center ${
                  lightmode
                    ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
                    : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
                } p-1 rounded-b-xl border-[1px] border-zinc-500/50`}
              >
                <h1
                  className={`text-sm text-center ${
                    lightmode ? "font-normal" : "font-light"
                  } `}
                >
                  {isSelected} mode
                </h1>
              </div>
            </div>
          </div>

          {/* FULL DETAILS */}
          <div
            className={`lg:w-[30%] w-[100%] h-full flex flex-col gap-3 p-3 shadow-inner shadow-zinc-950/50 rounded-xl ${
              lightmode ? "bg-slate-200" : "bg-zinc-900 "
            }`}
          >
            <div>
              <h1 className="text-2xl">{postData?.title}</h1>
            </div>
            <Divider />

            <div className="flex w-full  justify-between">
              <div className="flex items-center gap-2 justify-center">
                <Avatar url={postData?.profileImage} />
                <div className="flex flex-col">
                  <span>{postData?.username}</span>
                  <span className="text-sm">{postData?.tag}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">
                  Published at: {postData?.createdAt}
                </span>
              </div>
            </div>
            <Divider />

            <div className="flex flex-col gap-1">
              <h2>Description</h2>
              <p className="text-sm">{postData?.description}</p>
              <div className="w-full flex gap-2 items-center justify-between">
                <div className="flex flex-col">
                  <span>likes</span>
                  <span>{`${postData?.likes}`}</span>
                </div>
                <div className="flex flex-col">
                  <span>views</span>
                  <span>{`${postData?.views}`}</span>
                </div>
              </div>
              <div className="flex flex">
                <span>tags</span>
                <span>{postData?.tags}</span>
              </div>
              <div className="w-full flex gap-2">
                <button className="w-full flex items-center justify-center bg-orange-500">
                  Like
                </button>
                <button className="w-full flex items-center justify-center bg-orange-500">
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Post;
