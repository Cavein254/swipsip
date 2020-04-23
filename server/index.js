const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const config = require("../config/key");
const User = require("./models/customer");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cookieParser());

app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) {
      console.log(err);
    }
    console.log(userData);
    res.status(200).send({
      success: true,
      payload: user,
    });
  });
});

app.post("/api/user/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        success: false,
        msg: "Error: no user with that email",
      });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          success: false,
          msg: "Error: Incorrect password",
        });
      }

      //generate jwt token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_user_auth", user.token).status(200).json({
          success: true,
          msg: "logged In",
        });
      });
    });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
