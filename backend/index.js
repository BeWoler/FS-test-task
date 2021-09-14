require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const request = require("request");

const breedsModel = require("./models/breeds-model");

let app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

let dogs = [];

app.get("/", (req, res) => {
  request(process.env.REQUEST_URL, (err, response, body) => {
    let parse = JSON.parse(response.body);
    console.log(parse["message"]);
    parse["message"].map((dog) => {
      dogs.push(dog.split("/").join(".").split(".").slice(6, 8));
    });
    console.log(dogs);
    dogs.map((dog) => {
      breedsModel.create({
        _id: dog[1],
        title: dog[0],
      });
    });
    return res.send(body);
  });
});

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
