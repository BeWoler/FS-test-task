const Router = require("express").Router;
const router = new Router();
const dogsController = require("../controllers/dogsController.js");

router.get("/dogs", dogsController.getAllDogs);
router.get('', dogsController.getRequestDogs);

module.exports = router;