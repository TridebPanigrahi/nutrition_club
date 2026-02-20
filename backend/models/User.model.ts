import { Schema, model, Types } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true },
);

export const User = model<IUser>("User", userSchema);
