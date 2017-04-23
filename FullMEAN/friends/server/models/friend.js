var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	// _id: {type: String},
	firstName: {type: String, required: true, maxlength: 40},
	lastName: {type: String, required: true, maxlength: 40},
	birthday: {type: Date, required: true},
	},
	{timestamps: true})
mongoose.model('Friend', FriendSchema);
