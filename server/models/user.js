const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 20;

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     maxLength: 50,
//   },
//   email: {
//     type: String,
//     trim: true,
//     unique: 1,
//   },
//   password: {
//     type: String,
//     minLength: 5,
//   },
//   role: {
//     type: Number,
//     default: 0,
//   },
//   token: {
//     type: String,
//   },
//   tokenExp: {
//     type: Number,
//   },
// });

// userSchema.pre("save", (next) => {
//   let user = this;
//   if (user.isModified("password")) {
//     bcrypt.genSalt(saltRounds, (err, salt) => {
//       if (err) return next(err);
//       bcrypt.hash(user.password, salt, (err, hash) => {
//         if (err) return next(err);
//         user.password = hash;
//       });
//     });
//   } else {
//     next();
//   }
// });

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

UserSchema.pre("save", (next) => {
  let user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
