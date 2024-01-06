import { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import useMode from "../hooks/state";
import Dropzone from "react-dropzone";
import toast from "react-hot-toast";
import { FaFile } from "react-icons/fa6";

const FileUpload = () => {
  const lightmode = useMode((state) => state.isDarkMode);
  const [fileName, setfileName] = useState([]);

  const handleOnDrop = (acceptedFiles) => {
    console.log(acceptedFiles);

    if (
      acceptedFiles.length <= 8 &&
      acceptedFiles[0].name.split(".").slice(-1)[0] === "glb"
    ) {
      setfileName(acceptedFiles);
      toast.success(`${acceptedFiles[0].name} uploaded successfully`);
    } else {
      toast.error(
        `${
          acceptedFiles[0].name.length > 20
            ? acceptedFiles[0].name.slice(0, 10) + "..."
            : acceptedFiles[0].name
        } upload failed. Use gltf or glb formats only`
      );
      return;
    }
  };

  return (
    <Dropzone onDrop={handleOnDrop}>
      {({ getRootProps, getInputProps }) => (
        <div className="w-full flex justify-center  ">
          <div
            {...getRootProps()}
            className={`text-white ${
              lightmode
                ? "bg-gradient-gray-light shadow-slate-700/30 shadow-2xl"
                : "bg-gradient-gray shadow-yellow-500/20 shadow-xl"
            }    border-dashed border-[2px] border-amber-500 w-full md:w-[800px] h-[500px] rounded-2xl md:mt-[50px] mt-12 flex flex-col items-center justify-center`}
          >
            <input {...getInputProps()} />

            {fileName.length > 0 ? (
              <div className="w-full justify-center items-center flex-wrap gap-5 flex p-10">
                {fileName.map((file) => (
                  <div
                    className={`flex items-center justify-center flex-col p-4 border-[1px] rounded-xl ${
                      lightmode
                        ? "bg-gradient-gray-light border-zinc-500/40 shadow-slate-700/30 shadow-2xl text-black"
                        : "bg-gradient-gray shadow-yellow-500/20 shadow-md border-zinc-500/50 text-white"
                    } gap-2`}
                  >
                    <div className="bg-orange-500 p-2 rounded-full">
                      <FaFile className="text-2xl text-white" />
                    </div>

                    <span className="text-xs ">
                      {file?.name.slice(0, 15) + "..."}
                    </span>
                    <span className="text-xs">
                      {Math.round(file?.size / 100000)} mb
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={`flex items-center cursor-pointer ${
                  lightmode ? "text-black" : "text-white"
                } justify-center flex-col rounded-xl p-3 border-[1px] border-[#505050] border-dashed`}
              >
                <MdDriveFolderUpload className="h-12 w-12 hover:scale-[1.2] transition-all ease-in-out" />
                <span className="font-thin mt-1 ">
                  {fileName.length > 0
                    ? fileName[0]?.name
                    : "Upload 3d files here"}
                </span>
              </div>
            )}

            <div className="w-full flex items-center justify-center ">
              {fileName.length > 0 && (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className={`mt-2 flex items-center p-1 px-2 border-[1px] border-yellow-200/40 rounded-md font-normal transition-all ease-in-out
            ${
              lightmode
                ? "bg-gradient-to-r from-amber-700/70 to-amber-900 hover:bg-amber-900 shadow-slate-900/40 shadow-md"
                : "bg-gradient-to-r from-amber-900/50 to-amber-900 hover:bg-amber-500"
            }`}
                >
                  View This Model
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default FileUpload;
