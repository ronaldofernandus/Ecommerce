"use strict";
const { Model } = require("sequelize");
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
  line_item.init(
    {
      line_qty: DataTypes.INTEGER,
      line_status: DataTypes.STRING,
      line_prop_id: DataTypes.INTEGER,
      line_shop_id: DataTypes.INTEGER,
      line_order_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "line_item",
    }
  );
  return line_item;
};
