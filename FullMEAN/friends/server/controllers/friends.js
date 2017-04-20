var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");
// Temporary place for Database Structure
var friends = [
	{firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date()},
	{firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date()},
	{firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date()}
];

module.exports = {
	// Test route
	initial: function(req, res) {
		res.json(friends);
	},

	// Display All Friends route
	index: function(req, res) {
		console.log('root /');
		res.json(friends);
		// fetch friends collection from database
		// Friend.find({}, function(err, friends) {
		// 	if(err) { // error handling callback
		// 		console.log('DB read error', err.errors.friend.message);
		// 		friends = {}; // blank out the friends
		// 	}
			// console.log('Friends', friends);
		// 	res.json(friends);
		// })
	},

	// New Friend route
	new: function(req, res) {
		var friend = req.params.friend;
		console.log('new /friend', friend);
		// see if friend already exists
		Friend.findOne({friend:friend}, function(err, thisFriend) {
			if(thisFriend) { // error handling callback
				console.log('Friend already exists');
				res.json(thisFriend);
			}
			else {	// add new friend
				var newFriend = new Friend({friend: friend});
				newFriend.save(function(err) {
					if(err) { // error handling callback
						console.log('DB write error', err.errors.friend.message);
					} else {
						console.log('friend added');
					}
					res.json(newFriend);
				})
			}
		})
	},

	// Friend Detail route
	detail: function(req, res) {
		var friend = req.params.friend;
		console.log('detail /friend', friend);
		Friend.findOne({friend:friend}, function(err, thisFriend) {
			if(err) { // error handling callback
				console.log('DB read error', err.errors.friend.message);
				thisFriend = {}; // blank out the friend
			}
			// console.log('Friend', thisFriend);
			res.json(thisFriend);
		})
	},

	// Delete Friend route
	remove: function(req, res) {
		var friend = req.params.friend;
		console.log('remove /friend', friend);
		Friend.remove({friend:friend}, function(err) {
			if(err) { // error handling callback
				console.log('DB write error', err.errors.friend.message);
			}
			else {
				console.log('friend removed');
			}
		})
	}

}
