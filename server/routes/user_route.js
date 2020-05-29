const express = require("express");
const router = express.Router();
const User = require("../models/customer");
const Company = require("../models/company");
const { auth } = require("../middleware/auth");

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    username: req.user.username,
    role: req.user.role,
  });
});

router.post("/admin/addcompany", auth, (req, res) => {
  const data = req.body;
  console.log("adding company", data);
  const company = new Company({ company_name: data.company_name });

  company.save((err, company) => {
    if (err) {
      res.send({
        success: false,
        error_code: err.code,
        error_message: err.errmsg,
      });
    }
    res.status(200).send({
      success: true,
      msg: "company successfully added",
      Company,
    });
  });
});

router.get("/admin/viewallusers", auth, (req, res) => {
  User.find({}, (err, doc) => {
    if (err) {
      res.send({
        success: false,
        msg: err,
      });
      res.send({
        success: true,
        payload: doc,
      });
    }
  });
});

router.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);
  //.toString() fixes errors generated when submiting data
  // mongoose  is unable to cast email:['test@test.com']
  // to email:'test@test.com'
  const userData = {
    username: data.username.toString(),
    email: data.email.toString(),
    password: data.password.toString(),
    age: data.age.toString(),
    isAdmin: data.admin,
  };
  const user = new User(userData);

  if (+user.age < 18 || +user.age >= 100) {
    res.send({
      success: false,
      msg: "Unappropriate age limit",
    });
  } else {
    user.save((err, user) => {
      if (err) {
        let message = "[User registration failed] ";
        res.send({
          success: false,
          error_code: err.code,
          msg: message.concat(err.errmsg),
        });
      } else {
        console.log("registartion success");
        res.status(200).send({
          success: true,
          msg: "successfully registered user",
        });
      }
    });
  }
});

router.post("/login", (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        success: false,
        msg: "Error: no user with that email",
        err,
      });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          success: false,
          msg: "Error: Incorrect password",
          err,
        });
      }

      //generate jwt token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_user_auth", user.tokenExp);
        res.cookie("x_user_auth", user.token).status(200).json({
          success: true,
          msg: "logged In",
          user,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  console.log("-----logout route-----");
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "" },
    { tokenExp: "" },
    (err, doc) => {
      if (err)
        return res.json({
          success: false,
          err,
        });
      return res.status(200).send({
        sucess: true,
        msg: "successfully logged out",
      });
    }
  );
});

module.exports = router;
