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
    instance = new ShippingApi.SpecialServicesRule();
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

  describe('SpecialServicesRule', function() {
    it('should create an instance of SpecialServicesRule', function() {
      // uncomment below and update the code to test SpecialServicesRule
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be.a(ShippingApi.SpecialServicesRule);
    });

    it('should have the property specialServiceId (base name: "specialServiceId")', function() {
      // uncomment below and update the code to test the property specialServiceId
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

    it('should have the property brandedName (base name: "brandedName")', function() {
      // uncomment below and update the code to test the property brandedName
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

    it('should have the property categoryName (base name: "categoryName")', function() {
      // uncomment below and update the code to test the property categoryName
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

    it('should have the property trackable (base name: "trackable")', function() {
      // uncomment below and update the code to test the property trackable
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

    it('should have the property inputParameterRules (base name: "inputParameterRules")', function() {
      // uncomment below and update the code to test the property inputParameterRules
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

    it('should have the property prerequisiteRules (base name: "prerequisiteRules")', function() {
      // uncomment below and update the code to test the property prerequisiteRules
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

    it('should have the property incompatibleSpecialServices (base name: "incompatibleSpecialServices")', function() {
      // uncomment below and update the code to test the property incompatibleSpecialServices
      //var instane = new ShippingApi.SpecialServicesRule();
      //expect(instance).to.be();
    });

  });

}));