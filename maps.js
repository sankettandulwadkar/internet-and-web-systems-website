/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$(document).ready(function() {

    if (navigator.geolocation) {
      var timeoutVal = 10 * 1000 * 1000;
      navigator.geolocation.getCurrentPosition(
        displayPosition, 
        displayError,
        { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
      );
    }
    else {
      alert("Geolocation is not supported by this browser");
    }
    function displayPosition(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var options = {
        zoom: 10,
        center: pos,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"), options);
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "User location"
      });
      var contentString = "<b>Timestamp:</b> " + parseTimestamp(position.timestamp) + "<br/><b>User location:</b> lat " + position.coords.latitude + ", long " + position.coords.longitude + ", accuracy " + position.coords.accuracy;
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      console.log("latitude ", position.coords.latitude);
      console.log("longitude ", position.coords.longitude);

    }
    function displayError(error) {
      var errors = { 
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
      };
      alert("Error: " + errors[error.code]);
    }
    function parseTimestamp(timestamp) {
      var d = new Date(timestamp);
      var day = d.getDate();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();
      var hour = d.getHours();
      var mins = d.getMinutes();
      var secs = d.getSeconds();
      var msec = d.getMilliseconds();
      return day + "." + month + "." + year + " " + hour + ":" + mins + ":" + secs + "," + msec;
    }
});