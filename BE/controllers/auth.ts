import { RequestBodyProps } from "../types/types";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import prismadb from "../prisma/prismadb.js";
import jwt, { Secret } from "jsonwebtoken";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { S3ClientConfig } from "@aws-sdk/client-s3";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log(email);
    let user: Partial<{
      email: string;
      id: string;
      password: string;
      profilePic: string;
      imageUrl: string;
    }> | null = await prismadb.user.findUnique({
      where: {
        email: email,
      },
      include: { posts: true },
    });

    console.log(user);

    if (!user) return res.status(404).json({ msg: "User does not exist." });
    console.log(user.password);

    const userMatch = await bcrypt.compare(password, user?.password || "");
    if (!userMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // AWS IMAGE SIGNER (NOT WORKING YET)
    const s3Configuration: S3ClientConfig = {
      credentials: {
        accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
        secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`,
      },
      region: `${process.env.AWS_REGION}`,
    };
    const s3 = new S3Client(s3Configuration);
    const command = new GetObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: user?.id,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 15 * 60 }); // expires in seconds
    user.profilePic = url;
    console.log("Presigned URL: ", url);

    const token = jwt.sign(
      { id: user?.id },
      process.env.JWT_SECRET as Secret
    ) as string;

    delete user.password;

    res.status(200).json({ token, user });
    // res.status(200).json({ email });

    // const {} = req.body
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, username, tag, bio, password } = req.body;
    const image = (req.file as Express.MulterS3.File)?.location;
    console.log(email, username, tag, bio, password);

    const salt = await bcrypt.genSalt();
    const pwordHash = await bcrypt.hash(password, salt);

    const registerUser = {
      username,
      email,
      tag,
      bio,
      password: pwordHash,
      profilePic: image,
      likes: 0,
    };

    const newlyRegUser = await prismadb.user.create({ data: registerUser });

    res.status(200).json(newlyRegUser);
  } catch (err) {
    console.log("errored");
    res.status(500).json({ error: err.message });
  }
};
