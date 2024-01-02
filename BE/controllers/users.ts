import { PrismaClient } from "@prisma/client";
import prismadb from "../prisma/prismadb.js";
import { ControllerProps } from "../types/types";

const getUsers = async ({ req, res }: ControllerProps) => {
  try {
    const users = await prismadb.user.findMany();

    res.status(200).json(users);
  } catch (err: any) {
    res.status(404).json({ message: err?.message });
  }
};

export default getUsers;
