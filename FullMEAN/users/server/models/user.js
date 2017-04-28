var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	// _id: {type: String},
	firstName: {type: String, required: true, maxlength: 40},
	lastName: {type: String, required: true, maxlength: 40},
	birthday: {type: Date, required: true},
	},
	{timestamps: true})
mongoose.model('User', UserSchema);

var AccountSchema = new mongoose.Schema({
	// _id: {type: String},
	email: {type: String, required: true, unique: true, maxlength: 40},
	firstName: {type: String, required: true, maxlength: 40},
	lastName: {type: String, required: true, maxlength: 40},
	birthday: {type: Date, required: true},
	password: {type: String, required: true, minlength: 8, maxlength: 40}
	},
	{timestamps: true})
mongoose.model('Account', AccountSchema);
