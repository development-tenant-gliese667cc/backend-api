"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.UUID
      },

      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      apt: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      deliveryOption: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      deliveryNote: {
        type: Sequelize.TEXT,
      },

      orderDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      deliveryDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      orderNote: {
        type: Sequelize.TEXT,
      },

      cardId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
