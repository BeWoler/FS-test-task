require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const request = require("request");

const breedsModel = require("./models/breeds-model");
const dogsModel = require("./models/dogs-model");

let app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

let dogs = [];

app.get("/", async (req, res) => {
  try {
    await request(process.env.REQUEST_URL, (err, response, body) => {
      let parse = JSON.parse(response.body);
      parse["message"].map((dog) => {
        dogs.push(dog.split("/").join(".").split(".").slice(6, 8));
      });
      dogs.map((dog) => {
        breedsModel.create({
          _id: dog[1],
          title: dog[0],
        });
        dogsModel.create({
          breedId: dog[1],
          title: dog[0],
          img: `${process.env.IMG_URL}/${dog[0]}/${dog[1]}.jpg`
        })
      });
      return res.send(body);
    });
  } catch (e) {
    console.log(e);
  }
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
