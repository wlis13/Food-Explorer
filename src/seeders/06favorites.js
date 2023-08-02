'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Favorites',
    [
      {
        title: "Hambúrguer Gourmet",
        category: "Hambúrgueres",
        description: "Hambúrguer gourmet com carne suculenta e queijo derretido.",
        image: "https://example.com/images/hamburguer_gourmet.jpg",
        price: 19.99,
        userId: 1,
        plateId: 2
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Favorites', null, {}),
};
