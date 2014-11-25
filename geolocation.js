//$(document).ready(function(){

// 	$.ajax({ 
// 	  url: 'https://freegeoip.net/json/', 
// 	  type: 'POST', 
// 	  dataType: 'jsonp',
// 	  success: function(location) {
// 	    // example where I update content on the page.
// 	    // $('#city').html(location.city);
// 	    // $('#region-code').html(location.region_code);
// 	    // $('#region-name').html(location.region_name);
// 	    // $('#areacode').html(location.areacode);
// 	    console.log("IP : ",location.ip);
// 	    // $('#zipcode').html(location.zipcode);
// 	    console.log("Longitude : ", location.longitude);
// 	    console.log("Latitude : ", location.latitude);
// 	    // $('#country-name').html(location.country_name);
// 	    // $('#country-code').html(location.country_code);
// 	  }
// 	});

// });

$(document).ready(function(){ 
	
	$.getJSON("http://jsonip.com?callback=?", function (data) {
    	console.log("Your ip: ", data.ip);
	});

	

});