const mongoose = require("mongoose");
const moment = require("mongoose");


const ProductSchema = new mongoose.Schema({
	title:{
		type:String,
		maxlength:50,
		unique:1
	},
	pictureUrl:{
		type:String
		unique:1
	},
	description:{
		type:String,
	},
	instock:{
		type:Boolean,
		default:true
	},
	price:{
		type:Number,
	},
	date_created:{
		type:Number,
	},
	date_updated:{
		type:Number,
	},
	inventory_total:{
		type:Number,
	},
	number_sold:{
		type:Number,
		default:0,
	}

})

ProductSchema.pre("save", function (next) {
	
})