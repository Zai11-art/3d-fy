import axios from "axios";
import { Post, User } from "../types/types";

//  ALL FOR FEED
export const getFeed = async (): Promise<Post[]> => {
  const feedPosts = await axios
    .get("http://localhost:8080/feed")
    .then((res) => res.data);

  return feedPosts;
};

export const getModels = async (): Promise<Post[]> => {
  const models = await axios
    .get("http://localhost:8080/feed/models")
    .then((res) => res.data);

  return models;
};

export const getRenders = async (): Promise<Post[]> => {
  const renders = await axios
    .get("http://localhost:8080/feed/render")
    .then((res) => res.data);

  return renders;
};

// FOR USER
export const getAllUserPost = async (id: string): Promise<Post[]> => {
  const allPosts = await axios
    .get(`http://localhost:8080/posts/${id}/all`)
    .then((res) => res.data);

  return allPosts;
};

export const getModelUserPost = async (id: string): Promise<Post[]> => {
  const models = await axios
    .get(`http://localhost:8080/posts/${id}/models`)
    .then((res) => res.data);

  return models;
};

export const getRenderUserPost = async (id: string): Promise<Post[]> => {
  const renders = await axios
    .get(`http://localhost:8080/posts/${id}/render`)
    .then((res) => res.data);

  return renders;
};
