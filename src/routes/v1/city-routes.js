const { CityController } = require("../../controllers");
const { CityMiddlewares} = require('../../middleware');
const express = require("express");

const router = express.Router();

///api/v1/city -> post
router.post(
  '/',CityMiddlewares.validationName,
  CityController.createCity
);

//api/v1/city/:id -> delete

router.delete('/:id',CityController.destroyCity);

//api/v1/city/:id -> Patch

router.patch('/:id',CityMiddlewares.validationName, CityController.updateCity);

module.exports = router;
 