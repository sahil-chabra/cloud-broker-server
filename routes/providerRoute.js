import express from "express";

import { getAllProviders } from "../controllers/providerController.js";
import { authProvider } from "../middlewares/auth.js";

const providerRouter = express.Router();

providerRouter.get("/getAllProviders", authProvider, getAllProviders);

export default providerRouter;
