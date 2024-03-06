const statusCode = require("http-status-codes");

const { FlightRepository } = require("../reposatories");

const {Op} = require('sequelize');

const AppError = require("../utils/Error/app-error");

const flightRepository = new FlightRepository();

//createFlight;
async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    console.log(error);
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
        explanation.push(err.value);
      });
      throw new AppError(explanation, statusCode.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create a new Flight object",
      statusCode.INTERNAL_SERVER_ERROR
    );
  }
}

//getFlight function;

async function getAllFlight(query){
  let customFilter = {};
  
  let sortFilter = {};

  let endingDate = "23:59:00";
  //trips = MUM-DEL;
  if(query.trips){
    [departureAirportId,arrivalAirportId] = query.trips.split('-');
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    
    //To Do check DepartureAirportId and arrivalAirportId are not same;

  }
  //price = op.between [minPrice-maxPrice]
  
  if(query.price){
    [minPrice,maxPrice] = query.price.split('-');
    customFilter.price = {
      [Op.between] : [minPrice,(maxPrice == undefined) ? 20000 : maxPrice],
    }
  }

  //booking based of available seates;
  if(query.travellers){
    customFilter.totalSeats = {//Op.gte where gte stands for - (greater than equal to)
    [Op.gte] : query.travellers 
    }
  }
 //get flight on particular date;

 if(query.tripDate){
   customFilter.departureTime = {
    [Op.between] : [query.tripDate , query.tripDate+endingDate]
  }
 }
//get flight based on sort filter high-low or low-high
 
if(query.sort){
  const params = query.sort.split(',');
  const sortfilter = params.map((param) => param.split('_'));
  sortFilter = sortfilter;

}
  try {
    const flights = await flightRepository.getAllFlight(customFilter,sortFilter);
    return flights;
  } catch (error) {
    throw new AppError('Cannot fetch The requested flights because DepartureAirportId and arrivalAirportId are same', statusCode.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
    createFlight,
    getAllFlight
}