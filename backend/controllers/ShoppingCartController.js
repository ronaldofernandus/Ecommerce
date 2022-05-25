const { shopping_cart, user } = require('../models');

class ShoppingCartController {
    static async getCart(req, res) {
        try {
            let result = await shopping_cart.findAll({
                include: [user]
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(404).json({
                message: `404: List shopping_cart not found`
            })
        }
    }

    static async addCart(req, res) {
        try {
            const { shop_created_on, shop_status } = req.body;
            const shop_user_id = +req.userData.id;

            let result = await shopping_cart.create({ shop_created_on, shop_status, shop_user_id })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editCart(req, res) {
        try{
            const id = +req.params.id;
            const shop_user_id = +req.params.id;
            const { shop_created_on, shop_status } = req.body;

            let result = await shopping_cart.update({
                shop_created_on, shop_status, shop_user_id
            }, {
                where: {
                    id, shop_user_id
                }
            })

            result[0] === 1 ?
                res.status(200).json({
                    message: `id: ${id} has been updated...`
                })
                :
                res.status(500).json({
                    message: `id: ${id} cannot updated...`
                })
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async deleteCart(req, res) {
        try {
            const id = +req.params.id;
            const shop_user_id = +req.userData.id;

            let result = await shopping_cart.destroy({
                where: {
                    id, shop_user_id
                }
            })

            result === 1 ?
                res.status(200).json({
                    message: `id: ${id} has been removed...`
                })
                :
                res.status(500).json({
                    message: `id: ${id} cannot removed...`
                })
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async getCartById(req, res) {
        try {
            const shop_user_id = +req.params.id;
            
            let result = await shopping_cart.findById({
                where: {shop_user_id: shop_user_id}
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = ShoppingCartController;