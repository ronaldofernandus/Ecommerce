const { Posting, User } = require("../models");
const { getVerification } = require("../helpers/jwtFile");

class postingController {
  static async getPosting(req, res) {
    try {
      let getPosting = await Posting.findAll({
        include: [User],
      });

      res.status(200).json(getPosting);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createPosting(req, res) {
    try {
      const { image, title, caption } = req.body;
      // // console.log(req.body);

      // // console.log(req.file.path);

      const UserId = +req.userData.id;
      // console.log(req.userData.id);

      let createPosting = await Posting.create({
        image,
        title,
        caption,
        UserId,
      });

      res.status(201).json(createPosting);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updatePosting(req, res) {
    try {
      const id = +req.params.id;
      const { image, title, caption } = req.body;

      let updatePosting = await Posting.update(
        {
          image,
          title,
          caption,
        },
        {
          where: { id },
        }
      );

      updatePosting[0] === 1
        ? res.status(201).json({
            message: "Posting updated successfully",
          })
        : res.status(403).json({
            message: "not succes",
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deletePosting(req, res) {
    try {
      const id = req.params.id;
      let deletePosting = await Posting.destroy({
        where: { id },
      });

      deletePosting === 1
        ? res.status(200).json({
            message: "Posting deleted successfully",
          })
        : res.status(403).json({
            message: "delete fail",
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getPostingById(req, res) {
    try {
      const id = +req.params.id;
      let getPostingById = await Posting.findByPk(id);
      res.status(200).json(getPostingById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = postingController;
