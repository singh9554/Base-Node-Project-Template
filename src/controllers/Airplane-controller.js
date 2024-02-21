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
/*
get : /
*/
async function getAirplanes(req, res) {
  try {
    const Airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = Airplanes;
    return res.status(statusCode.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/**
get: /:id,
**/
async function getAirplane(req, res) {
  try {
    const Airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = Airplane;
    return res.status(statusCode.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/*
delete : /:id
*/

async function destroyAirplane(req, res) {
  try {
    const response = await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data = response;
    return res.status(statusCode.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/*
update : /:id
*/
async function updateAirplane(req, res) {
  try {
    const updateAirplane = await AirplaneService.updateAirplane(req.params.id, {
      capacity: req.body.capacity,
    });
    SuccessResponse.data = updateAirplane;
    return res.status(statusCode.CREATED).json(SuccessResponse);
  } catch (error) {
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  CreateAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
