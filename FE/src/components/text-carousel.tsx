import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import useMode from "../hooks/state";
import { CarouselProps } from "../types/types";

const TextCarousel = ({
  data,
  setHdri,
}: {
  data: string[];
  setHdri: (data: string) => void;
}) => {
  const [current, setcurrent] = useState(0);
  const lightmode = useMode((state) => state.isDarkMode);

  // 5 len, 6 prev

  const nextSlide = () => {
    setcurrent((prevIndex: number) => {
      const nextI = (prevIndex + 1) % data.length;
      setHdri(data[nextI]);
      return nextI;
    });
  };

  const prevSlide = () => {
    setcurrent((prevIndex: number) => {
      const prevI = (prevIndex - 1 + data.length) % data.length;
      setHdri(data[prevI]);
      return prevI;
    });
  };

  return (
    <div className=" w-full h-full flex items-center justify-between">
      <button
        className={`transition-all ease-in-out shadow-md hover:shadow-xl  ${
          lightmode
            ? "bg-zinc-200 text-black font-normal border-orange-500/20"
            : "bg-zinc-950 text-white  border-orange-500/20"
        }  p-2 rounded-l-xl border-[1px]`}
        onClick={prevSlide}
      >
        <MdArrowBack />
      </button>

      <div className="overflow-hidden ">
        <div
          className="flex transition-transform duration-300 ease-in-out transform translate-x-full"
          style={{
            // width: `${images.length}00%`,
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {data.map((text, index) => (
            <div
              key={index}
              className={`w-full h-full flex-shrink-0 relative p-[6.4px]  ${
                lightmode
                  ? "bg-zinc-200 text-black font-normal   border-orange-500/20"
                  : "bg-gradient-gray text-white border-orange-500/20"
              } text-center border-[1px]`}
            >
              <h1 className={`text-sm font-normal `}>{text}</h1>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`transition-all ease-in-out shadow-md hover:shadow-xl  ${
          lightmode
            ? "bg-zinc-200 text-black  font-normal border-orange-500/20"
            : "bg-zinc-950 text-white border-orange-500/20"
        }  p-2 rounded-r-xl border-[1px]`}
        onClick={nextSlide}
      >
        <MdArrowForward />
      </button>
    </div>
  );
};

export default TextCarousel;
