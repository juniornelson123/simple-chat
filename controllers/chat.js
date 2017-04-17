//var io = require('socket.io')
//var socket = io('http://localhost:3000')

module.exports = function(app){
var socket = app.get("io")
	var ChatController  = {
		index: function(req, res){
			res.render('chat', {formValues: {}})

		},

		message: function(req, res){

		},

		initChat: function(req, res){
			var formValues = req.body
			
			req.assert('name', 'Nome ou apelido não pode ficar em branco').notEmpty()
			req.assert('name', 'Nome ou apelido deve ser entre 3 e 15 caracteres').len(3,15)
			
			var errors = req.validationErrors()

			if (errors) {
				res.render('index', {validation: errors})
			}else{

				socket.emit("message",{apelido: formValues.name, message: "Acabou de entrar"})
				res.render('chat', {formValues: formValues})
			}
		}
	}

	return ChatController
}
