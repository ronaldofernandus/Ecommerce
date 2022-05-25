const { product, User } = require("../models");
const { getVerification } = require("../helpers/jwtFile");

class productController {
  static async getProduct(req, res) {
    try {
      let getproduct = await product.findAll({
        include: [User],
      });

      res.status(200).json(getproduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createProduct(req, res) {
    try {
      const { image, title, caption } = req.body;
      // // console.log(req.body);

      // // console.log(req.file.path);

      const UserId = +req.userData.id;
      // console.log(req.userData.id);

      let createproduct = await product.create({
        image,
        title,
        caption,
        UserId,
      });

      res.status(201).json(createproduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateProduct(req, res) {
    try {
      const id = +req.params.id;
      const { image, title, caption } = req.body;

      let updateproduct = await product.update(
        {
          image,
          title,
          caption,
        },
        {
          where: { id },
        }
      );

      updateproduct[0] === 1
        ? res.status(201).json({
            message: "product updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      let deleteproduct = await product.destroy({
        where: { id },
      });

      deleteproduct === 1
        ? res.status(200).json({
            message: "product deleted successfully",
          })
        : res.status(403).json({
            message: "delete fail",
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getProductById(req, res) {
    try {
      const id = +req.params.id;
      let getproductById = await product.findByPk(id);
      res.status(200).json(getproductById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = productController;
