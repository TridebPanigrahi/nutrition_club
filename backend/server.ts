import app from "./app.js";
import mongoose from "mongoose";

// DB connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("Mongodb Connected Succefully");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch(console.error);
