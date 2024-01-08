import axios from "axios";
import { User } from "../types/types";

export const getUser = async (userId: string | undefined): Promise<User> => {
  const user = await axios
    .get(`http://localhost:8080/users/${userId}`)
    .then((res) => res.data);

  return user;
};

export const getFollowing = async (
  userId: string | undefined
): Promise<User[]> => {
  const followings = await axios
    .get(`http://localhost:8080/users/${userId}/following`)
    .then((res) => res.data);

  return followings;
};

export const getFollowers = async (
  userId: string | undefined
): Promise<User[]> => {
  const followers = await axios
    .get(`http://localhost:8080/users/${userId}/followers`)
    .then((res) => res.data);

  return followers;
};

export const follow = async (
  userId: string | undefined,
  followId: string | undefined,
  token: string | undefined
) => {
  const follow = await axios
    // @ts-ignore
    .patch(`http://localhost:8080/users/${userId}/${followId}`, _, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);

  return follow;
};
