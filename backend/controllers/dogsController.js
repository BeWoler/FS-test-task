const dogsService = require("../service/dogsService");

class DogsController {
  async getRequestDogs(req, res) {
    try {
      const response = await dogsService.getRequest();
      return res.json(response);
    } catch (e) {
      console.log(e)
    }
  }
  
  async getAllDogs(req, res) {
    try {
      const dogs = await dogsService.getAllDogs();
      return res.json(dogs);
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new DogsController();