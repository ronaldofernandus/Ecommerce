const { product_image, product } = require("../models");

class imageController {
  static async getImage(req, res) {
    try {
      let getImage = await product_image.findAll({
        include: [product],
      });
      res.status(200).json(getImage);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async postImage(req, res) {
    try {
      let postImage = await product_image.create({});
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = imageController;
