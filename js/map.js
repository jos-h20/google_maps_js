// exports.ourMap = function(latitude, longitude) {
//   this.latitude = latitude;
//   this.longitude = longitude;
// };

// exports.ourMap.prototype.initMap = function(latitude, longitude) {
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: latitude, lng: longitude},
//       zoom: 8
//     });
//   };

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5266975, lng: -122.68805029999999},
    zoom: 8
  });
}
