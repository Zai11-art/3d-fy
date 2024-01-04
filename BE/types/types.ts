import { NextFunction, Request, Response } from "express";

export interface RequestBodyProps {
  body: {
    email: string;
    username: string;
    bio: string;
    tag: string;
    password: string;
    profilePic: string;
  };
  file: {
    location: string;
  };
}

export interface ReqBodyProps {
  req: Request;
}

export interface RequestProps {
  req: Request & RequestBodyProps;
}

export interface ControllerProps {
  req: Request & RequestBodyProps;
  res: Response;
  next: NextFunction;
}

export type ControllerPropsMW = {
  req: Request & { user?: string };
  res: Response;
  next: NextFunction;
};
