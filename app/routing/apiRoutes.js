var friendData = require("../data/friends");
var fs = require("fs");

module.exports = function (app) {
	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function (req, res) {
		console.log(req.body);

		var newPerson = req.body;
		var newFriendTotal = 0;
		var otherFriend = 0;
		var bestFriend = 1000;
		var bestFriendData = {};

		for (let index = 0; index < friendData.length; index++) {
			newFriendTotal = 0;
			otherFriend = 0;

			for (let i = 0; i < friendData[index].enteredData.length; i++) {
				newFriendTotal += Number(newPerson.enteredData[i]);
				otherFriend += Number(friendData[index].enteredData[i]);
			}
			console.log("nft: ", newFriendTotal, "of:", otherFriend);
			if (Math.abs(newFriendTotal - otherFriend) < bestFriend) {
				bestFriend = Math.abs(newFriendTotal - otherFriend);
				bestFriendData = friendData[index];
				console.log("bfd:", bestFriendData);
			}
		}

		friendData.push(req.body);

		// var getData = `var friendsArray = ${JSON.parse(friendData)}
		// module.exports = friendsArray;
		// `

		// console.log(getData);
		// fs.writeFileSync('./friends.js', getData, function(err, data) {
		//   console.log(data)
		// })
		res.json(bestFriendData);
	});
};
