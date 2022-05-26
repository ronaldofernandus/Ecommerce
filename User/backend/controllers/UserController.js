const { user} = require("../models");
const { decryptPassword } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class UserController {
 static async getinfoUserbyId (req,res) {
     try{
        const id = Number(req.userData.id)
            
        let users = [await user.findByPk(id)]
        res.status(200).json(users)
     }
     catch(err) {
        res.status(500).json({message: err.message});
     }
 }
}

module.exports = UserController;
