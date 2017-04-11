// Require the Express Module
var express = require('express');
var app = express();
// Require Mongoose for MongoDB
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  // override Mongoose deprecated Promise operator
mongoose.connect('mongodb://localhost/basic_mongoose'); // connect to basic_mongoose database
var CritterSchema = new mongoose.Schema({
	ident: {type: Number, required: true, min: 1, max: 1000},
	name: {type: String, required: true, maxlength: 40},
	age: {type: Number, required: false, min: 1, max: 100},
	weight: {type: Number, required: false, min: 1, max: 100},
	diet: {type: String, required: false}
})
mongoose.model('Critter', CritterSchema); // We are setting this Schema in our Models as 'Critter'
var Critter = mongoose.model('Critter') // We are retrieving this Schema from our Models, named 'Critter'

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static & Views Folders
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
// Root Request - Display Critters
app.get('/', function(req, res) {
	console.log('root /');
	// fetch critters collection from database
	Critter.find({}, function(err, critters) {
		if(err) { // error handling callback
			console.log('DB read failure');
			critters = {}; // blank out the critters
		}
		res.render('index', {critters:critters});
	})
})
// Create New Critter Form route
app.get('/new', function(req, res) {
	console.log('get /new');
	res.render('new');
})
// Create Critter POST route
app.post('/critter', function(req, res) {
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
})
// Critter Detail route
app.get('/:id', function(req, res) {
	console.log('get /id');
	var id = req.params.id;
	Critter.findOne({ident:id}, function(err, critter) {
		if(err) { // error handling callback
			console.log('DB read failure');
			critter = {}; // blank out the critter
		}
		res.render('critter', {critter:critter});
	})
})
// Edit Critter Detail Form route
app.get('/:id/edit/', function(req, res) {
	console.log('get /id/edit');
	var id = req.params.id;
	Critter.findOne({ident:id}, function(err, critter) {
		if(err) { // error handling callback
			console.log('DB read failure');
			critter = {}; // blank out the critter
		}
		res.render('edit', {critter:critter});
	})
})
// Edit Critter POST route
app.post('/:id/critter', function(req, res) {
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
})
// Delete Critter POST route
app.post('/:id/delete/', function(req, res) {
	console.log('post /id/delete');
	var id = req.params.id;
	Critter.remove({ident:id}, function(err) {
		if(err) { // error handling callback
			console.log('DB write failure');
		}
		res.redirect('/');
	})
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
	console.log("listening on port 8000");
})
