import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/post";
import Avatar from "../../components/avatar";
import ModelViewer from "../../components/model-viewer";
import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import Viewer from "../Viewer/Viewer";

const Post = () => {
  const { postId } = useParams();
  const lightmode = useMode((state) => state.isDarkMode);

  const {
    isError,
    data: postData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(postId as string),
  });

  console.log(postData);

  return (
    <PageLayout>
      <div className="w-full h-full flex lg:px-12 px-5 pt-[100px]">
        <div
          className={`flex lg:flex-row flex-col w-full h-full border-[1px] border-zinc-500/50 rounded-lg p-3 ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          } gap-3`}
        >
          {/* 3D VIEWER */}
          <div className="lg:w-[60%] h-[600px] relative">
            <Viewer showLeva={false} />
            {/* DASHBOARD */}
            <div className="absolute flex items-center justify-center inset-x-0 bottom-0 h-8 bg-zinc-950/20 ">
              <div className="flex gap-12">
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </div>

          {/* FULL DETAILS */}
          <div className="lg:w-[40%] w-[100%] h-[100%] flex flex-col gap-5 p-3">
            <div>
              <h1 className="text-2xl">{postData?.title}</h1>
            </div>

            <div className="flex w-full  justify-between">
              <div className="flex items-center gap-2 justify-center">
                <Avatar url={postData?.profileImage} />
                <div className="flex flex-col">
                  <span>{postData?.username}</span>
                  <span className="text-sm">{postData?.tag}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">
                  Published at: {postData?.createdAt}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2>Description</h2>
              <p className="text-sm">{postData?.description}</p>
            </div>
            <div>hehe</div>
            <div>hehe</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Post;
