require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

let app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

const connection = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(process.env.PORT, () => {
    console.log("running server");
  });
};

connection();