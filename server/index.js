const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { User } = require("./models/user");
const config = require("../config/key.js");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.get("/api/user/login", (req, res) => {
//   let user = User.findOne({ email: req.body.email }).exec();
//   if (!user) {
//     return Response.status(400).send({
//       success: false,
//       msg: "Auth failed. User does not exist",
//     });
//   }
// });

app.post("/api/users/register", (req, res) => {
  res.end("testing");
});
app.listen(5000);
