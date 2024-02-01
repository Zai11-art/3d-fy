import Avatar from "./avatar";
import useMode from "../hooks/state";
import { Post } from "../types/types";
import useModelModal from "../hooks/use-model-modal";
import { MdOutlineThumbUp } from "react-icons/md";
import { BiSolidComment } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Card = ({ data }: { data: Post }) => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modal = useModelModal();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => modal.onOpen(data)}
      className={`cursor-pointer rounded-md p-3 shadow-lg md:w-[320px] hover:scale-[1.004] transition-all ease-in-out w-full 
      ${
        lightmode
          ? "bg-slate-200 border-zinc-500/30  hover:shadow-2xl"
          : " bg-zinc-950  border-zinc-500/30  hover:shadow-amber-300/50 hover:shadow-md"
      } border-[1px] `}
    >
      <div className="w-[100%] flex items-center justify-center h-[200px] ">
        <img
          src={data?.filePath}
          alt={data?.username}
          className="w-[100%] h-[100%] aspect-square"
        />
      </div>

      <div
        className={`mt-3 rounded-b-xl ${
          lightmode ? "text-black" : "text-white"
        } `}
      >
        <div className=" flex items-center gap-2 w-full justify-between ">
          <div className="flex items-center gap-2">
            <Avatar url={data?.profileImage} />
            <div className="py-2">
              <span className="font-semibold text-md">{data?.title}</span>
              <span
                className={`font-thin block  text-[12px] ${
                  lightmode ? "text-slate-500" : "text-slate-300"
                } `}
              >
                author: {data?.username}
              </span>
            </div>
          </div>
          <div className=" flex gap-2">
            <div
              className={`border-[1px] border-orange-500/20 flex ${
                lightmode
                  ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                  : "bg-zinc-800"
              } px-2 md:p-1 p-[3px]  gap-1 rounded-md`}
            >
              <MdOutlineThumbUp
                className={` md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                  lightmode ? "text-slate-900" : "text-slate-300"
                }`}
              />
              <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                {`${data?.likes.length}`}
              </span>
            </div>
            <div
              className={`border-[1px] border-orange-500/20 flex ${
                lightmode
                  ? "bg-slate-200 shadow-inner shadow-slate-900/40"
                  : "bg-zinc-800"
              } px-2 md:p-1 p-[3px]  gap-1 rounded-md`}
            >
              <BiSolidComment
                className={` md:w-5 md:h-5 sm:w-4 sm:h-4 ${
                  lightmode ? "text-slate-900" : "text-slate-300"
                }`}
              />
              <span className="md:text-[13px] sm:text-[12.5px] text-[11px]">
                {`${data?.comments.length}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
