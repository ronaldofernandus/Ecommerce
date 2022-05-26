const productRoute = require("express").Router();
const productController = require("../controller/productController");

const authentication = require("../middleware/tokenMiddleWare");
// const upload = require("../middleware/multer");

productRoute.get("/", productController.getProduct);
productRoute.post(
  "/add",
  authentication,

  productController.createProduct
);
productRoute.put("/:id",  authentication,productController.updateProduct);
productRoute.delete("/:id",  productController.deleteProduct);
productRoute.get("/:id",authentication, productController.getProductById);

module.exports = productRoute;

// upload.single("image"),
//   (req, res) => {
//     let finalImageUrl =
//       req.protocol + "://" + req.get("host") + "/image/" + req.file.filename;
//     res.json({ status: "succes", image: finalImageUrl });
//   },
