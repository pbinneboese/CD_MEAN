var mongoose = require("mongoose")
var Message = mongoose.model("Message")

module.exports = {
	index: function(req, res){
		var all_messages = Message.find({}, function(err, messages){
			if(err){
				console.log("Message.find error", err)
			} else {
				res.render("index", {messages: messages})
			}
		})
	},

	create_message: function(req, res){
		var new_message = new Message(req.body)
		new_message.save(function(err){
			if(err){
				console.log("new_message save error", err)
			} 
		})
		res.redirect("/")
	},

	create_comment: function(req, res){
		Message.findOne({_id: req.body.message_id}, function(err, message){
			if(err){
				console.log("new_comment Message.findOne error", err)
				res.redirect("/")
			} else {
				var new_comment = {name: req.body.name, comment: req.body.comment}
				message.comments.push(new_comment)
				message.save(function(err){
					if(err){
						console.log("new comment save error", err)
					}
					res.redirect("/")
				})
			}

		})
	},
}