const mongoose = require("mongoose");

const RatingsSchema = new mongoose.Schema({
	rating: {
		type: Number,
		default: 0,
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
});
