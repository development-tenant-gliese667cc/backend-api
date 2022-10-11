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
        type: Sequelize.UUID,
      },

      location: {
        type: Sequelize.STRING,
      },

      apt: {
        type: Sequelize.STRING,
      },

      deliveryOption: {
        type: Sequelize.STRING,
      },

      deliveryNote: {
        type: Sequelize.TEXT,
      },

      orderDate: {
        type: Sequelize.DATE,
      },

      deliveryDate: {
        type: Sequelize.DATE,
      },

      quantity: {
        type: Sequelize.INTEGER,
      },

      orderNote: {
        type: Sequelize.TEXT,
      },

      cardId: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
