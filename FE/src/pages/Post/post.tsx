import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaCog, FaCommentAlt, FaExpandArrowsAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "../../components/avatar";
import Divider from "../../components/divider";
import TextCarousel from "../../components/text-carousel";
import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import Viewer from "../Viewer/Viewer";
import base from "/textures/food_apple_01_diff_4k.jpg";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck, FaX } from "react-icons/fa6";
import { CommentType, OnsubmitPropsType, Post } from "../../types/types";
import axios from "axios";
import {
  MdOutlineRemoveRedEye,
  MdOutlineThumbUp,
  MdThumbUpAlt,
} from "react-icons/md";
import { BiSend, BiSolidComment } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import * as yup from "yup";
import { Formik } from "formik";
import Loader from "../../components/loader";

const commentSchema = yup.object().shape({
  content: yup.string().notRequired().max(100),
});

const initialCommVal = {
  content: "",
};

// helpers
const textareaExtend = (e: React.FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = "auto";
  target.style.height = `${target.scrollHeight}px`;
};

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
  const token = useMode((state) => state.token);
  const user = useMode((state) => state.user);
  const lightmode = useMode((state) => state.isDarkMode);
  const [postData, setPostdata] = useState<Post>();
  console.log(postData);
  // maps
  const [isSelected, setSelected] = useState("Base");
  const [toggleBar, setToggleBar] = useState(false);

  // set hdris
  const [hdri, setHdri] = useState("apartment");
  console.log(hdri);

  // wireframe settings
  const [isWireFrameOn, setWireFrameOn] = useState(false);
  const [isNormalOn, setNormalOn] = useState(false);
  const [color, setColor] = useState("#ffffff");

  // form state
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  // open comment section
  const [toggleComment, setToggleComment] = useState(false);

  const getPost = async (postId: string | undefined) => {
    const post = await axios
      .get(`http://localhost:8080/posts/${postId}`)
      .then((res) => res.data);

    setPostdata(post);
  };
  const patchLike = async () => {
    try {
      const patchLike = await axios
        .patch(`http://localhost:8080/posts/${postId}/${user?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.data);

      if (patchLike) {
        getPost(postId);
      }
    } catch (error) {
      toast.error("Liking post failed.");
    }
  };
  const isLiked = postData?.likes.some((liker) => liker.id === user?.id);

  const comment = async (
    values: CommentType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const comment = await axios.post(
      `http://localhost:8080/posts/comment/${postId}/${user?.id}`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    getPost(postId);
    console.log(comment);
    setIsloading(true);

    if (!comment) {
      setIsloading(false);
      toast.error("Failed commenting.");
    } else {
      toast.success(`Commented.`);
    }

    onSubmitProps.resetForm();
  };

  const handleFormSubmitComm = async (
    values: CommentType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log(values);
    await comment(values, onSubmitProps);
  };

  // const {
  //   isError,
  //   data: postData,
  //   error,
  //   isPending,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["post"],
  //   queryFn: () => getPost(postId as string),
  // });

  // console.log(postData);

  // SECTION FOR FOLLOWING THE DIV

  return (
    <PageLayout>
      <div id="container" className="w-full h-full flex lg:px-12 px-5 pt-12">
        <div
          className={`flex lg:flex-row flex-col w-full h-full border-[1px] border-zinc-500/50 rounded-lg p-5 ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          } gap-7`}
        >
          {/* 3D VIEWER */}
          <div
            id="viewer"
            className="lg:w-[70%] w-full sticky lg:top-32 lg:h-[800px] md:h-[600px] h-[400px]  font-light text-normal border-[1px] border-zinc-500/50 rounded-lg"
          >
            <Viewer
              showLeva={false}
              wireframe={isWireFrameOn}
              normal={isNormalOn}
              color={color}
              hdri={hdri}
            />

            {/* SIDE BAR TOGGLE BUTTON */}
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

            {/* SIDEBAR */}
            <div
              className={`overflow-y-scroll absolute rounded-l-lg ${
                toggleBar
                  ? "z-[11] left-0 opacity-100"
                  : "z-[-2] left-[-20px] opacity-0"
              }  inset-y-0 md:w-[250px] w-[180px] h-full ${
                lightmode
                  ? "bg-zinc-100 text-black"
                  : "bg-zinc-950/90 text-white"
              } transition-all ease-in-out`}
            >
              <div>
                <div
                  className={`border-b-[1px] border-orange-400 flex w-full h-full items-center justify-between sticky top-0 ${
                    lightmode
                      ? "bg-zinc-100 text-black"
                      : "bg-zinc-950/90 text-white"
                  } p-3`}
                >
                  <div className="flex gap-1 items-center">
                    <FaCog />
                    <h1 className={`text-lg font-bold`}>Settings</h1>
                  </div>
                  <button
                    onClick={() => setToggleBar(false)}
                    className={`rounded-full p-2 border-[1px] border-zinc-500/50  hover:scale-[1.05] ${
                      lightmode
                        ? "bg-red-600 text-red-100 shadow-black shadow-2xl hover:bg-red-500"
                        : "bg-red-500 text-red-100 shadow-orange-500/10 shadow-2xl"
                    } transition-all ease-in-out `}
                  >
                    <AiOutlineClose className="font-bold text-red-100 text-md" />
                  </button>
                </div>
                <div className="flex flex-col p-3">
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
                            ? "bg-gradient-gray-light text-black shadow-zinc-950/20 shadow-md"
                            : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl "
                        } transition-all ease-in-out ${
                          isSelected === content.label && "border-orange-500"
                        }`}
                      >
                        <div className="w-full justify-between items-center flex">
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
                            ? "bg-gradient-gray-light text-black shadow-zinc-950/20 shadow-md"
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

                  {/* WIREFRAME MODE */}
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <h2 className="font-bold">Wireframe</h2>
                      <input
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="rounded-md w-6 h-5 "
                        type="color"
                      />
                    </div>
                    <div
                      className={`flex items-center gap-2 ${
                        lightmode
                          ? "bg-gradient-gray-light text-black shadow-zinc-950/20 shadow-md"
                          : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
                      } border-zinc-500/50 px-2 py-1 border-[1px]`}
                    >
                      <input
                        checked={isWireFrameOn}
                        onClick={() => setWireFrameOn(!isWireFrameOn)}
                        className="rounded-md w-4 h-4 "
                        type="checkbox"
                      />
                      <span className="text-sm">Enable</span>
                    </div>
                  </div>

                  <Divider />

                  {/* NORMAL MODE */}
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <h2 className="font-bold">Normal</h2>
                    </div>
                    <div
                      className={`flex items-center gap-2 ${
                        lightmode
                          ? "bg-gradient-gray-light text-black shadow-zinc-950/20 shadow-md"
                          : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
                      } border-zinc-500/50 px-2 py-1 border-[1px]`}
                    >
                      <input
                        checked={isNormalOn}
                        onClick={() => setNormalOn(!isNormalOn)}
                        className="rounded-md w-4 h-4 "
                        type="checkbox"
                      />
                      <span className="text-sm">Enable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* s */}
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

            {/* DASHBOARD BOTTOM*/}
            <div
              className={`absolute flex items-center justify-center inset-x-0 bottom-0 h-[60px] bg-zinc-950/10   rounded-b-lg`}
            >
              <div className="flex w-[200px]  items-center justify-center ">
                <TextCarousel data={hdris} setHdri={setHdri} />
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

            {/* MONITOR STATS */}
            <div
              className={`p-2 absolute bottom-0 right-0 rounded-br-lg  h-[60px] border-[1px] border-zinc-500/50 ${
                lightmode
                  ? "bg-zinc-200 text-black font-normal"
                  : "bg-zinc-950 text-white "
              } `}
            >
              <div className="w-full flex justify-between h-full flex-col text-sm ">
                <span>Verts:</span>
                <span>4016</span>
              </div>
            </div>
          </div>

          {/* FULL DETAILS */}
          <div
            className={`lg:w-[30%] w-[100%]  h-full flex  flex-col gap-2 p-3 shadow-inner shadow-zinc-950/50 rounded-xl ${
              lightmode ? "bg-slate-200" : "bg-zinc-900 "
            } ${!postData && "items-center"}`}
          >
            {!postData ? (
              <Loader />
            ) : (
              <>
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

                <div className="flex flex-col gap-8 ">
                  {/* DESCRIPTION */}
                  <div className="flex flex-col gap-2 text-normal">
                    <h1 className="text-lg">Description</h1>
                    <p
                      className={`text-[14.5px] ${
                        lightmode ? "font-normal" : "font-light"
                      } `}
                    >
                      {postData?.description}
                    </p>
                  </div>

                  {/* LIKES, COMMS AND VIEWS */}
                  <div className="w-full flex gap-2 items-center text-normal">
                    {/* LIKE COUNT */}
                    <button
                      onClick={() => patchLike()}
                      className={`flex ${
                        lightmode
                          ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                          : "bg-black"
                      } px-3 py-1  gap-1 rounded-md`}
                    >
                      <MdOutlineThumbUp
                        className={`md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                          lightmode ? "text-slate-900" : "text-slate-300"
                        }`}
                      />
                      <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                        {`${postData?.likes.length}`}
                      </span>
                    </button>
                    {/* COMMENT COUNT */}
                    <div
                      className={`flex ${
                        lightmode
                          ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                          : "bg-black"
                      } px-3 py-1 gap-1 rounded-md`}
                    >
                      <BiSolidComment
                        className={`md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                          lightmode ? "text-slate-900" : "text-slate-300"
                        } `}
                      />
                      <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                        {`${postData?.comments.length}`}
                      </span>
                    </div>
                    {/* VIEWS COUNG */}
                    <div
                      className={`flex ${
                        lightmode
                          ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                          : "bg-black"
                      } px-3 py-1 gap-1 rounded-md`}
                    >
                      <MdOutlineRemoveRedEye
                        className={`md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                          lightmode ? "text-slate-900" : "text-slate-300"
                        } `}
                      />
                      <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                        {`${postData?.views}`}
                      </span>
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="flex gap-2 flex-col text-normal">
                    <span>Tags</span>
                    <span className="text-sm">{postData?.tags}</span>
                  </div>

                  {/* LIKE COMMENT BUTTONS */}
                  <div className="w-full flex gap-1">
                    <button
                      onClick={() => {
                        patchLike();
                        !isLiked && toast.success("Post Liked.");
                        isLiked && toast.success("Post Unliked.");
                      }}
                      className={`${
                        isLiked && "bg-orange-700"
                      } text-white w-full text-sm transition-all ease-in-out hover:bg-orange-400 w- gap-1 ${
                        lightmode ? "bg-orange-600" : "bg-orange-500"
                      }  flex items-center justify-center px-1 lg:py-[5px] py-[7px]  rounded-l-md`}
                    >
                      {isLiked ? (
                        <>
                          <MdOutlineThumbUp className="text-lg" />
                          Liked
                        </>
                      ) : (
                        <>
                          <MdThumbUpAlt className="text-lg" />
                          Like
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setToggleComment(!toggleComment)}
                      className={`text-white w-full text-sm transition-all ease-in-out hover:bg-orange-400 w- gap-1 ${
                        lightmode ? "bg-orange-600" : "bg-orange-500"
                      } flex items-center justify-center px-1  lg:py-[5px] py-[7px]   rounded-r-md`}
                    >
                      <BiSolidComment className="text-lg" />
                      Comment
                    </button>
                  </div>
                </div>
                <Divider />

                {toggleComment && (
                  <div className="flex flex-col gap-4 text-normal w-full">
                    <div className="w-full h-full relative overflow-y-auto">
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
                              <h1 className="text-lg">Comments</h1>
                              {errors.content && touched.content && (
                                <div className="text-red-500 text-xs">
                                  {errors.content}
                                </div>
                              )}
                            </div>

                            <div className="w-full flex gap-4">
                              <textarea
                                id="content"
                                name="content"
                                placeholder="Comment here..."
                                rows={2}
                                onInput={textareaExtend}
                                value={values.content}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full h-full flex p-2 rounded-md focus:outline-none focus:border-amber-500 focus:ring-[1.5px] focus:ring-amber-500 ${
                                  lightmode
                                    ? "bg-zinc-100 border-zinc-500/50 border-[1px]"
                                    : "bg-zinc-950 border-zinc-500/50 border-[1px]"
                                }`}
                              />
                              <button
                                type="submit"
                                className=" right-2 inset-y-0"
                              >
                                <RiSendPlane2Fill
                                  className={`text-2xl text-orange-500 hover:opacity-60 transition-all ease-in-out`}
                                />
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>

                      <Divider />
                      <div className="gap-2 overflow-y-auto flex flex-col h-full">
                        {postData?.comments.map((comment, i) => (
                          <div key={i} className={`flex  h-full p-1 mt-2 `}>
                            <div
                              className={`flex h-full border-zinc-500/50 border-[1px] ${
                                lightmode
                                  ? "bg-zinc-100 shadow-md"
                                  : "bg-zinc-950 shadow-lg shadow-black"
                              }  p-4  justify-center rounded-xl gap-2 
                        `}
                            >
                              <Avatar url={comment.userImage} />
                              <div className={` flex flex-col  gap-2 `}>
                                <div className="flex items-center gap-2 ">
                                  <span className="text-[14.5px]">
                                    {comment.username}
                                  </span>
                                  <span className="text-xs ">
                                    {comment.createdAt}
                                    {/* {comment.content.length} */}
                                  </span>
                                </div>
                                <p
                                  style={{ overflowWrap: "anywhere" }}
                                  className={`${
                                    lightmode ? "font-normal" : "font-light"
                                  } flex text-sm  `}
                                >
                                  {comment.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Post;
