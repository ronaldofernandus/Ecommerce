const { product, user } = require('../models');


class ProductController {
    static async getProduct(req, res) {
        try {
            let result = await product.findAll({
                include: [user]
            })

            res.status(200).json(result)
        } catch(err) {
            res.status(404).json({
                message: `404: List product not found`
            })
        }
    }

    static async getPU(req, res) {
        try {
            let id = +req.userData.id;

            let result = await product.findAll({
                where: { userId: id},
                include: [user]
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(404).json({
                message: `404: User Product not found`
            })
        }
    }

    static async addProduct(req, res) {
        try {
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
                userId
              } = req.body;
            // const userId = +req.userData.id;

            let result = await product.create({ 
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
            })
            res.status(200).json(result)
        } catch(err) {
            console.log(err);
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editProduct(req, res) {
        try{
            const id = +req.params.id;
            const userId = +req.params.id;
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
                prod_views
             } = req.body;

            let result = await product.update({
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
                userId
            }, {
                where: { id }
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async deleteProduct(req, res) {
        try {
            const id = +req.params.id;
            const userId = +req.userData.id;

            let result = await product.destroy({
                where: {
                    id, userId
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

    static async getProductById(req, res) {
        try {
            const userId = +req.params.id;
            
            let result = await product.findById({
                where: {userId: userId}
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = ProductController;