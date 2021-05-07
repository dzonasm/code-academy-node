const router = require("express").Router();
// const { secondMiddleware } = require("../middlewares/middleware");

const {
	getTweets,
	createTweet,
	likeTweet,
	getTopTweets,
} = require("../controllers/tweets.js");

const { signUp, getAllUsers } = require("../controllers/user.controller");

router.route("/tweet").post(createTweet).get(getTweets);
router.route("/tweet/likeTweet").post(likeTweet);
router.route("/tweet/getTop").get(getTopTweets);

router.route("/login").post(signUp);
router.route("/user/getAllUsers").get(getAllUsers);

module.exports = router;
