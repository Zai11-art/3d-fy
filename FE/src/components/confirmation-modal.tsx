import { MdClose } from "react-icons/md";

import Divider from "./divider";
import useMode from "../hooks/state";
import useConfirmationModal from "../hooks/use-confirmation-modal";

const ConfirmationModal = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modalState = useConfirmationModal((state) => state.isOpen);
  const useModal = useConfirmationModal();
  const infoData = useConfirmationModal().data;

  console.log(modalState);

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
              className={`w-[600px] md:h-[250px] h-[250px] mx-6 z-10 ${
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
                    <p
                      className={`md:text-[15px] sm:text-[12.5px] text-[14px] mt-2 text-normal  ${
                        lightmode ? "font-normal" : "font-light"
                      } `}
                    >
                      {infoData?.description}
                    </p>

                    <div className="w-full flex-row-reverse flex my-1 gap-2">
                      <button
                        onClick={useModal.onClose}
                        className={`px-3 py-2 flex rounded-full ${
                          lightmode
                            ? "bg-red-500 hover:bg-red-400 shadow-md shadow-zinc-950/20"
                            : "bg-red-600 hover:bg-red-500"
                        }   text-white font-normal text-xs transition-all ease-in-out`}
                      >
                        Cancel
                      </button>
                      <button
                        className={`px-3 py-2 flex rounded-full ${
                          lightmode
                            ? "bg-green-500 hover:bg-green-400 shadow-md shadow-zinc-950/20"
                            : "bg-green-600 hover:bg-green-500"
                        }   text-white font-normal text-xs transition-all ease-in-out`}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN DIALOG */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
