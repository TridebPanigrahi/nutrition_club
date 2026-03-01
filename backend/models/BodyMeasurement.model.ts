import { Schema, model, Types } from "mongoose";

export interface IBodyMeasurement {
  memberId: Types.ObjectId;
  height: number;       // in cm
  weight: number;       // in kg
  idealWeight: number;  // in kg
  recordedAt: Date;
}

const bodyMeasurementSchema = new Schema<IBodyMeasurement>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    idealWeight: {
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
  }
);

export const BodyMeasurement = model<IBodyMeasurement>(
  "BodyMeasurement",
  bodyMeasurementSchema
);
