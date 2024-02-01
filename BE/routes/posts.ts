import express from "express";
import {
  addPostViews,
  deleteComment,
  deletePost,
  getAllUserPost,
  getComments,
  getModelUserPost,
  getPost,
  getRenderUserPost,
  patchLike,
  postComment,
  updateComment,
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
router.delete("/:postId", authMiddleware, deletePost);

// GET POSTS FOR TABBING
router.get("/:id/all", getAllUserPost);
router.get("/:id/models", getModelUserPost);
router.get("/:id/render", getRenderUserPost);

// LIKE POSTS
router.patch("/:postId", authMiddleware, patchLike);

// ADD VIEWS ON POST
router.patch("/:postId/addViews", authMiddleware, addPostViews);

// GET COMMENTS
router.get("/:postId/comments", authMiddleware, getComments);

// CREATE COMMENT
router.post("/comment/:postId/:userId", authMiddleware, postComment);

// DELETE COMMENT
router.delete("/comment/:commentId", authMiddleware, deleteComment);

// UPDATE COMMENT
router.patch("/comment/:commentId", authMiddleware, updateComment);

export default router;
