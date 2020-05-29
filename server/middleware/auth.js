const User = require("../models/customer");

const auth = (req, res, next) => {
  const id = req.body.id;
  const user_token = req.body.user_token;
  User.findById(id, (err, doc) => {
    if (err) {
      res.send({
        success: false,
        msg: "expired token",
      });
    }
    if (doc.token === user_token) {
      console.log("pass");
      next();
    }
  });
};

module.exports = { auth };
