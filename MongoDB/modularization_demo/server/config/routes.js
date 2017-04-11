var messages = require("../controllers/messages")

module.exports = function(app){
	app.get("/", messages.index)
	app.post("/new_message", messages.create_message)
	app.post("/new_comment", messages.create_comment)
}