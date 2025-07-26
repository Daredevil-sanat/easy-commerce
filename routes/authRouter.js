import express from "express";
import { registerController } from "../controllers/registerController.js";

const router = express.router();

router.post('/register', registerController)

export default router;