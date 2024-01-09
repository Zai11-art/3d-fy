import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { getFollowing } from "../../api/user";
import Avatar from "../../components/avatar";
import Divider from "../../components/divider";
import Loader from "../../components/loader";
import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import { User } from "../../types/types";

const Following = () => {
  const lightmode = useMode((state) => state.isDarkMode);

  // const {
  //   data: followingData,
  //   error,
  //   isError,
  //   isPending,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["following"],
  //   queryFn: () => getFollowing(userId),
  // });

  const { userId: paramId } = useParams();

  const token = useMode((state) => state.token);
  const user = useMode((state) => state.user);

  const [userData, setUserData] = useState<User>();

  // const { data: userData } = useQuery({
  //   queryKey: ["userData"],
  //   queryFn: () => getUser(`${paramId}`),
  // });
  useEffect(() => {
    getUser2();
  }, []);

  const getUser2 = async () => {
    const user = await axios
      .get(`http://localhost:8080/users/${paramId}`)
      .then((res) => res.data);

    setUserData(user);
  };

  const isFollowed = userData?.following.some(
    (follower) => follower.id === paramId
  );

  console.log(isFollowed);

  const patchFollow = async (followingId: string) => {
    try {
      const data = await axios
        .patch(`http://localhost:8080/users/${user?.id}/${followingId}`, {
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
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <div className="pt-16 w-full h-full items-center justify-center flex flex-col md:px-0 px-5">
        <div
          className={`gap-5 flex flex-col h-[750px] md:w-[500px] w-full border-[1px] px-5 pt-8 rounded-lg border-zinc-500/50 ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          } items-center `}
        >
          {!userData ? (
            <div className="mt-12">
              <Loader />
            </div>
          ) : (
            <>
              {/* HEADER SECTION */}
              <div className="flex items-center justify-center w-full ">
                <h1 className="text-xl">
                  {`${userData?.username}`}'s Following
                </h1>
              </div>
              <input
                type="text"
                placeholder="Search"
                className={`transition-all w-full ease-in-out border-[1px] text-sm px-2 py-1 ${
                  lightmode
                    ? "bg-slate-200/90  shadow-inner  border-zinc-500 text-black"
                    : "bg-zinc-950  border-zinc-500/50 text-white"
                }  p-1 rounded-md focus:outline-none focus:border-orange-500 focus:ring-[1.5px] focus:ring-orange-500`}
              />

              {/* MAIN SECTION */}
              <div className="w-full">
                {userData?.following.length > 0 ? (
                  <>
                    {userData?.following.map((following: User, i: number) => (
                      <>
                        <div
                          className={`border-[1px] p-3 rounded-lg border-zinc-500/50 ${
                            lightmode
                              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
                              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
                          } flex items-center justify-between`}
                          // to={`/${following.id}/profile`}
                          key={i}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <Link to={`/${following.id}/profile`}>
                              <Avatar url={following.profilePic} />
                            </Link>
                            <div className="flex-col flex">
                              <span>{following.username}</span>
                              <span className="text-sm">{following.tag}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              patchFollow(following.id);
                              !isFollowed && toast.success("Followed");
                              isFollowed && toast.success("Unfollowed");
                            }}
                            className={` text-sm transition-all ease-in-out hover:bg-orange-400 w- gap-1 bg-orange-500 flex items-center justify-center px-1 py-[3px]  rounded-md`}
                          >
                            <>
                              {!isFollowed ? (
                                <>
                                  <span>Unfollow</span>
                                </>
                              ) : (
                                <>
                                  <span>Follow</span>
                                </>
                              )}
                            </>
                          </button>
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <div className="w-full mt-5 text-center ">
                    <h1 className="text-sm font-light text-normal">
                      Nothing to see here.
                    </h1>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Following;
