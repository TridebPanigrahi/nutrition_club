import type { Request, Response } from "express";
import { Member } from "../models/Member.model.js";
import { Membership } from "../models/Membership.model.js";

export const createMember = async (req: Request, res: Response) => {
  try {
    const { name, phone, referredBy } = req.body;
    const exist = await Member.findOne({ phone });
    if (exist) return res.status(400).json({ message: "User already exist" });
    const member = await Member.create({ name, phone, referredBy });
    res.status(201).json({ member });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getMembers = async (_: Request, res: Response) => {
  const members = await Member.find().sort({ createdAt: -1 });
  res.json(members);
};

export const getMembersForMemberships = async (_: Request, res: Response) => {
  try {
    const activeMembership = await Membership.distinct("memberId", {
      status: "ACTIVE",
    });
    const members = await Member.find({ _id: { $nin: activeMembership } });
    res.json(members);
  } catch (error) {
    res.status(500).json({ error });
  }
};
