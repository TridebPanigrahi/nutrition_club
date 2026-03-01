import type { Request, Response } from "express";
import { Types } from "mongoose";
import { Member } from "../models/Member.model.js";
import { BodyMeasurement } from "../models/BodyMeasurement.model.js";

export const createBodyMeasurement = async (req: Request, res: Response) => {
  try {
    const { memberId, height, weight, idealWeight } = req.body;
    if (!Types.ObjectId.isValid(memberId)) {
      return res.status(400).json({ message: "MemberId is not valid" });
    }
    //check member exist
    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ message: "Member doesn't exist" });
    }
    const measurement = await BodyMeasurement.create({
      memberId,
      height,
      weight,
      idealWeight,
    });
    res.status(201).json({
      message: "Body Measurement created",
      measurement,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// get all measurement

export const getMemberMeasurements = async (req: Request, res: Response) => {
  try {
    const memberIdParam = req.params.memberId;

    if (!memberIdParam || typeof memberIdParam !== "string") {
      return res.status(400).json({
        message: "memberId is required",
      });
    }

    if (!Types.ObjectId.isValid(memberIdParam)) {
      return res.status(400).json({
        message: "Invalid memberId format",
      });
    }
    const mesurement = await BodyMeasurement.find({
      memberIdParam,
    }).sort({ recordedAt: -1 });
    res.json(mesurement);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
