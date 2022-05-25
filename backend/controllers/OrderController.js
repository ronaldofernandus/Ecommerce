const { order, user } = require('../models');

class OrderController {
    static async getOrder(req, res) {
        try {
            let result = await order.findAll({
                include: [user]
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(404).json({
                message: `404: List order not found`
            })
        }
    }

    static async addOrder(req, res) {
        try {
            const { 
                order_created_on, 
                order_subtotal, 
                order_discount, 
                order_tax, 
                order_total_due, 
                order_total_qty, 
                order_payt_trx_number,  
                order_city,
                order_addres,
                order_status
            } = req.body;
            const order_user_id = +req.userData.id;

            let result = await order.create({ 
                order_created_on, 
                order_subtotal, 
                order_discount, 
                order_tax, 
                order_total_due, 
                order_total_qty, 
                order_payt_trx_number,  
                order_city,
                order_addres,
                order_status,
                order_user_id
             })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editOrder(req, res) {
        try{
            const id = +req.params.id;
            const order_user_id = +req.params.id;
            const { 
                order_created_on, 
                order_subtotal, 
                order_discount, 
                order_tax, 
                order_total_due, 
                order_total_qty, 
                order_payt_trx_number,  
                order_city,
                order_addres,
                order_status,
            } = req.body;

            let result = await order.update({

            }, {
                where: {
                    id, order_user_id
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

    static async deleteOrder(req, res) {
        try {
            const id = +req.params.id;
            const order_user_id = +req.userData.id;

            let result = await order.destroy({
                where: {
                    id, order_user_id
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

    static async getOrderById(req, res) {
        try {
            const order_user_id = +req.params.id;
            
            let result = await order.findById({
                where: {order_user_id: order_user_id}
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = OrderController;