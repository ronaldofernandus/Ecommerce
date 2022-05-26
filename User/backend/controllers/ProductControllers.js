const { product } = require("../models");
const { decryptPassword } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class ProductController {
 static async getinforproductbyId (req,res) {
     try{
        const id = Number(req.userData.id)
            
        let products = [await product.findByPk(id)]
        res.status(200).json(products)
     }
     catch(err) {
        res.status(500).json({message: err.message});
     }
 }
}

module.exports = ProductController;
