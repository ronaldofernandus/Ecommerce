const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');
const { authentication } = require('../middlewares/auth');


userRoute.get('/', UserController.getUser);
userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.get('/info', authentication, UserController.getUserbyId);

userRoute.put('/', UserController.updateUser);
userRoute.delete('/', UserController.deleteUser);

module.exports = userRoute;