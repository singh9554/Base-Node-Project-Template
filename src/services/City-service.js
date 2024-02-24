const statusCode = require("http-status-codes");

const { CityRepository } = require("../reposatories");

const AppError = require("../utils/Error/app-error");

const cityRepository = new CityRepository();
// Create City
async function createCity(data) {
  try {
    const responce = await cityRepository.create(data);
    return responce;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
        explanation.push(err.value);
      });
      throw new AppError(explanation, statusCode.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create a new city object",
      statusCode.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCity(id){
  try {
    const responce = await cityRepository.destroy(id);
    return responce;
  } catch (error) {
    if(error.statusCode == statusCode.NOT_FOUND){
      throw new AppError('not able to find the resource to delete', statusCode.NOT_FOUND);
      }
    throw new AppError("Not noble to delect the resource",statusCode.INTERNAL_SERVER_ERROR);
  }
}
async function updateCity(id,data){
  try {
    const responce = await cityRepository.update(id,data);
    return responce;
  } catch (error) {
    if(error.statusCode == statusCode.NOT_FOUND){
      throw new AppError('not able to find the resource to update',statusCode.NOT_FOUND);
    }
    throw new AppError('not able to update the resource',statusCode.INTERNAL_SERVER_ERROR);
  }
}
module.exports = {
  createCity,
  destroyCity,
  updateCity
};
