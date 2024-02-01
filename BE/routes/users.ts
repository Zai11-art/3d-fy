import express from "express";
import {
  getFollowers,
  getFollowing,
  getUser,
  getUsers,
  patchFollow,
  updatePasswordSettings,
  updateUserSettings,
} from "../controllers/users.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUsers);
router.get("/:userId", authMiddleware, getUser);

router.get("/:userId/following", authMiddleware, getFollowing);
router.get("/:userId/followers", authMiddleware, getFollowers);

// FOLLOW/UNFOLLOW USER
router.patch("/:userId/patchFollow", authMiddleware, patchFollow);

// UPDATING USER SETTINGS
router.put("/:userId/update", updateUserSettings);
router.put("/:userId/update/pass", updatePasswordSettings);

export default router;
