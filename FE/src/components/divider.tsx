import useMode from "../hooks/state";

const Divider = () => {
  const lightmode = useMode((state) => state.isDarkMode);

  return (
    <div
      className={`h-[0.5px] w-full md:my-3 sm:my-1 my-3 ${
        lightmode ? "bg-zinc-900/20" : "bg-zinc-500"
      }`}
    ></div>
  );
};

export default Divider;
