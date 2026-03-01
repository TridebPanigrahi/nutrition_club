import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const route = Router();

//register
route.post("/register", register);

//login
route.post("/login", login);

export default route;
