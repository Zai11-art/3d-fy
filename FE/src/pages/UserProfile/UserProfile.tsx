import React from "react";
import CardList, { dummycardData } from "../../components/3d-sample-cardlist";
import PageLayout from "../../layout/page-layout";
import { useState } from "react";
import Card from "../../components/card-sample";
import Pagination from "../../components/pagination";
import useMode from "../../hooks/state";

const userData = {
  imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  bannerUrl:
    "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-modern-blue-networking-tech-wallpaper-with-golden-hexagons-in-3d-render-image_3618505.jpg",
  userName: "Brandon",
  tag: "Damodeller",
  followers: 22,
  following: 50,
  likes: 2500,
};

const tabs = ["All", "Models", "Render", "Likes"];

const UserProfile = () => {
  const [clicked, setClicked] = useState("");
  console.log(clicked);

  // for pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const lightmode = useMode((state) => state.isDarkMode);

  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col gap-5 items-center">
        {/* BANNER */}
        <div className="w-full md:h-[350px] h-[325px]  flex flex-col gap-4 justify-center items-center relative">
          <div
            className={`px-3 py-5 flex flex-col gap-5 justify-center items-center z-[3] rounded-xl`}
          >
            {/* IMAGE */}
            <div
              className={`w-[110px] h-[110px] rounded-full border-rounded ${
                lightmode ? "border-zinc-300" : " border-zinc-700"
              } border-[3px]`}
            >
              <img src={userData.imageUrl} alt="userImage" />
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
                <h1 className="text-xl ">{userData.userName}</h1>
                <span className="text-xs">{userData.tag}</span>
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
                  <h1>Following</h1>
                  <span
                    className={`${lightmode ? "font-normal" : "font-light"} `}
                  >
                    {userData?.following}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <h1>Likes</h1>
                  <span
                    className={`${lightmode ? "font-normal" : "font-light"} `}
                  >
                    {userData?.likes}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <h1>Followers</h1>
                  <span
                    className={`${lightmode ? "font-normal" : "font-light"} `}
                  >
                    {userData?.followers}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[2] ">
            <img
              src={userData.bannerUrl}
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
        <div
          className={`items-center justify-center h-10 flex gap-4 px-2  shadow-inner ${
            lightmode ? "bg-zinc-100 shadow-zinc-500/50" : "bg-zinc-900 shadow-orange-500/20"
          }    rounded-full`}
        >
          {tabs.map((tab) => (
            <button
              onClick={() => {
                setClicked(tab);
              }}
              className={`hover:bg-orange-500 text-sm px-2 py-1 rounded-full transition-all ease-in-out ${
                clicked === tab ? "bg-orange-500" : null
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* POSTS SECTION */}
        <main className="flex xl:w-[1250px] w-full  mx-3 md:flex-row flex-col pb-32">
          <div className={`  w-full h-full p-2`}>
            <div className={`flex  w-full pb-5`}>
              <div className="flex flex-wrap justify-center gap-10 p-5">
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
      </div>
    </PageLayout>
  );
};

export default UserProfile;
