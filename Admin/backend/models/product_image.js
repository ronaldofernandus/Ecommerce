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
      productId: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: function (product_image, options) {
          product_image.image =
            product_image.image || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "product_image",
    }
  );
  return product_image;
};
