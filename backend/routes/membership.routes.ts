import { Router } from "express";
import {
  createMembership,
  getMembership,
} from "../controllers/membership.controller.js";

const router = Router();
//Post router
router.post("/", createMembership);

router.get("/", getMembership);

export default router;
