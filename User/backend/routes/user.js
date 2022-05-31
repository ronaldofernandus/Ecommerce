const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');

userRoute.get('/info_user/:id',UserController.getinfoUserbyId);
userRoute.post('/login', UserController.login);
userRoute.post('/register', UserController.register);

module.exports = userRoute;