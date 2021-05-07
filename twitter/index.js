const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/routes");

mongoose.connect("mongodb://localhost/twitterDB", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("logged in to db"));

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
	res.send("heloo");
});

app.use("/api", router);

const port = 3000;

app.listen(port, () => {
	console.log("app is working");
});
