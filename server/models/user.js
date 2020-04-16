const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

let User = mongoose.model("User", UserSchema);
module.exports = User;

// let saltFactor = 20;
// UserSchema.pre("save", (next) => {
//   let user = this;
//   if (!user.isModified("password")) return next();

//   bcrypt.genSalt(saltFactor, (err, salt) => {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });
// UserSchema.methods.comparePassword = (userPassword, next) => {
//   bcrypt.compare(userPassword, this.password, (err, isMatch) => {
//     if (err) return next(err);
//     next(null, isMatch);
//   });
// };

// const User = mongoose.model("User", UserSchema);
// module.exports = { User };
