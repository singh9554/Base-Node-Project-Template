const curdRepository = require('./curd-repository');

const { City }  = require('../models');

class CityRepository extends curdRepository{
    constructor(){
        super(City);
    }

}

module.exports = CityRepository; 