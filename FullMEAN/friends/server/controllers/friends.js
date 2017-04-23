var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

// **** Non-Mongo Operation ****
// var friends = [
// 	{_id:1, firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date()},
// 	{_id:2, firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date()},
// 	{_id:3, firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date()}
// ];
//
// module.exports = {
// 	// Display All Friends route
// 	index: function(req, res) {
// 		console.log('list /friend');
// 		res.json(friends);
// 	},
// 	// Show Friend Detail route
// 	show: function(req, res) {
// 		var id = req.params.id;
// 		console.log('show /friend', id);
//   	let foundFriend = null;
// 		for (let i=0; i < friends.length; i++) {
// 			if (friends[i]._id == id) {
// 				foundFriend = friends[i];
// 				break;
// 			}
// 		}
// 		res.json(foundFriend);
// 	},
// 	// Create Friend route
// 	create: function(req, res) {
// 		var friend = req.body;
// 		friend._id = friends.length + 1;
// 		console.log('create /friend', friend);
// 		friends.push(friend);
// 		res.json(friend);
// 	},
// 	// Update Friend route
// 	update: function(req, res) {
// 		var id = req.params.id;
// 		var updateFriend = req.body;
// 		console.log('update /friend', id);
// 		for (let i=0; i < friends.length; i++) {
// 			if (friends[i]._id == id) {
// 				friends[i] = updateFriend;
// 			}
// 		}
// 		res.json(updateFriend);
// 	},
// 	// Delete Friend route
// 	delete: function(req, res) {
// 		var id = req.params.id;
// 		console.log('delete /friend', id);
// 		for (let i=0; i < friends.length; i++) {
// 			if (friends[i]._id == id) {
// 				friends.splice(i, 1);
// 			}
// 		}
// 		res.json(id);
// 	}

	//**** Mongo DB Operation ****
	module.exports = {
		// Display All Friends route
		index: function(req, res) {
			console.log('list /friend');
			// fetch friends collection from database
			Friend.find({}, function(err, friends) {
				if(err) { // error handling callback
					console.log('DB read error', err.errors.message);
					friends = {}; // blank out the friends
					res.json(err);
				}
				else {
					// console.log('Friends', friends);
					res.json(friends);
				}
			})
		},
		// Show Friend Detail route
		show: function(req, res) {
			var id = req.params.id;
			console.log('show /friend', id);
			Friend.findOne({_id:id}, function(err, friend) {
				if(err) { // error handling callback
					console.log('DB read error', err.errors.message);
					friend = {}; // blank out the friend
					res.json(err);
				}
				else {
					// console.log('Friend', friend);
					res.json(friend);
				}
			})
		},
		// Create Friend route
		create: function(req, res) {
			var friend = req.body;
			console.log('create /friend', friend);
			// see if friend already exists
			Friend.findOne({_id:friend._id}, function(err, thisFriend) {
				if(thisFriend) { // error handling callback
					console.log('Friend already exists');
					res.json(thisFriend);
				}
				else {	// add new friend
					var newFriend = new Friend(friend);
					// console.log(newFriend);
					newFriend.save(function(err) {
						if(err) { // error handling callback
							console.log('DB write error', err.errors.message);
							res.json(err);
						} else {
							console.log('friend created');
							res.json(newFriend);
						}
					})
				}
			})
		},
		// Update Friend route
		update: function(req, res) {
			var id = req.params.id;
			var updateFriend = req.body;
			console.log('update /friend', id);
			// see if friend already exists
			Friend.findOne({_id:id}, function(err, friend) {
				if(err) { // error handling callback
					console.log('Friend not found', err.errors.message);
					friend = {};	// blank out the friend
					res.json(err);
				}
				else {	// update friend
					Object.assign(friend, updateFriend);
					friend.save(function(err) {
						if(err) { // error handling callback
							console.log('DB write error', err.errors.message);
							res.json(err);
						} else {
							console.log('friend updated');
							res.json(friend);
						}
					})
				}
			})
		},
		// Delete Friend route
		delete: function(req, res) {
			var id = req.params.id;
			console.log('delete /friend', id);
			Friend.remove({_id:id}, function(err) {
				if(err) { // error handling callback
					console.log('DB write error', err.errors.message);
					res.json(err);
				}
				else {
					console.log('friend deleted');
					res.json(id);
				}
			})
		}

}
