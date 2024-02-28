const curdRepository = require('./curd-repository');

const { Airport } = require('../models');

class AirportRepository extends curdRepository{
    constructor(){
        super(Airport);
    }

}

module.exports = AirportRepository; 