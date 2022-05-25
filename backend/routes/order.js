const orderRoute = require('express').Router();
const OrderController = require('../controllers/OrderController');

orderRoute.get('/', OrderController.getOrder);
orderRoute.post('/', OrderController.addOrder);
orderRoute.put('/:id', OrderController.editOrder);
orderRoute.delete('/:id', OrderController.deleteOrder);
orderRoute.get('/info/:id', OrderController.getOrderById);

module.exports = orderRoute;