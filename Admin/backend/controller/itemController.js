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
        shopId,
        orderId,
      } = req.body;

      let createItem = await line_item.create({
        line_qty,
        line_status,
        productId,
        shopId,
        orderId,
      });
      res.status(200).json(createItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateItem(req, res) {
    try {
      const id = +req.params.id;

      const userId = +req.userData.id;
      // console.log(userId);
      const {
        order_created_on,
        order_subtotal,
        order_discount,
        order_tax,
        order_total_due,
        order_total_qty,
        order_payt_trx_number,
        order_city,
        order_addres,
        order_status,
      } = req.body;

      let updateItem = await line_item.update(
        {
          order_created_on,
          order_subtotal,
          order_discount,
          order_tax,
          order_total_due,
          order_total_qty,
          order_payt_trx_number,
          order_city,
          order_addres,
          order_status,
          //open or cancelled or paid or shipping or closed

          userId,
        },
        {
          where: { id },
        }
      );

      updateItem[0] === 1
        ? res.status(201).json({
            message: "Order updated successfully",
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
      let deleteOrder = await order.destroy({
        where: {
          id,
          userId,
        },
      });

      deleteOrder === 1
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
  static async getItemById(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let getItemById = await order.findAll({
        where: {
          id,
          userId,
        },
      });
      res.status(200).json(getItemById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = itemController;
