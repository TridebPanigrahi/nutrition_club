import type { Request, Response } from "express";
import { User } from "../models/User.model.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const userData = await User.find({}).select("-password");
    res.json(userData);
  } catch (error) {
    console.log("error", error);
  }
};
