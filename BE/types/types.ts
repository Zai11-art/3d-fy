import { NextFunction, Request, Response } from "express";

export type ControllerProps = {
  req: Request;
  res: Response;
  next: NextFunction;
};
