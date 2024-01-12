import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdClose } from "react-icons/md";

import Divider from "./divider";
import useMode from "../hooks/state";
import useInfoModal from "../hooks/use-info-modal";

const InfoModal = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modalState = useInfoModal((state) => state.isOpen);
  const useModal = useInfoModal();
  const infoData = useInfoModal().data;

  const handleModalClick = (e: {
    target: { closest: (arg0: string) => any };
    stopPropagation: () => void;
  }) => {
    // event delegation
    if (e.target.closest(".modal-content")) return;
    e.stopPropagation();
    useModal.onClose();
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
            <div
              className={`w-[1200px] md:h-[600px] h-[525px] mx-6 z-10 ${
                lightmode
                  ? "bg-gradient-gray-light text-black border-[1px] border-white shadow-2xl shadow-black"
                  : "bg-gradient-gray text-white  shadow-lg border-white shadow-zinc-200/20 border-zinc-100/20"
              }  rounded-2xl gap-4 flex p-4 md:flex-row flex-col border-[1px] `}
            >
              {/* FILTER */}
              <div className="flex md:w-[50%] w-full h-full items-center justify-center modal-content">
                <div
                  className={`w-full h-full flex items-center justify-center p-4 ${
                    lightmode
                      ? "bg-gradient-gray-light shadow-md shadow-zinc-950/60 border-[1px] border-white"
                      : "bg-gradient-gray shadow-md shadow-zinc-950/60 border-[1px] border-zinc-100/20"
                  } rounded-xl   p-2`}
                >
                  <LazyLoadImage
                    src={infoData?.imageUrl}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* MAIN DIALOG */}

              <div
                className={`modal-content overflow-y-scroll  ${
                  lightmode ? "bg-slate-100" : "bg-zinc-800 "
                } md:w-[50%]  h-full shadow-inner shadow-black rounded-xl 
                `}
              >
                <div className="p-4 w-full h-full flex flex-col">
                  <div className="flex gap-2 flex-col ">
                    <div className="flex items-center justify-between">
                      <span className="md:text-2xl text-xl">
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

                    <div>
                      <span className="md:text-md text-[14px]">
                        Description:
                      </span>
                      <p
                        className={`md:text-sm sm:text-[12.5px] text-[11.5px] mt-2 text-normal text-justify ${
                          lightmode ? "font-normal" : "font-light"
                        } `}
                      >
                        {infoData?.description}
                      </p>
                    </div>

                    <Divider />

                    {/* RELATED POSTS SECTION */}
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

export default InfoModal;
