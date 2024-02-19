'use strict';
const {Op} = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Airplanes',[{
      modelNumber: "airbus 320",
      capacity : 356,
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      modelNumber: "airbus F850",
      capacity : 10,
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      modelNumber: "airbus G25",
      capacity : 35,
      createdAt : new Date(),
      updatedAt : new Date()
     }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes',
    {
      [Op.or]: [
      {modelNumber: "airbus 320"},
      {modelNumber: "airbus G25"},
      { modelNumber: "airbus F850"}]})
  }
};
