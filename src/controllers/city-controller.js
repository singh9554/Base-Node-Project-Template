const { CityService } = require("../services");
const statusCode = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/*
CreateCity;
post -> req.body name
*/
async function createCity(req,res){
 try {
    const City = await CityService.createCity({
        name : req.body.name
    })
    SuccessResponse.data = City;
    SuccessResponse.message = 'successfully created city'
    return res.status(statusCode.CREATED).json(SuccessResponse);
 } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
 }
}
/*
 delete city 
 delete request;
 */ 

 async function destroyCity(req,res){
    try {
        const response = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = response;
        return res.status(statusCode.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
 }
 /*
 update City
 patch request;
 */

 async function updateCity(req, res){
    try {
        const updateCity = await CityService.updateCity(req.params.id,{
            name : req.body.name
        })
        SuccessResponse.data = updateCity;
        SuccessResponse.message = "Resource has been updated successfully";
        return res.status(statusCode.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
 }
module.exports = {
    createCity,
    destroyCity,
    updateCity,
}