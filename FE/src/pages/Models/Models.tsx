import React, { useState } from "react";
import Divider from "../../components/divider";
import useMode from "../../hooks/state";
import { useMediaQuery } from "../../hooks/use-media-query";
import PageLayout from "../../layout/page-layout";
import { dummycardData } from "../../components/3d-sample-cardlist";
import Card from "../../components/card-sample";
import Pagination from "../../components/pagination";

import Carousel from "../../components/carousel";

// const categories = ["models", "low-poly", "high-poly", "rendered"];
const categoriesTwo = [
  { label: "models", isToggled: false },
  { label: "low-poly", isToggled: false },  
  { label: "high-poly", isToggled: false },
  { label: "rendered", isToggled: false },
];

const images = [
  {
    imageUrl: "https://www.artella.com/wp-content/uploads/2017/10/Modeling.jpg",
    heading: "Models",
    description:
      "Preview your 3d models. View and examine the models through the viewer.",
  },
  {
    imageUrl:
      "https://media.sketchfab.com/models/2e6d680639bc424abd3af2e2b1ee944f/thumbnails/24941043e54247829f6c205027d4a357/2f489290d4a14fdea57b972c0f3362bf.jpeg",
    heading: "Textures",
    description:
      "View textures and materials ranging from low to high resolution formats.",
  },
  {
    imageUrl:
      "https://cdnb.artstation.com/p/assets/images/images/048/199/871/large/sam-rohit-final-render-2.jpg?1649432898",
    heading: "Render",
    description: "Share your stills and images here.",
  },
];

const Models = () => {
  const lightmode = useMode((state) => state.isDarkMode);

  // solution for toggling 1
  // const [toggleModels, setToggleModels] = useState(false);
  // const [toggleLowPoly, setToggleLowPoly] = useState(false);
  // const [toggleHighPoly, setToggleHighPoly] = useState(false);
  // const [toggleRendered, setToggleRendered] = useState(false);

  // solution for toggling 2
  const [toggle, setToggle] = useState(categoriesTwo);
  console.log(toggle);

  // pagination logic/controls
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const onToggleTwo = (cat: string) => {
    if (cat === "models") {
      setToggle((prev) =>
        prev.map((cat) => {
          console.log(cat);
          return cat.label === "models" ? { ...cat, isToggled: true } : cat;
        })
      );
    }

    if (cat === "high-poly") {
      setToggle((prev) =>
        prev.map((cat) => {
          console.log(cat);
          return cat.label === "high-poly" ? { ...cat, isToggled: true } : cat;
        })
      );
    }

    if (cat === "low-poly") {
      setToggle((prev) =>
        prev.map((cat) => {
          console.log(cat);
          return cat.label === "low-poly" ? { ...cat, isToggled: true } : cat;
        })
      );
    }

    if (cat === "rendered") {
      setToggle((prev) =>
        prev.map((cat) => {
          console.log(cat);
          return cat.label === "rendered" ? { ...cat, isToggled: true } : cat;
        })
      );
    }
  };
  return (
    <PageLayout>
      <header className="h-[450px] flex py-5 items-center justify-center">
        <Carousel images={images} />
      </header>
      <main className="flex mt-5 mx-3 md:flex-row flex-col pb-32">
        <div className="md:w-[20%] w-full h-full">
          <div className="flex flex-col w-full h-full p-2 ">
            <h1 className="text-md">Search</h1>

            <Divider />
            <input
              type="text"
              className={`transition-all ease-in-out ${
                lightmode
                  ? "bg-slate-200/90 text-black shadow-inner border-[1px] border-zinc-500"
                  : "bg-slate-200/90 text-black"
              }  p-1 rounded-md focus:outline-none focus:border-amber-500 focus:ring-[1.5px] focus:ring-amber-500`}
            />
            <Divider />
            <h1 className="text-md">Filters / Tags</h1>

            <Divider />

            <div className="md:mt-0 mt-2 flex flex-wrap flex-row w-full">
              {categoriesTwo.map((cat, i) => (
                <div
                  key={i}
                  className={`group cursor-pointer  shadow-md hover:shadow-lg transition-all ease-in-out ${
                    lightmode
                      ? "bg-slate-200 shadow-black hover:shadow-slate-800/50"
                      : "bg-amber-600 shadow-yellow-500 hover:shadow-amber-200/50"
                  } shadow-md  shadow-gray-600 p-1 md:my-2 my-0 md:mx-1 mx-1 px-2 flex items-center gap-2 rounded-xl`}
                >
                  <input
                    type="checkbox"
                    name={cat.label}
                    id={cat.label}
                    value={cat?.isToggled}
                    onClick={() => onToggleTwo(cat.label)}
                  />
                  <label htmlFor={cat.label} className="text-xs">
                    {cat.label}
                  </label>
                </div>
              ))}

              <div className="flex w-full bg-[red] flex-col"></div>
            </div>
          </div>
        </div>

        <div className={` md:w-[80%]  w-full h-full p-2`}>
          <div className={`flex h-full w-full pb-5 `}>
            <div className="flex flex-wrap justify-center gap-12 p-5">
              {dummycardData
                .slice(firstPostIndex, lastPostIndex)
                .map((card, idx) => (
                  <Card data={card} key={idx} />
                ))}
            </div>
          </div>
          <Pagination
            totalPosts={dummycardData?.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setcurrentPage}
            currentPage={currentPage}
          />
        </div>
      </main>
    </PageLayout>
  );
};

export default Models;
