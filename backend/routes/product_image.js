const productImageRoute = require('express').Router();
const ProductImageController = require('../controllers/ProductImageController');

productImageRoute.get('/', ProductImageController.getPI);
productImageRoute.post('/', ProductImageController.addPI);
productImageRoute.put('/:id', ProductImageController.editPI);
productImageRoute.delete('/:id', ProductImageController.deletePI);
productImageRoute.get('/info/:id', ProductImageController.getPIById);

module.exports = productImageRoute;