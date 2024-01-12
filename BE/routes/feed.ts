import express from "express";
import {
  getModelsPost,
  getPosts,
  getRendersPost,
} from "../controllers/posts.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadImage.js";

const router = express.Router();

// auth routes
router.get("/", getPosts);
router.get("/models", getModelsPost);
router.get("/render", getRendersPost);

export default router;
