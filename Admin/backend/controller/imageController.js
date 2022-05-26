const { product_image, product } = require("../models");

class imageController {
  static async getImage(req, res) {
    try {
      let getImage = await product_image.findAll({
        include: [product],
      });

      res.status(200).json(getImage);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async postImage(req, res) {
    try {
      // const { image, productId } = req.body;
      // // console.log(req.body);
      // const userId = +req.userData.id;
      // // console.log(req.file.path);

      const image = req.file;
      console.log(req.file);
      const { fieldname, originalname, mimetype, filename, size } = image;

      const productId = req.body;

      let postImage = await product_image.create({
        prim_filename: filename,
        prim_filesize: size,
        prim_filetype: mimetype,
        prim_primary: true,
        productId,
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
        prim_filename,
        prim_filesize,
        prim_filetype,
        prim_primary,
        productId,
      } = req.body;

      let updateImage = await product_image.update(
        {
          prim_filename,
          prim_filesize,
          prim_filetype,
          prim_primary,
        },
        {
          where: { id, productId },
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
      let getImageById = await product_image.findAll({
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
