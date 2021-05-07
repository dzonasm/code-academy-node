const User = require("../models/user.model");

const signUp = async (req, res) => {
	try {
		const user = new User({
			email: req.body.email,
			password: req.body.password,
		});
		let newUser = await user.save();
		res.send(newUser);
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};

const getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find();
		res.send(allUsers);
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};

module.exports = {
	signUp,
	getAllUsers,
};

//
