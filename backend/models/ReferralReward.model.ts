// src/models/ReferralReward.model.ts
import { Schema, model, Types } from "mongoose";

export type RewardType = "DISCOUNT" | "EXTRA_DAYS";

export interface IReferralReward {
  memberId: Types.ObjectId;          // existing member
  referredMemberId: Types.ObjectId;  // new member
  rewardType: RewardType;
  rewardValue: number;
  applied: boolean;
}

const referralRewardSchema = new Schema<IReferralReward>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    referredMemberId: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    rewardType: {
      type: String,
      enum: ["DISCOUNT", "EXTRA_DAYS"],
      required: true,
    },
    rewardValue: {
      type: Number,
      required: true,
    },
    applied: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const ReferralReward = model<IReferralReward>(
  "ReferralReward",
  referralRewardSchema
);
