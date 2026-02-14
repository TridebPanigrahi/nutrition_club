import { Router } from "express";
import {
  createBodyMeasurement,
  getMemberMeasurements,
} from "../controllers/bodyMeasurement.controller.js";
const router = Router();

//post
router.post("/", createBodyMeasurement);

//get
router.get("/:memberId", getMemberMeasurements);

export default router;
