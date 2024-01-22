import { SetStateAction, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useMode from "../../hooks/state";
import { getFeed, getModels, getRenders } from "../../api/post";
import Divider from "../../components/divider";
import Card from "../../components/card-sample";
import Carousel from "../../components/carousel";
import PageLayout from "../../layout/page-layout";
import Pagination from "../../components/pagination";
import Loader from "../../components/loader";
import { Post } from "../../types/types";
import { FaCheck } from "react-icons/fa";

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

const tabs = ["All", "Render", "Model"];

const Models = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const [toggleTab, setToggleTab] = useState("All");
  const [feedData, setFeedData] = useState<Post[]>([]);

  console.log(feedData);
  // const {
  //   isPending,
  //   isError,
  //   data: feedData,
  //   error,
  // } = useQuery({
  //   queryKey: ["feed"],
  //   queryFn: getFeed,
  // });

  const fetcher = async () => {
    let data: SetStateAction<Post[]> = [];
    if (toggleTab === "All") {
      data = await getFeed();
    } else if (toggleTab === "Render") {
      data = await getModels();
    } else if (toggleTab === "Model") {
      data = await getRenders();
    }
    setFeedData(data);

    // if (toggleModels) {
    //   const data = await getModels();
    //   console.log("toggled models");
    //   console.log(data);
    //   setFeedData(data);
    // }
    // if (toggleRender) {
    //   const data = await getRenders();
    //   console.log("toggled renders");
    //   console.log(data);
    //   setFeedData(data);
    // }
    // if (!toggleAll && !toggleModels && !toggleRender) {
    //   setFeedData([]);
    // }
  };

  // const toggler

  useEffect(() => {
    fetcher();
  }, [toggleTab]);

  // solution for toggling 2
  // console.log(toggle);

  // pagination logic/controls
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  return (
    <PageLayout>
      <div className="w-full h-full">
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
                {tabs.map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setToggleTab(btn);
                    }}
                    className={`items-center cursor-pointer  shadow-md hover:shadow-lg transition-all ease-in-out ${
                      lightmode
                        ? "bg-slate-200 shadow-black hover:shadow-slate-800/50"
                        : "bg-amber-600 shadow-yellow-500 hover:shadow-amber-200/50"
                    } shadow-md  shadow-gray-600 p-1 md:my-2 my-0 md:mx-1 mx-1 px-2 flex items-center gap-2 rounded-xl`}
                  >
                    <div
                      className={`flex items-center w-4 h-4 rounded-md ${
                        lightmode
                          ? "bg-zinc-800 text-orange-200"
                          : "bg-black text-white"
                      } justify-center`}
                    >
                      {toggleTab === btn && <FaCheck className="text-[10px]" />}
                    </div>
                    <span>{btn}</span>
                  </button>
                ))}

                <div className="flex w-full bg-[red] flex-col"></div>
              </div>
            </div>
          </div>

          <div className={` md:w-[80%]  w-full h-full p-2`}>
            <div className={`flex h-full w-full pb-5 `}>
              <div className="flex flex-wrap justify-center gap-12 p-5">
                {feedData.length === 0 ? (
                  <div className="w-full h-full">
                    <Loader />
                  </div>
                ) : (
                  <>
                    {feedData
                      ?.slice(firstPostIndex, lastPostIndex)
                      .map((card, idx) => <Card data={card} key={idx} />)}
                  </>
                )}
              </div>
            </div>
            <Pagination
              totalPosts={feedData?.length || 0}
              postsPerPage={postsPerPage}
              setCurrentPage={setcurrentPage}
              currentPage={currentPage}
            />
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default Models;
