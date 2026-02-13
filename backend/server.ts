import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

// DB connection
const PORT = process.env.PORT || 5000;

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
