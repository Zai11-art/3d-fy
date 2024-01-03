import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { ControllerProps } from "../types/types";

const router = express.Router();

// auth routes
router.post("/login", authMiddleware);
router.post("/register", authMiddleware);

export default router;
