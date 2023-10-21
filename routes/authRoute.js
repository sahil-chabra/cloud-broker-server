import express from "express";

import {
  signup,
  login,
  updateUser,
  getCurrentUser,
} from "../controllers/authController.js";
import authenticateUser from "../middlewares/auth.js";

const authRouter = express.Router();

authRouter.post("/register", signup);
authRouter.post("/login", login);
authRouter.patch("/updateUser", authenticateUser, updateUser);
authRouter.get("/getCurrentUser", authenticateUser, getCurrentUser);

export default authRouter;
