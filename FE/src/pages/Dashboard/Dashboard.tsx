import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import LineChart from "../../components/line-chart";
import Divider from "../../components/divider";
import Avatar from "../../components/avatar";
import axios from "axios";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { ImStatsBars } from "react-icons/im";
import { BiSolidLike } from "react-icons/bi";
import { BsFilePostFill } from "react-icons/bs";
import { AiTwotoneInteraction } from "react-icons/ai";

import { User } from "../../types/types";
import Loader from "../../components/loader";
import { useMediaQuery } from "../../hooks/use-media-query";
import useConfirmationModal from "../../hooks/use-confirmation-modal";

export const dateStyle = (receivedDate: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const reformattedDate: string = new Date(receivedDate).toLocaleDateString(
    undefined,
    options
  );
  return reformattedDate;
};

const data = [
  {
    id: "24hr",
    data: [
      {
        x: `24:00`,
        y: 149,
      },
      {
        x: "2:00",
        y: 155,
      },
      {
        x: "4:00",
        y: 23,
      },
      {
        x: "6:00",
        y: 217,
      },
      {
        x: "8:00",
        y: 99,
      },
      {
        x: "10:00",
        y: 139,
      },
      {
        x: "12:00",
        y: 10,
      },
      {
        x: "14:00",
        y: 244,
      },
      {
        x: "16:00",
        y: 255,
      },
      {
        x: "18:00",
        y: 239,
      },
      {
        x: "20:00",
        y: 33,
      },
      {
        x: "22:00",
        y: 300,
      },
    ],
  },
];

const Dashboard = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modal = useConfirmationModal();
  const user = useMode((state) => state.user);
  const token = useMode((state) => state.token);
  const md = useMediaQuery("(min-width:1200px)");
  const [userData, setUserData] = useState<User>();
  console.log(userData);

  const views =
    userData?.posts.reduce((acc, curr) => acc + +curr?.views, 0) || 0;
  const likes =
    userData?.posts.reduce((acc, curr) => acc + +curr.likes.length, 0) || 0;
  const comments =
    userData?.posts.reduce((acc, curr) => acc + +curr.comments.length, 0) || 0;

  const impressions = `${views + likes + comments}`;

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/${user?.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const res = response?.data;
      console.log(res);
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <PageLayout>
      <div className="h-full w-full flex flex-col items-center justify-center xl:px-5 px-4 pb-32">
        {/* DASHBOARD SECTION */}
        <div
          className={`xl:w-[1250px] w-full xl:flex-row flex-col xl:h-[600px] h-full p-4 gap-3 ${
            lightmode
              ? "bg-gradient-gray-light border-zinc-500 shadow-lg shadow-zinc-500/50"
              : "bg-gradient-gray border-zinc-500/50"
          } mt-16 flex items-center justify-around rounded-xl border-[1px]`}
        >
          {/* STATS SECTION */}
          <div
            className={`xl:w-[70%] w-full rounded-xl  ${
              lightmode
                ? "bg-gradient-gray-light border-zinc-400 shadow-md shadow-zinc-500/20"
                : "bg-gradient-gray border-zinc-500/30"
            } h-full flex flex-col justify-center border-[1px] p-7`}
          >
            <div className="w-full flex justify-between">
              <span className="flex items-center gap-2">
                <ImStatsBars className="text-2xl" />
                <h1 className="text-xl">Impressions</h1>
              </span>

              <select
                className={`text-[14px] text-normal text-light border-[1px] rounded-lg p-1 ${
                  lightmode
                    ? "shadow-inner shadow-zinc-950/40 border-zinc-400"
                    : " bg-black text-white border-zinc-600"
                }`}
              >
                {["24hr", "1Wk", "1Mos", "1Yr", "All"].map((type) => (
                  <option value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div
              className={`w-full ${
                md ? "h-[450px]" : "h-[300px]"
              }  mt-7 text-black  ${
                lightmode
                  ? "bg-zinc-100 border-[1px] border-zinc-950/20 shadow-inner shadow-zinc-950/20"
                  : "bg-black"
              }  p-2 rounded-xl `}
            >
              {!data ? <Loader /> : <LineChart data={data} />}
            </div>
          </div>

          {/* PROFILE SECTION */}
          <div
            className={`xl:w-[30%] w-full rounded-xl  ${
              lightmode
                ? "bg-gradient-gray-light border-zinc-400 shadow-md shadow-zinc-500/20"
                : "bg-gradient-gray border-zinc-500/30"
            } h-full flex flex-col items-center ${
              !userData ? "justify-center" : "justify-between"
            }  border-[1px] p-6 gap-12`}
          >
            {!userData ? (
              <Loader />
            ) : (
              <>
                {/* USER CREDENTIALS */}
                <div className="h-12 w-full flex items-center justify-between">
                  <div className="flex gap-2">
                    <Avatar url={userData?.profilePic} />

                    <div className="flex flex-col">
                      <span className="text-sm">{userData?.username}</span>
                      <span className="text-xs">{userData?.tag}</span>
                    </div>
                  </div>

                  <Link
                    to={`/user/settings`}
                    className="hover:text-orange-500"
                    type="button"
                  >
                    <FaCog className="w-6 h-6" />
                  </Link>
                </div>

                {/* NUMERIC STATS */}
                <div className="flex gap-5 w-full xl:flex-wrap no-wrap  items-center justify-center">
                  {[
                    { label: "Views", data: views, icon: <FaEye /> },
                    {
                      label: "Likes",
                      data: likes,
                      icon: <BiSolidLike />,
                    },
                    {
                      label: "Impressions",
                      data: impressions,
                      icon: <AiTwotoneInteraction />,
                    },
                    {
                      label: "Posts",
                      data: userData?.posts?.length,
                      icon: <BsFilePostFill />,
                    },
                  ].map((stat) => (
                    <div
                      className={`border-[1px] py-4 xl:w-[120px] ${
                        lightmode
                          ? "bg-gradient-gray-light border-zinc-400 shadow-zinc-950/30 shadow-inner"
                          : "bg-gradient-gray border-zinc-700"
                      } w-full gap-1  rounded-xl text-md flex flex-col justify-center items-center text-normal`}
                    >
                      <span className="text-xl">{stat.icon}</span>
                      <span className="text-xs ">{stat.label}</span>
                      <div className="text-sm font-bold">
                        {stat?.data?.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* USER SECTION FOOTER */}
                <div
                  className={`w-full h-11 transition-all ease-in-out ${
                    lightmode
                      ? "border-green-600 text-green-600 "
                      : "border-green-500 text-green-200 bg-green-950/20 hover:text-green-100 hover:scale-[1.01]"
                  }   rounded-full shadow-inner border-[1px]  font-bold flex items-center justify-center text-[13px]`}
                >
                  Impressions up by 93%!
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
