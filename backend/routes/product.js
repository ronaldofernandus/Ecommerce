const productRoute = require('express').Router();
const ProductController = require('../controllers/ProductController');
// const { authentication } = require('../middlewares/auth');


productRoute.get('/', ProductController.getProduct);
productRoute.get('/product_user', ProductController.getPU);
productRoute.get('/info/:id', ProductController.getProductById);

productRoute.post('/', ProductController.addProduct);
productRoute.put('/update/:id', ProductController.editProduct);
productRoute.delete('/:id', ProductController.deleteProduct);

module.exports = productRoute;