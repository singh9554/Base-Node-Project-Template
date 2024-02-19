const curdRepository = require('./curd-repository');

const { Airplane } = require('../models');

class AirplaneRepository extends curdRepository{
    constructor(){
        super(Airplane);
    }

}

module.exports = AirplaneRepository; 