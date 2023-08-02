'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Plates',
    [
      {
        title: "Bolo de Chocolate",
        category: "Bolos",
        description: "Delicioso bolo de chocolate com cobertura.",
        image: "https://example.com/images/bolo_chocolate.jpg",
        price: 29.99,
        ingredients: "chocolate, farinha, ovos, açúcar, manteiga",
        favorited: 0,
      },
      {
        title: "Pizza Margherita",
        category: "Pizzas",
        description: "Pizza tradicional italiana com tomate, mozzarella e manjericão.",
        image: "https://example.com/images/pizza_margherita.jpg",
        price: 24.99,
        ingredients: "massa de pizza, molho de tomate, queijo mozzarella, manjericão",
        favorited: 1,
        userId: 1
      },
      {
        title: "Salada Caesar",
        category: "Saladas",
        description: "Salada Caesar com alface, croutons e molho especial.",
        image: "https://example.com/images/salada_caesar.jpg",
        price: 14.99,
        ingredients: "alface, croutons, queijo parmesão, molho Caesar",
        favorited: 0,
      },
      {
        title: "Sushi Variado",
        category: "Sushi",
        description: "Combinação variada de sushi fresco e saboroso.",
        image: "https://example.com/images/sushi_variado.jpg",
        price: 39.99,
        ingredients: "peixe fresco, arroz, alga marinha, gergelim",
        favorited: 0,
      },
      {
        title: "Hambúrguer Gourmet",
        category: "Hambúrgueres",
        description: "Hambúrguer gourmet com carne suculenta e queijo derretido.",
        image: "https://example.com/images/hamburguer_gourmet.jpg",
        price: 19.99,
        ingredients: "pão de hambúrguer, carne, queijo cheddar, cebola caramelizada",
        favorited: 0,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Plates', null, {}),
};
