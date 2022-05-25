const LineItemRoute = require('express').Router();
const LineItemController = require('../controllers/LineItemController');

LineItemRoute.get('/', LineItemController.getLineItem);
LineItemRoute.post('/', LineItemController.addLineItem);
LineItemRoute.put('/:id', LineItemController.editLineItem);
LineItemRoute.delete('/:id', LineItemController.deleteLineItem);
LineItemRoute.get('/info/:id', LineItemController.getLineItemById);

module.exports = LineItemRoute;