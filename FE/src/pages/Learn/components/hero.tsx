import { MdArrowDownward } from "react-icons/md";
import { sectionHero } from "../../../data/learnpage-data";
import useMode from "../../../hooks/state";
import useScrollTo from "../../../hooks/use-scroll-to-el";

const durationInterval = [
  "duration-[1s]",
  "duration-[1.5s]",
  "duration-[2s]",
  "duration-[2.5s]",
];

const HeroSection = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const [shouldScrollToProcess, setShouldScrollToProcess] = useScrollTo();

  return (
    <>
      <div
        className={`w-full md:h-[550px] h-[700px] flex md:flex-row flex-col items-center justify-around ${
          lightmode ? "bg-slate-200" : "bg-[#1b1b1b]"
        } `}
      >
        <div className="flex lg:w-[40%] md:w-[50%]  flex-col mt-12 mx-5">
          <h1 className="md:text-6xl text-5xl">Learn how 3D work.</h1>
          <p
            className={`md:text-md text-sm mt-2 text-normal ${
              lightmode ? " font-normal" : " font-light"
            }`}
          >
            It's actually pretty broad. Read more to know how 3d actually works.
            We'll use blender for examples. BUT concepts to be introduced are
            not software specific.
          </p>
          <button
            onClick={() => setShouldScrollToProcess(true)}
            className="text-white bg-gradient-to-r transition-all ease-in-out from-10% to-90% from-amber-600 to-red-600 flex w-[150px] text-sm items-center justify-center mt-5 rounded-2xl p-2 "
          >
            <span>Read more</span>
            <MdArrowDownward className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="blob transition-all ease-in-out duration-[1000ms] xl:h-[500px] xl:w-[500px] lg:h-[500px] lg:w-[500px] md:h-[500px] md:w-[500px] sm:h-[400px] sm:w-[400px] h-[250px] w-[250px] md:mt-0 mt-7"></div>
      </div>
      <div
        // @ts-ignore
        ref={shouldScrollToProcess}
        className={`m-5 md:h-full  h-full flex-wrap xl:py-[150px] lg:py-[150px] md:py-[90px] py-16 flex justify-center items-center gap-20  `}
      >
        {sectionHero.map((card) => (
          <div className="flex flex-col items-center justify-center group">
            <div
              className={` ${
                card.cardStyle
              } cursor-pointer relative hover:shadow-xl shadow-sm transition-all ease-in-out md:w-[300px] md:h-[300px] w-[80%] h-[300px] flex flex-col items-center gap-5 ${
                lightmode ? "glassmorphism-light" : "glassmorphism"
              } px-5`}
            >
              <div
                className={`${card.colorBanner}  absolute top-0 rounded-t-xl z-[-1] h-20 w-full`}
              ></div>
              <div className="text-5xl mt-12 ">
                <div
                  className={`${
                    card.color
                  } transition-all ease-in-out rounded-full ${
                    lightmode
                      ? "bg-slate-200 shadow-inner"
                      : "bg-slate-900 shadow-inner"
                  }  p-3`}
                >
                  {card.Icon}
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <h1 className="text-xl mb-2">{card.label}</h1>
                <p
                  className={`text-[13px] text-center text-normal ${
                    lightmode ? "font-normal" : "font-light"
                  }  `}
                >
                  {card.description}
                </p>
              </div>
            </div>
            {/* TOP LINE */}
            <div
              className={`relative h-[75px] bottom-0 xl:h-[100px] lg:h-[100px] md:h-[100px]  w-[2px] flex items-center justify-center z-[1]  ${
                lightmode ? card.lineLight : card.lineDark
              } animate-pulse`}
            >
              {/* pulsation dots */}
              {durationInterval.map((dot) => (
                <div
                  className={`w-2 h-2 ${
                    lightmode ? card.lineLight : card.lineDark
                  }  z-[-1] absolute rounded-full transition-all duration-[1000ms] ${dot} group-hover:top-full top-0`}
                ></div>
              ))}
            </div>
            <div
              className={`border-[1px] rounded-xl ${
                card.cardStyle
              } cursor-pointer hover:shadow-xl shadow-sm transition-all ease-in-out  md:w-[300px] md:h-[300px] w-[80%] h-[300px] flex flex-col items-center gap-5 ${
                lightmode ? "bg-gradient-gray-light" : "bg-gradient-gray"
              } px-5 ${card.border}`}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
