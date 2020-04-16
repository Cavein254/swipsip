const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const User = require("./models/user");
const config = require("../config/key.js");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) console.log(err);
    res.status(200).send({
      success: true,
      msg: user,
    });
  });
});

app.listen(5000);
