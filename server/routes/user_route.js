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
  const data = req.body;
  console.log("--------------------register--------------------")
  console.log('user email',data)
  const user = new User({
    username:data.username,
    email:data.email,
    password:data.password,
    age:data.age,
  });
  user.save((err, user)=> {
    if(err){
      console.log(err)
      res.send({
        error_code:err.code,
        error_message: err.errmsg
      })
    }
    console.log("registering user")
    res.status(200).send({
      success:true,
      msg:"Registration successful",
      user
    })
  })

  // const user = new User(req.body);
  // user.save((err, userData) => {
  //   if (err) {
  //     res.send({
  //       error_code: err.code,
  //       error_message: err.errmsg,
  //     });
  //     // throw err;
  //   }
  //   console.log('userdata',userData);
  //   res.status(200).send({
  //     success: true, 
  //     msg: "Registration successful",
  //   });
  // });
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
