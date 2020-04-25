const express = require("express");
const request = require("request");
const parseJson = require("parse-json")
const config = require("../../../../config/key"); 



const accessToken = (req, res, next) => {
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
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        res.send({
          status: response.statusCode,
          msg: response.statusMessage,
          error,
        });
      } else {
        req.access_token = parseJson(body).access_token;
        next();
      }
    }
  );
};

module.exports = accessToken