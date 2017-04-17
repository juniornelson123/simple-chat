module.exports = function(app){

	var Chat = app.controllers.chat

	app.post('/chat',Chat.initChat)

	app.get("/chat", Chat.index)
}