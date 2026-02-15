import { Router } from "express";
import {
  createProgressTracking,
  getProgressTracking,
} from "../controllers/progressTracking.controller.js";

const router = Router();

// Create progress tracking
router.post("/", createProgressTracking);

// Get progress tracking for member
router.get("/:memberId", getProgressTracking);

export default router;
