// Google Maps API key AIzaSyA3H73q9f5iJSbX3u64ICswM_CxfXRRKww
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3H73q9f5iJSbX3u64ICswM_CxfXRRKww&callback=initMap"
//    async defer></script

function initialize() {

// map options
  var options = {
    zoom: 10,
    center: new google.maps.Latlng(40.7127840,-74.0059410) 
    };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

};
