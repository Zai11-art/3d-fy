import { useState } from "react";

import useMode from "../hooks/state";
import Card from "./card-sample";
import Pagination from "./pagination";
import apple from "../assets/apple.png";

export const dummycardData = [
  {
    title: "Apple",
    profileImage: "https://cdn-icons-png.flaticon.com/512/5987/5987424.png",
    imgUrl: apple,
    modelUrl: "/food_apple_01_4k.glb",
    description: "A simple realistic apple. With 4k textures and maps.",
    author: "Brandon",
    date: "01/02/2023",
    views: 1256,
    likes: 503,
    tags: ["model", "textured"],
  },
  {
    title: "Apple",
    profileImage: "https://cdn-icons-png.flaticon.com/512/5987/5987424.png",
    imgUrl: apple,
    modelUrl: "/food_apple_01_4k.glb",
    description: "A simple realistic apple. With 4k textures and maps.",
    author: "Brandon",
    date: "01/02/2023",
    views: 1256,
    likes: 503,
    tags: ["model", "textured"],
  },
  {
    title: "Apple",
    profileImage: "https://cdn-icons-png.flaticon.com/512/5987/5987424.png",
    imgUrl: apple,
    modelUrl: "/food_apple_01_4k.glb",
    description: "A simple realistic apple. With 4k textures and maps.",
    author: "Brandon",
    date: "01/02/2023",
    views: 1256,
    likes: 503,
    tags: ["model", "textured"],
  },
  {
    title: "Apple",
    profileImage: "https://cdn-icons-png.flaticon.com/512/5987/5987424.png",
    imgUrl: apple,
    modelUrl: "/food_apple_01_4k.glb",
    description: "A simple realistic apple. With 4k textures and maps.",
    author: "Brandon",
    date: "01/02/2023",
    views: 1256,
    likes: 503,
    tags: ["model", "textured"],
  },
];

const CardList = () => {
  const lightmode = useMode((state) => state.isDarkMode);

  // for pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  console.log(`last index: ${lastPostIndex}`);
  console.log(`first index: ${firstPostIndex}`);

  return (
    <div className="mt-12 w-full flex justify-center items-center px-5 flex-col">
      <div>
        <h1
          className={`${
            lightmode ? "text-black" : "text-white"
          }  font-thin text-lg `}
        >
          View Samples here
        </h1>
      </div>
      <div
        className={`py-12 p-5 w-full rounded-2xl ${
          lightmode
            ? "bg-slate-200 shadow-slate-500/50 shadow-inner"
            : "glassmorphism shadow-amber-200/50 shadow-inner"
        }  flex justify-between mt-5 md:w-[760px] w-full`}
      >
        <div className="flex flex-wrap items-center justify-around gap-12">
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
  );
};

export default CardList;
