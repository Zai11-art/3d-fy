import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFeed } from "../../api/post";
import Loader from "../../components/loader";
import Card from "../../components/card-sample";
import PageLayout from "../../layout/page-layout";
import Pagination from "../../components/pagination";
import FullLoader from "../Loader/loader-full";

const Showcase = () => {
  const { isLoading, data: feedData } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
    refetchOnMount: true,
  });

  // for pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  if (isLoading) {
    return <FullLoader />;
  }

  return (
    <PageLayout>
      <div className="w-full h-screen">
        <header className="h-[300px]  w-full  flex  items-center justify-center">
          <div className="showcase-bg w-full h-full"></div>
        </header>

        <main className="flex mt-5 mx-3 md:flex-row flex-col pb-32">
          <div className={`  w-full h-full p-2`}>
            {!feedData ? (
              <div className="w-full h-full mt-12 flex items-center justify-center">
                <Loader />
              </div>
            ) : (
              <>
                <div className={`flex h-full w-full pb-5`}>
                  <div className="flex flex-wrap justify-center gap-12 p-5">
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
              </>
            )}
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default Showcase;
