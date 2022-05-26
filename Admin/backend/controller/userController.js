const { user, Product } = require("../models");
const { encrypt, decrypt } = require("../helpers/bcrypt");

const { getJwt, getVerification } = require("../helpers/jwtFile");
class userController {
  static async getUsers(req, res) {
    try {
      let getUsers = await user.findAll({});
      res.status(200).json(getUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async register(req, res) {
    try {
      const {
        user_name,
        user_email,
        user_password,
        user_salt,
        user_birthdate,
        user_gender,
        user_avatar,
        user_type,
      } = req.body;
      // const profile = req.file.path;
      let register = await user.create({
        user_name,
        user_email,
        user_password,
        user_salt,
        user_birthdate,
        user_gender,
        user_avatar,
        user_type,
      });

      res.status(201).json(register);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { user_email, user_password } = req.body;
      let login = await user.findOne({
        where: {
          user_email,
        },
      });
      // console.log(login);
      if (login) {
        if (decrypt(user_password, login.user_password)) {
          let get_token = getJwt(login);
          res.status(200).json({
            get_token,
          });
        } else {
          res.status(403).json({
            message: "Invalid password",
          });
        }
      } else {
        res.status(404).json({
          message: "Not found",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const {
        user_name,
        user_email,
        user_password,
        user_salt,
        user_birthdate,
        user_gender,
        user_avatar,
        user_type,
      } = req.body;

      let updateUser = await user.update(
        {
          user_name,
          user_email,
          user_password,
          user_salt,
          user_birthdate,
          user_gender,
          user_avatar,
          user_type,
        },
        {
          where: { id },
        }
      );

      updateUser[0] === 1
        ? res.status(200).json({
            message: `Data updated`,
          })
        : res.status(403).json({
            message: `Data not updated`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getUsersById(req, res) {
    try {
      const id = +req.params.id;
      let getUsersById = await user.findByPk(id);

      res.status(200).json(getUsersById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = userController;
