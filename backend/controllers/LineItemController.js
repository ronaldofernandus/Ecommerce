const { line_item, product, shopping_cart, order } = require('../models');

class LineItemController {
    static async getLineItem(req, res) {
        try {
            let result = await line_item.findAll({
                include: [ product, shopping_cart, order ]
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(404).json({
                message: `404: List line_item not found`
            })
        }
    }

    static async addLineItem(req, res) {
        try {
            const { 
                line_qty, 
                line_status, 
                // line_prop_id, 
                // line_shop_id, 
                // line_order_name
             } = req.body;
            const line_prop_id = +req.userData.id;
            const line_shop_id = +req.userData.id;
            const line_order_name = +req.userData.id;

            let result = await line_item.create({ 
                line_qty, 
                line_status, 
                line_prop_id, 
                line_shop_id, 
                line_order_name
             })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editLineItem(req, res) {
        try{
            const id = +req.params.id;
            const line_prop_id = +req.params.id;
            const line_shop_id = +req.params.id;
            const line_order_name = +req.params.id;
            const { 
                line_qty, 
                line_status, 
            } = req.body;

            let result = await line_item.update({
                line_qty, 
                line_status
            }, {
                where: {
                    id, line_prop_id, line_shop_id, line_order_name
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

    static async deleteLineItem(req, res) {
        try {
            const id = +req.params.id;
            const line_prop_id = +req.params.id;
            const line_shop_id = +req.params.id;
            const line_order_name = +req.params.id;

            let result = await line_item.destroy({
                where: {
                    id, line_prop_id, line_shop_id, line_order_name
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

    static async getLineItemById(req, res) {
        try {
            const line_prop_id = +req.params.id;
            const line_shop_id = +req.params.id;
            const line_order_name = +req.params.id;
            
            let result = await line_item.findById({
                where: {
                    line_prop_id: line_prop_id,
                    line_shop_id: line_shop_id, 
                    line_order_name: line_order_name
                }
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = LineItemController;