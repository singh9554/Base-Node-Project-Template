const express = require("express");

const {infoController} = require("../../controllers");

const AirplaneRoutes = require('./airplane-routes');
const router = express.Router();

router.use('/airplane',AirplaneRoutes);
router.use("/info", infoController);

module.exports = router;
