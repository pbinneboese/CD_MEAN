var mongoose = require("mongoose");
var User = mongoose.model("User");
var Account = mongoose.model("Account");
// var validator = require('validator');

// **** Non-Mongo Operation ****
// var users = [
// 	{_id:1, firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date(), email:"pbinneboese@mac.com", password:"password"},
// 	{_id:2, firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date(), email:"cbligh@mutiny.com", password:"password"},
// 	{_id:3, firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date(), email:"gwTheFirst@presidents.com", password:"password"}
// ];
//
// module.exports = {
// 	// Display All Users route
// 	index: function(req, res) {
// 		console.log('list /user');
// 		res.json(users);
// 	},
// 	// Show User Detail route
// 	show: function(req, res) {
// 		var id = req.params.id;
// 		console.log('show /user', id);
//   	let foundUser = null;
// 		for (let i=0; i < users.length; i++) {
// 			if (users[i]._id == id) {
// 				foundUser = users[i];
// 				break;
// 			}
// 		}
// 		res.json(foundUser);
// 	},
// 	// Create User route
// 	create: function(req, res) {
// 		var user = req.body;
// 		user._id = users.length + 1;
// 		console.log('create /user', user);
// 		users.push(user);
// 		res.json(user);
// 	},
// 	// Update User route
// 	update: function(req, res) {
// 		var id = req.params.id;
// 		var updateUser = req.body;
// 		console.log('update /user', id);
// 		for (let i=0; i < users.length; i++) {
// 			if (users[i]._id == id) {
// 				users[i] = updateUser;
// 			}
// 		}
// 		res.json(updateUser);
// 	},
// 	// Delete User route
// 	delete: function(req, res) {
// 		var id = req.params.id;
// 		console.log('delete /user', id);
// 		for (let i=0; i < users.length; i++) {
// 			if (users[i]._id == id) {
// 				users.splice(i, 1);
// 			}
// 		}
// 		res.json(id);
// 	}

	//**** Mongo DB Operation ****
	module.exports = {
		// Display All Users route
		index: function(req, res) {
			console.log('list /user');
			// fetch users collection from database
			User.find({}, function(err, users) {
				if(err) { // error handling callback
					console.log('DB read error', err);
					users = {}; // blank out the users
					res.json(err);
				}
				else {
					// console.log('Users', users);
					res.json(users);
				}
			})
		},
		// Show User Detail route
		show: function(req, res) {
			var id = req.params.id;
			console.log('show /user', id);
			User.findOne({_id:id}, function(err, user) {
				if(err) { // error handling callback
					console.log('DB read error', err);
					user = {}; // blank out the user
					res.json(err);
				}
				else {
					// console.log('User', user);
					res.json(user);
				}
			})
		},
		// Create User route
		create: function(req, res) {
			var user = req.body;
			console.log('create /user', user);
			// see if user already exists
			User.findOne({_id:user._id}, function(err, thisUser) {
				if(thisUser) { // error handling callback
					console.log('User already exists');
					res.json(thisUser);
				}
				else {	// add new user
					var newUser = new User(user);
					// console.log(newUser);
					newUser.save(function(err) {
						if(err) { // error handling callback
							console.log('DB write error', err);
							res.json(err);
						} else {
							console.log('user created');
							res.json(newUser);
						}
					})
				}
			})
		},
		// Update User route
		update: function(req, res) {
			var id = req.params.id;
			var updateUser = req.body;
			console.log('update /user', id);
			// see if user already exists
			User.findOne({_id:id}, function(err, user) {
				if(err) { // error handling callback
					console.log('User not found', err);
					user = {};	// blank out the user
					res.json(err);
				}
				else {	// update user
					Object.assign(user, updateUser);
					user.save(function(err) {
						if(err) { // error handling callback
							console.log('DB write error', err);
							res.json(err);
						} else {
							console.log('user updated');
							res.json(user);
						}
					})
				}
			})
		},
		// Delete User route
		delete: function(req, res) {
			var id = req.params.id;
			console.log('delete /user', id);
			User.remove({_id:id}, function(err) {
				if(err) { // error handling callback
					console.log('DB write error', err);
					res.json(err);
				}
				else {
					console.log('user deleted');
					res.json(id);
				}
			})
		},

		// Login/Register Account route
		login: function(req, res) {
			var account = req.body;
			console.log('login /account', account);
			// quick check on email validity
			// if (!validator.isEmail(account.email)) {
			// 	console.log('email invalid');
			// 	var err = "email invalid";
			// 	res.json(err);
			// 	return;
			// }
			// see if account already exists
			Account.findOne({email:account.email}, function(err, thisAccount) {
				if(thisAccount) { // login account
					if (thisAccount.password == account.password)	{	// validated
						console.log('login successful', account.email);
						req.session.email = account.email;	// save in session
						res.json(req.session.email);
					} else {
						console.log('login fail');
						res.json(false);
					}
				}
				else {	// add new account
					var newAccount = new Account(account);
					// console.log(newAccount);
					newAccount.save(function(err) {
						if(err) { // error handling callback
							console.log('DB write error', err);
							res.json(false);
						} else {
							console.log('account created', newAccount.email);
							req.session.email = newAccount.email;	// save in session
							res.json(req.session.email);
						}
					})
				}
			})
		},
		// Logout Account route
		logout: function(req, res) {
			console.log('logout /account');
			req.session.email = "";
			res.json(true);
		},
		// check Login status route
		checkLogin: function(req, res) {
			// res.json(true);
			console.log('check Login');
			if (req.session) {
				if (req.session.email) {
					console.log('loggedIn:', req.session.email);
					res.json(true);
				} else {
					res.json(false);
				}
			}
			else {
				res.json(false);
			}
		},
		// getAccounts route
		// getAccounts: function(req, res) {
		// 	console.log('list /account');
		// 	// fetch accounts collection from database
		// 	Account.find({}, function(err, accounts) {
		// 		if(err) { // error handling callback
		// 			console.log('DB read error', err);
		// 			accounts = {}; // blank out the accounts
		// 			res.json(err);
		// 		}
		// 		else {
		// 			// console.log('accounts', accounts);
		// 			res.json(accounts);
		// 		}
		// 	})
		// }

}
