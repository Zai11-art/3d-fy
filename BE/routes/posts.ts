import express from "express";
import { getPost, uploadPost } from "../controllers/posts";
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

router.get("/:id", getPost);

export default router;
