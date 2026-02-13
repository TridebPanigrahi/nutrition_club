import mongoose from "mongoose";

//Mongodb connection
export const connectDB = async () => {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("MONGO_URL is missing in environment variables");
  }
  await mongoose.connect(process.env.MONGO_URL as string,{
    serverSelectionTimeoutMS: 5000,
    family: 4,
  });
  console.log("MongoDB Connected Successfully");
};
