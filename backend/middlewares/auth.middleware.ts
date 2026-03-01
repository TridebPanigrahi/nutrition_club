import type { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

export const protect = async (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "not Authorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SERT as string);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};
