import { NextFunction, Request, Response } from "express";

export type ControllerProps = {
  req: Request & { user?: string };
  res: Response;
  next: NextFunction;
};
