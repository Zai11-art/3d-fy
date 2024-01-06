import express from "express";
import { uploadPost } from "../controllers/posts";
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

export default router;
