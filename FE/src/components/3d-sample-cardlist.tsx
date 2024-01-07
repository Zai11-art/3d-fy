import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Card from "./card-sample";
import useMode from "../hooks/state";
import Pagination from "./pagination";
import { getFeed } from "../api/post";

const CardList = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const {
    isPending,
    isError,
    data: feedData,
    error,
  } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
  });

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
          {feedData
            ?.slice(firstPostIndex, lastPostIndex)
            .map((card, idx) => <Card data={card} key={idx} />)}
        </div>
      </div>
      <Pagination
        totalPosts={feedData?.length || 0}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CardList;
