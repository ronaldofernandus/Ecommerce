const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');

userRoute.get('/', UserController.getUser);
userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.put('/:id', UserController.updateUser);
userRoute.delete('/:id', UserController.deleteUser);
userRoute.get('/info/:id', UserController.getUserbyId);

module.exports = userRoute;