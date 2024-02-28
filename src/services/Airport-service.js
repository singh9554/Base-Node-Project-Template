const statusCode = require("http-status-codes");
const AppError = require("../utils/Error/app-error");
const { AirportRepository } = require("../reposatories");

const airportRepository = new AirportRepository();

async function createAirport(data) {
  try {
    const Airport = await airportRepository.create(data);
    return Airport;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
        explanation.push(err.value);
      });
    }
    throw new AppError(
      "Not able to create the New Airport Object",
      statusCode.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports() {
    try {
      const Airport = await airportRepository.getAll();
      return Airport;
    } catch (error) {
      throw new AppError(
        "Cannot fetch the Airplane list",
        statusCode.INTERNAL_SERVER_ERROR
      );
    }
  }
  async function getAirport(id){
   try {
      const Airport = await airportRepository.get(id);
      return Airport;
   } catch (error) {
      if(error.statusCode == statusCode.NOT_FOUND){
      throw new AppError('could not fetch corresponding flight', statusCode.NOT_FOUND);
      }
      throw new AppError('Cannot fetch your flight', statusCode.INTERNAL_SERVER_ERROR);
   }
  }
  async function destroyAirport(id){
      try {
          const Airport = await airportRepository.destroy(id);
          return Airport;
      } catch (error) {
          if(error.statusCode == statusCode.NOT_FOUND){
              throw new AppError('not able to find the resource to delete', statusCode.NOT_FOUND);
              }
  
          throw new AppError('Cannot delete you flight', statusCode.INTERNAL_SERVER_ERROR)
      }
  }
  
  

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport
};
