const orderRoute = require('express').Router();
const OrderController = require('../controllers/OrdersController');

orderRoute.get('/order_user',OrderController.getAllOrderUser);

module.exports = orderRoute;