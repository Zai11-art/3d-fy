import React, { SetStateAction, useEffect } from "react";
import PageLayout from "../../layout/page-layout";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";

import useMode from "../../hooks/state";
import { Post, User } from "../../types/types";
import { follow, getUser } from "../../api/user";
import Card from "../../components/card-sample";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../../components/pagination";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../components/loader";
import {
  getAllUserPost,
  getModelUserPost,
  getRenderUserPost,
} from "../../api/post";

const UserProfile = () => {
  const [clicked, setClicked] = useState("All");
  const { userId: paramId } = useParams();

  const token = useMode((state) => state.token);
  const user = useMode((state) => state.user);
  const lightmode = useMode((state) => state.isDarkMode);

  const [userData, setUserData] = useState<User>();
  const [posts, setPosts] = useState<Post[]>();

  // tabs
  const [toggleAll, setToggleAll] = useState(true);
  const [toggleRender, setToggleRender] = useState(false);
  const [toggleModels, setToggleModels] = useState(false);
  console.log(toggleAll);
  console.log(posts);

  // const { data: userData } = useQuery({
  //   queryKey: ["userData"],
  //   queryFn: () => getUser(`${paramId}`),
  // });

  useEffect(() => {
    fetcher();
    getUser();
  }, [toggleAll, toggleRender, toggleModels]);

  const fetcher = async () => {
    let data: React.SetStateAction<Post[]> = [];
    if (toggleAll) {
      data = await getAllUserPost(paramId as string);
    } else if (toggleModels) {
      data = await getModelUserPost(paramId as string);
    } else if (toggleRender) {
      data = await getRenderUserPost(paramId as string);
    }
    setPosts(data);
  };

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/${paramId}`
      );

      const user = response.data;
      console.log(user);
      setUserData(user);
      fetcher();
    } catch (error) {
      console.log(error);
    }
  };

  const patchFollow = async () => {
    try {
      const data = await axios
        .patch(`http://localhost:8080/users/${user?.id}/${paramId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.data);

      // refetch again to update state
      getUser2();
    } catch (error) {
      toast.error("Following failed. please try again.");
    }
  };

  const isFollowed = userData?.followers.some(
    (follower) => follower.id === user?.id
  );

  // for pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col gap-5 items-center pb-[100px]">
        {/* BANNER */}
        <div className="w-full md:h-[400px] h-[380px]  flex flex-col gap-4 justify-center items-center relative">
          <div
            className={`px-3 py-5 flex flex-col gap-5 justify-center items-center z-[3] rounded-xl`}
          >
            {/* IMAGE */}
            <div
              className={`w-[110px] h-[110px] rounded-full border-rounded ${
                lightmode ? "border-zinc-300" : " border-zinc-700"
              } border-[3px]`}
            >
              <img src={userData?.profilePic} alt="userImage" />
            </div>

            <div
              className={`p-2  rounded-t-xl border-b-0 border-[1px] ${
                lightmode
                  ? "border-zinc-500/50 bg-gradient-gray-light"
                  : "border-zinc-500/30 bg-gradient-gray"
              } `}
            >
              {/* NAME AND TAG */}
              <div
                className={`px-5 py-2 gap-1  flex flex-col items-center justify-between border-[1px] ${
                  lightmode
                    ? "bg-gradient-gray-light border-zinc-500/70"
                    : "border-zinc-500/30 bg-gradient-gray "
                }   rounded-t-md `}
              >
                <h1 className="text-xl ">{userData?.username}</h1>
                <span className="text-xs">{userData?.tag}</span>
              </div>

              {/* CREDS */}
              <div
                className={`gap-5 rounded-b-md  border-[1px]  p-3 flex items-center justify-between text-normal ${
                  lightmode
                    ? "bg-gradient-gray-light   border-zinc-500/50"
                    : "bg-gradient-gray  border-zinc-500/20"
                } text-sm`}
              >
                <div className="flex flex-col items-center">
                  <Link to={`/${paramId}/following`}>Following</Link>
                  <span
                    className={`${lightmode ? "font-normal" : "font-light"} `}
                  >
                    {userData?.following?.length}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <h1>Likes</h1>
                  <span
                    className={`${lightmode ? "font-normal" : "font-light"} `}
                  >
                    {userData?.likes.length}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Link to={`/${paramId}/followers`}>Followers</Link>
                  <span
                    className={`${lightmode ? "font-normal" : "font-light"} `}
                  >
                    {userData?.followers?.length}
                  </span>
                </div>
              </div>

              {/* ADD FOLLOW */}
              {user?.id !== paramId && (
                <div>
                  <button
                    onClick={() => {
                      patchFollow();
                      !isFollowed && toast.success("Followed");
                      isFollowed && toast.success("Unfollowed");
                    }}
                    className={`mt-3 transition-all ease-in-out hover:bg-orange-400 w-full gap-1 bg-orange-500 flex items-center justify-center px-1 py-[3px]  rounded-lg`}
                  >
                    <>
                      {isFollowed ? (
                        <>
                          <SlUserUnfollow />
                          <span>Unfollow</span>
                        </>
                      ) : (
                        <>
                          <SlUserFollow />
                          <span>Follow</span>
                        </>
                      )}
                    </>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[2] ">
            <img
              // src={userData.bannerUrl}
              className="w-full h-full bg-no-repeat object-cover"
            />
            <div
              className={`absolute w-full h-full ${
                lightmode ? "banner-gradient-light" : "banner-gradient"
              }  top-0 bottom-0 left-0 right-0`}
            ></div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-2 ">
          <div
            className={`items-center justify-center h-10 flex gap-4 px-2  shadow-inner ${
              lightmode
                ? "bg-zinc-100 shadow-zinc-500/50"
                : "bg-zinc-900 shadow-orange-500/20"
            }    rounded-full`}
          >
            <button
              onClick={() => {
                setToggleAll(!toggleAll);
              }}
              className={`hover:bg-orange-500 text-sm px-2 py-1 rounded-full transition-all ease-in-out ${
                toggleAll && "bg-orange-500"
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                setToggleModels(!toggleModels);
              }}
              className={`hover:bg-orange-500 text-sm px-2 py-1 rounded-full transition-all ease-in-out ${
                toggleModels && "bg-orange-500"
              }`}
            >
              Models
            </button>
            <button
              onClick={() => {
                setToggleRender(!toggleRender);
              }}
              className={`hover:bg-orange-500 text-sm px-2 py-1 rounded-full transition-all ease-in-out ${
                toggleRender && "bg-orange-500"
              }`}
            >
              Render
            </button>
          </div>
        </div>

        {/* POSTS SECTION */}
        <main className="flex xl:w-[1250px] w-full  mx-3 md:flex-row flex-col pb-32">
          <div className={`  w-full h-full p-2`}>
            <div className={`flex  w-full pb-5`}>
              <div className="flex flex-wrap justify-center gap-10 p-5">
                {!posts ? (
                  <Loader />
                ) : (
                  <>
                    {posts
                      ?.slice(firstPostIndex, lastPostIndex)
                      .map((card, idx) => <Card data={card} key={idx} />)}
                  </>
                )}
              </div>
            </div>
            <Pagination
              totalPosts={posts?.length || 0}
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

export default UserProfile;
