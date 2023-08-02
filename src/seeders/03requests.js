'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Requests',
    [
      {
        title: "Camisa Polo",
        category: "Roupas",
        description: "Camisa Polo de algodão de alta qualidade.",
        image: "https://example.com/images/camisa_polo.jpg",
        price: 39.99,
        amount: 10,
        userId: 1,
        plateId: 3
      },
      {
        title: "Tênis Esportivo",
        category: "Calçados",
        description: "Tênis para prática de esportes com amortecimento.",
        image: "https://example.com/images/tenis_esportivo.jpg",
        price: 89.99,
        amount: 5,
        userId: 2,
        plateId: 2
      },
      {
        title: "Câmera Digital",
        category: "Eletrônicos",
        description: "Câmera digital com alta resolução e recursos avançados.",
        image: "https://example.com/images/camera_digital.jpg",
        price: 299.90,
        amount: 3,
        userId: 4,
        plateId: 5
      },
      {
        title: "Mesa de Jantar",
        category: "Móveis",
        description: "Mesa de jantar com tampo de vidro e estrutura em madeira.",
        image: "https://example.com/images/mesa_de_jantar.jpg",
        price: 499.50,
        amount: 2,
        userId: 5,
        plateId: 1
      },
      {
        title: "Notebook",
        category: "Informática",
        description: "Notebook de última geração com processador rápido.",
        image: "https://example.com/images/notebook.jpg",
        price: 1299.00,
        amount: 8,
        userId: 3,
        plateId: 4
      }
    ], {}),


  down: async (queryInterface) => queryInterface.bulkDelete('Requests', null, {})
};
