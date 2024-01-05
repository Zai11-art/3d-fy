import useMode from "../../hooks/state";
import PageLayout from "../../layout/page-layout";
import LineChart from "../../components/line-chart";
import Divider from "../../components/divider";
import Avatar from "../../components/avatar";
import { FaCog } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { BiSolidLike } from "react-icons/bi";
import { BsFilePostFill } from "react-icons/bs";
import { AiTwotoneInteraction } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaEye, FaRegUser, FaUserTag } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import useConfirmationModal from "../../hooks/use-confirmation-modal";
import Loader from "../../components/loader";
import { Link, Router } from "react-router-dom";
import { useRouter } from "next/navigation";

const data = [
  {
    id: "24hr",
    data: [
      {
        x: "24:00",
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

  const questionData = {
    title: "Save these changes?",
    description: "This action is irreversible.",
  };

  return (
    <PageLayout>
      <div className="h-full w-full flex flex-col items-center justify-center xl:px-5 px-4 pb-32">
        {/* DASHBOARD SECTION */}
        <div
          className={`xl:w-[1250px] w-full xl:flex-row flex-col xl:h-[475px] h-full p-4 gap-3 ${
            lightmode
              ? "bg-gradient-gray-light border-zinc-500 shadow-lg shadow-zinc-500/50"
              : "bg-gradient-gray border-zinc-500/50"
          } mt-8 flex items-center justify-around rounded-t-xl border-[1px]`}
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
              className={`w-full h-[350px] mt-7 text-black  ${
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
            } h-full flex flex-col items-center justify-between border-[1px] p-6 gap-12`}
          >
            {/* USER CREDENTIALS */}
            <div className="h-12 w-full flex items-center justify-between">
              <div className="flex gap-2">
                <Avatar url="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

                <div className="flex flex-col">
                  <span className="text-sm">{user?.username}</span>
                  <span className="text-xs">{user?.tag}</span>
                </div>
              </div>

              <button type="button">
                <FaCog className="w-6 h-6" />
              </button>
            </div>

            {/* NUMERIC STATS */}
            <div className="flex gap-5 w-full xl:flex-wrap no-wrap  items-center justify-center">
              {[
                { label: "Views", data: 20323, icon: <FaEye /> },
                { label: "Likes", data: 2423, icon: <BiSolidLike /> },
                {
                  label: "Impressions",
                  data: 22426,
                  icon: <AiTwotoneInteraction />,
                },
                {
                  label: "Posts",
                  data: 10,
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
                    {stat.data.toLocaleString()}
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
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div
          className={`xl:w-[1250px] w-full  h-full p-4 gap-5 ${
            lightmode
              ? "bg-gradient-gray-light border-zinc-500 shadow-lg shadow-zinc-500/50"
              : "bg-gradient-gray border-zinc-500/50"
          } flex flex-col items-center justify-around rounded-b-xl border-[1px]`}
        >
          <div className="w-full h-full flex gap-5 md:flex-row flex-col">
            {/* DESCRIPTION SECTION */}
            <div
              className={`w-full rounded-xl  ${
                lightmode
                  ? "bg-gradient-gray-light border-zinc-400 shadow-md shadow-zinc-500/20"
                  : "bg-gradient-gray border-zinc-500/30"
              } xl:h-full h-[280px] flex flex-col  border-[1px] p-7`}
            >
              <div className="w-full flex justify-between">
                <span className="flex items-center gap-2">
                  <FaRegUser className="text-xl" />
                  <h1 className="text-lg">Description</h1>
                </span>

                <div className="flex gap-1"></div>
              </div>

              <Divider />

              <textarea
                name=""
                id=""
                className={`text-normal font-light ${
                  lightmode
                    ? "bg-zinc-100 text-black font-normal shadow-inner shadow-zinc-500/40"
                    : "bg-black text-white"
                }  p-2 rounded-lg text-sm w-full xl:h-[160px] h-full  border-[1px] border-zinc-500/80`}
              >
                {user?.bio}
              </textarea>
              <p
                className={`text-normal ${
                  lightmode ? "font-normal" : "font-light"
                }  text-[0.85rem] text-justify`}
              ></p>
            </div>

            {/* USER INFO SECTION */}
            <div
              className={`w-full rounded-xl  ${
                lightmode
                  ? "bg-gradient-gray-light border-zinc-400 shadow-md shadow-zinc-500/20"
                  : "bg-gradient-gray border-zinc-500/30"
              } h-full flex flex-col  border-[1px] p-7`}
            >
              <div className="flex w-full h-full md:flex-row flex-col">
                {/* TEXT CREDS */}
                <div className=" w-full h-full p-2 ">
                  <div className="w-full flex-col gap-4 flex justify-between">
                    <span className="flex items-center gap-2">
                      <MdDriveFileRenameOutline className="text-lg" />
                      <div className="flex flex-col">
                        <h1 className="text-sm">Username</h1>
                      </div>
                    </span>

                    <div className="flex gap-1">
                      <input
                        type="text"
                        className={`rounded-lg bg-black ${
                          lightmode
                            ? "bg-zinc-100 text-black font-normal shadow-inner shadow-zinc-500/40"
                            : "bg-black text-white"
                        } border-[1px] border-zinc-500/60 text-normal font-light py-2 px-2 text-sm w-full`}
                        placeholder={user?.username}
                      />
                    </div>
                  </div>
                  <Divider />
                  <div className="w-full flex-col gap-4 flex justify-between">
                    <span className="flex items-center gap-2">
                      <FaUserTag className="text-lg" />
                      <div className="flex flex-col">
                        <h1 className="text-sm">Tag</h1>
                      </div>
                    </span>

                    <div className="flex gap-1">
                      <input
                        type="text"
                        className={`rounded-lg bg-black ${
                          lightmode
                            ? "bg-zinc-100 text-black font-normal shadow-inner shadow-zinc-500/40"
                            : "bg-black text-white"
                        } border-[1px] border-zinc-500/60 text-normal font-light py-2 px-2 text-sm w-full`}
                        placeholder={user?.tag}
                      />
                    </div>
                  </div>
                  <Divider />
                </div>
                {/* IMAGE */}
                <div className="flex w-full  flex-col p-1 gap-5 items-center">
                  <div className="text-sm gap-2 w-full flex items-center">
                    <RxAvatar className="w-5 h-5" />
                    <span>Change Avatar</span>
                  </div>
                  <div className="w-full h-full  border-[1px] border-zinc-500/50 rounded-lg flex items-center justify-center ">
                    <img
                      className="w-[120px] h-[120px] m-3"
                      src={
                        user?.profilePic
                          ? user.profilePic
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt="user"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex my-1 p-1 gap-2">
            <button
              onClick={() => modal.onOpen(questionData)}
              className={`px-3 py-2 flex rounded-full ${
                lightmode
                  ? "bg-orange-500 hover:bg-orange-400 shadow-md shadow-zinc-950/20"
                  : "bg-orange-600 hover:bg-orange-500"
              }   text-white font-normal text-xs transition-all ease-in-out`}
            >
              Save changes
            </button>
            <Link
              to={"/user"}
              className={`px-3 py-2 flex rounded-full ${
                lightmode
                  ? "bg-green-500 hover:bg-green-400 shadow-md shadow-zinc-950/20"
                  : "bg-green-600 hover:bg-green-500"
              }   text-white font-normal text-xs transition-all ease-in-out`}
            >
              Go to Profile
            </Link>
          </div>
        </div>

        {/* <div className="lg:w-[1250px] w-full h-[400px] bg-[red] p-1 mb-16 mt-10 flex items-center justify-around">
          <h1>Posts</h1>
        </div> */}
      </div>
    </PageLayout>
  );
};

export default Dashboard;
