import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getFeed } from "../../api/post";
import Card from "../../components/card-sample";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import PageLayout from "../../layout/page-layout";

const Showcase = () => {
  const {
    isPending,
    isError,
    data: feedData,
    error,
    refetch,
  } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
  });

  useEffect(() => {
    refetch();
  }, []);
  // for pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

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
