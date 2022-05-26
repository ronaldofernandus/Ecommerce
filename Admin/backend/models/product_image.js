"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_image.belongsTo(models.product);
    }
  }
  product_image.init(
    {
      image: DataTypes.STRING,
      prodId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product_image",
    }
  );
  return product_image;
};
