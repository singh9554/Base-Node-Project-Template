const statusCode = require("http-status-codes");

const { AirplaneRepository } = require("../reposatories");
const AppError = require("../utils/Error/app-error");

const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
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
      "Cannot create a new Airplane object",
      statusCode.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirplanes() {
  try {
    const airplane = await airplaneRepository.getAll();
    return airplane;
  } catch (error) {
    throw new AppError(
      "Cannot fetch the Airplane list",
      statusCode.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirplane(id){
 try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
 } catch (error) {
    if(error.statusCode == statusCode.NOT_FOUND){
    throw new AppError('could not fetch corresponding flight', statusCode.NOT_FOUND);
    }
    throw new AppError('Cannot fetch your flight', statusCode.INTERNAL_SERVER_ERROR);
 }
}
async function destroyAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == statusCode.NOT_FOUND){
            throw new AppError('not able to find the resource to delete', statusCode.NOT_FOUND);
            }

        throw new AppError('Cannot delete you flight', statusCode.INTERNAL_SERVER_ERROR)
    }
}

async function updateAirplane(id, data){
  try {
    const updateAirplane = await airplaneRepository.update(id,data);
    return updateAirplane;
  } catch (error) {
    throw new AppError('not able to update your flight details', statusCode.INTERNAL_SERVER_ERROR)
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};

