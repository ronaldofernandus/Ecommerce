const itemRoute = require("express").Router();
const itemController = require("../controller/itemController");

const authentication = require("../middleware/tokenMiddleWare");
// const upload = require("../middleware/multer");
itemRoute.get("/", itemController.getItem);
itemRoute.post(
  "/add",
  authentication,

  itemController.createItem
);
itemRoute.put("/:id", authentication, itemController.updateItem);
itemRoute.delete("/:id", authentication, itemController.deleteItem);
itemRoute.get("/:id", authentication, itemController.getItemById);

module.exports = itemRoute;
