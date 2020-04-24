const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
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

app.use("/api/user", require("./routes/user_route"));
app.use("/api/user/payments", require("./hooks/payment/pay"));
app.use("Uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server running at port ${port}`);
});
