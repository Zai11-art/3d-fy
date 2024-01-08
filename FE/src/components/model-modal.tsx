import { Link } from "react-router-dom";

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

const relatedPostsImages = [
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
  {
    imageUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
  },
];

const ModelModal = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modalState = useModelModal((state) => state.isOpen);
  const useModal = useModelModal();
  const md = useMediaQuery("(max-width: 768px)");
  const data = useModelModal((state) => state.data);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // event delegation
    if ((e.target as HTMLElement).closest(".modal-content")) return;
    e.stopPropagation();
    useModal.onClose();
  };

  console.log("debug here");
  console.log(data);

  return (
    <>
      {modalState && (
        <div onClick={handleModalClick} className="relative z-10">
          {/* FILTER AND MAIN DIALOG */}
          <div className="fixed inset-0  w-screen overflow-y-auto flex z-10 items-center justify-center p-5">
            <div className="bg-black w-screen h-screen absolute z-[5] opacity-80"></div>

            <div
              className={`modal-content md:w-[1200px] w-full p-4 md:h-[600px] h-[500px]  z-10 ${
                lightmode
                  ? "bg-gradient-gray-light text-black shadow-2xl shadow-black"
                  : "bg-gradient-gray text-white shadow-lg shadow-zinc-200/20 border-zinc-100/20"
              }  rounded-2xl gap-2 flex p-2 md:flex-row flex-col border-[1px] md:mt-[90px] mt-16`}
            >
              {/* MODEL VIEWER */}
              <div className="border-[1px] rounded-xl border-zinc-100/40 flex md:w-[60%] w-full md:h-full h-[300px] items-center justify-center ">
                <ViewerComponent />
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
                        <span className="md:text-2xl text-xl">
                          {data?.title}
                        </span>
                        <Link
                          onClick={() => useModal.onClose()}
                          to={`/post/${data?.id}`}
                          className={`text-xs flex items-center justify-center ${
                            lightmode
                              ? "bg-gradient-to-r from-amber-900/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md text-white"
                              : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-300"
                          } px-[5px] py-[6px] rounded-xl`}
                        >
                          View more
                        </Link>
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
                          date published: {data?.createdAt}
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
                      <div
                        className={`flex ${
                          lightmode
                            ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                            : "bg-black"
                        } px-2 md:p-1 p-[3px]  gap-1 rounded-md`}
                      >
                        <MdOutlineRemoveRedEye
                          className={`md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                            lightmode ? "text-slate-900" : "text-slate-300"
                          }`}
                        />
                        <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                          {`${data?.views}`}
                        </span>
                      </div>
                      <div
                        className={`flex ${
                          lightmode
                            ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                            : "bg-black"
                        } px-2 md:p-1 p-[3px]  gap-1 rounded-md`}
                      >
                        <MdOutlineThumbUp
                          className={`md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                            lightmode ? "text-slate-900" : "text-slate-300"
                          }`}
                        />
                        <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                          {`${data?.likes}`}
                        </span>
                      </div>
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

                    {/* RELATED POSTS SECTION */}
                    <div className="flex md:justify-none justify-between md:flex-col flex-row gap-2 mb-2">
                      <h1 className="md:text-lg sm:text-md text-sm ">
                        Related Posts
                      </h1>

                      {md ? (
                        <Link className="md:hidden block" to={"/"}>
                          <button
                            className={`text-xs px-1 flex items-center border-[1px] border-yellow-200/40 rounded-md font-normal transition-all ease-in-out
                            ${
                              lightmode
                                ? "bg-gradient-to-r from-amber-900/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md text-white"
                                : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-300"
                            }`}
                          >
                            Check out
                            <MdArrowForward className="ml-1 h-5 " />
                          </button>
                        </Link>
                      ) : (
                        <div className="relative">
                          <div
                            className={` hidden w-full overflow-x-auto md:flex  gap-1  p-3 ${
                              lightmode
                                ? "bg-slate-200 shadow-inner shadow-slate-900/40 "
                                : "bg-black shadow-inner "
                            }  rounded-lg shadow-inner `}
                          >
                            {relatedPostsImages.map((img, i) => (
                              <img
                                className="w-24 h-24 rounded-lg"
                                key={i}
                                src={img.imageUrl}
                                alt=""
                              />
                            ))}
                          </div>
                          <div
                            className={`absolute top-0 right-0 w-[30%] h-full flex ${
                              lightmode
                                ? "gradient-carousel-light"
                                : "gradient-carousel"
                            } `}
                          ></div>
                        </div>
                      )}
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
