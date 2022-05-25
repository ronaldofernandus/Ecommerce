"use strict";

const { encryptPass } = require('../helpers/bcrypt');
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
      user.hasMany(models.order)
      user.hasMany(models.shopping_cart)
    }
  }
  user.init(
    {
      user_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_salt: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_birthdate: DataTypes.DATE,
      user_gender: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_avatar: {
        allowNull: true,
        type: DataTypes.STRING
      },
      user_type: {
        allowNull: false,
        type: DataTypes.STRING
      },
    }, {
      hooks: {
        beforeCreate: (user) => {
          user.user_password = encryptPass(user.user_password);
        },
        beforeUpdate: (user) => {
          user.user_password = encryptPass(user.user_password);
        }
      }, 
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
