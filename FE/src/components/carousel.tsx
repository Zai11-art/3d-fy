import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md"
;
import useMode from "../hooks/state";
import { CarouselProps } from "../types/types";

const Carousel = ({ images }: { images: CarouselProps[] }) => {
  const [current, setcurrent] = useState(0);
  const lightmode = useMode((state) => state.isDarkMode);
  console.log(current);

  const nextSlide = () => {
    setcurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setcurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform duration-300 ease-in-out transform translate-x-full"
          style={{
            // width: `${images.length}00%`,
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[450px] flex-shrink-0 relative"
            >
              <div className="absolute w-full h-full gradient-plain top-0  flex items-center justify-center flex-col">
                <h1 className={`text-white md:text-5xl text-4xl`}>
                  {image.heading}
                </h1>
                <p className="text-normal text-white font-light mt-3 md:text-[1rem] text-sm text-center md:px-[5rem] px-[4rem]">
                  {image.description}
                </p>
              </div>
              <img
                src={image.imageUrl}
                alt={`slide ${index + 1}`}
                className="object-cover object-center w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`transition-all ease-in-out shadow-md hover:shadow-xl absolute top-1/2 left-4 transform -translate-y-1/2 ${
          lightmode
            ? "shadow-slate-900/50 hover:shadow-slate-800"
            : "shadow-amber-900/50 hover:shadow-amber-400"
        } bg-amber-600 text-white px-2 py-1 w-8 h-8 rounded-full`}
        onClick={prevSlide}
      >
        <MdArrowBack />
      </button>

      <button
        className={`transition-all ease-in-out shadow-md hover:shadow-xl absolute top-1/2 right-4 transform -translate-y-1/2 ${
          lightmode
            ? "shadow-slate-900/50 hover:shadow-slate-800"
            : "shadow-amber-900/50 hover:shadow-amber-400"
        } bg-amber-600 text-white px-2 py-1 w-8 h-8 rounded-full`}
        onClick={nextSlide}
      >
        <MdArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
