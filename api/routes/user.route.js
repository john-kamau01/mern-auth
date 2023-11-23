import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", test);

export default router;

// In this file we are creating a router to localhost:8000/api/user
