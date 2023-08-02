'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Requests',
    [
      {
        title: "Bolo de Chocolate",
        category: "Bolos",
        description: "Delicioso bolo de chocolate com cobertura.",
        image: "https://example.com/images/bolo_chocolate.jpg",
        price: 29.99,
        amount: 10,
        userId: 1,
        plateId: 3
      },
      {
        title: "Pizza Margherita",
        category: "Pizzas",
        description: "Pizza tradicional italiana com tomate, mozzarella e manjericão.",
        image: "https://example.com/images/pizza_margherita.jpg",
        price: 24.99,
        amount: 5,
        userId: 2,
        plateId: 2
      },
      {
        title: "Salada Caesar",
        category: "Saladas",
        description: "Salada Caesar com alface, croutons e molho especial.",
        image: "https://example.com/images/salada_caesar.jpg",
        price: 14.99,
        amount: 3,
        userId: 4,
        plateId: 5
      },
      {
        title: "Sushi Variado",
        category: "Sushi",
        description: "Combinação variada de sushi fresco e saboroso.",
        image: "https://example.com/images/sushi_variado.jpg",
        price: 39.99,
        amount: 2,
        userId: 5,
        plateId: 1
      },
      {
        title: "Hambúrguer Gourmet",
        category: "Hambúrgueres",
        description: "Hambúrguer gourmet com carne suculenta e queijo derretido.",
        image: "https://example.com/images/hamburguer_gourmet.jpg",
        price: 19.99,
        amount: 8,
        userId: 3,
        plateId: 4
      }
    ], {}),


  down: async (queryInterface) => queryInterface.bulkDelete('Requests', null, {})
};
