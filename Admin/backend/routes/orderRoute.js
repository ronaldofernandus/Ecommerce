const orderRoute = require("express").Router();
const orderController = require("../controller/orderController");

const authentication = require("../middleware/tokenMiddleWare");
// const upload = require("../middleware/multer");

orderRoute.get("/", orderController.getOrder);
orderRoute.post(
  "/add",
  authentication,

  orderController.createOrder
);
orderRoute.put("/:id", authentication, orderController.updateOrder);
orderRoute.delete("/:id", authentication, orderController.deleteOrder);
orderRoute.get("/:id", authentication, orderController.getOrderById);

module.exports = orderRoute;


