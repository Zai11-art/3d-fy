import { ControllerProps } from "../types/types";
import jwt, { Secret } from "jsonwebtoken";

export const authMiddleware = async ({ req, res, next }: ControllerProps) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(404).send("Access denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET as Secret
    ) as string;

    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
