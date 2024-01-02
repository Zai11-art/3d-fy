import { ControllerProps } from "../types/types";
import { PrismaClient } from "@prisma/client";

export const getPosts = async ({ req, res }: ControllerProps) => {
  try {
    console.log(req);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
