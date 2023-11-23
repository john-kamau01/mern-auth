import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;

// This file is for the localhost:8000/api/auth/signin
// This file is for the localhost:8000/api/auth/signup
