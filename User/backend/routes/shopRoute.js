const shopRoute = require("express").Router();
const shopController = require("../controller/shopController");

const authentication = require("../middleware/tokenMiddleWare");

shopRoute.get("/", shopController.getShop);
shopRoute.post(
  "/add",
  authentication,

  shopController.createShop
);
shopRoute.put("/:id", authentication, shopController.updateShop);
shopRoute.delete("/:id", authentication, shopController.deleteShop);
shopRoute.get("/:id", authentication, shopController.getShopById);

module.exports = shopRoute;
