const express = require("express");
const router = express.Router();
const User = require("../models/customer");
const { auth } = require("../middleware/auth");

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    username: req.user.username,
    role: req.user.role,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) {
      console.log(err);
    }
    console.log(userData);
    res.status(200).send({
      success: true,
      msg: "Registration successful",
    });
  });
});

router.post("/login", (req, res) => {
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

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
    if (err)
      return res.json({
        success: false,
        err,
      });
    return res.status(200).send({
      sucess: true,
      msg: "successfully logged out",
    });
  });
});

module.exports = router;
