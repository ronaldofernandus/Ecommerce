'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('line_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      line_qty: {
        type: Sequelize.INTEGER
      },
      line_status: {
        type: Sequelize.STRING
      },
      line_prop_id: {
        type: Sequelize.INTEGER
      },
      line_shop_id: {
        type: Sequelize.INTEGER
      },
      line_order_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('line_items');
  }
};