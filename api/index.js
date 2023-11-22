import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("CONNECTED"))
  .catch((err) => console.log(err));

const app = express();

app.listen(8000, () => {
  console.log("server running on port 8000...");
});

app.use("/api/user", userRoutes);
