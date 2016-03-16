var expect = require('chai').expect;
var Map = require('./../js/map.js').Map;

describe("Map", function() {
  it("will return the current property", function() {
    var latitude = "45";
    var longitude = "120";
    var testMap = new Map(latitude, longitude);
    expect(testMap.latitude).to.equal(latitude);
  });
  it("will return the set property", function() {
    var latitude= "45";
    var longitude= "120";
    var testMap = new Map(latitude, longitude);
    expect(testMap.longitude).to.equal(longitude);
  });

});
