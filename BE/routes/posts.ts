import express from "express";
import { getPost, getPosts, patchLike, postComment, uploadPost } from "../controllers/posts";
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
router.get("/:id/all", getPosts);

// LIKE POSTS
router.patch("/:postId/:userId", patchLike);

router.post("/comment/:postId/:userId", postComment);

export default router;
