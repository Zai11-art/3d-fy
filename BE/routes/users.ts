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

router.get("/", getUsers);
router.get("/:userId", getUser);

router.get("/:userId/following", getFollowing);
router.get("/:userId/followers", getFollowers);


router.patch('/:userId/:followId', patchFollow)

export default router;
