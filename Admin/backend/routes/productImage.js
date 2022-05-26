const productImageRoute = require("express").Router();

const imageController = require("../controller/imageController");

productImageRoute.get("/", imageController.getImage);
productImageRoute.post('/add',imageController.postImage);

module.exports = productImageRoute;
