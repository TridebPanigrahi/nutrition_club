import { Router } from "express";
import { createMember, getMembers, getMembersForMemberships } from "../controllers/member.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", createMember);
router.get("/", protect, getMembers);
router.get("/memberships", getMembersForMemberships)

export default router;
