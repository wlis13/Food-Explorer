'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ingredients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      plateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Plates',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Ingredients');
  }
};
