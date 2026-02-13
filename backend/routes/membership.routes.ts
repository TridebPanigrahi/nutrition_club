import { Router } from "express";
import { createMembership } from "../controllers/membership.controller.js";

const router = Router();
//Post router
router.post("/", createMembership);

export default router