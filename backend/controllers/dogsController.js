const dogsService = require("../service/dogsService");

class DogsController {
  async getAll(req, res) {
    try {
      const dogs = await dogsService.getAllDogs();
      return res.json(dogs);
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new DogsController();