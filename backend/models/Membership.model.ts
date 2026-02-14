// src/models/Membership.model.ts
import { Schema, model, Types } from "mongoose";

export type MembershipStatus = "ACTIVE" | "COMPLETED" | "EXPIRED";
export type MembershipType = "10_DAYS" | "30_DAYS";

export interface IMembership {
  memberId: Types.ObjectId;
  type: MembershipType;
  totalDays: number;
  usedDays: number;
  startDate: Date;
  expiryDate: Date;
  amountPaid: number;
  status: MembershipStatus;
}

const membershipSchema = new Schema<IMembership>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    type: {
      type: String,
      enum: ["10_DAYS", "30_DAYS"],
      required: true,
    },
    totalDays: {
      type: Number,
      required: true,
    },
    usedDays: {
      type: Number,
      default: 0,
    },
    startDate: {
      type: Date,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "COMPLETED", "EXPIRED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

export const Membership = model<IMembership>("Membership", membershipSchema);
