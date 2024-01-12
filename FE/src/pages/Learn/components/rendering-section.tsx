import { MdArrowDownward } from "react-icons/md";
import Divider from "../../../components/divider";
import { sectionRendering } from "../../../data/learnpage-data";
import useMode from "../../../hooks/state";
import useInfoModal from "../../../hooks/use-info-modal";
import useScrollTo from "../../../hooks/use-scroll-to-el";

const RenderingSection = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modal = useInfoModal();

  const [shouldScrollToRender, setShouldScrollToRender] = useScrollTo();
  return (
    <>
      <div
        className={`w-full ${
          lightmode ? "bg-slate-200" : "bg-[#0f0f0f]"
        }  md:h-[550px] h-[700px] flex md:flex-row-reverse flex-col items-center justify-around`}
      >
        <div className="flex lg:w-[40%] md:w-[50%]  flex-col mt-12 mx-5">
          <h1 className="xl:text-6xl lg:text-6xl md:text-6xl text-3xl">
            Render that image, export it.
          </h1>
          <p className="mt-2 ">
            This is basically photography. New to this? we'll show you how it
            works.
          </p>
          <button
            onClick={() => setShouldScrollToRender(true)}
            className="text-white bg-gradient-to-r transition-all ease-in-out from-10% to-90% from-yellow-600 to-amber-600 flex w-[150px] text-sm items-center justify-center mt-5 rounded-2xl p-2 "
          >
            <span>Continue </span>
            <MdArrowDownward className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="blob-renderSect xl:h-[500px] xl:w-[500px] lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px] sm:h-[300px] sm:w-[300px]  h-[250px] w-[250px] md:mt-0 mt-7"></div>
      </div>

      <div
        //   @ts-ignore
        ref={shouldScrollToRender}
        className={`h-full w-full flex xl:flex-col lg:flex-col md:flex-col flex-col items-center justify-around gap-16 py-[100px]  `}
      >
        <div className=" flex-col xl:w-[1100px] md:w-[100%] px-5 w-full h-full flex items-center justify-around gap-12">
          {sectionRendering.map((content, i) => (
            <div key={i} className="w-full h-full my-3">
              <div
                className={`w-full flex items-center justify-center ${
                  lightmode
                    ? "bg-zinc-200 shadow-lg shadow-zinc-950/20"
                    : "bg-zinc-900 shadow-lg "
                }  rounded-3xl border-[1px] border-orange-300/30 md:h-[400px] h-[700px] p-5 gap-12`}
              >
                <div
                  className={`w-full h-full ${
                    lightmode
                      ? "shadow-lg bg-gradient-gray-light shadow-zinc-950/20"
                      : "bg-gradient-gray border-zinc-700 shadow-black shadow-xl"
                  }  rounded-3xl border-[1px] flex ${
                    content.reverse
                  } py-6 px-5 gap-5 justify-around items-center`}
                >
                  <div
                    className={`w-[100%] h-full ${
                      lightmode
                        ? "bg-gradient-gray-light shadow-lg shadow-zinc-950/30"
                        : "bg-gradient-gray border-zinc-700 shadow-xl shadow-black"
                    }  rounded-3xl border-[1px] `}
                  ></div>

                  <div
                    className={`w-[100%] h-full flex gap-1 flex-col ${
                      lightmode
                        ? "bg-zinc-100 shadow-inner shadow-zinc-950/50"
                        : "bg-zinc-900 border-zinc-900 shadow-zinc-950"
                    }  rounded-3xl border-[1px] shadow-inner `}
                  >
                    <div className="w-full h-full flex flex-wrap px-3 py-5 ">
                      {content?.settings.map((btn, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            modal.onOpen(btn.details);
                          }}
                          className={`${btn.style} hover:scale-[1.1] transition-all ease-in-out text-white text-normal font-normal rounded-xl h-5 p-1 py-0 lg:text-[14px] md:text-[12px] text-sm m-1 px-2 flex`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                    <div className="mx-4">
                      <Divider />
                    </div>
                    <div className="w-full h-full p-2 flex items-center justify-center">
                      <div
                        className={`rounded-full shadow-inner ${
                          lightmode ? "shadow-zinc-950/50" : "shadow-black"
                        }  w-full h-[80px]`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full mt-5">
                <h1 className={`text-2xl ${content.style}`}>{content.title}</h1>
                <Divider />
                <p
                  className={`text-normal text-justify text-[15px]  mt-4 ${
                    lightmode
                      ? "text-black font-normal"
                      : "text-white font-light"
                  }`}
                >
                  {content.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RenderingSection;
