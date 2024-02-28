const express = require("express");

const {infoController} = require("../../controllers");
const cityRoutes = require("./city-routes")
const AirplaneRoutes = require('./airplane-routes');
const AirportRoutes = require('./airport-routes')
const router = express.Router();

router.use('/airplane',AirplaneRoutes);
router.use('/city', cityRoutes);
router.use('/info', infoController);
router.use('/airport',AirportRoutes);
module.exports = router;