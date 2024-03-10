const curdRepository = require('./curd-repository');
const { Sequelize } = require('sequelize');

const { flight,Airplane,Airport } = require('../models');

class FlightRepository extends curdRepository{
    constructor(){
        super(flight);
    }
    async getAllFlight(filter,sort){
        const response = await flight.findAll({
            where : filter,
            order:sort,
            include :[{
                model : Airplane,
                required: true,
                as: 'airplaneDetail',
            },
            
            {
               model : Airport,
               required:true,
               as : 'departureAirport',
               on:{
                    col1 : Sequelize.where(Sequelize.col('flight.departureAirportId'),'=',(Sequelize.col('departureAirport.code')))
               }
            
            },

            {
                model : Airport,
                required:true,
                as : 'arrivalAirport',
                on:{
                     col1 : Sequelize.where(Sequelize.col('flight.arrivalAirportId'),'=',(Sequelize.col('arrivalAirport.code')))
                }
             
             }
            
      ]
        });
        return response;
     }
}

module.exports = FlightRepository;