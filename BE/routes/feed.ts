import express from "express";
import { getPosts } from "../controllers/posts.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadImage.js";

const router = express.Router();

// auth routes
router.get("/", getPosts);

export default router;
