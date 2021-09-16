const dogsModel = require("../models/dogs-model");
const breedsModel = require("../models/breeds-model");
const request = require("request");
require("dotenv").config();

class DogsService {
  async getRequest(req, res) {
    try {
      await request(process.env.REQUEST_URL, (err, response, body) => {
        let dogs = [];
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
            img: `${process.env.IMG_URL}/${dog[0]}/${dog[1]}.jpg`,
          });
        });
        return res;
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getAllDogs() {
    const dogs = await dogsModel.find();
    return dogs;
  }
}

module.exports = new DogsService();
