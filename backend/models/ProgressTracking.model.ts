import { Schema, model, Types } from "mongoose";

export type ProgressDay = 9 | 16 | 29;

export interface IProgressTracking {
  memberId: Types.ObjectId;
  membershipId: Types.ObjectId;
  dayNumber: ProgressDay;
  weight: number;
  recordedAt: Date;
}

const progressTrackingSchema = new Schema<IProgressTracking>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    membershipId: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    dayNumber: {
      type: Number,
      enum: [9, 16, 29],
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    recordedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent duplicate record for same day
progressTrackingSchema.index(
  { membershipId: 1, dayNumber: 1 },
  { unique: true },
);

export const ProgressTracking = model<IProgressTracking>(
  "ProgressTracking",
  progressTrackingSchema,
);
