'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      line_item.belongsTo(models.product);
      line_item.belongsTo(models.shopping_cart);
      line_item.belongsTo(models.order);
    }
  }
  line_item.init({
    line_qty: DataTypes.INTEGER,
    line_status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    shopping_cartId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    orderId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'line_item',
  });
  return line_item;
};