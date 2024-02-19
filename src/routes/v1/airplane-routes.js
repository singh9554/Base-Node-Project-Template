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
router.get("/",AirplaneController.getAirplane);
module.exports = router;
