import bcrypt from "bcrypt";
import { Request, Response } from "express";

import prismadb from "../prisma/prismadb.js";

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
            comments: true,
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
    const { userId } = req?.params;
    const { followId } = req?.body;

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

export const updateUserSettings = async (req: Request, res: Response) => {
  try {
    const { userId } = req?.params;
    const { email, username, tag, bio, profilePic } = req.body;

    if (!userId) return res.status(401).json({ msg: "Unauthorizezd Access." });
    const foundUser = await prismadb.user.findUnique({
      where: { id: userId },
    });

    if (!foundUser) return res.status(401).json({ msg: "User Not Found." });

    const user = await prismadb.user.update({
      where: { id: userId },
      data: {
        email: email,
        username: username,
        tag: tag,
        bio: bio,
        profilePic: profilePic,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(505).json({ error: err.message });
  }
};

export const updatePasswordSettings = async (req: Request, res: Response) => {
  try {
    const { userId } = req?.params;
    const { currentPassword, password } = req.body;

    if (!userId) return res.status(401).json({ msg: "Unauthorized access." });
    const user = await prismadb.user.findUnique({ where: { id: userId } });
    const userMatch = await bcrypt.compare(
      currentPassword,
      user?.password || ""
    );

    if (!userMatch) return res.status(401).json({ msg: "User not found." });

    console.log("result here");
    console.log(userMatch);

    const salt = await bcrypt.genSalt();
    const pwordHash = await bcrypt.hash(password, salt);

    const updatedUser = await prismadb.user.update({
      where: { id: userId },
      data: { password: pwordHash },
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(505).json({ error: err.message });
  }
};
