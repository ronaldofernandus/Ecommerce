const { order,user } = require("../models");
const { decryptPassword } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class OrderController {
 static async getAllOrderUser (req,res) {
     try{
        let id = Number(req.userData.id)
            let orders = await order.findAll({
                where: {
                   order_user_id:id
                },
                include:[user]
        });
        res.status(200).json(orders)
     }
     catch(err) {
        res.status(500).json({message: err.message});
     }
 }
 
}

module.exports = OrderController;
