import express from "express";

const app = express();

const start = () => {
  app.listen(8000, () => {
    console.log("listening on the port 8000");
  });
};

start();
