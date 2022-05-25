const postingRoute = require("express").Router();
const postingController = require("../controller/postingController");

const authentication = require("../middleware/tokenMiddleWare");
const upload = require("../middleware/multer");

postingRoute.get("/", postingController.getPosting);
postingRoute.post(
  "/add",
  authentication,

  postingController.createPosting
);
postingRoute.put("/:id", postingController.updatePosting);
postingRoute.delete("/:id", postingController.deletePosting);
postingRoute.get("/:id", postingController.getPostingById);

module.exports = postingRoute;

// upload.single("image"),
//   (req, res) => {
//     let finalImageUrl =
//       req.protocol + "://" + req.get("host") + "/image/" + req.file.filename;
//     res.json({ status: "succes", image: finalImageUrl });
//   },
