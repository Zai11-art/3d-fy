import { PrismaClient } from "@prisma/client";
import prismadb from "../prisma/prismadb.js";
import { ControllerProps } from "../types/types";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prismadb.user.findMany();
    const parsedUsers = users.map((user) => {
      // @ts-ignore
      delete user?.password;
    });
    res.status(200).json(parsedUsers);
  } catch (err: any) {
    res.status(404).json({ message: err?.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) return res.status(404).json({ message: "Access denied." });

    const user = await prismadb.user.findFirst({
      where: {
        id: userId,
      },
      include: { posts: true, followers: true, following: true },
    });

    console.log(userId);
    console.log("pinged");

    res.status(200).json(user);
  } catch (err: any) {
    res.status(404).json({ message: err?.message });
  }
};
