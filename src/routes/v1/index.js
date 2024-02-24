const express = require("express");

const {infoController} = require("../../controllers");
const cityRoutes = require("./city-routes")
const AirplaneRoutes = require('./airplane-routes');
const router = express.Router();

router.use('/airplane',AirplaneRoutes);
router.use('/city', cityRoutes);
router.use('/info', infoController);

module.exports = router;