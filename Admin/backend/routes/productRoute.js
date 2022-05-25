const productRoute = require("express").Router();
const productController = require("../controller/productController");

// const authentication = require("../middleware/tokenMiddleWare");
// const upload = require("../middleware/multer");

productRoute.get("/", productController.getPosting);
productRoute.post(
  "/add",
  // authentication,

  productController.createPosting
);
productRoute.put("/:id", productController.updatePosting);
productRoute.delete("/:id", productController.deletePosting);
productRoute.get("/:id", productController.getPostingById);

module.exports = productRoute;

// upload.single("image"),
//   (req, res) => {
//     let finalImageUrl =
//       req.protocol + "://" + req.get("host") + "/image/" + req.file.filename;
//     res.json({ status: "succes", image: finalImageUrl });
//   },
