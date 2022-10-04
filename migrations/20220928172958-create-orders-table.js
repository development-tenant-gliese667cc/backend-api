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
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },

      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      apt: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      deliveryOption: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      deliveryNote: {
        type: Sequelize.TEXT,
      },

      orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      deliveryDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      orderNote: {
        type: Sequelize.TEXT,
      },

      cardId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
