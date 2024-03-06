const {FlightService} = require('../services');

const statusCode = require('http-status-codes')

const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
post: 
req-body: {
flightNumber : Airbus 320,
airplaneId : 1254,
departureAirportId : 'DEL',
arrivalAirportId : 'PAT',
arrivalTime : 14:30,
departureTime : 12:00,
price : 4000,
boardingGate : JPI Aiport,
totalSeats : 400
}
**/
async function createFlight(req, res) {
  try {
    const Flight = await FlightService.createFlight({
      flightNumber : req.body.flightNumber,
      airplaneId   : req.body.airplaneId,
      departureAirportId : req.body.departureAirportId,
      arrivalAirportId   : req.body.arrivalAirportId,
      arrivalTime  : req.body.arrivalTime,
      departureTime : req.body.departureTime,
      price : req.body.price,
      boardingGate : req.body.boardingGate,
      totalSeats : req.body.totalSeats
    });
    SuccessResponse.message = "successfully created an Flight";
    SuccessResponse.data = Flight;
    return res.status(statusCode.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/* 
get Flight based on query filter.
*/

async function getAllFlight(req,res){
  try {
    const flights = await FlightService.getAllFlight(req.query);
    SuccessResponse.message = "successfully created an Flight";
    SuccessResponse.data = flights;
    return res.status(statusCode.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
    createFlight,
    getAllFlight
}