import { ControllerProps } from "../types/types";
import { Response, Request } from "express";
import prismadb from "../prisma/prismadb";

// POST CONTROLLERS
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
    const posts = await prismadb.post.findMany({ include: { likes: true } });

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

    const post = await prismadb.post.findFirst({
      where: { id: id },
      include: { likes: true, comments: true },
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchLike = async (req: Request, res: Response) => {
  try {
    const { postId, userId } = req.params;

    if (!userId) return res.status(404).json({ msg: "Unauthorized" });
    const user = await prismadb.user.findFirst({
      where: { id: userId },
      include: { likes: true },
    });

    if (!postId) return res.status(404).json({ msg: "Post not found" });
    const post = await prismadb.post.findUnique({
      where: { id: postId },
      include: { likes: true },
    });

    if (post?.likes.some((likers) => likers.id === userId)) {
      await prismadb.post.update({
        where: { id: postId },
        data: {
          likes: {
            disconnect: {
              id: userId,
            },
          },
        },
      });

      await prismadb.user.update({
        where: { id: userId },
        data: {
          likes: {
            disconnect: {
              id: postId,
            },
          },
        },
      });
    } else {
      await prismadb.post.update({
        where: { id: postId },
        data: {
          likes: {
            connect: {
              id: userId,
            },
          },
        },
      });

      await prismadb.user.update({
        where: { id: userId },
        data: {
          likes: {
            connect: {
              id: postId,
            },
          },
        },
      });
    }

    res.status(200).json({ post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// COMMENT

export const postComment = async (req: Request, res: Response) => {
  try {
    const { postId, userId } = req.params;
    const { content } = req.body;
    console.log("check here");
    console.log(postId, userId);
    console.log(content);

    if (!userId) return res.status(404).json({ msg: "Unauthorized." });
    const user = await prismadb.user.findFirst({ where: { id: userId } });

    if (!postId) return res.status(404).json({ msg: "Post not found!" });

    const comment = await prismadb.comment.create({
      data: {
        content: content,
        postId: postId,
        username: user?.username,
        userId: user?.id,
        userImage: user?.profilePic,
        tag: user?.tag,
      },
    });

    console.log("comment here");
    console.log(comment);

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
