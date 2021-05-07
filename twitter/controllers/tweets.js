const Tweet = require("../models/tweet.model.js");
const User = require("../models/user.model.js");

let tweets = [];

const getTweets = async (req, res) => {
	let allTweets = await Tweet.find();
	res.send(allTweets);
};

const createTweet = async (req, res) => {
	try {
		const tweet = new Tweet({
			content: req.body.content,
			likesCount: 0,
		});
		let savedTweet = await tweet.save();
		res.send(savedTweet);
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};

const likeTweet = async (req, res) => {
	try {
		let id = await req.body.id;
		Tweet.findByIdAndUpdate(
			{ _id: id },
			{ $inc: { likesCount: 1 } },
			{ new: true },
			(err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log(data);
				}
			}
		);

		res.send("succes");
	} catch (e) {
		res.status(400).send(e);
	}
};

const getTopTweets = async (req, res) => {
	try {
		let topTweets = await Tweet.find().sort({ likesCount: -1 }).limit(5);
		console.log(topTweets);
		res.send(topTweets);
	} catch (e) {
		res.status(400).send(e);
	}
};

//limit

module.exports = {
	getTweets,
	createTweet,
	likeTweet,
	getTopTweets,
};
