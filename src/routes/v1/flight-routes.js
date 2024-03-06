const express = require("express");

const router = express.Router();

const { FlightController } = require("../../controllers");

const { FlightMiddlewares } = require("../../middleware");

///api/v1/flights -> post
router.post(
  "/",
  FlightMiddlewares.ValidationCreateRequest,
  FlightController.createFlight
);

//api/v1/flights?trips=MUM-DEl -> get

router.get("/", FlightController.getAllFlight);

module.exports = router;
