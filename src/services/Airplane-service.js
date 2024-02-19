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
async function getAirplane() {
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
module.exports = {
  createAirplane,
  getAirplane,
};
