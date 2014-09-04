/*
This JS file helps in dynamic loading of content on HTML page index.html
using the JSON data. 

#Func1 : It populates the left side carousel of the page
and its corresponding modal (openModal function). It uses 2 variables 
(content and indicators) which correspond to the HTML code for Carousel 
and its side indicators.

#Func2 : It checks for password mismatch in registration form, in case the 
"password field" and "repeat password" field are not entered equal by the 
user.

#Func3 : It rearranges the HTML coding for a better optimized view on a 
mobile device. Mainly, it removes the right side of webpage, and places the
login/registration forms in a modal.

*/

$(document).ready(function(){
	var content = "";
	var indicators = "";
	// Populate the carousal Image, tagline, and indicators #Func1
	$.each(data, function(i, field){
		if (i == 0)
		{
			indicators += 	'<li data-target="#carousel" data-slide-to="' +
							i +'" class = "active"></li>';
			content += 	'<div class="item active" onClick = "openModal('+ 
						i +');">';
		}
		else
		{	
			indicators += 	'<li data-target="#carousel" data-slide-to="' +
							i +'"></li>';
			content += '<div class="item" onClick = "openModal('+ i +');">';
		}
		content += '<center>';
		content += 	'<img class = "img-circular" src="' + field.image + 
					'" alt="' + field.name + '"/>';
		content += '<div class="carousel-caption">';
		content += '<h1>' + field.name + '</h1><i>' + field.headline + '</i>';
		content += '</div>';
		content += '</center></div>';
	});
	$("#indicators").html(indicators)
	$("#innerContent").html(content)
	// Check password match for registration form #Func2
	$('#register').on('submit',function(){
		if($('#inputNewPassword').val() != $('#inputRepeatPassword').val())
		{
			alert('Password does not match');
			return false;
		}
		return true;
	});
	// Display optimized for mobile screens #Func3
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		forms = $("#forms").html(); 	//Put Forms in Modal form
		$("#forms").remove();
		$("#fork").remove();
		$("#knife").remove();
		$("#loginModal").html(forms);
		$("#loginModal").append('<button type="button" class="btn btn-danger"' +
								'data-dismiss="modal">Close</button>');
		$("#loginButton").html("<button class = 'btn btn-lg btn-danger col-xs-12'" +
								" data-toggle = 'modal' data-target = '#loginModal'>" +
								"Login</button>");
		$("body").css("background-image","none");
	}
});

//Food Modal Data
function openModal(x)
{
	$('#carousel').carousel('pause'); //Pause the carousal

	var temp = '';
	var factHeads = "";
	var factData = '';

	$('#ingredients').html(''); 	//Populate the ingredients dropdown
	$.each(data[x].ingredients, function(i, field){
		temp = field + '<br/>';
		for (var j=0; j<data[x].deliverable_ingredients.length; j++) {
			if (data[x].deliverable_ingredients[j].match(field)) 
				temp = '<b>' + field + '</b><br/>';
		}
		$('#ingredients').append(temp);
	});
	//populate the Factsheet
	if ( data[x].calories )	factHeads += '<th>Calories</th>';	
	if ( data[x].carbos )	factHeads += '<th>Carbs</th>';
	if ( data[x].fats )	factHeads += '<th>Fats</th>';
	if ( data[x].fibres )	factHeads += '<th>Fibres</th>';
	if ( data[x].protiens )	factHeads += '<th>Protiens</th>';
	if ( data[x].calories )	factData += '<th>' + data[x].calories + '</th>';
	if ( data[x].carbos )	factData += '<th>' + data[x].carbos + '</th>';
	if ( data[x].fats )	factData += '<th>' + data[x].fats + '</th>';
	if ( data[x].fibres )	factData += '<th>' + data[x].fibres + '</th>';
	if ( data[x].protiens )	factData += '<th>' + data[x].protiens + '</th>';

	$('#modalImage').html(	'<img src="' + data[x].thumb + 
							'" alt="' + data[x].name + 
							'" id = "modalTitleImage" />');	//Title Image
							
	$('#modalTitle').html('<br/>' + data[x].name);	//Title Name
	
	$('#difficulty').html(
		data[x].difficulty
		?
		data[x].difficulty
		:
		"None");	//Difficulty
	
	$('#rating').html(
		data[x].rating
		?
		data[x].rating
		:
		"None");	//Rating
	
	$('#factHead').html(factHeads);		//Fact table headers
	
	$('#factData').html(factData);		//Fact table data
	
	$('#description').html(data[x].description);	//Description
	
	$('#foodModal').modal();	//Show modal
}