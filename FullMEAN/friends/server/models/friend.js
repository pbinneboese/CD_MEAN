var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	firstName: {type: String, required: true, maxlength: 80},
	lastName: {type: String, required: true, maxlength: 80},
	birthday: {type: Date, required: true},
	},
	{timestamps: true})
mongoose.model('Friend', FriendSchema);
