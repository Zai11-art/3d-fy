import { ControllerProps } from "../types/types";

export const authMiddleware = async ({ req, res, next }: ControllerProps) => {
  try {
    let token = req.header("Authorization");
    res.send(req);
  
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
