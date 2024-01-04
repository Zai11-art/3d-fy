import express from "express";
import { login, register } from "../controllers/auth.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadImage.js";

const router = express.Router();

// auth routes
router.post("/login", authMiddleware, login);
router.post(
  "/register",
  upload("user-profile-pic").single("profilePic"),
  register
);

export default router;
