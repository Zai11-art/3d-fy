import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useMode from "../hooks/state";
import { Comment, CommentType, OnsubmitPropsType, Post } from "../types/types";
import Avatar from "./avatar";
import * as yup from "yup";
import { RiSendPlane2Fill } from "react-icons/ri";
import Divider from "./divider";
import useInputModal from "../hooks/use-input-modal";
import useConfirmationModal from "../hooks/use-confirmation-modal";
import { LuClipboardEdit } from "react-icons/lu";
import { BiTrash } from "react-icons/bi";

const commentSchema = yup.object().shape({
  content: yup.string().notRequired().max(100),
});

const initialCommVal = {
  content: "",
};

// helpers
const textareaExtend = (e: React.FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = "auto";
  target.style.height = `${target.scrollHeight}px`;
};

const CommentSection = ({
  postId,
  getPost,
}: {
  postId: string | undefined;
  getPost: (postId: string | undefined) => void;
}) => {
  const lightmode = useMode((state) => state.isDarkMode);
  const user = useMode((state) => state.user);
  const token = useMode((state) => state.token);
  const [comments, setComments] = useState<Comment[]>();
  const [isLoading, setIsloading] = useState(false);

  // BUTTON MODALs
  const modeUpdate = useInputModal();
  const modeDelete = useConfirmationModal();

  const editComment = () => {
    console.log("hehe");
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const deleteComment = async (commentId: string) => {
    try {
      const deletedComment = await axios
        .delete(`http://localhost:8080/posts/comment/${commentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data);

      getPost(postId);
      if (deletedComment) {
        fetchComments();
        toast.success("Deleted reply.");
      }
    } catch (error) {
      toast.error("Deleting failed.");
    }
  };

  const fetchComments = async () => {
    try {
      const comments = await axios
        .get(`http://localhost:8080/posts/${postId}/comments`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data);

      if (!comments) return;

      setComments(comments);
    } catch (error) {
      toast.error("Error fetching comments.");
    }
  };

  const comment = async (
    values: CommentType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const comment = await axios.post(
        `http://localhost:8080/posts/comment/${postId}/${user?.id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setIsloading(true);
      fetchComments();
      getPost(postId);

      if (!comment) {
        setIsloading(false);
        toast.error("Failed commenting.");
      } else {
        toast.success(`Commented.`);
      }

      onSubmitProps.resetForm();
    } catch (error) {
      toast.error("Failed commenting.");
    } finally {
      setIsloading(false);
    }
  };

  const handleFormSubmitComm = async (
    values: CommentType,
    onSubmitProps: OnsubmitPropsType
  ) => {
    console.log(values);
    await comment(values, onSubmitProps);
  };

  return (
    <>
      <div className="flex flex-col gap-4 text-normal w-full">
        <div className="w-full h-full relative overflow-y-auto">
          <Formik
            //@ts-ignore
            initialValues={initialCommVal}
            onSubmit={handleFormSubmitComm}
            validationSchema={commentSchema}
          >
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              resetForm,
              errors,
              touched,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-2"
              >
                <div className="w-full items-center justify-between">
                  <h1 className="text-lg">Comments</h1>
                  {errors.content && touched.content && (
                    <div className="text-red-500 text-xs">{errors.content}</div>
                  )}
                </div>

                <div className="w-full flex gap-4">
                  <textarea
                    disabled={isLoading}
                    id="content"
                    name="content"
                    placeholder="Comment here..."
                    rows={2}
                    onInput={textareaExtend}
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full h-full flex p-2 rounded-md focus:outline-none focus:border-amber-500 focus:ring-[1.5px] focus:ring-amber-500 ${
                      lightmode
                        ? "bg-zinc-100 border-zinc-500/50 border-[1px]"
                        : "bg-zinc-950 border-zinc-500/50 border-[1px]"
                    }`}
                  />
                  <button type="submit" className=" right-2 inset-y-0">
                    <RiSendPlane2Fill
                      className={`text-2xl text-orange-500 hover:opacity-60 transition-all ease-in-out`}
                    />
                  </button>
                </div>
              </form>
            )}
          </Formik>

          <Divider />

          <div
            className={`${
              !comments && "animate-pulse"
            } gap-2 overflow-y-auto flex flex-col h-full`}
          >
            {comments &&
              comments.map((comment: Comment, i: number) => (
                <div key={i} className={`flex  h-full p-1 mt-2 text-normal `}>
                  <div
                    className={`flex flex-col h-full border-zinc-500/50 border-[1px] ${
                      lightmode
                        ? "bg-zinc-100 shadow-lg shadow-zinc-950/20"
                        : "bg-zinc-950 shadow-lg shadow-black"
                    }  p-4  justify-center rounded-xl gap-4 `}
                  >
                    <div className="flex h-full gap-3">
                      <Avatar url={comment.userImage} />
                      <div className={` flex flex-col  gap-2 `}>
                        <div className="flex items-center gap-2 ">
                          <span className="text-[14.5px]">
                            {comment.username}
                          </span>
                          <span className="text-xs ">
                            {comment.createdAt}
                            {/* {comment.content.length} */}
                          </span>
                        </div>
                        <p
                          style={{ overflowWrap: "anywhere" }}
                          className={`${
                            lightmode ? "font-normal" : "font-light"
                          } flex text-sm  `}
                        >
                          {comment.content}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-white flex-row-reverse gap-1">
                      {comment.userId === user?.id && (
                        <button
                          onClick={() => {
                            modeDelete.onOpen({
                              title: "Delete Comment?",
                              description: "This action is irreversible.",
                              method: () => deleteComment(comment.id),
                            });
                          }}
                          className="p-1 text-xs bg-red-600 hover:bg-red-400 rounded-full flex items-center justify-center"
                        >
                          <BiTrash className="text-lg" />
                        </button>
                      )}
                      {comment.userId === user?.id && (
                        <button
                          onClick={() =>
                            modeUpdate.onOpen({
                              title: "Edit Comment",
                              description: "This action is irreversible.",
                              content: `${comment.content}`,
                              commentId: `${comment.id}`,
                              method: () => editComment(),
                              refetcher: () => fetchComments(),
                            })
                          }
                          className="p-1 text-xs bg-blue-600 hover:bg-blue-400 rounded-full flex items-center justify-center"
                        >
                          <LuClipboardEdit className="text-lg" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSection;
