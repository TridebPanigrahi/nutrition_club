import type { Request, Response } from "express";
import { Types } from "mongoose";
import { Member } from "../models/Member.model.js";
import { Membership } from "../models/Membership.model.js";
import { ProgressTracking } from "../models/ProgressTracking.model.js";

const ALLOWED_DAYS = [9, 16, 29];

const calculateMemberShipDays = (startDay: Date) => {
  const today = new Date();
  const start = new Date(startDay);

  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (24 * 60 * 60 * 1000)) + 1;

  return diffDays;
};

export const createProgressTracking = async (req: Request, res: Response) => {
  try {
    const { memberId, weight } = req.body;
    if (!memberId || typeof memberId !== "string") {
      return res.status(400).json({ message: "Invalid MemberId" });
    }

    if (!Types.ObjectId.isValid(memberId)) {
      return res.status(400).json({ message: "Invalid MemberId format" });
    }

    // check member is exist

    const memberObjId = new Types.ObjectId(memberId);

    const member = await Member.findById(memberObjId);
    if (!member) {
      return res.status(400).json({ message: "Member doesn't exist" });
    }
    const memberShip = await Membership.findOne({
      memberObjId,
      status: "ACTIVE",
    });
    if (!memberShip) {
      return res
        .status(404)
        .json({ message: "Doesn't having any active membership" });
    }

    //calculate membership day
    const currentDay = calculateMemberShipDays(memberShip.startDate);

    if (!ALLOWED_DAYS.includes(currentDay)) {
      return res.status(400).json({
        message: `Progress tracking allowed only on days ${ALLOWED_DAYS.join(", ")}`,
        currentDay,
      });
    }

    // Prevent duplicate Entry
    const dayNumber = currentDay as 9 | 16 | 29;

    const exists = await ProgressTracking.findOne({
      membershipId: memberShip._id,
      dayNumber,
    });

    if (exists) {
      return res.status(400).json({
        message: `Progress already recorded for day ${currentDay}`,
      });
    }
    const progress = await ProgressTracking.create({
      memberId: memberObjId,
      membershipId: memberShip._id,
      dayNumber,
      weight,
    });

    res.status(201).json({
      message: "Progress tracking recorded successfully",
      progress,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get progress tracking by member
export const getProgressTracking = async (req: Request, res: Response) => {
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

    const memberObjectId = new Types.ObjectId(memberIdParam);

    const progress = await ProgressTracking.find({
      memberId: memberObjectId,
    }).sort({ dayNumber: 1 });

    res.json(progress);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
