/**
 * Shipping API
 * Shipping API Sample.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@pb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/PB.ShippingAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/PB.ShippingAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShippingApi);
  }
}(this, function(expect, ShippingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ShippingApi.HazmatDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('HazmatDetails', function() {
    it('should create an instance of HazmatDetails', function() {
      // uncomment below and update the code to test HazmatDetails
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be.a(ShippingApi.HazmatDetails);
    });

    it('should have the property batteryDetails (base name: "batteryDetails")', function() {
      // uncomment below and update the code to test the property batteryDetails
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property commodityType (base name: "commodityType")', function() {
      // uncomment below and update the code to test the property commodityType
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property containerCount (base name: "containerCount")', function() {
      // uncomment below and update the code to test the property containerCount
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property containerDetails (base name: "containerDetails")', function() {
      // uncomment below and update the code to test the property containerDetails
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property emergencyContactNumber (base name: "emergencyContactNumber")', function() {
      // uncomment below and update the code to test the property emergencyContactNumber
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property hazmatDocumentType (base name: "hazmatDocumentType")', function() {
      // uncomment below and update the code to test the property hazmatDocumentType
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property identicalContainers (base name: "identicalContainers")', function() {
      // uncomment below and update the code to test the property identicalContainers
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property offeror (base name: "offeror")', function() {
      // uncomment below and update the code to test the property offeror
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property packagingOption (base name: "packagingOption")', function() {
      // uncomment below and update the code to test the property packagingOption
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

    it('should have the property signatory (base name: "signatory")', function() {
      // uncomment below and update the code to test the property signatory
      //var instane = new ShippingApi.HazmatDetails();
      //expect(instance).to.be();
    });

  });

}));