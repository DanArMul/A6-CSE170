var data = require('../data.json');
console.log(data);

exports.views = function(request, response){
	response.render('recipe', data);
	console.log("Passed JSON data");
};

