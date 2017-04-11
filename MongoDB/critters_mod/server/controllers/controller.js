var mongoose = require("mongoose");
var Critter = mongoose.model("Critter");

module.exports = {
	// Root Request - Display Critters
	index: function(req, res) {
		console.log('root /');
		// fetch critters collection from database
		Critter.find({}, function(err, critters) {
			if(err) { // error handling callback
				console.log('DB read failure');
				critters = {}; // blank out the critters
			}
			res.render('index', {critters:critters});
		})
	},

	// Create New Critter Form route
	create_form: function(req, res) {
		console.log('get /new');
		res.render('new');
	},

	// Create Critter POST route
	create_post: function(req, res) {
		console.log('post /critter');
		console.log("POST DATA", req.body);
		if (req.body.ident && req.body.name) {  // got valid critter data
			var critter = new Critter({ident: req.body.ident, name: req.body.name, age: req.body.age, weight: req.body.weight, diet: req.body.diet});
			// save to dB
			critter.save(function(err) {
				if(err) { // error handling callback
					console.log('critter entry data not valid, please re-enter');
				} else {
					console.log('successfully added critter', req.body.ident);
					res.redirect('/');
				}
			})
		}
	},

	// Critter Detail route
	detail: function(req, res) {
		console.log('get /id');
		var id = req.params.id;
		Critter.findOne({ident:id}, function(err, critter) {
			if(err) { // error handling callback
				console.log('DB read failure');
				critter = {}; // blank out the critter
			}
			res.render('critter', {critter:critter});
		})
	},

	// Edit Critter Detail Form route
	edit_form: function(req, res) {
		console.log('get /id/edit');
		var id = req.params.id;
		Critter.findOne({ident:id}, function(err, critter) {
			if(err) { // error handling callback
				console.log('DB read failure');
				critter = {}; // blank out the critter
			}
			res.render('edit', {critter:critter});
		})
	},

	// Edit Critter POST route
	edit_post: function(req, res) {
		console.log('post /id/critter');
		var id = req.params.id;
		console.log("POST DATA", req.body);
		Critter.findOne({ident:id}, function(err, critter) {
			if(err) { // error handling callback
				console.log('DB read failure');
				critter = {}; // blank out the critter
			}
			else {  // ident stays unchanged, other fields can change
				// critter.ident = req.body.ident;
				critter.name = req.body.name;
				critter.age = req.body.age;
				critter.weight = req.body.weight;
				critter.diet = req.body.diet;
				// console.log('Updated:', critter);
				// save to dB
				critter.save(function(err) {
					if(err) { // error handling callback
						console.log('error', err);
						console.log('critter entry update failed, try again');
					} else {
						console.log('critter updated', critter.ident);
					}
				})
			}
			res.redirect('/');
		})
	},

	// Delete Critter POST route
	delete: function(req, res) {
		console.log('post /id/delete');
		var id = req.params.id;
		Critter.remove({ident:id}, function(err) {
			if(err) { // error handling callback
				console.log('DB write failure');
			}
			res.redirect('/');
		})
	}

}
