import { useState } from "react";
import { dummycardData } from "../../components/3d-sample-cardlist";
import Card from "../../components/card-sample";
import Pagination from "../../components/pagination";
import PageLayout from "../../layout/page-layout";

const Showcase = () => {
  // for pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  return (
    <PageLayout>
      <header className="h-[450px] w-full  flex  items-center justify-center">
        <div className="showcase-bg w-full h-full"></div>
      </header>

      <main className="flex mt-5 mx-3 md:flex-row flex-col pb-32">
        <div className={`  w-full h-full p-2`}>
          <div className={`flex h-full w-full pb-5`}>
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

export default Showcase;
