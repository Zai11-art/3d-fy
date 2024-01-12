import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import {
  sectionTexturing,
  sectionTexturingSoftware,
} from "../../../data/learnpage-data";
import useMode from "../../../hooks/state";
import useInfoModal from "../../../hooks/use-info-modal";
import useScrollTo from "../../../hooks/use-scroll-to-el";
import texturePaintingGif from "../../../assets/texturePainting.gif";

const TexturingSection = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modal = useInfoModal();

  const [shouldScrollToTexture, setShouldScrollToTexture] = useScrollTo();

  return (
    <>
      {/* HERO SECTION */}
      <div
        className={`w-full  ${
          lightmode ? "bg-slate-200" : "bg-[#0f0f0f]"
        }  md:h-[1000px] h-[100%] flex md:flex-row-reverse flex-col items-center justify-around py-[50px]`}
      >
        <div className="w-full h-full items-center flex flex-col mb-16">
          <div className="w-full px-4 h-[250px] flex items-center justify-center">
            <div
              className={`flex flex-col md:text-[40px] text-[30px] ${
                lightmode ? "text-black" : "text-white"
              }  text-center`}
            >
              <span>
                Texturing your creation. Give life to your model through
              </span>
              <span>
                <TypeAnimation
                  className=" text-orange-400"
                  sequence={[
                    "UV unwrapping.", // Types 'One'
                    1000 * 2, // Waits 1s
                    "Texture Painting.", // Deletes 'One' and types 'Two'
                    2000 * 2, // Waits 2s
                    "Material nodes.", // Types 'Three' without deleting 'Two'
                    2000 * 2, // Waits 2s
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </div>
          </div>

          {/* INFO SECTION */}
          <div
            className={`xl:w-[1250px] lg:w-[1000px] w-[95%]  grid md:grid-cols-3 mt-12 grid-cols-2 gap-6 h-[650px] ${
              lightmode
                ? "glassmorphism-light shadow-inner shadow-slate-900/50"
                : "bg-[#0a0a0a] rounded-2xl shadow-inner shadow-orange-400/20"
            }  px-5 py-5 mx-12`}
          >
            {sectionTexturing.map((card, i) => (
              <div
                key={i}
                onClick={() => modal.onOpen(card.details)}
                className={`flex cursor-pointer hover:scale-[1.01] transition-all ease-in-out items-center justify-center ${
                  lightmode
                    ? "glassmorphism-light shadow-lg shadow-slate-900/50"
                    : "glassmorphism"
                }  ${card.style}`}
              >
                <img
                  className={`${
                    lightmode
                      ? "hover:opacity-100 opacity-[87.5%]"
                      : "hover:opacity-90 opacity-20"
                  } absolute object-cover w-full h-full rounded-xl transition-all ease-in-out `}
                  src={card.imageUrl}
                  alt=""
                />
                <span
                  className={`${
                    lightmode
                      ? `bg-slate-200 ${card.textColorLight}`
                      : `bg-slate-950 ${card.textColor}`
                  } flex items-center  justify-center text-center xl:text-sm lg:text-sm md:text-sm sm:text-xs text-[12px] rounded-lg px-[4px] shadow-md shadow-slate-900/50 py-2 absolute z-[20]`}
                >
                  {card.title}
                </span>
                <div
                  className={`${card.colorBanner} absolute h-3 w-full bottom-0 rounded-b-xl opacity-90`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`h-full w-full flex xl:flex-row lg:flex-col md:flex-col flex-col items-center justify-center gap-6 py-[100px] md:px-0 px-5 `}
      >
        <div
          className={`lg:w-[600px] w-[95%] xl:ml-5 lg:ml-0 md:ml-0 sm:ml-0 ml-0 h-[700px] ${
            lightmode
              ? "glassmorphism-light shadow-lg shadow-slate-900/30 text-slate-900"
              : "glassmorphism text-slate-300 shadow-orange-500/10 shadow-2xl"
          } flex flex-col `}
        >
          <img
            src={texturePaintingGif}
            className="flex w-full object-cover h-[500px] opacity-90 rounded-t-2xl"
            alt=""
          />
          <div className="w-full px-7 pt-7">
            <h1 className="text-2xl ">
              <span
                className={`${
                  lightmode ? "text-black" : "text-white"
                }  font-normal  mr-1`}
              >
                Texturing models
              </span>
              <p
                className={`text-normal ${
                  lightmode
                    ? "text-black  font-normal"
                    : "text-white  font-light"
                }  text-sm mt-2`}
              >
                When it comes to texturing models. There are different methods.
                Texture painting and uv unwrapping are one of the easier and
                faster methods. Depending on your goal, different methods can
                fit your style ;).
              </p>
            </h1>
          </div>
        </div>

        <div
          className={`xl:mr-5 lg:mr-0 md:mr-0 sm:mr-0 mr-0 lg:w-[600px] shadow-xl w-[95%] flex flex-col gap-5 h-[700px] md:mb-0 mb-[100px]   `}
        >
          <div
            className={`w-full h-[800px] rounded-3xl ${
              lightmode
                ? "glassmorphism-light shadow-slate-900/20 shadow-lg"
                : "glassmorphism shadow-orange-500/10 shadow-2xl"
            } flex items-center justify-center`}
          >
            <div className="w-[60%] h-full  rounded-l-2xl z-20 shadow-[#0000002f] shadow-lg">
              {/* <img src="" className="w-full h-12" alt="" /> */}
              <div className="p-8">
                <span className="text-2xl mb-2 inline-block">Albedo</span>
                <p
                  className={`text-normal md:text-[14.5px] text-[13px] font-light ${
                    lightmode
                      ? "text-black  font-normal"
                      : "text-white  font-light"
                  }`}
                >
                  An albedo map in 3D graphics is a texture map that represents
                  the base color of a surface, determining how it reflects light
                  without considering shading or lighting effects.
                </p>
              </div>
              <div className="flex  items-center justify-center">
                <div className="md:w-[84%] w-[80%] md:h-[175px] h-[150px] mb-[25px] glassmorphism text-center flex items-center justify-center">
                  map image texture here
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col items-center md:justify-around justify-center gap-12 rounded-r-2xl ${
                lightmode ? "bg-neutral-200" : " bg-[#0e0e0e]"
              } w-[40%] h-full p-4`}
            >
              <div className="md:w-[150px] w-[90%] text-xs text-center glassmorphism h-[150px] flex items-center justify-center">
                material image here
              </div>
              <div className="grid grid-cols-1 gap-y-4">
                {[
                  "Diffuse",
                  "Roughness",
                  "Metallic",
                  "Roughness",
                  "Displacement",
                  "Normal",
                ].map((box, i) => (
                  <button
                    key={i}
                    className={`md:w-[150px] w-[100%] px-2 h-[25px] ${
                      lightmode ? "border-[1px] border-neutral-400/50" : ""
                    }  text-xs glassmorphism flex items-center justify-center`}
                  >
                    {box}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`w-full  h-[350px] rounded-3xl md:p-0  p-3 ${
              lightmode
                ? "glassmorphism-light shadow-slate-900/20 shadow-lg"
                : "glassmorphism shadow-orange-500/10 shadow-2xl"
            } flex flex-col items-center justify-center gap-4`}
          >
            <h1 className="md:text-lg text-[14px]">Recommended softwares</h1>
            <div className=" flex items-center justify-center gap-4 w-full flex-wrap ">
              {sectionTexturingSoftware.map((icon, i) => (
                <div
                  key={i}
                  className={`relative group cursor-pointer hover:rotate-[360deg] duration-300 transition-all ease-in-out ${
                    lightmode
                      ? "bg-neutral-200 border-[1px] border-neutral-400 "
                      : "border-[1px] bg-neutral-800  border-neutral-700  "
                  }  flex items-center justify-center rounded-2xl md:w-[75px] md:h-[75px] w-[60px] h-[60px] ${
                    icon.style
                  }`}
                >
                  <FaExternalLinkAlt className="absolute top-1 right-1 w-2 h-2" />
                  <div
                    className={`md:h-[60px] h-[50px] md:w-[60px] w-[50px] group-hover:h-[30px] group-hover:w-[30px] flex items-center justify-center ${
                      lightmode
                        ? "bg-neutral-200 border-[1px] border-neutral-400 group-hover:bg-zinc-800"
                        : "border-[1px] bg-zinc-800  border-neutral-700 group-hover:bg-zinc-950"
                    } rounded-full  transition-all ease-in-out duration-300`}
                  >
                    <div className="h-8 w-8 flex items-center justify-center group-hover:p-1">
                      {icon.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TexturingSection;
