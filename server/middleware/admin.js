const { auth } = require("./auth.js")

const admin = (req,res,auth, next) => {
	const user = req.user
	if(user.role !== 1){
		res.send({
			success:false,
			msg:"Unauthorized access"
		})
	}
	req.isAdmin = true
	req.user = user;
	next();
}