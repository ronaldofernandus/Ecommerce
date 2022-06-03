const { shopping_cart, user, line_item } = require("../models");
const { getVerification } = require("../helpers/jwtFile");

class shopController {
  static async getShop(req, res) {
    try {
      let getShop = await shopping_cart.findAll({
        include: [user],
      });

      res.status(200).json(getShop);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createShop(req, res) {
    try {
      const { shop_created_on, shop_status } = req.body;
      // // console.log(req.body);

      // // console.log(req.file.path);

      const userId = +req.userData.id;

      let createShop = await shopping_cart.create({
        shop_created_on,
        shop_status,
        //open or closed
        userId,
      });

      res.status(201).json(createShop);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateShop(req, res) {
    try {
      const id = +req.params.id;

      const userId = +req.userData.id;
      // console.log(userId);
      const { shop_created_on, shop_status } = req.body;

      let updateShop = await shopping_cart.update(
        {
          shop_created_on,
          shop_status,

          userId,
        },
        {
          where: { id },
        }
      );

      updateShop[0] === 1
        ? res.status(201).json({
            message: "cart updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async deleteShop(req, res) {
    try {
      const id = req.params.id;
      const userId = +req.userData.id;
      let deleteShop = await shopping_cart.destroy({
        where: {
          id,
          userId,
        },
      });

      deleteShop === 1
        ? res.status(200).json({
            message: "product deleted successfully",
          })
        : res.status(403).json({
            message: "delete fail",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async getShopById(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let getShopById = await shopping_cart.findAll({
        where: { id, userId },
      });
      res.status(200).json(getShopById);
    } catch (error) {
      // console.log(error);
      res.status(500).json({
        message: "not found",
      });
    }
  }
}
module.exports = shopController;
