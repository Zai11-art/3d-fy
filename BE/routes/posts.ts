import express from "express";
import {
  getAllUserPost,
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

// GET POSTS
router.get("/:id", getPost);

// GET POSTS FOR TABBING
router.get("/:id/all", getAllUserPost);
router.get("/:id/models", getModelUserPost);
router.get("/:id/render", getRenderUserPost);

// LIKE POSTS
router.patch("/:postId/:userId", patchLike);
router.post("/comment/:postId/:userId", postComment);

export default router;
