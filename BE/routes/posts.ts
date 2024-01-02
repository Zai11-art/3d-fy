import express from "express";
import { getPosts } from "../controllers/posts";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/posts", authMiddleware, getPosts);

export default router;
