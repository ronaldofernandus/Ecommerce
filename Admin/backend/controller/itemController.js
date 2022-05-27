const { line_item, product, shopping_cart, order } = require("../models");

class itemController {
  static async getItem(req, res) {
    try {
      let getItem = await line_item.findAll({
        include: [product, shopping_cart, order],
      });
      res.status(200).json(getItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createItem(req, res) {
    try {
      const {
        line_qty,
        line_status,
        //cart or checkout or ordered
        productId,
        shoppingCartId,
        orderId,
      } = req.body;

      let createItem = await line_item.create({
        line_qty,
        line_status,
        productId,
        shoppingCartId,
        orderId,
      });
      res.status(200).json({
        message: "has been created",
      });
    } catch (error) {
      // console.log(error);

      res.status(500).json(error);
    }
  }

  static async updateItem(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;

      const {
        line_qty,
        line_status,
        //cart or checkout or ordered
        productId,
        shoppingCartId,
        orderId,
      } = req.body;

      let updateItem = await line_item.update(
        {
          line_qty,
          line_status,
          //cart or checkout or ordered
          productId,
          shoppingCartId,
          orderId,
          userId,
        },
        {
          where: { id },
        }
      );

      updateItem[0] === 1
        ? res.status(201).json({
            message: "Item updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
  static async deleteItem(req, res) {
    try {
      const id = req.params.id;
      const userId = +req.userData.id;

      let deleteItem = await line_item.destroy({
        where: {
          id,
        },
      });

      deleteItem === 1
        ? res.status(200).json({
            message: "Item deleted successfully",
          })
        : res.status(403).json({
            message: "delete fail",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
  static async getItemById(req, res) {
    try {
      const id = +req.params.id;

      let getItemById = await line_item.findAll({
        where: {
          id,
        },
      });
      res.status(200).json(getItemById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = itemController;
