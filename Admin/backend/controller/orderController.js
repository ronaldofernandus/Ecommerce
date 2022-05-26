const { order, user, line_item } = require("../models");

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
      let createOrder = await order.create({});
    } catch (error) {}
  }

  static async updateOrder(req, res) {
    try {
    } catch (error) {}
  }
  static async deleteOrder(req, res) {
    try {
    } catch (error) {}
  }
  static async getOrderById(req, res) {
    try {
    } catch (error) {}
  }
}
module.exports = orderController;
