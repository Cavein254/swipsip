const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/todoapp",
  { useNewUrlParser: true }
    .then(() => console.log("connected"))
    .catch((err) => console.log(err))
);

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.listen(5000);
