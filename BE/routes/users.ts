import express from "express";
import { getUser, getUsers } from "../controllers/users.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:userId", getUser);
router.get("/", getUsers);

export default router;
