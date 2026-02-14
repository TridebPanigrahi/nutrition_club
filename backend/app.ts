import express from "express";
import cors from "cors";
import memberRoutes from "./routes/member.routes.js";
import membershipRoutes from "./routes/membership.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/members", memberRoutes);
app.use("/memberships", membershipRoutes);

export default app;
