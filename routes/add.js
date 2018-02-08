var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var params = req.query;
	console.log(params);   
	var name = params.name;
	var description = params.description;
	var image = "http://lorempixel.com/400/400/people";
	console.log("Name : " + name);
	console.log("description : "+description);

	data.friends.push({ name: name ,description: description,imageURL: image });
 }