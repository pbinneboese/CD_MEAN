var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	// _id: {type: String},
	email: {type: String, required: true, maxlength: 40},
	firstName: {type: String, required: true, maxlength: 40},
	lastName: {type: String, required: true, maxlength: 40},
	birthday: {type: Date, required: true},
	password: {type: String, required: true, maxlength: 40}
	},
	{timestamps: true})
mongoose.model('Item', ItemSchema);
