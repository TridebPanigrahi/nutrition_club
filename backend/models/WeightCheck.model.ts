// src/models/WeightCheck.model.ts
import { Schema, model, Types } from "mongoose";

export interface IWeightCheck {
  memberId: Types.ObjectId;
  date: Date;
  weight: number;
}

const weightCheckSchema = new Schema<IWeightCheck>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
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
  },
  { timestamps: true }
);

export const WeightCheck = model<IWeightCheck>(
  "WeightCheck",
  weightCheckSchema
);
