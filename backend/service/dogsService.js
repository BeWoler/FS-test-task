const dogsModel = require("../models/dogs-model");

class DogsService {
  async getAllDogs() {
    const dogs = await dogsModel.find();
    return dogs;
  }
}

module.exports = new DogsService();