import { useQuery } from "@tanstack/react-query";

import { Post } from "../../types/types";
import { getFeed } from "../../api/post";
import Loader from "../../components/loader";
import Card from "../../components/card-sample";
import PageLayout from "../../layout/page-layout";

const Feed = () => {
  const { isLoading, data: feedData } = useQuery({
    queryKey: ["feed"],
    queryFn: () => getFeed(),
    refetchOnMount: true,
  });

  if (isLoading || feedData?.length === 0) {
    return (
      <PageLayout>
        <div className="h-screen w-full flex items-center justify-center">
          <Loader />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="h-full w-full py-12 px-10">
        <div className="w-full flex-wrap flex gap-5">
          {feedData?.map((post: Post, i: number) => (
            <Card key={i} data={post} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Feed;
