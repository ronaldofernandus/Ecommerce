require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
// const upload = require("./middleware/multer");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/images", express.static(path.join(__dirname, "images")));
// app.post("/images", upload.single("image"), (req, res) => {
//   let finalImageUrl =
//     req.protocol + "://" + req.get("host") + "/image/" + req.file.filename;
//   res.json({ status: "succes", image: finalImageUrl });
// });

const indexRoute = require("./routes");
app.use(indexRoute);

app.listen(port, () => {
  console.log(`port sedang berjalan di ${port}`);
});
