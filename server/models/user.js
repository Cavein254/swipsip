const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/key");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      if (!isMatch) return cb(null, isMatch);
      return cb(null, this);
    }
  });
};
//generate token
UserSchema.methods.generateToken = function (cb) {
  const user = this;

  const token = jwt.sign(user._id.toHexString(), config.token);

  user.token = token;
  user.save((err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

UserSchema.statics.findByToken = function (token, cb) {
  let user = this;

  jwt.verify(token, config.token, (err, decode) => {
    user.findOne({ _id: decode, token: token }, (err, user) => {
      if (err) throw err;
      cb(null, user);
    });
  });
};

let User = mongoose.model("User", UserSchema);
module.exports = User;
