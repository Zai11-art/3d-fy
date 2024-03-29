import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import useMode from "../../hooks/state";
import { User } from "../../types/types";
import Loader from "../../components/loader";
import Avatar from "../../components/avatar";
import PageLayout from "../../layout/page-layout";
import { getFollowers, getUser } from "../../api/user";

const Following = () => {
  const { userId: paramId } = useParams();
  const token = useMode((state) => state.token);
  const user = useMode((state) => state.user);
  const lightmode = useMode((state) => state.isDarkMode);

  const { data: userData } = useQuery({
    queryKey: ["userData", paramId],
    queryFn: () => getUser(paramId, token),
    refetchOnMount: true,
  });

  const { data: followers } = useQuery({
    queryKey: ["following", paramId],
    queryFn: () => getFollowers(paramId, token),
    refetchOnMount: true,
  });

  return (
    <PageLayout>
      <div className="pt-16 w-full h-full items-center justify-center flex flex-col md:px-0 px-5">
        <div
          className={`gap-5 flex flex-col h-[750px] md:w-[500px] w-full border-[1px] px-5 pt-8 rounded-lg border-zinc-500/50 ${
            lightmode
              ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
              : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
          } items-center`}
        >
          {!followers && !userData ? (
            <div className="mt-12">
              <Loader />
            </div>
          ) : (
            <>
              {/* HEADER SECTION */}
              <div className="flex items-center justify-center w-full ">
                <h1 className="text-xl">
                  {`${userData?.username}`}'s Followers
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
              {followers?.length && followers?.length > 0 ? (
                <>
                  {/* CONTENT SECTION */}
                  {followers?.map((following: User, i: number) => (
                    <div
                      className={`border-[1px] p-3 rounded-lg border-zinc-500/50 ${
                        lightmode
                          ? "bg-gradient-gray-light text-black shadow-zinc-950/30 shadow-2xl"
                          : "bg-gradient-gray text-white shadow-orange-500/10 shadow-2xl"
                      } flex items-center justify-between w-full`}
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
                    </div>
                  ))}
                </>
              ) : (
                <div className="w-full text-center">
                  <h1 className="text-sm font-light text-normal">
                    Nothing to see here.
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Following;
