const statusCode = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/Error/app-error');
const ValidationCreateRequest = (req, res, next) => {
  if (!req.body.flightNumber) {
    ErrorResponse.error = new AppError(["Flight not created because flightNumber not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.error = new AppError(["Flight not created because airplaneId not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
   if (!req.body.departureAirportId) {
    ErrorResponse.error = new AppError(["Flight not created because departureAirportId not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.error = new AppError(["Flight not created because arrivalAirportId not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.error = new AppError(["Flight not created because arrivalTime not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.error = new AppError(["Flight not created because departureTime not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.error = new AppError(["Flight not created because price not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.error = new AppError(["Flight not created because totalSeats not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};


module.exports = {
  ValidationCreateRequest,
};
