import {
  ControllerProps,
  ReqBodyProps,
  RequestBodyProps,
  RequestProps,
} from "../types/types";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import prismadb from "../prisma/prismadb.js";

export const login = async ({ req, res }: ControllerProps) => {
  try {
    console.log(req.body);
    // const {} = req.body
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req: RequestBodyProps, res: Response) => {
  try {
    const { email, username, tag, bio, password, profilePic } = req.body;
    const image = req.file?.location;
    const salt = await bcrypt.genSalt();
    const pwordHash = await bcrypt.hash(password, salt);

    const registerUser = {
      username,
      email,
      tag,
      bio,
      password: pwordHash,
      profilePic: image,
    };

    const newlyRegUser = await prismadb.user.create({ data: registerUser });

    res.status(200).json(newlyRegUser);
  } catch (err) {
    console.log("errored");
    res.status(500).json({ error: err.message });
  }
};
