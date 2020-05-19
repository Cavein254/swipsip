const mongoose = require("mongoose");
const moment = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 50,
    unique: 1,
  },
  pictureUrl: {
    type: String,
    unique: 1,
  },
  description: {
    type: String,
  },
  instock: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
  },
  date_created: {
    type: Number,
    default: Date.now(),
  },
  date_updated: {
    type: Number,
  },
  inventory_total: {
    type: Number,
  },
  number_sold: {
    type: Number,
    default: 0,
  },
  modifiers_name: {
    type: String,
  },
  company: {
    type: [Schema.Types.ObjectId],
    ref: "Company",
  },
});

ProductSchema.pre("save", function (next) {
  //TODO tack who made changes
  if (isModified("price") || isModified("instock")) {
    this.date_updated = Date.now();
  }
  next();
});

module.exports = mongoose.module("Product", ProductSchema);
