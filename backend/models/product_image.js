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
      prim_filename: DataTypes.STRING,
      prim_filesize: DataTypes.STRING,
      prim_filetype: DataTypes.STRING,
      prim_primary: DataTypes.BOOLEAN,
      prim_prod_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product_image",
    }
  );
  return product_image;
};
