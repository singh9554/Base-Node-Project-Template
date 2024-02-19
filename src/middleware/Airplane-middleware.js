const statusCode = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/Error/app-error');
const ValidationCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {

    ErrorResponse.error = new AppError(["Airplane not created because ModelNumber is invalid"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};
const ValidationCapacity = (req, res, next) => {
  if (!req.body.capacity) {
    ErrorResponse.error = new AppError(["Airplane not created because capacity is invalid"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};

module.exports = {
  ValidationCreateRequest,
  ValidationCapacity,
};
