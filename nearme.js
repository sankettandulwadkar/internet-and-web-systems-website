$(document).ready(function(){

	document.getElementById("carType").value = "";
	document.getElementById("distance").value = "";

	var map;
	var infoWindow;
	var service;

	$("#findCars").click(function(){

		if (navigator.geolocation) {	
	      var timeoutVal = 10 * 1000 * 1000;
	      navigator.geolocation.getCurrentPosition(
	        initialize, 
	        displayError,
	        { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
	      );
	    }
	    else {
	      alert("Geolocation is not supported by this browser");
	    }


	    function initialize(position) {
	    	// console.log(position);
			  var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

		      var options = {
		        zoom: 15,
		        center: pos,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		      };

		      map = new google.maps.Map(document.getElementById("map"), options);

				  infoWindow = new google.maps.InfoWindow();
  				  service = new google.maps.places.PlacesService(map);

		  		  var distance = document.getElementById("distance").value;
				      distance = parseInt(distance);
				  var query = document.getElementById("carType").value;
				      query = query + " car dealers near me";

				  var request = {
						    location: pos,
						    radius: distance,
						    query: query
				  };
						// console.log("request : ", request);
						// console.log("service : ", service);
				  // service.radarSearch(request, callback);
				  createMarker(pos, 0);
				  service.textSearch(request, callback);
	    
	    }

		function callback(results, status) {
			// console.log(results);
		  if (status != google.maps.places.PlacesServiceStatus.OK) {
		    alert(status);
		    return;
		  }
		  for (var i = 0, result; result = results[i]; i++) {
		    createMarker(result, 1);
		  }
		}

		function createMarker(place, markerToggle) {
			// console.log("place : ", place);	
		  if(markerToggle == 0)
		  {
		  		// console.log("place : ", place);	
		  		var marker = new google.maps.Marker({
		        	position: place,
		        	map: map,
		        	title: "User location"
			    });
			    google.maps.event.addListener(marker, 'click', function() {
			    	var userLocation = "User Location";
			    	infowindow.setContent(userLocation);
		        	infowindow.open(map, marker);
		      	});

		  }
		  else
		  {
		  		// console.log(place.geometry.location);
		  		var marker = new google.maps.Marker({
		    		map: map,
		    		position: place.geometry.location
		  		});
			  	google.maps.event.addListener(marker, 'click', function() {
			    service.getDetails(place, function(result, status) {
			      if (status != google.maps.places.PlacesServiceStatus.OK) {
			        alert(status);
			        return;
			      }
			      // console.log(result);
			      infoWindow.setContent(result.name + "<br>" + result.formatted_address + "<br>" + result.website + "<br>" + result.formatted_phone_number + "<br>" + result.rating);
			      infoWindow.open(map, marker);
			    });
			  });
		  }
		}


	    function displayError(error) {
	      var errors = { 
	        1: 'Permission denied',
	        2: 'Position unavailable',
	        3: 'Request timeout'
	      };
	      alert("Error: " + errors[error.code]);
	    }

	});


});
