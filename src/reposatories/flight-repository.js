const curdRepository = require('./curd-repository');

const { flight } = require('../models');

class FlightRepository extends curdRepository{
    constructor(){
        super(flight);
    }
    async getAllFlight(filter,sort){
        const response = await flight.findAll({
            where : filter,
            order:sort
        });
        return response;
     }
}

module.exports = FlightRepository;