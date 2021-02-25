
exports.viewIntake = function(request, response) {    
	
	newheight = params.query.height;
	newweight = params.query.weight;
	newgender = params.query.gender;
	console.log("Height: "+newheight+" weight:" +newweight +"gender:" +newgender);
	var calorieIntake = 1;
	if (newgender = "male"){
		calorieIntake = (66.5 + 13.8*newweight + 5*newheight)/(6.8*21);
	}
	else if (newgender = "female"){
		calorieIntake = (65.51 + 9.6*newweight + 1.9*newheight)/(4.7*21);
	}
	else {
		calorieIntake = (65.51 + 9.6*newweight + 5*newheight)/(6.8*21);
	}
	console.log ("intake is:" + calorieIntake);
	response.render("count", {
		"calorieIntake": calorieIntake
	});
 };
