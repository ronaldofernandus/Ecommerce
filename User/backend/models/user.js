"use strict";
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
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "Username must not be empty"
          }
        }
      },
      user_email: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "Email must not be empty"
          }
        }
      },
      user_password: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "Password must not be empty"
          }
        }
      },
      user_salt: DataTypes.STRING,
      user_birthdate: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "Birthdate must not be empty"
          }
        }
      },
      user_gender: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "Gender must not be empty"
          }
        }
      },
      user_avatar: DataTypes.STRING,
      user_type: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: function(user, options){
          user.user_password=encryptPassword(user.user_password)
        }
  
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
