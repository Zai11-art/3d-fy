import axios from "axios";
import { User } from "../types/types";

export const getUser = async (userId: string | undefined): Promise<User> => {
  const user = await axios
    .get(`http://localhost:8080/users/${userId}`)
    .then((res) => res.data);

  return user;
};
