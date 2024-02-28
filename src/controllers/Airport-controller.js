const { AirportService } = require("../services");
const statusCode = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
post: /,
req-body: {model-number: kempagoda,code:BLR, address: bangalore}
**/
async function CreateAirport(req, res) {
  try {
    const Airport = await  AirportService.createAirport({
        name : req.body.name,
        code : req.body.code,
        address : req.body.address,
        cityId : req.body.cityId
    });
    SuccessResponse.message = "successfully created an airplane";
    SuccessResponse.data = Airport;
    return res.status(statusCode.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/*
get : /
*/
async function getAirports(req, res) {
  try {
    const Airports = await  AirportService.getAirports();
    SuccessResponse.data = Airports;
    return res.status(statusCode.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/**
get: /:id,
**/
async function getAirport(req, res) {
  try {
    const Airport = await  AirportService.getAirport(req.params.id);
    SuccessResponse.data = Airport;
    return res.status(statusCode.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/*
delete : /:id
*/

async function destroyAirport(req, res) {
  try {
    const response = await  AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = response;
    return res.status(statusCode.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  CreateAirport,
  getAirports,
  getAirport,
  destroyAirport,
};
