import type { Request, Response } from "express";
import { Membership } from "../models/Membership.model.js";
import { Member } from "../models/Member.model.js";
import { calculateExpiryDate } from "../utils/membership.util.js";

export const createMembership = async (req: Request, res: Response) => {
  try {
    const { memberId, type, amountPaid } = req.body;
    //checking exist member
    const member = await Member.findById(memberId);
    if (!member) return res.status(400).json({ message: "Member not found" });
    //Checking Active Membership
    const activeMembership = await Membership.findOne({
      memberId,
      status: "ACTIVE",
    });
    if (activeMembership)
      return res
        .status(400)
        .json({ message: "Member already has an active membership" });

    // determine total days
    const totalDays = type === "10_DAYS" ? 10 : 30;
    //create memberShip
    const membership = await Membership.create({
      memberId,
      type,
      totalDays,
      usedDays: 0,
      startDate: new Date(),
      expiryDate: calculateExpiryDate(type),
      amountPaid,
      status: "ACTIVE",
    });

    res.status(201).json(membership);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMembership = async (_: Request, res: Response) => {
  try {
    const membership = await Membership.find({})
      .populate({
        path: "memberId",
        model: "Member",
        select: "name referredBy",
        populate: { path: "referredBy", select: "name", model: "Member" },
      })
      .lean();
    res.json(membership);
  } catch (error) {
    res.status(500).json(error);
  }
};
