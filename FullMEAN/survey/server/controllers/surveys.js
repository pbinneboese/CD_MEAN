var mongoose = require("mongoose");
var Survey = mongoose.model("Survey");
var Account = mongoose.model("Account");
// var validator = require('validator');

// **** Non-Mongo Operation ****
// var surveys = [
// 	{_id:1, firstName:"Paul", lastName:"Binneboese", birthday:new Date(1961, 01, 06), createdAt:new Date(), email:"pbinneboese@mac.com", password:"password"},
// 	{_id:2, firstName:"Captain", lastName:"Bligh", birthday:new Date(1868, 01, 01), createdAt:new Date(), email:"cbligh@mutiny.com", password:"password"},
// 	{_id:3, firstName:"George", lastName:"Washington", birthday:new Date(1745, 12, 31), createdAt:new Date(), email:"gwTheFirst@presidents.com", password:"password"}
// ];
//
// module.exports = {
// 	// Display All Surveys route
// 	index: function(req, res) {
// 		console.log('list /survey');
// 		res.json(surveys);
// 	},
// 	// Show Survey Detail route
// 	show: function(req, res) {
// 		var id = req.params.id;
// 		console.log('show /survey', id);
//   	let foundSurvey = null;
// 		for (let i=0; i < surveys.length; i++) {
// 			if (surveys[i]._id == id) {
// 				foundSurvey = surveys[i];
// 				break;
// 			}
// 		}
// 		res.json(foundSurvey);
// 	},
// 	// Create Survey route
// 	create: function(req, res) {
// 		var survey = req.body;
// 		survey._id = surveys.length + 1;
// 		console.log('create /survey', survey);
// 		surveys.push(survey);
// 		res.json(survey);
// 	},
// 	// Update Survey route
// 	update: function(req, res) {
// 		var id = req.params.id;
// 		var updateSurvey = req.body;
// 		console.log('update /survey', id);
// 		for (let i=0; i < surveys.length; i++) {
// 			if (surveys[i]._id == id) {
// 				surveys[i] = updateSurvey;
// 			}
// 		}
// 		res.json(updateSurvey);
// 	},
// 	// Delete Survey route
// 	delete: function(req, res) {
// 		var id = req.params.id;
// 		console.log('delete /survey', id);
// 		for (let i=0; i < surveys.length; i++) {
// 			if (surveys[i]._id == id) {
// 				surveys.splice(i, 1);
// 			}
// 		}
// 		res.json(id);
// 	}

//**** Mongo DB Operation ****
module.exports = {
	// Display All Surveys route
	index: function(req, res) {
		console.log('list /survey');
		// fetch surveys collection from database
		Survey.find({}, function(err, surveys) {
			if(err) { // error handling callback
				console.log('DB read error', err);
				surveys = {}; // blank out the surveys
				res.json(err);
			}
			else {
				// console.log('Surveys', surveys);
				res.json(surveys);
			}
		})
	},
	// Show Survey Detail route
	show: function(req, res) {
		var id = req.params.id;
		console.log('show /survey', id);
		Survey.findOne({_id:id}, function(err, survey) {
			if(err) { // error handling callback
				console.log('DB read error', err);
				survey = {}; // blank out the survey
				res.json(err);
			}
			else {
				// console.log('Survey', survey);
				res.json(survey);
			}
		})
	},
	// Create Survey route
	create: function(req, res) {
		var survey = req.body;
		console.log('create /survey', survey);
		// see if survey already exists
		Survey.findOne({_id:survey._id}, function(err, thisSurvey) {
			if(thisSurvey) { // error handling callback
				console.log('Survey already exists');
				res.json(thisSurvey);
			}
			else {	// add new survey
				var newSurvey = new Survey(survey);
				// console.log(newSurvey);
				newSurvey.save(function(err) {
					if(err) { // error handling callback
						console.log('DB write error', err);
						res.json(err);
					} else {
						console.log('survey created');
						res.json(newSurvey);
					}
				})
			}
		})
	},
	// Update Survey route
	update: function(req, res) {
		var id = req.params.id;
		var updateSurvey = req.body;
		console.log('update /survey', id);
		// see if survey already exists
		Survey.findOne({_id:id}, function(err, survey) {
			if(err) { // error handling callback
				console.log('Survey not found', err);
				survey = {};	// blank out the survey
				res.json(err);
			}
			else {	// update survey
				Object.assign(survey, updateSurvey);
				survey.save(function(err) {
					if(err) { // error handling callback
						console.log('DB write error', err);
						res.json(err);
					} else {
						console.log('survey updated');
						res.json(survey);
					}
				})
			}
		})
	},
	// Delete Survey route
	delete: function(req, res) {
		var id = req.params.id;
		console.log('delete /survey', id);
		Survey.remove({_id:id}, function(err) {
			if(err) { // error handling callback
				console.log('DB write error', err);
				res.json(err);
			}
			else {
				console.log('survey deleted');
				res.json(id);
			}
		})
	},

	// Login/Register Account route
	login: function(req, res) {
		var account = req.body;
		console.log('login /account', account);
		// quick check on userName validity
		// if (!validator.isEmail(account.userName)) {
		// 	console.log('userName invalid');
		// 	var err = "userName invalid";
		// 	res.json(err);
		// 	return;
		// }
		// see if account already exists
		Account.findOne({userName:account.userName}, function(err, thisAccount) {
			if(thisAccount) { // login account
				console.log('login successful', account.userName);
				req.session.userName = account.userName;	// save in session
				res.json(req.session.userName);
				// no password validation for this one
				// if (thisAccount.password == account.password)	{	// validated
				// 	console.log('login successful', account.userName);
				// 	req.session.userName = account.userName;	// save in session
				// 	res.json(req.session.userName);
				// } else {
				// 	console.log('login fail');
				// 	res.json(false);
				// }
			}
			else {	// add new account
				var newAccount = new Account(account);
				// console.log(newAccount);
				newAccount.save(function(err) {
					if(err) { // error handling callback
						console.log('DB write error', err);
						res.json(false);
					} else {
						console.log('account created', newAccount.userName);
						req.session.userName = newAccount.userName;	// save in session
						res.json(req.session.userName);
					}
				})
			}
		})
	},
	// Logout Account route
	logout: function(req, res) {
		console.log('logout /account');
		req.session.userName = "";
		res.json(true);
	},
	// check Login status route
	checkLogin: function(req, res) {
		// res.json(true);
		console.log('check Login');
		if (req.session) {
			if (req.session.userName) {
				console.log('loggedIn:', req.session.userName);
				res.json(req.session.userName);
			} else {
				res.json(false);
			}
		}
		else {
			res.json(false);
		}
	},
	// getAccounts route
	getAccounts: function(req, res) {
		console.log('list /account');
		// fetch accounts collection from database
		Account.find({}, function(err, accounts) {
			if(err) { // error handling callback
				console.log('DB read error', err);
				accounts = {}; // blank out the accounts
				res.json(err);
			}
			else {
				// console.log('accounts', accounts);
				res.json(accounts);
			}
		})
	}

}
