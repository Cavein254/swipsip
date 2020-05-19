const express = require("express");
const request = require("request");
const moment = require("moment");
const paymentRouter = express.Router();

const { accessToken } = require("./middleware/access_token");
const config = require("../../../config/key");

paymentRouter.get("/mpesa_auth", accessToken, (req, res) => {
	res.status(200).json({ access_token: req.access_token });
});

paymentRouter.get("/lipa_na_mpesa", accessToken, (req, res) => {
	console.log("---------------------------------lnmp start----------------");
	const access_token = req.access_token;
	const Timestamp = moment(Date.now()).format("YYYYMMDDHHmmss");
	const Password = new Buffer.from(
		"174379" +
			"bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" +
			Timestamp
	).toString("base64");
	const api_url =
		"https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

	request(
		{
			url: api_url,
			method: "post",
			headers: {
				Authorization: "Bearer " + access_token,
			},
			json: {
				BusinessShortCode: "174379",
				Password,
				Timestamp,
				TransactionType: "CustomerPayBillOnline",
				Amount: "0",
				PartyA: config.PhoneNumber,
				PartyB: "174379",
				PhoneNumber: config.PhoneNumber,
				CallBackURL: `${config.CallBackURL}/lnmp_callback`,
				AccountReference: "test",
				TransactionDesc: "test",
			},
		},
		(error, response, body) => {
			if (error || response.statusCode !== 200) {
				res.send({
					status: response.statusCode,
					msg: response.statusMessage,
					errorcode: body.errorCode,
					errorMessage: body.errorMessage,
				});
			}

			console.log(body);
		}
	);
});

paymentRouter.post("/lnmp_callback", (req, res) => {
	console.log("--------lnmp stk callback-------");
	console.log(req.body);
});

module.exports = paymentRouter;
