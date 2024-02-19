const { AirplaneService } = require("../services");
const statusCode = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
post: /,
req-body: {model-number: airbusa320,capacity: 180}
**/
async function CreateAirplane(req, res) {
  try {
    const Airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "successfully created an airplane";
    SuccessResponse.data = Airplane;
    return res.status(statusCode.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getAirplane(req, res) {
  try {
    const Airplane = await AirplaneService.getAirplane();
    SuccessResponse.data = Airplane;
    return res.status(statusCode.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  CreateAirplane,
  getAirplane,
};
