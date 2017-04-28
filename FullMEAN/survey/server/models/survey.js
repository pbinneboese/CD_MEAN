var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
	// _id: {type: String},
	userName: {type: String, required: true, maxlength: 40},
	question: {type: String, required: true, maxlength: 160},
	option1: {type: String, maxlength: 20},
	vote1: {type: Number, min: 0},
	option2: {type: String, maxlength: 20},
	vote2: {type: Number, min: 0},
	option3: {type: String, maxlength: 20},
	vote3: {type: Number, min: 0},
	option4: {type: String, maxlength: 20},
	vote4: {type: Number, min: 0},
},
{timestamps: true})
mongoose.model('Survey', SurveySchema);

var AccountSchema = new mongoose.Schema({
	// _id: {type: String},
	userName: {type: String, required: true, maxlength: 40},
	// password: {type: String, required: true, minlength: 8, maxlength: 40}
},
{timestamps: true})
mongoose.model('Account', AccountSchema);
