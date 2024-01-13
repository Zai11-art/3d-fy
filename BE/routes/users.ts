import express from "express";
import {
  getFollowers,
  getFollowing,
  getUser,
  getUsers,
  patchFollow,
} from "../controllers/users.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUsers);
router.get("/:userId", authMiddleware, getUser);

router.get("/:userId/following", authMiddleware, getFollowing);
router.get("/:userId/followers", authMiddleware, getFollowers);

router.patch("/:userId/:followId", authMiddleware, patchFollow);

export default router;
