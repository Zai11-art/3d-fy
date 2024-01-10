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
      include: {
        posts: {
          include: {
            likes: true,
          },
        },
        followers: true,
        following: true,
        likes: {
          include: {
            likes: true,
          },
        },
      },
    });

    console.log(user);
    console.log("pinged");

    res.status(200).json(user);
  } catch (err: any) {
    res.status(404).json({ message: err?.message });
  }
};

export const getFollowing = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    if (!userId) return res.status(404).json({ msg: "Unauthorized access." });

    const user = await prismadb.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        following: true,
      },
    });

    if (!user) return res.status(404).json({ msg: "User nonexistent." });

    res.status(200).json(user.following);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFollowers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) return res.status(404).json({ msg: "Unauthorized access." });

    const user = await prismadb.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        followers: true,
      },
    });

    if (!user) return res.status(404).json({ msg: "User nonexistent." });

    res.status(200).json(user.followers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchFollow = async (req: Request, res: Response) => {
  try {
    const { userId, followId } = req?.params;
    console.log("receive here");
    console.log(userId, followId);

    if (!userId) return res.status(404).json({ msg: "Unauthorized access." });

    const user = await prismadb.user.findUnique({
      where: { id: userId },
      include: { followers: true, following: true },
    });
    const toFollow = await prismadb.user.findUnique({
      where: { id: followId },
      include: { followers: true, following: true },
    });

    if (!user && !toFollow)
      return res.status(404).json({ msg: "User nonexistent." });

    if (user?.following.some((following) => following.id === followId)) {
      await prismadb.user.update({
        where: { id: followId },
        data: {
          followers: {
            disconnect: {
              id: userId,
            },
          },
        },
      });

      // user.following = user.following.filter((user) => user.id !== followId);
    } else {
      await prismadb.user.update({
        where: { id: userId },
        data: {
          following: {
            connect: {
              id: followId,
            },
          },
        },
      });
    }

    res.status(200).json({ toFollow });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
