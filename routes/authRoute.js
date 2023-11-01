import express from "express";

import {
  signup,
  login,
  updateUser,
  getCurrentUser,
  signupProvider,
  loginProvider,
  getCurrentProvider,
} from "../controllers/authController.js";
import { authUser, authProvider } from "../middlewares/auth.js";

const authRouter = express.Router();

authRouter.post("/register", signup);
authRouter.post("/login", login);
authRouter.patch("/updateUser", authUser, updateUser);
authRouter.get("/getCurrentUser", authUser, getCurrentUser);
authRouter.post("/registerProvider", signupProvider);
authRouter.post("/loginProvider", loginProvider);
authRouter.get("/getCurrentProvider", authProvider, getCurrentUser);

export default authRouter;
