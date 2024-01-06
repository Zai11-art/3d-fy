import { ControllerProps } from "../types/types";
import { Response, Request } from "express";
import prismadb from "../prisma/prismadb";

export const uploadPost = async (req: Request, res: Response) => {
  try {
    const { title, description, tags, userId } = req.body;
    const file = (req.file as Express.MulterS3.File).location;

    const uploadedPost = await prismadb.post.create({
      data: {
        title,
        tags,
        description,
        filePath: file,
        views: 0,
        likes: 0,
        userId: userId,
      },
    });

    console.log(title);

    res.status(202).json(uploadedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async ({ req, res }: ControllerProps) => {
  try {
    console.log(req);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
