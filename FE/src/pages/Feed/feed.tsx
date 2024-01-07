import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PageLayout from "../../layout/page-layout";
import { Post } from "../../types/types";
import Card from "../../components/card-sample";
import { getFeed } from "../../api/post";

const Feed = () => {
  const {
    isPending,
    isError,
    data: feedData,
    error,
  } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
  });

  return (
    <PageLayout>
      <div className="h-screen w-full py-12 px-10">
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
