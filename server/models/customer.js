const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../../config/key");

const UserSchema = new mongoose.Schema({
  
  username: {
    type: String,
    maxlength: 10,
    unique: 1,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
  },
  badge: {
    type: String,
  },
  date_joined: {
    type: Number,
  },
  age: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

UserSchema.pre("save", function (next) {
  this.date_joined = Date.now();

  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err, { error: "Failed to hash password" });
    this.password = passwordHash;
    next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err, { error: "passwords do not match" });
    } else {
      if (!isMatch) {
        return cb(null, isMatch);
      }
    }
    return cb(null, this);
  });
};

// jwttoken
UserSchema.methods.generateToken = function (cb) {
  const user = this;

  const token = jwt.sign(user._id.toHexString(), config.token);
  let oneHour = moment().add(1, "hour".valueOf());

  user.tokenExp = oneHour;
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
const User = mongoose.model("User", UserSchema);
module.exports = User;
