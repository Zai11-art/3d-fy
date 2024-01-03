import express from "express";
import { getPosts } from "../controllers/posts";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, getPosts);

export default router;
