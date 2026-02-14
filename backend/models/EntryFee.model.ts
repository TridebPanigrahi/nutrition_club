// src/models/EntryFee.model.ts
import { Schema, model } from "mongoose";

export interface IEntryFee {
  name: string;
  phone: string;
  entryFee: number;
  joinedAt: Date;
}

const entryFeeSchema = new Schema<IEntryFee>(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    entryFee: {
      type: Number,
      default: 250,
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const EntryFee = model<IEntryFee>("EntryFee", entryFeeSchema);
