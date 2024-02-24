const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middleware");
const express = require("express");

const router = express.Router();

///api/v1/airplane -> post
router.post(
  "/",
  AirplaneMiddlewares.ValidationCreateRequest,
  AirplaneMiddlewares.ValidationCapacity,
  AirplaneController.CreateAirplane
);
///api/v1/airplane -> get

router.get("/",AirplaneController.getAirplanes);

// api/v1/airplane/:id ->get

router.get("/:id",AirplaneController.getAirplane);

//api/v1/airplane/:id -> delete

router.delete('/:id',AirplaneController.destroyAirplane);

//api/v1/airplane/:id -> patch;

router.patch('/:id',AirplaneMiddlewares.ValidationCapacity,AirplaneController.updateAirplane);

module.exports = router;
 