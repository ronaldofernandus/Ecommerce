const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');
const { authentication } = require('../middlewares/auth')

userRoute.get('/', UserController.getUser);
userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.put('/:id', authentication, UserController.updateUser);
userRoute.delete('/:id', authentication, UserController.deleteUser);
userRoute.get('/info/:id', UserController.getUserbyId);

module.exports = userRoute;