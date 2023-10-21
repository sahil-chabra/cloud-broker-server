import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";

import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoute.js";
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
      .then(() => {
        console.log("connected DB successfully");
      })
      .catch((err) => console.log(err));

    app.listen(port, () => {
      console.log("listening on port: " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
