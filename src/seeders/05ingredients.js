'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Ingredients',
    [
      {
        name: 'Tomate',
        userId: 1,
        plateId: 5,
      },
      {
        name: 'Queijo',
        userId: 2,
        plateId: 1,
      },
      {
        name: 'Alface',
        userId: 3,
        plateId: 2,
      },
      {
        name: 'Frango',
        userId: 4,
        plateId: 4,
      },
      {
        name: 'Cebola',
        userId: 5,
        plateId: 3,
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Ingredients', null, {})
};
