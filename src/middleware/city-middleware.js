const statusCode = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/Error/app-error');

const validationName = (req, res, next) =>{
if(!req.body.name){
    ErrorResponse.error = new AppError(["City is not created because the required data is not filled"],statusCode.BAD_REQUEST);
    return res.status(statusCode.BAD_REQUEST).json(ErrorResponse);
}
next();
}

module.exports = {
    validationName
}