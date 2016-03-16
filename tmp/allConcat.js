
// var moment = require('moment');
// var apiKey = "AIzaSyC0OJU111b6ugzaIn8ajRCYQysvb-3cW0w";

// $(document).ready(function(){
//   $('#map_form').submit(function(event){
//   event.preventDefault();
//
//   var latitude = parseInt($('#set_lat').val());
//   var longitude = parseInt($('#set_long').val());
//
//   var newMap = new ourMap(latitude, longitude);
//   // var initMap = newMap.initMap();
// console.log(newMap);
//   $('#your_lat').html("<h3> Your latitude is set for "+ latitude +"</h3>");
//   $('#your_long').html("<h3> Your longitude is set for "+ longitude +"</h3>");
//
//   });
// });

// $( document ).ready(function() {
//
//   $('#map_form').submit(function(event){
//   event.preventDefault();
//
//
//
//   var latitude = parseInt($('#set_lat').val());
//   var longitude = parseInt($('#set_long').val());
//   var userLatLng = new google.maps.LatLng(latitude, longitude);
//   var myOptions = {
//     zoom : 16,
//     center : userLatLng,
//     mapTypeId : google.maps.MapTypeId.ROADMAP
//   };
//   // Draw the map - you have to use 'getElementById' here.
//   var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
//   // Place the marker
//   new google.maps.Marker({
//     map: mapObject,
//     position: userLatLng
//   });
//
//
//   $('#your_lat').html("<h3> Your latitude is set for "+ latitude +"</h3>");
//   $('#your_long').html("<h3> Your longitude is set for "+ longitude +"</h3>");
//
//   });
//   $('#locateUser').click(locateUser);
// });
//
// //google maps functions
// function locateUser() {
//   // If the browser supports the Geolocation API
//   if (navigator.geolocation){
//     var positionOptions = {
//       enableHighAccuracy: true,
//       timeout: 10 * 1000 // 10 seconds
//     };
//     navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//   }
//   else {
//     alert("Your browser doesn't support the Geolocation API");
//   }
// }
//
//
//
// // this is the success callback from telling the navigator (your browser) to get the current user's position
// // we do this on line 13 above. We pass in a function to call on success, a function to call on error, and some options to tell the geolocation api how we want it to run.
// // on successfully locating the user, geolocationSuccess() gets called automatically, and it is passed the user's position as an argument.
// // on error, geolocationError is called.
//
//
// function geolocationSuccess(position) {
//   // here we take the `position` object returned by the geolocation api
//   // and turn it into google maps LatLng object by calling the google.maps.LatLng constructor function
//   // it 2 arguments: one for latitude, one for longitude.
//   // You could refactor this section to pass google maps your own coordinates rather than using geolocation for the user's current location.
//   // But you must use coordinates to use this method.
//   var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//   var myOptions = {
//     zoom : 16,
//     center : userLatLng,
//     mapTypeId : google.maps.MapTypeId.ROADMAP
//   };
//   // Draw the map - you have to use 'getElementById' here.
//   var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
//   // Place the marker
//   new google.maps.Marker({
//     map: mapObject,
//     position: userLatLng
//   });
// }
//
// function geolocationError(positionError) {
//   alert(positionError);
// }

$( document ).ready(function() {

  $("#show-map").click(function() {
    var latitude = 44.0500;
    var longitude = -121.3000;
    var userLatLng = new google.maps.LatLng(latitude, longitude);
    var myOptions = {
      zoom : 16,
      center : userLatLng,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    // Draw the map - you have to use 'getElementById' here.
    var mapObject = new google.maps.Map(document.getElementById("map1"), myOptions);
  });
});
//
  $('#map_form1').submit(function(event){
  event.preventDefault();



  var latitude = parseInt($('#set_lat').val());
  var longitude = parseInt($('#set_long').val());
  var userLatLng = new google.maps.LatLng(latitude, longitude);
  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // Draw the map - you have to use 'getElementById' here.
  var mapObject = new google.maps.Map(document.getElementById("map1"), myOptions);
  // Place the marker
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
console.log(latitude);

  $('#your_lat').html("<h3> Your latitude is set for "+ latitude +"</h3>");
  $('#your_long').html("<h3> Your longitude is set for "+ longitude +"</h3>");

  });
//   $('#locateUser').click(locateUser);
// });
//
// //google maps functions
// function locateUser() {
//   // If the browser supports the Geolocation API
//   if (navigator.geolocation){
//     var positionOptions = {
//       enableHighAccuracy: true,
//       timeout: 10 * 1000 // 10 seconds
//     };
//     navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//   }
//   else {
//     alert("Your browser doesn't support the Geolocation API");
//   }
// }
//
//
//
// // this is the success callback from telling the navigator (your browser) to get the current user's position
// // we do this on line 13 above. We pass in a function to call on success, a function to call on error, and some options to tell the geolocation api how we want it to run.
// // on successfully locating the user, geolocationSuccess() gets called automatically, and it is passed the user's position as an argument.
// // on error, geolocationError is called.
//
//
// function geolocationSuccess(position) {
//   // here we take the `position` object returned by the geolocation api
//   // and turn it into google maps LatLng object by calling the google.maps.LatLng constructor function
//   // it 2 arguments: one for latitude, one for longitude.
//   // You could refactor this section to pass google maps your own coordinates rather than using geolocation for the user's current location.
//   // But you must use coordinates to use this method.
//   var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//   var myOptions = {
//     zoom : 16,
//     center : userLatLng,
//     mapTypeId : google.maps.MapTypeId.ROADMAP
//   };
//   // Draw the map - you have to use 'getElementById' here.
//   var mapObject = new google.maps.Map(document.getElementById("map1"), myOptions);
//   // Place the marker
//   new google.maps.Marker({
//     map: mapObject,
//     position: userLatLng
//   });
// }
//
// function geolocationError(positionError) {
//   alert(positionError);
// }
