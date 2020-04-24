const express = require("express");
const Paymentrouter = express.Router();

const config = require("../../../config/key");
const options = {
  noColor: true,
};

Paymentrouter.post("/hooks/mpesa", (req, res) => {
  console.log("--------received Mpesa webhook----------");
  console.log(req.body, options);
  let message = {
    ResponseCode: "00000000",
    ResponseDesc: "success",
  };
  console.log(req.body);
  return res.json({
    payload: "sucess",
  });
});

module.exports = Paymentrouter;
