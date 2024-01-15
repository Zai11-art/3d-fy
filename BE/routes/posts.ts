import express from "express";
import {
  deleteComment,
  deletePost,
  getAllUserPost,
  getComments,
  getModelUserPost,
  getPost,
  getPosts,
  getRenderUserPost,
  patchLike,
  postComment,
  uploadPost,
} from "../controllers/posts";
import { getUser } from "../controllers/users";
import { authMiddleware } from "../middleware/authMiddleware";
import { upload3d } from "../middleware/uploadImage";

const router = express.Router();

// CREATE POSTS
router.post(
  "/upload",
  authMiddleware,
  upload3d("post-3dfile").single("file"),
  uploadPost
);

// POST
router.get("/:id", authMiddleware, getPost);
router.delete("/:id", authMiddleware, deletePost);

// GET POSTS FOR TABBING
router.get("/:id/all", getAllUserPost);
router.get("/:id/models", getModelUserPost);
router.get("/:id/render", getRenderUserPost);

// LIKE POSTS
router.patch("/:postId", authMiddleware, patchLike);

// GET COMMENTS
router.get("/:postId/comments", authMiddleware, getComments);

// CREATE COMMENT
router.post("/comment/:postId/:userId", authMiddleware, postComment);

// DELETE COMMENT
router.delete("/comment/:commentId", authMiddleware, deleteComment);

export default router;
