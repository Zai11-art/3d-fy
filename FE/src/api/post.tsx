import axios from "axios";
import { Post, User } from "../types/types";

export const getFeed = async (): Promise<Post[]> => {
  const feedPosts = await axios
    .get("http://localhost:8080/feed")
    .then((res) => res.data);

  return feedPosts;
};

export const getPost = async (id: string): Promise<Post> => {
  const post = await axios
    .get(`http://localhost:8080/posts/${id}`)
    .then((res) => res.data);

  return post;
};
