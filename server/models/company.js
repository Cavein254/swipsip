const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
	company_name = {
		type: String,
		unique:1,
	}
})

module.exports = mongoose.model('Company', CompanySchema);