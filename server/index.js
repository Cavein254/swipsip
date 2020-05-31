const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const config = require("../config/key");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(fileUpload());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/user", require("./routes/user_route"));
app.use("/api/user/payments", require("./hooks/payment/pay"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/Uploads", (req, res) => {
  console.log(`${path.resolve(__dirname, "..")}`);
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  console.log("_____________________________________");

  file.mv(
    `${path.resolve(__dirname, "..")}/client/public/uploads/product/${
      file.name
    }`,
    (err) => {
      if (err) {
        return res.status(500).send({
          success: false,
          msg: "No image uploaded",
        });
      }
      const data = {
        fileName: file.name,
        filePath: `/uploads/product/${file.name}`,
      };
      console.log(data);
      res.send(data);
    }
  );
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  const host = server.address().address;
  console.log(`server running at port ${port}`);
  console.log(host);
});
