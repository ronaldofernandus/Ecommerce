const productRoute = require('express').Router();
const ProductController = require('../controllers/ProductController');
const { authentication } = require('../middlewares/auth');


productRoute.get('/', ProductController.getProduct);
productRoute.get('/info/:id', authentication, ProductController.getProductById);
productRoute.post('/', authentication, ProductController.addProduct);
productRoute.put('/:id', authentication, ProductController.editProduct);
productRoute.delete('/:id', authentication, ProductController.deleteProduct);

module.exports = productRoute;