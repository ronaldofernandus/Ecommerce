const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');

userRoute.get('/info_user/:id',UserController.getinfoUserbyId);

module.exports = userRoute;