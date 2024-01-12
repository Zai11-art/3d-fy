import {
  MdArrowDownward,
  MdOutlineFlashlightOn,
  MdOutlineLight,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";
import { TbCone, TbPoint } from "react-icons/tb";
import { FaKey, FaPlay, FaSun } from "react-icons/fa6";
import { LuRectangleHorizontal } from "react-icons/lu";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { RiLandscapeLine, RiRemoteControl2Line } from "react-icons/ri";

import useMode from "../../../hooks/state";
import Divider from "../../../components/divider";
import useInfoModal from "../../../hooks/use-info-modal";
import useScrollTo from "../../../hooks/use-scroll-to-el";
import { useMediaQuery } from "../../../hooks/use-media-query";

const durationInterval = [
  "duration-[1s]",
  "duration-[1.5s]",
  "duration-[2s]",
  "duration-[2.5s]",
];

const LightingSection = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const md = useMediaQuery("(max-width:765px)");
  const modal = useInfoModal();

  const [shouldScrollToTexture, setShouldScrollToTexture] = useScrollTo();
  return (
    <>
      {/* HERO SECTION */}
      <div
        className={`w-full md:h-[550px] h-[700px] flex md:flex-row flex-col items-center justify-around ${
          lightmode ? "bg-slate-200" : "bg-[#1b1b1b]"
        } `}
      >
        <div className="flex lg:w-[40%] md:w-[50%]  flex-col mt-12 mx-5">
          <h1 className="md:text-6xl text-5xl">Light your models! plz</h1>
          <p className="mt-2 ">
            3d artists often forget how light is important. Light your models,
            show those details and bumps!
          </p>
          <button
            onClick={() => setShouldScrollToTexture(true)}
            className="text-white bg-gradient-to-r transition-all ease-in-out from-10% to-90% from-zinc-600 to-neutral-400 flex w-[150px] text-sm items-center justify-center mt-5 rounded-2xl p-2 "
          >
            <span>Read more </span>
            <MdArrowDownward className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="blob-lightsect transition-all ease-in-out duration-[1000ms] xl:h-[500px] xl:w-[500px] lg:h-[500px] lg:w-[500px] md:h-[500px] md:w-[500px] sm:h-[400px] sm:w-[400px] h-[250px] w-[250px] md:mt-0 mt-7"></div>
      </div>

      {/* INFO SECTION */}
      <div
        //   @ts-ignore
        ref={shouldScrollToTexture}
        className={`h-full w-full py-[60px]`}
      >
        <div className="flex flex-col items-center justify-between gap-12 p-12 group">
          {/* TOP SECTION */}
          <div className="flex  items-center justify-center group  w-full">
            <div
              className={`w-[75px] h-[75px] rounded-xl ${
                lightmode
                  ? "bg-slate-200 shadow-md shadow-fuchsia-600/80"
                  : "bg-zinc-800"
              }  z-[4] flex items-center justify-center `}
            ></div>

            <div
              className={` animate-pulse ${
                lightmode ? "bg-fuchsia-500 h-[2px]" : "bg-fuchsia-300 h-[1px]"
              }  xl:w-[100px] lg:w-[100px] md:w-[50px] w-[30px] flex items-center justify-center relative `}
            >
              {durationInterval.map((dot, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    lightmode ? "bg-fuchsia-500" : "bg-fuchsia-300"
                  }   rounded-full transition-all ease-in-out ${dot} absolute group-hover:right-full right-0 group-hover:opacity-100 opacity-0`}
                ></div>
              ))}
            </div>

            <div
              className={`flex items-center justify-center lg:w-[450px] lg:h-[250px] w-[400px] h-[100%] ${
                lightmode
                  ? "bg-slate-200 shadow-xl shadow-purple-950/20 hover:border-purple-300 border-purple-800/40"
                  : "bg-zinc-800 shadow-xl shadow-purple-200/10 hover:border-purple-300 border-purple-800/40"
              }   rounded-xl z-[10] border-[1px] transition-all ease-in-out shadow-lg flex items-center justify-center relative`}
            >
              <div className="flex h-full p-2 flex-col w-full">
                <div
                  className={`flex w-full h-full ${
                    lightmode
                      ? "bg-zinc-100 shadow-zinc-950/50"
                      : "bg-zinc-900/60  shadow-black"
                  }  shadow-inner  flex-col p-6 rounded-xl`}
                >
                  <div className="w-full flex justify-between ">
                    <div className="flex flex-col">
                      <h1 className="text-lg">Key lighting</h1>
                      <span
                        className={`text-normal ${
                          lightmode ? "font-normal" : "font-light"
                        } text-sm `}
                      >
                        concept
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          modal.onOpen({
                            title: "Key lighting",
                            imageUrl:
                              "https://www.creativeshrimp.com/wp-content/uploads/2015/07/big_light_soft_light_01.jpg",
                            description: `A key light is the main light source in a scene, doing the heavy lifting of illuminating the subject and setting the visual tone.
                              Think of him as the main actor in a scene, taking all the attention.
                              This light comes from a specific direction, creating highlights and shadows that define the  shape of the subject.
                              It resembles the sun in a sunset photo, creating warm tones and long shadows.
                              Technically, a key light sets the main light in 3D graphics or photography, playing a central role in shaping the overall appearance and emphasizing the presence of the subject.
                              More technically, a key light is strategically placed to provide directional lighting, often at an angle that highlights the subject's features and adds depth to the scene.
                              Adjusting the  intensity and angle of the key light allows artists and photographers to control  mood, emphasizing certain aspects of the subject while creating shadows to enhance realism.
                              This fundamental element of lighting  is essential for creating visually appealing compositions, whether capturing the perfect portrait or rendering a realistic 3D model.`,
                            videoUrl: "",
                          })
                        }
                        className={`flex transition-all ease-in-out hover:text-purple-200 text-purple-400  items-center justify-center w-10 h-10 ${
                          lightmode
                            ? "bg-zinc-200 shadow-sm"
                            : "bg-zinc-900 shadow-md"
                        }   shadow-black rounded-full`}
                      >
                        <FaPlay className=" text-md pl-[2px]" />
                      </button>
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-300 border-[1px] border-purple-400 shadow-md shadow-zinc-200 rounded-full">
                        <FaKey className="text-purple-900 text-xl" />
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="w-full h-full">
                    <p
                      className={`text-normal  md:text-sm text-xs ${
                        lightmode ? "font-normal" : "font-light"
                      }`}
                    >
                      A key light is the main source of light in a scene,
                      providing key illumination and shaping the subject by
                      creating shadows and highlights, allowing details to be
                      seen through the influence of main light.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`h-[1px]  animate-pulse ${
                lightmode ? "bg-fuchsia-500 h-[2px]" : "bg-fuchsia-300 h-[1px]"
              } xl:w-[100px] lg:w-[100px] md:w-[50px] w-[30px] flex items-center justify-center relative `}
            >
              {durationInterval.map((dot, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    lightmode ? "bg-fuchsia-500" : "bg-fuchsia-300"
                  }  rounded-full transition-all ease-in-out ${dot} absolute group-hover:left-full left-0 group-hover:opacity-100 opacity-0`}
                ></div>
              ))}
            </div>

            <div
              className={`w-[75px] h-[75px] rounded-xl ${
                lightmode
                  ? "bg-slate-200 shadow-md shadow-fuchsia-600/80"
                  : "bg-zinc-800"
              }  z-[4] `}
            ></div>
          </div>

          {/* MID SECTION */}
          <div className="xl:w-[1200px] lg:w-[1000px] w-full h-full flex items-center md:flex-row flex-col justify-between">
            <div
              className={`flex items-center justify-center lg:w-[450px] lg:h-[250px] w-[100%] h-[100%] ${
                lightmode
                  ? "bg-slate-200 shadow-green-800/20 shadow-xl hover:border-green-300 border-emerald-400 "
                  : "bg-zinc-800 shadow-xl shadow-green-200/10 hover:border-green-300 border-green-800/40"
              }  rounded-xl z-[2]  transition-all ease-in-out shadow-lg  border-[1px] `}
            >
              <div className="flex p-2 h-full flex-col w-full">
                <div
                  className={`flex w-full h-full ${
                    lightmode
                      ? "bg-zinc-100 shadow-zinc-950/50"
                      : "bg-zinc-900/60  shadow-black"
                  }  shadow-inner  flex-col p-6 rounded-xl`}
                >
                  <div className="w-full flex justify-between ">
                    <div className="flex flex-col">
                      <h1 className="text-lg">Backlit light</h1>
                      <span
                        className={`text-normal ${
                          lightmode ? "font-normal" : "font-light"
                        } text-sm `}
                      >
                        concept
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          modal.onOpen({
                            title: "Backlit lighting",
                            imageUrl: "https://i.stack.imgur.com/Tm4Ph.jpg",
                            description: `In  lighting, backlighting creates captivating lighting effects by placing the main light source behind the subject.
                              This technique, similar to shooting a shadow facing the sun, creates a visually convincing effect.
                              The backlighting strategy works to highlight the subject's edges, creating distinct lines and  radiant light that adds depth and drama to the scene.
                              Whether capturing the intricate details of a portrait or displaying a 3D model, backlighting improves the overall visual appeal by highlighting the subject's shape and clearly separating it  from the background.
                              Technically, backlighting is achieved by placing the main light source facing the viewer's line of sight.
                              This intentional positioning allows  light to spill over the edges of the subject, creating an edge or halo effect that adds a layer of visual interest.
                              This technique not only serves an aesthetic purpose but also plays a functional role by emphasizing the  shape and lines of the subject.
                              Backlighting is widely used in photography and videography to create impactful images, enhancing the overall composition by creating vivid effects of light and shadow.`,
                            videoUrl: "",
                          })
                        }
                        className={`flex transition-all ease-in-out hover:text-purple-200 text-green-400  items-center justify-center w-10 h-10 ${
                          lightmode
                            ? "bg-zinc-200 shadow-sm"
                            : "bg-zinc-900 shadow-md"
                        }   shadow-black rounded-full`}
                      >
                        <FaPlay className=" text-md pl-[2px]" />
                      </button>
                      <div className="flex items-center justify-center w-10 h-10 bg-green-300 border-[1px] border-green-400 shadow-md shadow-green-200 rounded-full">
                        <PiSelectionBackgroundFill className="text-green-950 text-xl" />
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="w-full h-full">
                    <p
                      className={`text-normal  md:text-sm text-xs ${
                        lightmode ? "font-normal" : "font-light"
                      }`}
                    >
                      Without backlighting, the subject of a scene or a 3d
                      render would not have it's emphasis. Backlit also gives
                      personality and essence to the render aside from just
                      giving details through lighting from the rear.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center  m-5 group">
              {/* CENTER DOT */}
              <div
                className={`${
                  lightmode
                    ? "bg-slate-200 shadow-zinc-900/40 shadow-md"
                    : "bg-zinc-600 shadow-md shadow-orange-300/60"
                }  rounded-full h-12 w-12 z-[3]`}
              ></div>

              {/* TOP LINE */}
              <div className="h-[470px] bottom-0 xl:h-[250px] lg:h-[250px] md:h-[300px]  w-[2px] absolute flex items-center justify-center z-[1]  bg-purple-600 animate-pulse">
                {/* pulsation dots */}
                {durationInterval.map((dot, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 ${
                      lightmode ? "bg-purple-600" : "bg-purple-300"
                    }  z-[10] absolute rounded-full transition-all ease ${dot} group-hover:bottom-full  bottom-0`}
                  ></div>
                ))}
              </div>

              {/* BOTTOM LINE */}
              <div className="h-[470px] top-0 xl:h-[250px] lg:h-[250px] md:h-[300px]  w-[2px] absolute flex items-center justify-center z-[1]  bg-yellow-600 animate-pulse">
                {/* GOES DOWN */}
                {durationInterval.map((dot, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 ${
                      lightmode ? "bg-yellow-600" : "bg-yellow-300"
                    }  z-[10] absolute rounded-full transition-all ease ${dot} group-hover:top-full top-0`}
                  ></div>
                ))}
              </div>

              {/* LEFT LINE */}
              <div
                className={` ${
                  md ? "top-0" : "left-0"
                }  xl:h-[2px] lg:h-[2px] md:h-[2px] h-[200px] xl:w-[300px] lg:w-[200px] md:w-[175px] w-[2px] absolute flex items-center justify-center z-[1]  bg-blue-500  animate-pulse`}
              >
                {durationInterval.map((dot, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2  ${
                      lightmode ? "bg-blue-600" : "bg-blue-300"
                    } z-[10] absolute rounded-full transition-all ease ${dot} group-hover:left-full  left-0`}
                  ></div>
                ))}
              </div>

              {/* RIGHT LINE */}
              <div
                className={`${
                  md ? "bottom-0" : "right-0"
                } md:right-0  xl:h-[2px] lg:h-[2px] md:h-[2px] h-[200px] xl:w-[300px] lg:w-[200px] md:w-[175px] w-[2px] absolute flex items-center justify-center z-[1]  bg-green-500  animate-pulse`}
              >
                {durationInterval.map((dot, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 ${
                      lightmode ? "bg-green-600" : "bg-green-300"
                    }  z-[10] absolute rounded-full transition-all ease ${dot} group-hover:right-full  right-0`}
                  ></div>
                ))}
              </div>
            </div>

            <div
              className={`flex items-center justify-center lg:w-[450px] lg:h-[250px] w-[100%] h-[100%]  ${
                lightmode
                  ? "bg-slate-200 shadow-xl shadow-blue-800/20 border-blue-500 hover:border-blue-300"
                  : "bg-zinc-800 shadow-xl shadow-blue-200/10 hover:border-blue-300 border-blue-800/40"
              }  rounded-xl z-[2]  transition-all ease-in-out  border-[1px] peer`}
            >
              <div className="flex p-2 h-full flex-col w-full">
                <div
                  className={`flex w-full h-full ${
                    lightmode
                      ? "bg-zinc-100 shadow-zinc-950/50"
                      : "bg-zinc-900/60  shadow-black"
                  }  shadow-inner  flex-col p-6 rounded-xl`}
                >
                  <div className="w-full flex justify-between ">
                    <div className="flex flex-col">
                      <h1 className="text-lg">Fill lighting</h1>
                      <span
                        className={`text-normal ${
                          lightmode ? "font-normal" : "font-light"
                        } text-sm `}
                      >
                        concept
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          modal.onOpen({
                            title: "Fill lighting",
                            imageUrl:
                              "https://www.3drender.com/light/figures/3ptFill.jpg",
                            description: `Fill lighting plays an important role as a supporting cast, working in tandem with  key lighting to enhance  overall visual harmony.
                            This secondary light source steps in to soften the harsh shadows created by the main light, ensuring that no area is  obscured by shadow.
                            Think of it as a gentle beam of light that covers your subject, providing light where it's needed without losing the highlight.
                            Essentially, fill light contributes to the aesthetic balance of a scene, by softening contrast and creating  more nuanced  light and shadow effects.
                            From a technical perspective, fill lights are strategically placed to address the darker areas of the composition, softening extreme shadows without overwhelming the key light.
                            In doing so, it achieves a more even and balanced light distribution, presenting the subject in a beautiful and visually appealing way.
                            This technique is especially important in portrait photography, videography and 3D rendering, where it ensures  every detail is visible, contributing to a polished and professional look in the final visual presentation.`,
                            videoUrl: "",
                          })
                        }
                        className={`flex transition-all ease-in-out hover:text-purple-200 text-blue-400  items-center justify-center w-10 h-10 ${
                          lightmode
                            ? "bg-zinc-200 shadow-sm"
                            : "bg-zinc-900 shadow-md"
                        }   shadow-black rounded-full`}
                      >
                        <FaPlay className=" text-md pl-[2px]" />
                      </button>
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-300 border-[1px] border-blue-400 shadow-md shadow-blue-200 rounded-full">
                        <MdOutlineLight className="text-blue-950 text-xl" />
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="w-full h-full">
                    <p
                      className={`text-normal  md:text-sm text-xs ${
                        lightmode ? "font-normal" : "font-light"
                      }`}
                    >
                      Fill light complements the key light by reducing shadows,
                      providing additional light to the darkest areas of the
                      scene. It balances overall lighting, improves visibility,
                      and creates a more evenly lit composition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="flex  items-center justify-center group  w-full">
            <div
              className={`w-[75px] h-[75px] rounded-xl ${
                lightmode
                  ? "bg-slate-200 shadow-md shadow-yellow-600/80"
                  : "bg-zinc-800"
              }  z-[4] `}
            ></div>

            <div
              className={` animate-pulse ${
                lightmode ? "bg-yellow-600 h-[2px]" : "bg-yellow-300 h-[1px]"
              }  xl:w-[100px] lg:w-[100px] md:w-[50px] w-[30px] flex items-center justify-center relative `}
            >
              {durationInterval.map((dot, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 bg-yellow-500  rounded-full transition-all ease ${dot} absolute group-hover:right-full right-0 group-hover:opacity-100 opacity-0`}
                ></div>
              ))}
            </div>

            <div
              className={`flex items-center justify-center lg:w-[450px] lg:h-[250px] w-[400px] h-[100%] ${
                lightmode
                  ? "bg-slate-200 shadow-xl shadow-yellow-950/20 border-yellow-500 hover:border-yellow-300"
                  : "bg-zinc-800 shadow-yellow-200/10 border-yellow-800/40 hover:border-yellow-300"
              }  rounded-xl z-[10]   border-[1px] transition-all ease-in-out shadow-lg flex items-center justify-center relative`}
            >
              <div className="flex p-2 h-full flex-col w-full">
                <div
                  className={`flex w-full h-full ${
                    lightmode
                      ? "bg-zinc-100 shadow-zinc-950/50"
                      : "bg-zinc-900/60  shadow-black"
                  }  shadow-inner  flex-col p-6 rounded-xl`}
                >
                  <div className="w-full flex justify-between ">
                    <div className="flex flex-col">
                      <h1 className="text-lg">Ambient lighting</h1>
                      <span
                        className={`text-normal ${
                          lightmode ? "font-normal" : "font-light"
                        } text-sm `}
                      >
                        concept
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          modal.onOpen({
                            title: "Ambient lighting",
                            imageUrl:
                              "https://i.ytimg.com/vi/VJ2SAx6tZKM/maxresdefault.jpg",
                            description: `Ambient light and light temperature are related concepts but they refer to different aspects of light.
                              Ambient light refers to the overall background light of a scene, providing a basic level of light without a specific source or direction.
                              It contributes to the overall brightness and atmosphere of the environment.
                              On the other hand, the temperature of light, usually measured in Kelvins (K), refers to the color appearance of the light.
                              It indicates whether a light source emits warm or cool tones, with lower Kelvin values ​​indicating warmer light (more yellow or red)  and higher Kelvin values ​​indicating cooler light (more blue ).
                              Although ambient light can have a specific color temperature based on the characteristics of the light source in a scene, the two terms are not interchangeable.
                              Ambient light includes overall brightness and illumination, while light temperature is specifically related to the color characteristics of the light.
                              Both concepts play an important role in creating  visually engaging and vibrant lighting environments, but they represent different aspects of the lighting experience.`,
                            videoUrl: "",
                          })
                        }
                        className={`flex transition-all ease-in-out hover:text-purple-200 text-orange-400  items-center justify-center w-10 h-10 ${
                          lightmode
                            ? "bg-zinc-200 shadow-sm"
                            : "bg-zinc-900 shadow-md"
                        }   shadow-black rounded-full`}
                      >
                        <FaPlay className=" text-md pl-[2px]" />
                      </button>
                      <div className="flex items-center justify-center w-10 h-10 bg-orange-300 border-[1px] border-orange-400 shadow-md shadow-orange-200 rounded-full">
                        <MdOutlineFlashlightOn className="text-orange-950 text-xl" />
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="w-full h-full">
                    <p
                      className={`text-normal  md:text-sm text-xs ${
                        lightmode ? "font-normal" : "font-light"
                      }`}
                    >
                      Ambient lighting is general, non-directional lighting that
                      uniformly illuminates a scene, simulating overall
                      background lighting. It helps reduce harsh shadows and
                      contributes to a more evenly lit environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`h-[1px]  animate-pulse ${
                lightmode ? "bg-yellow-600 h-[2px]" : "bg-yellow-300 h-[1px]"
              } xl:w-[100px] lg:w-[100px] md:w-[50px] w-[30px] flex items-center justify-center relative `}
            >
              {durationInterval.map((dot, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    lightmode ? "bg-yellow-600" : "bg-yellow-300"
                  } rounded-full transition-all ease ${dot} absolute group-hover:left-full left-0 group-hover:opacity-100 opacity-0`}
                ></div>
              ))}
            </div>

            <div
              className={`w-[75px] h-[75px] rounded-xl ${
                lightmode
                  ? "bg-slate-200 shadow-md shadow-yellow-600/80"
                  : "bg-zinc-800"
              }  z-[4] `}
            ></div>
          </div>
        </div>

        <div className="w-full gap-12 lg:h-[100%] h-[100%] p-12 flex items-center justify-center lg:flex-row flex-col my-[70px]">
          {/* LEFT CARD */}

          <div
            className={`flex flex-col items-center justify-center lg:w-[400px] w-full lg:h-full h-[100%] ${
              lightmode
                ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-xl"
                : "bg-gradient-gray border-[1px] border-zinc-500/40"
            }  rounded-xl transition-all ease-in-out p-5 gap-2`}
          >
            <div
              className={` w-full h-[100%] p-1 rounded-md ${
                lightmode
                  ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/40 shadow-md"
                  : "bg-gradient-gray border-[1px] border-zinc-500/40 shadow-lg shadow-black"
              } p-5`}
            >
              <div className="flex justify-between w-full h-full flex-col">
                <div className="">
                  <h1
                    className={`text-2xl ${
                      lightmode ? "text-purple-600" : "text-purple-400"
                    } `}
                  >
                    Illuminance
                  </h1>
                  <Divider />
                  <p
                    className={`text-normal ${
                      lightmode ? "font-normal" : "font-light"
                    }  text-sm text-justify`}
                  >
                    Illuminance is an important term in 3D lighting and refers
                    to the amount of light hitting a surface. Measured in lux
                    (lumens per square meter), it indicates the brightness of a
                    surface due to incident light. To achieve realistic lighting
                    in 3D environments, understanding illumination is important
                    because it helps artists and designers control the perceived
                    brightness and visibility of various elements in a scene.
                    This level of control is especially important when aiming
                    for realistic renderings or simulating specific lighting
                    conditions such as daylight or artificial lighting in
                    architectural visualization.
                  </p>
                </div>
                <Divider />
                <div className="w-full flex-col flex gap-3  h-full">
                  <h1 className="text-sm ">Some examples</h1>
                  <div className="flex w-full gap-2 ">
                    {[
                      {
                        label: "Architecture",
                        icon: <MdArchitecture />,
                        details: {
                          title: "Architecture",
                          description: `The illuminance of architectural lighting  is an important factor when designing bright spaces that balance functionality and aesthetics.
                          Illuminance refers to the amount of light falling on a surface, measured in lux, and  plays an important role in ensuring that a space is properly illuminated for its intended use.
                          For example, in an office environment, architects consider illuminance levels that provide enough light to work without causing discomfort or glare.
                          Even in the living spaces, lighting levels are carefully balanced to create a warm and inviting atmosphere while ensuring practical visibility.
                          The technical aspect involves the strategic placement of natural or artificial light sources to achieve a desired level of illumination within a room or building.
                          Lighting designers use photometric calculations to determine the optimal placement and intensity of light, ensuring even distribution and minimizing shadows.
                          Additionally, advances in lighting technology have made it possible to simulate different color temperatures, improving the visual experience.
                          Overall, architectural lighting  combines artistic vision and technical precision to create an environment that is not only visually appealing but also 
                          functional and fosters the intended activities within the space.`,
                          imageUrl:
                            "https://3dlancer.net/upload/galleries/483/4483/architectural-lighting-73868-xxl.jpg",
                          videoUrl: "",
                        },
                      },
                      {
                        label: "Products",
                        icon: <MdProductionQuantityLimits />,
                        details: {
                          title: "Products",
                          description: `Illuminance has an important role in illuminating the appearance and perceived characteristics of a product, making it one of the most crucial factors in product presentation.
                          Illuminance, measured in lux, defines the brightness of surfaces and is carefully considered to enhance the visual appeal and functionality of the products on display.
                          For example, in a retail environment, product lighting levels are strategically controlled to highlight specific products and ensure that products are well-lit without creating harsh shadows or glare that can impact the customer experience.
                          It will be so.
                          From a technical point of view, product lighting requires precise calculations and adjustments to achieve optimal illumination levels.
                          Lighting designers carefully place lights to highlight product features and use photometric analysis to balance intensity and create  visually appealing displays.
                          The choice of color temperature further contributes to the overall presentation, allowing designers to evoke a certain mood or emphasize product details.
                          Basically, product lighting illuminance combines artistic intention and technical sophistication, and plays an important role in influencing consumer perception and enhancing the visual appeal of the presented product.
                          I will fulfill it.`,
                          imageUrl:
                            "https://public-files.gumroad.com/bfkt68els7us2g4jpfoq58mtsl4b",
                          videoUrl: "",
                        },
                      },
                      {
                        label: "Outdoor",
                        icon: <RiLandscapeLine />,
                        details: {
                          title: "Outdoor",
                          description: `Choosing the right outdoor lighting can transform your outdoor space visually and offer safety, aesthetics or functionality at the same time.
                          Illuminance, measured in lux, determines the brightness of entire outdoor areas, from public spaces such as parks to building facades and paths.
                          In urban planning and landscaping, achieving optimal illuminance for outdoor lighting  is important to create a cozy and safe space, ensure well-lit areas  for pedestrians, and improve the overall atmosphere.
                          Technically speaking, outdoor lighting design requires careful consideration of illuminance levels to achieve specific goals.
                          Lighting designers strategically place fixtures to illuminate sidewalks, public spaces, and buildings while minimizing light pollution and unnecessary glare.
                          The color temperature of outdoor lighting is chosen to complement the surrounding environment.
                          In residential areas, warm tones are often used to create a cozy atmosphere, while in commercial and public spaces, cool tones are used to increase visibility.
                          Essentially, outdoor lighting illuminance seamlessly combines artistic intent and technical precision, contributing to the safety, beauty, and usability of outdoor environments.`,
                          imageUrl:
                            "https://static.packt-cdn.com/products/9781803235851/graphics/image/Figure_5.32_B18697.jpg",
                          videoUrl: "",
                        },
                      },
                    ].map((num, i) => (
                      <button
                        key={i}
                        onClick={() => modal.onOpen(num.details)}
                        className={`flex gap-1 border-[1px] justify-center py-2 flex-col items-center w-full rounded-lg ${
                          lightmode
                            ? "hover:border-zinc-950 border-zinc-400 shadow-md shadow-zinc-950/30"
                            : "hover:border-zinc-300 border-zinc-500"
                        } transition-all ease-in-out`}
                      >
                        <span className="text-2xl">{num.icon}</span>
                        <span
                          className={`text-xs text-normal ${
                            lightmode ? "font-normal" : "font-light"
                          }`}
                        >
                          {num.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full h-[25%] p-1 rounded-md ${
                lightmode
                  ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/40 shadow-md"
                  : "bg-gradient-gray border-[1px] border-zinc-500/40 shadow-lg shadow-black"
              } p-5`}
            >
              <div className="flex w-full h-full flex-col justify-between">
                <div>
                  <h1
                    className={`text-lg ${
                      lightmode ? "text-green-600" : "text-green-400"
                    }`}
                  >
                    Photometric lights
                  </h1>
                  <Divider />
                </div>
                <div className="w-full flex-col flex gap-3  h-full">
                  <div className="flex w-full gap-2 ">
                    {[
                      {
                        label: "Home",
                        icon: <FaHome />,
                        details: {
                          title: "Home",
                          description: `Home lighting involves metering the lights to create a sense of comfort and beauty.
                          Photometric lights simulate the characteristics of real-world light by considering factors such as light intensity, distribution, and color temperature.
                          In the living area, use these lights  strategically  to achieve the right lighting levels for different activities and improve the overall ambience.
                          From a technical point of view, designers carefully select and place metering lights to ensure optimal lighting levels in different areas of the house.
                          For example, warmer color temperatures are preferred in living spaces to create a cozy and inviting atmosphere, while cooler color temperatures  contribute to functionality and visibility in task-oriented areas such as kitchens.
                          .
                          Lights are positioned so that shadows are minimized and  a balanced light distribution is created.
                          The flexibility of photometric lighting allows for creative expression, allowing residents to tailor lighting to suit their preferences and the specific features of each space.
                          Ultimately,  home metering lighting combines technical precision with a personal touch, contributing to both the functionality and  overall beauty of your living space.`,
                          imageUrl:
                            "https://i.ytimg.com/vi/ZpxCz8Wt6nE/sddefault.jpg",
                          videoUrl: "",
                        },
                      },
                      {
                        label: "Controlled",
                        icon: <RiRemoteControl2Line />,
                        details: {
                          title: "Controlled",
                          description: `In controlled environments such as photo studios and movie sets, metering lights are essential tools for achieving precise and controlled lighting conditions.
                          These lights are designed to replicate the characteristics of real-world light, allowing photographers and cinematographers  to fine-tune elements such as light intensity, distribution, and color temperature.
                          In these environments, the technical precision provided by metering lights is critical to capturing images and footage that emphasize the desired mood, style, or  specific details.
                          Technically,  controlled settings require careful placement of metering lights to achieve optimal illumination levels across a subject or scene.
                          Photographers use these lights to create special atmospheres and adjust color temperature to emphasize certain features to achieve different visual effects.
                          The consistent and controllable nature of the metering light ensures repeatability when capturing images under controlled conditions.
                          Additionally, the ability to manipulate light properties helps achieve professional and visually stunning results, making photometric lights an essential tool in controlled environments where precision and creativity are paramount.`,
                          imageUrl:
                            "https://gvmled.com/wp-content/uploads/2022/07/%E5%9B%BE%E7%89%873-2.jpg",
                          videoUrl: "",
                        },
                      },
                      {
                        label: "Natural",
                        icon: <FaSun />,
                        details: {
                          title: "Natural",
                          description: `In natural settings, such as outdoor photography or cinematography in uncontrolled environments, metering lights can function as an adaptive device that enhances and complements existing ambient lighting conditions.
                          These lights reproduce real-world lighting characteristics, allowing photographers and filmmakers to balance artificial light with natural elements to achieve the  desired effect while maintaining the authenticity of the scene.
                          Whether you're shooting portraits in beautiful landscapes or photographing outdoor events, using photometric lighting requires a careful combination of technical precision and creative adaptation to the natural environment.
                          .
                          Technically, using photometric lights in natural environments requires strategic placement to supplement existing sunlight or moonlight.
                          This may include filling in shadows, highlighting subjects, or even simulating specific lighting scenarios to enhance the visual narrative.
                          The color temperature of the light is carefully adjusted to blend seamlessly  with the natural hues of your surroundings.
                          The versatility of photometric lighting in natural environments allows photographers and filmmakers to capture striking images that bring out the best in their subjects and the surrounding landscape while maintaining a natural, organic feel.`,
                          imageUrl:
                            "https://img.kelbymediagroup.com/planetphotoshop/uploads/2011/04/3d_lightfx.jpg",
                          videoUrl: "",
                        },
                      },
                    ].map((num, i) => (
                      <button
                        key={i}
                        onClick={() => modal.onOpen(num.details)}
                        className={`flex gap-1 border-[1px] justify-center py-2 flex-col items-center w-full rounded-lg ${
                          lightmode
                            ? "hover:border-zinc-950 border-zinc-400 shadow-md shadow-zinc-950/30"
                            : "hover:border-zinc-300 border-zinc-500"
                        } `}
                      >
                        <span className="text-2xl">{num.icon}</span>
                        <span
                          className={`text-xs text-normal ${
                            lightmode ? "font-normal" : "font-light"
                          }`}
                        >
                          {num.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MIDDLE CARD */}
          <div
            className={`flex flex-col items-center justify-center lg:w-[400px] w-full lg:h-full h-[100%] ${
              lightmode
                ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-xl"
                : "bg-gradient-gray border-[1px] border-zinc-500/40"
            }  rounded-xl transition-all ease-in-out p-5 gap-2`}
          >
            <div
              className={`group w-full h-[22.5%] p-1 rounded-md ${
                lightmode
                  ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/40 shadow-md"
                  : "bg-gradient-gray border-[1px] border-zinc-500/40 shadow-lg shadow-black"
              } relative`}
            >
              <img
                className="  w-full h-full flex object-cover  rounded-md hover:blur-sm hover:grayscale transition-all ease-in-outd"
                src="https://cdn.polyhaven.com/asset_img/primary/hochsal_field.png?height=760"
                alt="hdri2"
              />
              <div className="absolute z-[100] w-full text-center top-[50%] group-hover:opacity-100 opacity-0 transition-all">
                <span
                  className={`px-4 py-2 bg-zinc-950 ${
                    lightmode ? "text-white" : "font-light"
                  } rounded-lg`}
                >
                  Fields
                </span>
              </div>
            </div>
            <div
              className={` w-full h-[55%] p-1 rounded-md ${
                lightmode
                  ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/40 shadow-md"
                  : "bg-gradient-gray border-[1px] border-zinc-500/40 shadow-lg shadow-black"
              } p-5`}
            >
              <div className="flex w-full h-full flex-col ">
                <h1
                  className={`text-2xl ${
                    lightmode ? "text-blue-600" : "text-blue-400"
                  }`}
                >
                  HDRI
                </h1>
                <Divider />
                <p
                  className={`text-normal ${
                    lightmode ? "font-normal" : "font-light"
                  } text-sm`}
                >
                  HDRI (High Dynamic Range Imaging) is a 3D lighting technology
                  that uses high-resolution images to capture a wide range of
                  brightness values. These HDR images act as environment maps
                  and influence lighting and reflections within the scene. HDRI
                  is especially useful for immersive environments in 3D
                  rendering because it allows artists to recreate realistic
                  lighting scenarios and improve visual fidelity by accurately
                  simulating changes in light and shadow. Worth it.
                </p>
              </div>
            </div>
            <div
              className={`group w-full h-[22.5%] p-1 rounded-md ${
                lightmode
                  ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/40 shadow-md"
                  : "bg-gradient-gray border-[1px] border-zinc-500/40 shadow-lg shadow-black"
              } relative`}
            >
              <img
                className="  w-full h-full flex object-cover  rounded-md hover:blur-sm hover:grayscale transition-all ease-in-outd"
                src="https://cdn.polyhaven.com/asset_img/primary/hayloft.png?height=760"
                alt="hdri2"
              />
              <div className="absolute z-[100] w-full text-center top-[50%] group-hover:opacity-100 opacity-0 transition-all">
                <span
                  className={`px-4 py-2 bg-zinc-950 ${
                    lightmode ? "text-white" : "font-light"
                  } rounded-lg`}
                >
                  Hayloft
                </span>
              </div>
            </div>
          </div>
          {/* RIGHT CARD */}
          <div
            className={`flex  flex-col items-center justify-center lg:w-[400px] lg:h-full w-full  h-[100%]  ${
              lightmode
                ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/30 shadow-xl"
                : "bg-gradient-gray border-[1px] border-zinc-500/40"
            }  rounded-xl transition-all ease-in-out p-5 gap-2`}
          >
            <div
              className={`lg:w-full lg:h-[100%] w-full h-[100%] p-1 rounded-md ${
                lightmode
                  ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/40 shadow-md"
                  : "bg-gradient-gray border-[1px] border-zinc-500/40 shadow-lg shadow-black"
              } p-5`}
            >
              <div className="flex w-full h-full flex-col">
                <h1
                  className={`text-lg ${
                    lightmode ? "text-teal-600" : "text-teal-400"
                  }`}
                >
                  Light types
                </h1>
                <Divider />
                <div className="flex w-full gap-2 ">
                  {[
                    {
                      label: "Point",
                      icon: <TbPoint />,
                      details: {
                        title: "Point",
                        description: `Point lighting, a simple technique, is used in 3D software to represent the motion of reflected light from essentially any point in space. It's an elementary method.
                        This type of lighting mimics the characteristics of a light bulb, emitting light evenly in all directions.
                        Spot lights are versatile and are often used to illuminate a scene.
                        These provide a natural and easy way to illuminate objects.
                        Whether for architectural visualization or character animation, point lighting allows you to create realistic and dynamic lighting scenarios.
                        From a technical point of view, the implementation of point lighting consists in fixing the position of the light source and adjusting its intensity to control the brightness of the illuminated area.
                        Designers can further modify light properties such as color and attenuation to achieve specific visual effects.
                        Point lights are particularly effective in highlighting details, casting shadows, and creating a sense of depth in 3D environments.
                        Its simplicity and flexibility make it an essential tool for achieving realistic lighting in a variety of scenarios, contributing to the overall visual fidelity of rendered images and animations.`,
                        imageUrl: "https://i.stack.imgur.com/8V024.jpg",
                        videoUrl: "",
                      },
                    },
                    {
                      label: "Spot",
                      icon: <TbCone />,
                      details: {
                        title: "Spot",
                        description: `A spotlight-like, focused beam of light is what spot lighting refers to in 3D software.
                        This type of lighting is useful for drawing attention to specific areas or objects in a scene and providing focused, controllable lighting.
                        Spotlights emulate the behavior of real spotlights and can create dramatic lighting effects, highlight important elements, and cast well-defined shadows.
                        From a technical point of view, implementing a spotlight requires determining its position, direction, and  angle of the light cone.
                        Designers can fine-tune parameters such as intensity, color, and falloff to achieve the desired visual impact.
                        Spotlights are commonly used in a variety of scenarios, from stage production in virtual environments to architectural visualization, where accurately highlighting  architectural details is important.
                        Its directional nature makes it an effective tool for creating contrast and shadows as well as achieving a sense of depth in 3D scenes, contributing to the overall realism and artistic composition of rendered images and animations.`,
                        imageUrl:
                          "https://i.ytimg.com/vi/Lyhw2DV61l0/hqdefault.jpg",
                        videoUrl: "",
                      },
                    },
                    {
                      label: "Area",
                      icon: <LuRectangleHorizontal />,
                      details: {
                        title: "Area",
                        description: `Area lighting is a more sophisticated approach in 3D software that utilizes surfaces as the source of light instead of points or directions.
                        Unlike point or point lights, area lights have a defined surface: B.
                        Rectangular or disc.
                        Allows for more natural, softer lighting that resembles real lighting.
                        This type of lighting is often used in architectural visualization, product design, character animation, etc.
                        to create realistic and visually appealing displays.
                        Technically speaking, implementing an area light requires determining the shape, size, and location of the light source.
                        Designers can control parameters such as intensity and color, and area lights often have the option to adjust the diffusion to create soft shadows.
                        Area lights are especially effective at simulating natural lighting conditions, such as sunlight streaming through a window or the glow of a rectangular LED panel.
                        Its versatility makes it an invaluable tool for achieving realistic lighting with a more differentiated and balanced light distribution, contributing to the overall quality and realism of rendered images and animations.`,
                        imageUrl:
                          "https://devtalk.blender.org/uploads/default/original/3X/6/b/6b1d58d2114de61c03fcd3f5184ecb9e7b938fc3.jpeg",
                        videoUrl: "",
                      },
                    },
                  ].map((num, i) => (
                    <button
                      key={i}
                      onClick={() => modal.onOpen(num.details)}
                      className={`flex gap-1 border-[1px] justify-center py-2 flex-col items-center w-full rounded-lg ${
                        lightmode
                          ? "hover:border-zinc-950 border-zinc-400 shadow-md shadow-zinc-950/30"
                          : "hover:border-zinc-300 border-zinc-500"
                      }`}
                    >
                      <span className="text-2xl">{num.icon}</span>
                      <span
                        className={`text-xs text-normal ${
                          lightmode ? "font-normal" : "font-light"
                        }`}
                      >
                        {num.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`lg:w-full lg:h-[100%] w-full h-[100%] p-1 rounded-md ${
                lightmode
                  ? "bg-gradient-gray-light border-[1px] border-zinc-400 shadow-zinc-950/40 shadow-md"
                  : "bg-gradient-gray border-[1px] border-zinc-500/40 shadow-lg shadow-black"
              } p-5`}
            >
              <div className="flex w-full h-full flex-col">
                <h1
                  className={`text-2xl ${
                    lightmode ? "text-yellow-600" : "text-yellow-400"
                  }`}
                >
                  Light temperature
                </h1>
                <Divider />
                <p
                  className={`text-normal ${
                    lightmode ? "font-normal" : "font-light"
                  } text-sm`}
                >
                  In 3D lighting, the temperature of the light, measured in
                  Kelvin (K), is an important parameter that determines how the
                  color of the light appears. Artists use this concept to
                  carefully adjust the warmth or coolness of individual light
                  sources to influence mood and atmosphere within a scene. By
                  adjusting the temperature of the light, developers can create
                  subtle effects by choosing warmer colors for intimate
                  interiors and cooler colors to simulate the natural light
                  outside. This level of control increases the artistic
                  expressiveness and realism of 3D rendering, allowing you to
                  accurately convey emotion and aesthetics in different visual
                  narratives.
                </p>
                <Divider />
                <div className="w-full flex-col flex gap-3  h-full">
                  <h1 className="text-sm  text-normal">
                    Light temp (2500K - 6500K)
                  </h1>
                  <div className="flex w-full gap-2 ">
                    <div className="w-full h-12 rounded-full bg-grad shadow-inner shadow-black"></div>
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

export default LightingSection;
