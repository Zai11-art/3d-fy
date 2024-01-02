import express from "express";
import getUsers from "../controllers/users.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUsers);

export default router;
