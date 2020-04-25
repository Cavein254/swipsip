const express = require("express");
const request = require("request");
const moment = require('moment');
const paymentRouter = express.Router();

const accessToken = require("./middleware/access_token");
const lnmp = require("./middleware/lipa_na_mpesa");
const config = require("../../../config/key");


paymentRouter.get("/mpesa_auth", accessToken, (req, res) => {
  res.status(200).json({ access_token: req.access_token });
});

paymentRouter.get("/lipa_na_mpesa", accessToken, lnmp, (req, res) => {
   res.status(200).json(req)
});

paymentRouter.post('/lnmp_callback', (req, res)=>{
    console.log("--------lnmp stk callback-------")
    console.log(req.body)
})


module.exports = paymentRouter;
