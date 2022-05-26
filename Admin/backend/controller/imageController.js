const { product_image, product } = require("../models");

class imageController {
  static async getImage(req, res) {
    try {
      let getImage = await product_image.findAll({
        include: [product],
        where: {
          prodId,
        },
      });

      res.status(200).json(getImage);
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async postImage(req, res) {
    try {
      const { image, prodId } = req.body;
      // // console.log(req.body);

      // // console.log(req.file.path);

      let postImage = await product_image.create({
        image,
        prodId,
      });

      res.status(201).json(postImage);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateImage(req, res) {
    try {
      const id = +req.params.id;

      const userId = +req.userData.id;
      // console.log(userId);
      const {
        prod_name,
        prod_desc,
        prod_price,
        prod_stock,
        prod_expire,
        prod_weight,
        prod_category,
        prod_brand,
        prod_condition,
        prod_total_sold,
        prod_rating,
        prod_views,
      } = req.body;

      let updateImage = await product_image.update(
        {
          prod_name,
          prod_desc,
          prod_price,
          prod_stock,
          prod_expire,
          prod_weight,
          prod_category,
          prod_brand,
          prod_condition,
          prod_total_sold,
          prod_rating,
          prod_views,
          userId,
        },
        {
          where: { id },
        }
      );

      updateImage[0] === 1
        ? res.status(201).json({
            message: "image updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async deleteImage(req, res) {
    try {
      const id = req.params.id;
      const userId = +req.userData.id;
      let deleteImage = await product.destroy({
        where: {
          id,
          userId,
        },
      });

      deleteImage === 1
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

  static async getImageById(req, res) {
    try {
      const id = +req.params.id;
      const userId = +req.userData.id;
      let getImageById = await product.findAll({
        where: { id, userId },
      });
      res.status(200).json(getImageById);
    } catch (error) {
      // console.log(error);
      res.status(500).json({
        message: "not found",
      });
    }
  }
}

module.exports = imageController;
