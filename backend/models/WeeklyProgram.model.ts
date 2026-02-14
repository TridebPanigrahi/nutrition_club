import { Schema, Types, model } from "mongoose";

export interface IWeeklyProgram {
  memberId: Types.ObjectId;
  date: Date;
  weight: number;
  attended: boolean;
}

const weeklyProgramSchema = new Schema<IWeeklyProgram>(
  {
    memberId: {
      type: Types.ObjectId,
      ref: "Member",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    attended: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

// Prevent duplicate weekly entry
weeklyProgramSchema.index({ memberId: 1, date: 1 }, { unique: true });

export const WeeklyProgram = model<IWeeklyProgram>(
  "WeeklyProgram",
  weeklyProgramSchema,
);
