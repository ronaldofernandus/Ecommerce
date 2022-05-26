const productRoute = require('express').Router();
const ProductController = require('../controllers/ProductControllers');

productRoute.get('/info_product/:id',ProductController.getinforproductbyId);

module.exports = productRoute;