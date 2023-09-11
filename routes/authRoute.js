import express from "express";

import { signup, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middlewares/auth.js";

const authRouter = express.Router();

authRouter.post("/register", signup);
authRouter.post("/login", login);
authRouter.patch("/updateUser", authenticateUser, updateUser);

export default authRouter;
