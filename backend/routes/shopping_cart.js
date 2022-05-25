const shoppingCartRoute = require('express').Router();
const ShoppingCartController = require('../controllers/ShoppingCartController');

shoppingCartRoute.get('/', ShoppingCartController.getCart);
shoppingCartRoute.post('/', ShoppingCartController.addCart);
shoppingCartRoute.put('/:id', ShoppingCartController.editCart);
shoppingCartRoute.delete('/:id', ShoppingCartController.deleteCart);
shoppingCartRoute.get('/info/:id', ShoppingCartController.getCartById);

module.exports = shoppingCartRoute;