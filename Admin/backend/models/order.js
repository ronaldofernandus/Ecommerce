"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.user);
      order.hasMany(models.line_item);
    }
  }
  order.init(
    {
      order_created_on: DataTypes.DATE,
      order_subtotal: DataTypes.INTEGER,
      order_discount: DataTypes.FLOAT,
      order_tax: DataTypes.FLOAT,
      order_total_due: DataTypes.FLOAT,
      order_total_qty: DataTypes.INTEGER,
      order_payt_trx_number: DataTypes.STRING,
      order_city: DataTypes.STRING,
      order_addres: DataTypes.STRING,
      order_status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
