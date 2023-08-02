'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        name: "Alice",
        email: "alice@example.com",
        password: "123456",
        admin: true,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: "Bob",
        email: "bob@example.com",
        password: "password123",
        admin: false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: "Eva",
        email: "eva@example.com",
        password: "test@123",
        admin: true,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: "Daniel",
        email: "daniel@example.com",
        password: "securePassword",
        admin: false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: "Sophia",
        email: "sophia@example.com",
        password: "p@ssw0rd",
        admin: true,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
