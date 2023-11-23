import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

// Connect to DB
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("CONNECTED"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("server running on port 8000...");
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
