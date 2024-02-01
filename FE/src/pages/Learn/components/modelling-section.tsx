import { Link } from "react-router-dom";
import { MdArrowDownward } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import {
  sectionModelling,
  sectionModellingCAD,
  sectionModellingFileTypes,
  sectionModellingMeshStructure,
  sectionModellingModifiers,
  sectionModellingPrimitives,
  sectionModellingSoftwares,
  sectionModellingSurfaceTypes,
  sectionModellingTopology,
  sectionModellingTransformations,
} from "../../../data/learnpage-data";
import useMode from "../../../hooks/state";
import useInfoModal from "../../../hooks/use-info-modal";
import useScrollTo from "../../../hooks/use-scroll-to-el";
import ModelViewer from "../../../components/model-viewer";

const ModellingSection = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modal = useInfoModal();

  const [shouldScrollToModels, setShouldScrollToModels] = useScrollTo();

  return (
    <>
      {/* HERO SECTION */}
      <div
        className={`w-full ${
          lightmode ? "bg-slate-200" : "bg-[#0f0f0f]"
        }  md:h-[550px] h-[700px] flex md:flex-row-reverse flex-col items-center justify-around `}
      >
        <div className="flex lg:w-[40%] md:w-[50%]  flex-col mt-12 mx-5">
          <h1 className="xl:text-6xl lg:text-6xl md:text-6xl text-3xl">
            3d models are everywhere.
          </h1>
          <p className="mt-2 ">
            Architecture, games, vr and literally many more.
          </p>
          <button
            onClick={() => setShouldScrollToModels(true)}
            className="text-white bg-gradient-to-r transition-all ease-in-out from-10% to-90% from-blue-600 to-cyan-600 flex w-[150px] text-sm items-center justify-center mt-5 rounded-2xl p-2 "
          >
            <span>Continue </span>
            <MdArrowDownward className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="blob-container xl:h-[500px] xl:w-[500px] lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px] sm:h-[400px] sm:w-[400px]  h-[250px] w-[250px] md:mt-0 mt-7"></div>
      </div>

      {/* INFO 1 */}
      <div
        // @ts-ignore
        ref={shouldScrollToModels}
        className={`h-full w-full flex xl:flex-row lg:flex-col md:flex-col flex-col items-center justify-around pt-[150px] gap-6 md:px-0 px-5 `}
      >
        <div
          className={`md:w-[500px] w-full xl:ml-5 lg:ml-0 md:ml-0 sm:ml-0 ml-0 h-[400px] ${
            lightmode
              ? "glassmorphism-light shadow-lg shadow-slate-900/30 text-slate-900"
              : "glassmorphism text-slate-300 shadow-orange-500/10 shadow-2xl"
          } flex flex-col `}
        >
          <div className="w-full px-7 pt-7">
            <h1 className="text-2xl ">
              <span
                className={`${
                  lightmode ? "text-black" : "text-white"
                }  font-bold mr-1`}
              >
                View
              </span>
              your 3d models here. Compatible with the latest formats.
            </h1>
          </div>
          <div className="w-full  h-full items-center justify-center px-3  flex  gap-2">
            <div
              className={`w-[120px] mx-2 py-3 h-[170px] ${
                lightmode
                  ? "glassmorphism-light shadow-inner  shadow-slate-900/50"
                  : "glassmorphism  shadow-amber-300/30"
              }  rounded-xl flex shadow-inner flex-col items-center justify-around `}
            >
              {sectionModellingFileTypes.map((slug, i) => (
                <button
                  key={i}
                  onClick={() => modal.onOpen(slug?.details)}
                  className={`cursor-pointer hover:scale-[1.05] flex w-[70%] h-6 ${
                    lightmode
                      ? "bg-slate-200 text-black shadow-slate-900/40"
                      : "bg-[#161616] text-white"
                  }  text-xs rounded-md shadow-md   items-center justify-center`}
                >
                  {slug.label}
                </button>
              ))}
            </div>

            <div className="flex w-full flex-col gap-4">
              <div
                className={`${sectionModellingSoftwares[1].styles}  ${
                  lightmode
                    ? "bg-[#3d3d3d] rounded-xl shadow-slate-900/50"
                    : "bg-[black] rounded-xl shadow-cyan-300/20"
                } flex items-center shadow-inner justify-around gap-3 px-5`}
              >
                <TypeAnimation
                  className="text-2xl font-bold text-orange-300"
                  sequence={[
                    ".BLEND", // Types 'One'
                    1000, // Waits 1s
                    ".STL", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    ".GLB", // Types 'Three' without deleting 'Two'
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
              <div className="flex w-full h-full gap-2">
                <Link
                  target={"_blank"}
                  to={sectionModellingSoftwares[0].url}
                  className={`${
                    sectionModellingSoftwares[0].styles
                  } hover:scale-[1.05] transition-all ease-in-out ${
                    lightmode
                      ? "glassmorphism-light shadow-orange-700 hover:shadow-orange-400"
                      : "glassmorphism  shadow-orange-300/70 hover:shadow-orange-200"
                  } flex items-center shadow-inner justify-center relative cursor-pointer`}
                >
                  <span className="md:text-5xl text-4xl text-orange-400">
                    {sectionModellingSoftwares[0].icon}
                  </span>
                  <FaExternalLinkAlt className="absolute right-3 top-3 text-xs" />
                </Link>
                <Link
                  target={"_blank"}
                  to={sectionModellingSoftwares[1].url}
                  className={`relative ${
                    sectionModellingSoftwares[1].styles
                  }  hover:scale-[1.05] transition-all ease-in-out  ${
                    lightmode
                      ? "glassmorphism-light shadow-slate-700 hover:shadow-slate-400"
                      : "glassmorphism  shadow-slate-300/70 hover:shadow-slate-200"
                  } flex items-center shadow-inner justify-center cursor-pointer`}
                >
                  <span className="md:text-5xl text-4xl text-slate-400">
                    {sectionModellingSoftwares[1].icon}
                  </span>
                  <FaExternalLinkAlt className="absolute right-3 top-3 text-xs" />
                </Link>
                <Link
                  target={"_blank"}
                  to={sectionModellingSoftwares[2].url}
                  className={`relative  ${
                    sectionModellingSoftwares[2].styles
                  }  hover:scale-[1.05] transition-all ease-in-out  ${
                    lightmode
                      ? "glassmorphism-light shadow-green-700 hover:shadow-green-400"
                      : "glassmorphism  shadow-green-300/70 hover:shadow-green-200"
                  } flex items-center justify-center cursor-pointer shadow-inner`}
                >
                  <span className="md:text-5xl text-4xl text-green-400">
                    {sectionModellingSoftwares[2].icon}
                  </span>
                  <FaExternalLinkAlt className="absolute right-3 top-3 text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-5">
          {sectionModelling.map((card, i) => (
            <div
              key={i}
              onClick={() => modal.onOpen(card.details)}
              className={`cursor-pointer group ${
                card.cardStyle
              } relative hover:shadow-xl shadow-sm transition-all ease-in-out md:w-[500px]  w-full h-[110px] flex flex-row justify-between items-center gap-5  ${
                lightmode ? "glassmorphism-light" : "glassmorphism"
              } px-5`}
            >
              <div
                className={`${card.colorBanner}  absolute left-0 rounded-l-xl z-[-1] h-full w-12`}
              ></div>
              <div className="text-3xl">
                <div
                  className={`${
                    card.color
                  } transition-all ease-in-out rounded-full ${
                    lightmode
                      ? "bg-slate-200 shadow-inner"
                      : "bg-slate-900 shadow-inner"
                  }  p-3 `}
                >
                  {card.Icon}
                </div>
              </div>
              <div className="flex flex-col items-center w-full my-5 ">
                <h1 className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-xs mb-2 ">
                  {card.label}
                </h1>
                <p className="xl:text-[123] lg:text-md md:text-md sm:text-md text-xs text-center text-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`xl:mr-5 lg:mr-0 md:mr-0 sm:mr-0 mr-0 md:w-[500px] shadow-xl shadow-slate-900/30 w-full  h-[100%] overflow-x-hidden ${
            lightmode
              ? "glassmorphism-light"
              : "glassmorphism shadow-orange-500/10 shadow-2xl"
          } `}
        >
          <div className="w-full flex h-[100%] items-center justify-center rounded-3xl ">
            <ModelViewer />
          </div>
        </div>
      </div>

      {/* INFO 2 */}
      <div
        className={`h-full w-full flex xl:flex-row lg:flex-col md:flex-col flex-col items-center justify-around gap-6 my-[100px]  md:px-0 p-5 `}
      >
        <div className="lg:w-[90%] w-[95%] gap-12 h-full flex items-center justify-center flex-row my-[40px]">
          <div
            className={`flex lg:flex-row flex-col justify-center w-full h-full ${
              lightmode
                ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-md"
                : "bg-gradient-gray border-[1px] border-zinc-500/40"
            } rounded-xl  transition-all ease-in-out p-8 gap-3`}
          >
            {/* LEFT SECTION */}
            <div className="flex w-full h-full flex-col gap-3">
              <div
                className={`group flex w-full h-[70%] ${
                  lightmode
                    ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-md"
                    : "bg-gradient-gray border-[1px] border-zinc-500/40"
                }`}
              >
                <div className="p-7 h-full w-full flex flex-col gap-6">
                  <h1
                    className={`transition-all ease-in-out text-normal ${
                      lightmode
                        ? "group-hover:text-zinc-950 text-zinc-500"
                        : "group-hover:text-zinc-200 text-zinc-500"
                    } font-bold text-[40px] `}
                  >
                    Primitives and mesh structure
                  </h1>
                  <div
                    className={`w-full flex flex-col gap-7 p-3 ${
                      lightmode
                        ? "border-[1px] border-zinc-500/50 shadow-inner shadow-zinc-950/40"
                        : "border-[1px] border-zinc-800"
                    }  rounded-md`}
                  >
                    <div className="flex md:gap-5 gap-3 md:justify-start justify-center">
                      {sectionModellingPrimitives.map((icon, i) => (
                        <button
                          key={i}
                          onClick={() => modal.onOpen(icon?.details)}
                          className={`flex flex-col items-center border-[1px] w-12 px-7 py-2 rounded-md ${
                            lightmode
                              ? "border-zinc-500/50 hover:border-zinc-500 shadow-md shadow-zinc-950/30"
                              : "border-zinc-500/70 hover:border-zinc-500"
                          } `}
                        >
                          <span className="text-2xl">{icon.icon}</span>
                          <span
                            className={`text-xs text-normal ${
                              lightmode ? "font-normal" : "font-light"
                            }  mt-1`}
                          >
                            {icon.label}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="flex md:gap-5 gap-3 flex-wrap md:justify-start justify-center">
                      {sectionModellingMeshStructure.map((icon, i) => (
                        <button
                          key={i}
                          onClick={() => modal.onOpen(icon.details)}
                          className={`flex flex-col items-center border-[1px] w-12 px-7 py-2 rounded-md ${
                            lightmode
                              ? "border-zinc-500/50 hover:border-zinc-500 shadow-md shadow-zinc-950/30"
                              : "border-zinc-500/70 hover:border-zinc-500"
                          } `}
                        >
                          <span className="text-2xl">{icon.icon}</span>
                          <span
                            className={`text-xs text-normal ${
                              lightmode ? "font-normal" : "font-light"
                            }  mt-1`}
                          >
                            {icon.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`w-full flex gap-7 p-3 ${
                      lightmode
                        ? "border-[1px] border-zinc-500/50 text-zinc-950 font-normal shadow-inner shadow-zinc-950/20"
                        : "border-[1px] border-zinc-800 text-zinc-200 font-light"
                    } border-[1px] rounded-md flex-col`}
                  >
                    <p className="text-normal md:text-sm text-[13px] text-justify ">
                      Mesh structures connsists of the faces edges and the
                      vertex which builds up a polygon. Faces are the flat
                      surface of the geometry which are interconnected through
                      the vertices and the edges. Edges are lines that could be
                      considered sides in a polygon which are conencted by the
                      vertices. Vertex is the point where ends of edges are
                      connected. Primtives on the other hand are shapes used in
                      order to form a figure or an even complex geometry.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`group flex md:flex-row flex-col w-full h-[30%] ${
                  lightmode
                    ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-md"
                    : "bg-gradient-gray border-[1px] border-zinc-500/40"
                } p-7 justify-between gap-7`}
              >
                <div className="gap-7 flex flex-col md:w-[60%] w-full">
                  <h1
                    className={`text-normal font-bold text-3xl transition-all ease-in-out ${
                      lightmode
                        ? "group-hover:text-zinc-950 text-zinc-500"
                        : "group-hover:text-zinc-200 text-zinc-500"
                    }`}
                  >
                    Transformation and Translation
                  </h1>
                  <p
                    className={`text-normal font-light text-sm gap-7 ${
                      lightmode
                        ? "border-[1px] border-zinc-500/50 text-zinc-950 font-normal shadow-inner shadow-zinc-950/20"
                        : "border-[1px] border-zinc-800 text-zinc-200 font-light"
                    } p-3 rounded-md text-justify h-full `}
                  >
                    Consider the axes x, y and z. These commands are needed to
                    manipulate your geomtry to desired results. Scale to resize,
                    extrusion to bump faces, rotation to set the mesh's
                    direction and translate to move it up, down, left and right.
                  </p>
                </div>
                <div
                  className={` flex-col gap-7 p-3 ${
                    lightmode
                      ? "border-[1px] border-zinc-500/50 text-zinc-950 font-normal shadow-inner shadow-zinc-950/30"
                      : "border-[1px] border-zinc-800 text-zinc-200 font-light"
                  } rounded-md xl:w-[30%] md:w-[40%] `}
                >
                  <div className="flex flex-wrap w-full h-full gap-5 items-center justify-center">
                    {sectionModellingTransformations.map((icon, i) => (
                      <button
                        key={i}
                        onClick={() => modal.onOpen(icon?.details)}
                        className={`flex flex-col items-center border-[1px] w-12 px-8 py-2 rounded-md ${
                          lightmode
                            ? "border-zinc-500/50 hover:border-zinc-500 shadow-md shadow-zinc-950/30"
                            : "border-zinc-500/70 hover:border-zinc-500"
                        } `}
                      >
                        <span className="text-2xl">{icon.icon}</span>
                        <span className="md:text-xs text-[11.5px] text-normal  mt-1">
                          {icon.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT SECTION */}
            <div className="flex flex-col w-full h-full gap-3">
              {/* UP */}
              <div
                className={`group flex flex-col w-full h-full ${
                  lightmode
                    ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-md"
                    : "bg-gradient-gray border-[1px] border-zinc-500/40"
                } p-7 gap-5`}
              >
                <div className=" w-full h-full flex flex-col gap-6">
                  <h1
                    className={`text-normal font-bold text-3xl transition-all ease-in-out ${
                      lightmode
                        ? "group-hover:text-zinc-950 text-zinc-500"
                        : "group-hover:text-zinc-200 text-zinc-500"
                    }`}
                  >
                    Modifiers
                  </h1>
                  <div
                    className={`w-full flex flex-col gap-7 p-3 ${
                      lightmode
                        ? "border-[1px] border-zinc-500/50 shadow-inner shadow-zinc-950/30"
                        : "border-[1px] border-zinc-800"
                    }  rounded-md `}
                  >
                    <div className="flex gap-5 flex-wrap w-full h-full items-center justify-center">
                      {sectionModellingModifiers.map((icon, i) => (
                        <button
                          key={i}
                          onClick={() => modal.onOpen(icon?.details)}
                          className={`flex flex-col items-center border-[1px] w-12 px-9 py-2 rounded-md ${
                            lightmode
                              ? "border-zinc-500/50 hover:border-zinc-500 shadow-md shadow-zinc-950/30"
                              : "border-zinc-500/70 hover:border-zinc-500"
                          } `}
                        >
                          <span className="text-2xl">{icon.icon}</span>
                          <span
                            className={`text-xs text-normal ${
                              lightmode ? "font-normal" : "font-light"
                            }  mt-1`}
                          >
                            {icon.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  className={`text-normal w-full font-light text-sm gap-7 ${
                    lightmode
                      ? "border-[1px] border-zinc-500/50 text-zinc-950 font-normal shadow-inner shadow-zinc-950/20"
                      : "border-[1px] border-zinc-800 text-zinc-200 font-light"
                  } p-3 rounded-md text-justify h-full`}
                >
                  Why do modifiers matter tho? Imagine making model which
                  involves smooth surfaces and polished edges. Would you add
                  edge loops and manually add edges to the model? That might
                  work (idk), but that would take a long time and less
                  efficient. This is where modifiers come to the rescue. Chamfer
                  edges with bevel, Mirror your models in different axes,
                  Smoothen and increase geomtry of your model, Duplicate meshes
                  in desired paths using array, subtract or add meshes to each
                  other using boolean, decrease polycount and geometry through
                  decimate.
                </p>
              </div>
              {/* DOWN */}
              <div className="flex w-full md:flex-row flex-col h-full gap-3">
                <div
                  className={`cursor-pointer group flex w-full h-full  ${
                    lightmode
                      ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-md"
                      : "bg-gradient-gray border-[1px] border-zinc-500/40"
                  } p-7`}
                >
                  <div className=" w-full h-full flex flex-col gap-6">
                    <h1
                      className={`text-normal font-bold text-3xl transition-all ease-in-out ${
                        lightmode
                          ? "group-hover:text-zinc-950 text-zinc-500"
                          : "group-hover:text-zinc-200 text-zinc-500"
                      }`}
                    >
                      Surface Types
                    </h1>
                    <div
                      className={`w-full h-full flex flex-col gap-7 p-3 ${
                        lightmode
                          ? "border-[1px] border-zinc-500/50"
                          : "border-[1px] border-zinc-800"
                      }  rounded-md `}
                    >
                      <div className="flex gap-5 flex-col  w-full h-full items-center justify-center">
                        {sectionModellingSurfaceTypes.map((icon, i) => (
                          <button
                            key={i}
                            onClick={() => modal.onOpen(icon?.details)}
                            className={`flex items-center justify-between border-[1px] w-full h-full px-5 py-4 rounded-md ${
                              lightmode
                                ? "border-zinc-500/50 hover:border-zinc-500 shadow-md shadow-zinc-950/20"
                                : "border-zinc-500/70 hover:border-zinc-500"
                            } `}
                          >
                            <span className="text-2xl">{icon.icon}</span>
                            <span
                              className={`text-sm text-normal ${
                                lightmode ? "font-bold" : "font-light"
                              }  mt-1`}
                            >
                              {icon.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full h-full gap-3  ">
                  <div
                    className={`cursor-pointer group flex w-full h-full ${
                      lightmode
                        ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-md"
                        : "bg-gradient-gray border-[1px] border-zinc-500/40"
                    }  p-3`}
                  >
                    <div className=" w-full h-full flex flex-col gap-3">
                      <h1
                        className={`text-normal font-bold text-lg transition-all ease-in-out ${
                          lightmode
                            ? "group-hover:text-zinc-950 text-zinc-500"
                            : "group-hover:text-zinc-200 text-zinc-500"
                        }`}
                      >
                        Topology
                      </h1>
                      <div
                        className={`w-full flex flex-col gap-7 p-3 ${
                          lightmode
                            ? "border-[1px] border-zinc-500/50"
                            : "border-[1px] border-zinc-800"
                        }  rounded-md `}
                      >
                        <div className="flex gap-5 flex-col  w-full h-full items-center justify-center">
                          {sectionModellingTopology.map((icon, i) => (
                            <button
                              key={i}
                              onClick={() => modal.onOpen(icon?.details)}
                              className={`flex items-center justify-between border-[1px] w-full h-full px-5 py-2 rounded-md ${
                                lightmode
                                  ? "border-zinc-500/50 hover:border-zinc-500 shadow-zinc-950/20 shadow-md"
                                  : "border-zinc-500/70 hover:border-zinc-500"
                              } `}
                            >
                              <span className="text-2xl">{icon.icon}</span>
                              <span
                                className={`text-sm text-normal ${
                                  lightmode ? "font-bold" : "font-light"
                                }  mt-1`}
                              >
                                {icon.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`cursor-pointer group flex w-full h-full ${
                      lightmode
                        ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-md"
                        : "bg-gradient-gray border-[1px] border-zinc-500/40"
                    } p-3`}
                  >
                    <div className=" w-full h-full flex flex-col gap-3">
                      <h1
                        className={`text-normal font-bold text-lg transition-all ease-in-out ${
                          lightmode
                            ? "group-hover:text-zinc-950 text-zinc-500"
                            : "group-hover:text-zinc-200 text-zinc-500"
                        }`}
                      >
                        Computer Aided design
                      </h1>
                      <div
                        className={`w-full flex flex-col gap-7 p-3 ${
                          lightmode
                            ? "border-[1px] border-zinc-500/50"
                            : "border-[1px] border-zinc-800"
                        }  rounded-md `}
                      >
                        <div className="flex gap-5 flex-col  w-full h-full items-center justify-center">
                          {sectionModellingCAD.map((icon, i) => (
                            <button
                              key={i}
                              onClick={() => modal.onOpen(icon?.details)}
                              className={`flex items-center justify-between border-[1px] w-full h-full px-5 py-2 rounded-md ${
                                lightmode
                                  ? "border-zinc-500/50 hover:border-zinc-500 shadow-zinc-950/20 shadow-md"
                                  : "border-zinc-500/70 hover:border-zinc-500"
                              } `}
                            >
                              <span className="text-2xl">{icon.icon}</span>
                              <span
                                className={`text-sm text-normal ${
                                  lightmode ? "font-bold" : "font-light"
                                }  mt-1`}
                              >
                                {icon.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModellingSection;
