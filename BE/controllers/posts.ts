import { ControllerProps } from "../types/types";
import { Response, Request } from "express";
import prismadb from "../prisma/prismadb";

export const uploadPost = async (req: Request, res: Response) => {
  try {
    const { title, description, tags, userId } = req.body;
    console.log("id here");
    console.log(userId);
    const file = (req.file as Express.MulterS3.File).location;

    const user = await prismadb.user.findFirst({ where: { id: userId } });
    console.log("user here");
    console.log(user);
    const uploadedPost = await prismadb.post.create({
      data: {
        userId,
        title,
        username: user?.username,
        tag: user?.tag,
        userImage: user?.profilePic,
        tags,
        description,
        filePath: file,
        views: 0,
        likes: 0,
      },
    });

    console.log(title);

    res.status(202).json(uploadedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prismadb.post.findMany();

    const parsedPosts = await Promise.all(
      posts.map(async (post) => {
        const user = await prismadb.user.findFirst({
          where: {
            // @ts-ignore
            id: post?.userId,
          },
        });

        const parsedPostData = {
          ...post,
          profileImage: user?.profilePic,
          author: user?.username,
        };

        return parsedPostData;
      })
    );

    console.log(parsedPosts);

    res.status(200).json(parsedPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);

    if (!id) return res.status(404).json("Unauthorized access.");

    const post = await prismadb.post.findFirst({ where: { id: id } });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
