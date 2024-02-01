import axios from "axios";
import toast from "react-hot-toast";
import { User } from "../types/types";

export const getUser = async (
  userId: string | undefined,
  token: string | undefined | null
): Promise<User> => {
  const res = await axios.get(`http://localhost:8080/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};

export const getFollowing = async (
  userId: string | undefined,
  token: string | undefined | null
): Promise<User[]> => {
  const followings = await axios
    .get(`http://localhost:8080/users/${userId}/following`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

  return followings;
};

export const getFollowers = async (
  userId: string | undefined,
  token: string | undefined | null
): Promise<User[]> => {
  const followers = await axios
    .get(`http://localhost:8080/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

  return followers;
};

export const patchFollow = async (
  followingId: string | undefined | null,
  userId: string | undefined | null,
  token: string | undefined | null,
  setLoading: (value: boolean) => void,
  refetcher: () => void
) => {
  try {
    setLoading(true);
    const res = await axios.patch(
      `http://localhost:8080/users/${userId}/patchFollow`,
      { followId: followingId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data) {
      toast.success("Followed.");
      console.log(res.data);
      refetcher();
    }
  } catch (error) {
    toast.error("Following failed. please try again.");
  } finally {
    setLoading(false);
  }
};
