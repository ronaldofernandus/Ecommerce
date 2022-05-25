"use strict";
const { encrypt } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.product);
      user.hasMany(models.order);
      user.hasMany(models.shopping_cart);
    }
  }
  user.init(
    {
      user_name: DataTypes.STRING,
      user_email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username tidak boleh kosong",
          },
        },
      },
      user_password: DataTypes.STRING,
      user_salt: DataTypes.STRING,
      user_birthdate: DataTypes.DATE,
      user_gender: DataTypes.STRING,
      user_avatar: DataTypes.STRING,
      user_type: DataTypes.STRING,
    },

    {
      hooks: {
        beforeCreate: function (user, options) {
          user.user_password = encrypt(user.user_password);
          user.user_avatar =
            user.user_avatar || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
