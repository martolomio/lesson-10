
$(document).ready(function(){
	$('input#cheak').bind('click', function(){
		
		var number =$('#userAgeGet').val();
		 if (isNaN(number)|| number <1|| number >100) {
			    alert("Name must from 1 to 100");
			    return false;
			  }
	});
	
	$('input').css('background-color', 'pink');
	
	$('#sendDataByGetMethod').bind('click', function(){
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			url: 'http://localhost:3002/userGet?userName & userAge & userSurname',
			success: function(data){
				console.log("success");
				console.log(JSON.stringify(data));
			}
		});
	});
	$('#sendDataByGetPost').bind('onclick', function(){
		$.ajax({
			type: 'POST',
			data: JSON.stringify({test: 'test'}),
			contentType: 'application/json',
			url: 'http://localhost:3002/userPost',
			success: function(data){
				console.log("success: ");
				console.log(JSON.stringify(data));
			}
		});
	});
	
});




