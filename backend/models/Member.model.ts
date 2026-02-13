import { Schema, model, Types } from "mongoose";

export interface Imember {
  name: string;
  phone: string;
  referredBy: Types.ObjectId;
  createdAt: Date;
}

const memberSchema = new Schema<Imember>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    referredBy: {
      type: Schema.Types.ObjectId,
      ref: "Member",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true },
);

export const Member = model<Imember>("Member", memberSchema);
