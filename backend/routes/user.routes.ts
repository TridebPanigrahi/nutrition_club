import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";

const route = Router();

// getUsers
route.get("/", getUsers);

export default route;
