var mongoose = require('mongoose');

var CritterSchema = new mongoose.Schema({
	ident: {type: Number, required: true, min: 1, max: 1000},
	name: {type: String, required: true, maxlength: 40},
	age: {type: Number, required: false, min: 1, max: 100},
	weight: {type: Number, required: false, min: 1, max: 100},
	diet: {type: String, required: false}
})
mongoose.model('Critter', CritterSchema); // We are setting this Schema in our Models as 'Critter'
