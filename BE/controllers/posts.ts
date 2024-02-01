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
    const posts = await prismadb.post.findMany({
      include: { likes: true, comments: true },
    });

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

    res.status(200).json(parsedPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getModelsPost = async (req: Request, res: Response) => {
  try {
    const posts = await prismadb.post.findMany({
      include: { likes: true, comments: true },
      where: { tags: "model" },
    });

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

export const getRendersPost = async (req: Request, res: Response) => {
  try {
    const posts = await prismadb.post.findMany({
      include: { likes: true, comments: true },
      where: { tags: "render" },
    });

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

//  POSTS
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

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    console.log(postId);

    if (!postId) return res.status(404).json("Unauthorized access.");

    const post = await prismadb.post.delete({
      where: { id: postId },
    });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchLike = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { postId } = req.params;
    console.log(postId, userId);

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

// POST views increment
export const addPostViews = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const { viewCount } = req.body;

    console.log("here broooooooooooooo");
    console.log(postId);
    console.log(viewCount);
    const post = await prismadb.post.update({
      where: { id: postId },
      data: { views: viewCount + 1 },
    });

    res.status(200).json(post.views);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET FOR USER POSTS AND CATEGORIES
export const getAllUserPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).json({ msg: "Unauthorized Access." });

    const posts = await prismadb.post.findMany({
      where: { userId: id },
      include: { likes: true, comments: true },
    });

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

export const getModelUserPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).json({ msg: "Unauthorized Access." });

    const posts = await prismadb.post.findMany({
      where: { userId: id, tags: "model" },
      include: { likes: true, comments: true },
    });

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

export const getRenderUserPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).json({ msg: "Unauthorized Access." });

    const posts = await prismadb.post.findMany({
      where: { userId: id, tags: "render" },
      include: { likes: true, comments: true },
    });

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

// COMMENT

export const getComments = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;

    if (!postId) return res.status(202).json({ msg: "Post does not exist!" });
    const postComments = await prismadb.post.findUnique({
      where: { id: postId },
      include: { comments: true },
    });

    res.status(202).json(postComments?.comments);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

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

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    console.log(commentId);

    if (!commentId)
      return res.status(404).json({ msg: "Unauthorized access." });

    const comment = await prismadb.comment.delete({ where: { id: commentId } });

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    if (!commentId) return res.status(401).json({ msg: "Comment not found!" });

    const comment = await prismadb.comment.update({
      where: { id: commentId },
      data: { content: content },
    });

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
