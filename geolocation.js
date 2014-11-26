$(document).ready(function(){ 
	
	$.getJSON("http://jsonip.com?callback=?", function (data) {
    	// console.log("Your ip: ", data);
    	document.getElementById("ip_address").value = data.ip;
	});

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}

	function showPosition(position) {
	    document.getElementById("latitude").value = position.coords.latitude;
	    document.getElementById("longitude").value = position.coords.longitude;	
	}

	getLocation();

	$("#report").click(function(){

			var emailId = prompt("Enter your email id to send the issue to the creator");
		
		if(emailId == null)
			return alert("Action was canceled!");
		if(emailId === "")
			return alert("No emailID entered!")

		$.ajax({
		  type: "POST",
		  url: "https://mandrillapp.com/api/1.0/messages/send.json",
		  data: {
		    "key": "S9bNgeUvVCup29AiJKvRyQ",
		    "message": {
		      "from_email": emailId,
		      "to": [
		          {
		            "email": "sankettandulwadkar@gmail.com",
		            "type": "to"
		          }
		        ],
		      "autotext": "true",
		      "subject": "Issue with my information",
		      "html": "Hi, I wanted to inform you that there is an issue with my information. Could you please have a look into it? Thank you!"
		    }
		  }
		 }).done(function(response) {
		   alert("Mail sent!");
		 }).fail(function(error) {
    		alert( "Error : " + error.statusText);
  		});
	});

	

});