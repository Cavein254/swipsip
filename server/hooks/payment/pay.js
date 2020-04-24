const express = require("express");
const request = require("request");
const parseJson = require("parse-json");
const paymentRouter = express.Router();
const config = require("../../../config/key");

paymentRouter.get("/mpesa_auth", (req, res, accessToken) => {
    // return res.send({access_token:req.access_token})
    console.log("running function")
});

function accessToken(req,res) {
  const consumer_key = config.consumerKey;
  const consumer_secret = config.consumerSecret;
  const api_url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

  const auth =
    "Basic " +
    new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");
  request(
    {
      url: api_url,
      headers: {
        Authorization: auth,
      },
    },
    (err, response, body) => {
      if (err || response.statusCode !== 200 ) {
        res.json({
            success:false,
            msg:response.statusMessage,
            err
        })
      } else {
          console.log(parseJson(body))
        req.access_token = parseJson(body).access_token
      }
    }
  );
//   next();
}

paymentRouter.get("/test", (req, res) => {
  return res.json({
    success: true,
  });
});

module.exports = paymentRouter;
