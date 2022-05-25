const { product_image, product } = require('../models');

class ProductImageController {
    static async getPI(req, res) {
        try {
            let result = await product_image.findAll({
                include: [product]
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(404).json({
                message: `404: List product_image not found`
            })
        }
    }

    static async addPI(req, res) {
        try {
            const { 
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary
             } = req.body;
            const prim_prod_id = +req.userData.id;

            let result = await product_image.create({ 
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary,
                prim_prod_id
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editPI(req, res) {
        try{
            const id = +req.params.id;
            const prim_prod_id = +req.userData.id;
            // const userId = +req.params.id;
            const { 
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary } = req.body;

            let result = await product_image.update({
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary,
                // prim_prod_id
            }, {
                where: {
                    id, prim_prod_id
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

    static async deletePI(req, res) {
        try {
            const id = +req.params.id;
            const prim_prod_id = +req.userData.id;

            let result = await product_image.destroy({
                where: {
                    id, prim_prod_id
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

    static async getPIById(req, res) {
        try {
            const prim_prod_id = +req.params.id;
            
            let result = await product_image.findById({
                where: {prim_prod_id: prim_prod_id}
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = ProductImageController;