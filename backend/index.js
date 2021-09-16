require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const request = require("request");
const router = require("./router/route.js");

let app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use("/api", router);
app.use('', router);

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
