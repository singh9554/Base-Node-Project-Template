const express = require('express');

const router = express.Router();

const {AirportController} = require('../../controllers');

const {AirportMiddlewares} = require('../../middleware');

///api/v1/airport -> post
router.post('/',AirportMiddlewares.ValidationCreateRequest,AirportController.CreateAirport);

///api/v1/airport -> get
router.get('/',AirportController.getAirports);

///api/v1/airport/:id -> get
router.get('/:id',AirportController.getAirport);

///api/v1/airport/:id -> delete
router.delete('/:id', AirportController.destroyAirport);

module.exports = router;