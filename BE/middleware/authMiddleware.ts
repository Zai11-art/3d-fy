import { ControllerPropsMW } from "../types/types";
import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = async (
  req: Request & { user: string },
  res: Response,
  next: NextFunction
) => {
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
