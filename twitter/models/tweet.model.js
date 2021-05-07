const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	likesCount: {
		type: Number,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Tweet = mongoose.model("Tweets", tweetSchema);

module.exports = Tweet;
