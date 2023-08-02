'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Favorites',
    [
      {
        title: 'Hamburguer Clássico',
        category: 'Sanduíche',
        description: 'Um delicioso hamburguer com queijo, alface e tomate.',
        image: 'https://example.com/hamburguer-classico.jpg',
        price: 15.90,
        userId: 1,
        plateId: 2
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Favorites', null, {}),
};
