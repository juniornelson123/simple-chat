module.exports = function(app){
	var Index = app.controllers.index

	/* GET home page. */
	app.get('/',Index.home);

}