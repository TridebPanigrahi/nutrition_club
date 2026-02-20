import express from "express";
import cors from "cors";
import memberRoutes from "./routes/member.routes.js";
import membershipRoutes from "./routes/membership.routes.js";
import attendanceRoute from "./routes/attendance.routes.js";
import bodyMeasurementRoute from "./routes/bodyMeasurement.routes.js";
import progressTrackingRoutes from "./routes/progressTracking.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/members", memberRoutes);
app.use("/memberships", membershipRoutes);
app.use("/attendance", attendanceRoute);
app.use("/body-measurement", bodyMeasurementRoute);
app.use("/progress-tracking", progressTrackingRoutes);
app.use("/auth", authRoutes);

export default app;
