// src/models/Attendance.model.ts
import { Schema, model, Types } from "mongoose";

export type AttendanceStatus = "PRESENT" | "ABSENT";
export type NutritionTime = "MORNING" | "NIGHT";

export interface IAttendance {
  memberId: Types.ObjectId;
  membershipId: Types.ObjectId;
  date: Date;
  status: AttendanceStatus;
  nutritionTime: NutritionTime;
}

const attendanceSchema = new Schema<IAttendance>(
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
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["PRESENT", "ABSENT"],
      required: true,
    },
    nutritionTime: {
      type: String,
      enum: ["MORNING", "NIGHT"],
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate attendance for same day
attendanceSchema.index({ memberId: 1, date: 1 }, { unique: true });

export const Attendance = model<IAttendance>("Attendance", attendanceSchema);
