const productRoute = require('express').Router();
const ProductController = require('../controllers/ProductController');

productRoute.get('/', ProductController.getProduct);
productRoute.post('/', ProductController.addProduct);
productRoute.put('/:id', ProductController.editProduct);
productRoute.delete('/:id', ProductController.deleteProduct);
productRoute.get('/info/:id', ProductController.getProductById);

module.exports = productRoute;