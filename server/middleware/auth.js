const User = require("../models/customer");

const auth = (req, res, next) => {
  let token = req.cookies.x_user_auth;

  User.finByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        msg: "Authentication failure",
      });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
