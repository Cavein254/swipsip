const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);
