const { order, user, line_item, product } = require("../models");
const crypto = require("crypto");

class orderController {
  static async getOrder(req, res) {
    try {
      let getOrder = await order.findAll({
        include: [user],
      });
      res.status(200).json(getOrder);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createOrder(req, res) {
    try {
      const {
        order_subtotal,
        order_discount,
        order_tax,
        order_total_due,
        order_total_qty,
        order_city,
        order_addres,
        order_status,
      } = req.body;

      const userId = +req.userData.id;
      const order_created_on = new Date();
      const order_payt_trx_number = crypto.randomBytes(16).toString("hex");

      let createOrder = await order.create({
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
        userId,
      });
      res.status(200).json({
        message: "Has been Created",
      });
    } catch (error) {
      // console.log(error);
      res.status(500).json({ error });
    }
  }

  static async updateOrder(req, res) {
    try {
      const id = +req.params.id;

      const userId = +req.userData.id;
      // console.log(userId);
      const {
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

      let updateOrder = await order.update(
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

      updateOrder[0] === 1
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
  static async deleteOrder(req, res) {
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
  static async getOrderById(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let getOrderById = await order.findAll({
        where: {
          id,
          userId,
        },
      });
      res.status(200).json(getOrderById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = orderController;
