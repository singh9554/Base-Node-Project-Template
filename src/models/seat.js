'use strict';
const {
  Model
} = require('sequelize');

const {Enum} = require('../utils/common');
const {Business,Economy,Primium_Economy,First_Class} = Enum.seats;

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
      });
    }
  }
  Seat.init({
    airplaneId:{
      type: DataTypes.INTEGER,
      allowNull : false
    },
    row:{
      type: DataTypes.INTEGER,
      allowNull : false
    },
    col: {
      type: DataTypes.STRING,
      allowNull : false
    },
    type: {
      type: DataTypes.ENUM,
      values: [Business,Economy,Primium_Economy,First_Class],
      defaultValue: Economy,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};