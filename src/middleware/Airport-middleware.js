const statusCode = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/Error/app-error');
const ValidationCreateRequest = (req, res, next) => {
  if (!req.body.name) {
    ErrorResponse.error = new AppError(["Airport not created because name not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.error = new AppError(["Airport not created because code not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
   if (!req.body.cityId) {
    ErrorResponse.error = new AppError(["Airport not created because cityId not found"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};


module.exports = {
  ValidationCreateRequest,
};
