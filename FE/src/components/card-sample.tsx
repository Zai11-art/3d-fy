import Avatar from "./avatar";
import useMode from "../hooks/state";
import { Post } from "../types/types";
import useModelModal from "../hooks/use-model-modal";

const Card = ({ data }: { data: Post }) => {
  const lightmode = useMode((state) => state.isDarkMode);
  const modal = useModelModal();
  console.log("test here");
  console.log(data);

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
      <div className="">
        <img
          src={data?.filePath}
          alt={data?.username}
          className="w-full h-full"
        />
      </div>

      <div
        className={`mt-3 rounded-b-xl ${
          lightmode ? "text-black" : "text-white"
        } `}
      >
        <div className=" flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default Card;
