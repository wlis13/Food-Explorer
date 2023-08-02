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
      },
      {
        title: 'Pizza Margherita',
        category: 'Pizza',
        description: 'Uma pizza clássica com molho de tomate, queijo e manjericão.',
        image: 'https://example.com/pizza-margherita.jpg',
        price: 29.90,
        userId: 2,
        plateId: 3
      },
      {
        title: 'Salada Caesar',
        category: 'Salada',
        description: 'Uma salada fresca com alface, croutons, parmesão e molho Caesar.',
        image: 'https://example.com/salada-caesar.jpg',
        price: 12.50,
        userId: 3,
        plateId: 1
      },
      {
        title: 'Sushi Variado',
        category: 'Sushi',
        description: 'Uma seleção de sushis variados, incluindo nigiri, maki e temaki.',
        image: 'https://example.com/sushi-variado.jpg',
        price: 45.00,
        userId: 4,
        plateId: 5
      },
      {
        title: 'Sorvete de Chocolate',
        category: 'Sobremesa',
        description: 'Um delicioso sorvete de chocolate com cobertura de calda quente.',
        image: 'https://example.com/sorvete-chocolate.jpg',
        price: 8.90,
        userId: 5,
        plateId: 4
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Favorites', null, {}),
};
