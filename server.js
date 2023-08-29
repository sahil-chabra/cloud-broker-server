import express from "express";
import mongoose from "mongoose";
import Test from "./models/usertest.js";

const connectDB = (url) => {
  return mongoose.connect(url);
};
// sahil
const app = express();
const aaz = "k";
const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://schhabra602:passwordMongoDB@cloud-broker.lnypaf5.mongodb.net/practise?retryWrites=true&w=majority"
    )
      .then(() => {
        console.log("connected DB successfully");
      })
      .catch((err) => console.log(err));

    app.listen(5000, () => {
      console.log("listening on port 5000");
    });

    const testUser = new Test({ name: "sahil" });
    testUser.save();
  } catch (error) {
    console.log(error);
  }
};

start();
