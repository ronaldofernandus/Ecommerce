const orderRoute = require('express').Router();
const OrderController = require('../controllers/OrderController');
const { authentication } = require('../middlewares/auth');

orderRoute.get('/', OrderController.getOrder);
orderRoute.post('/add', authentication , OrderController.addOrder);
orderRoute.put('/:id', authentication , OrderController.editOrder);
orderRoute.delete('/:id', authentication, OrderController.deleteOrder);
orderRoute.get('/info/:id', authentication, OrderController.getOrderById);

module.exports = orderRoute;