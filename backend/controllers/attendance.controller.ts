import type { Request, Response } from "express";
import { Types } from "mongoose";
import { Attendance } from "../models/Attendance.model.js";
import { Membership } from "../models/Membership.model.js";

export const markAttendance = async (req: Request, res: Response) => {
  try {
    const { memberId, status, nutritionTime } = req.body;
    if (!Types.ObjectId.isValid(memberId)) {
      return res.status(400).json({ message: "Invalid memberId" });
    }

    let memberShip = await Membership.findOne({
      memberId,
      status: "ACTIVE",
    });
    if (!memberShip) {
      return res.status(400).json({ message: "No membership found" });
    }
    if (new Date() > memberShip.expiryDate) {
      ((memberShip.status = "EXPIRED"), await memberShip.save());
      return res.status(400).json({ message: "Membership has expired" });
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const alreadyMarked = await Attendance.findOne({
      memberId,
      date: today,
    });
    if (alreadyMarked) {
      return res
        .status(400)
        .json({ message: "Attendance already marked for today" });
    }
    //creating attendance
    await Attendance.create({
      memberId,
      membershipId: memberShip._id,
      date: today,
      status,
      nutritionTime,
    });
    if (status === "PRESENT") {
      memberShip.usedDays += 1;
      if (memberShip.usedDays >= memberShip.totalDays) {
        memberShip.status = "COMPLETED";
      }

      await memberShip.save();
    }
    res.status(201).json({
      message: "Attendance marked successfully",
      usedDays: memberShip.usedDays,
      remainingDays: memberShip.totalDays - memberShip.usedDays,
      membershipStatus: memberShip.status,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
