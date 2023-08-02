'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('OrderHistories',
    [
      {
        status: 'pendente',
        details: 'Aguardando confirmação do pagamento.',
        userId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        status: 'pendente',
        details: 'Pedido em processo de preparo.',
        userId: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        status: 'pendente',
        details: 'Aguardando liberação do estoque.',
        userId: 3,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        status: 'pendente',
        details: 'Previsão de entrega: 3 dias úteis.',
        userId: 4,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        status: 'pendente',
        details: 'Pedido aguardando aprovação do gerente.',
        userId: 5,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('OrderHistories', null, {}),
};
